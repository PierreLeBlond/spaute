import prisma from "$lib/prisma"
import type { BandVoice, Player, Role, Presence, Gig, Band, DisabledVoice, GigVoice } from "@prisma/client";

type GigPayload = Gig & { band: Band & { bandVoices: BandVoice[] } | null, gigVoices: GigVoice[], disabledVoices: DisabledVoice[], presences: (Presence & { player: Player & { roles: Role[] } })[] };
type PresenceAndRole = {
  presence: Presence & {
    player: Player & {
      roles: Role[];
    }
  },
  role: Role
}
type Configuration = {
  playable: boolean,
  presenceAndRoles: PresenceAndRole[]
}

const findBestConfiguration = (configurations: Configuration[]) => configurations.reduce((configuration, bestConfiguration) => {
  return configuration.presenceAndRoles.length > bestConfiguration.presenceAndRoles.length
    ? configuration
    : bestConfiguration
}, { playable: false, presenceAndRoles: [] });

export const computePlayability = async (gig: GigPayload) => {

  const findConfigurations = (instrumentIds: string[], presences: (Presence & { player: Player & { roles: Role[] } })[], configuration: Configuration): Configuration[] => {

    const instrumentIdsCopy = instrumentIds.slice(0);
    const instrumentId = instrumentIdsCopy.pop();

    if (!instrumentId) {
      return [{
        presenceAndRoles: configuration.presenceAndRoles,
        playable: true
      }];
    }

    const presenceAndRoles = presences.filter(presence => presence.player.roles.some((role: Role) => role.instrumentId == instrumentId && role.playable))
      .map(presence => {
        const role = presence.player.roles.find((role: Role) => role.instrumentId == instrumentId);
        if (!role) {
          return null;
        }
        return { role, presence }
      })
      .filter(Boolean);

    if (presenceAndRoles.length == 0) {
      return findConfigurations(instrumentIdsCopy, presences, configuration);
    }

    const configurations = presenceAndRoles.flatMap(presenceAndRole => {
      const remainingPresences = presences.filter(presence => presence.id != presenceAndRole.presence.id);

      return findConfigurations(instrumentIdsCopy, remainingPresences, {
        ...configuration,
        presenceAndRoles: [...configuration.presenceAndRoles, presenceAndRole]
      });
    });

    return configurations;
  }

  const presences = gig.presences.filter(presence => presence.value);

  const instrumentIds = gig.gigVoices.map(gigVoice => gigVoice.instrumentId);
  if (gig.band) {
    instrumentIds.push(...gig.band.bandVoices.filter(bandVoice => gig.disabledVoices.every(disabledVoice => disabledVoice.bandVoiceId != bandVoice.id)).map(bandVoice => bandVoice.instrumentId));
  }

  const configurations = findConfigurations(instrumentIds, presences, {
    playable: false,
    presenceAndRoles: []
  });

  const playable = configurations.some(configuration => configuration.playable);

  await prisma.gig.update({
    where: {
      id: gig.id
    },
    data: {
      playable
    }
  })

  await prisma.formation.deleteMany({
    where: {
      gigId: gig.id
    }
  })

  // TODO: Find closest formation
  // const currentFormation = gig.formation;
  const bestConfiguration = findBestConfiguration(configurations);

  const createFormation = async (configuration: Configuration, makeCurrent: boolean = false) => {

    // Add remaining players, those who weren't necessary to be playable, to the configuration
    const remainingPresenceAndRoles = presences
      .filter(presence => presence.player.roles.length != 0 && configuration.presenceAndRoles.every(presenceAndRoles => presenceAndRoles.presence.id != presence.id))
      .map(presence => ({
        role: presence.player.roles[presence.player.roles.length - 1] as Role,
        presence
      }));

    const completeConfiguration = {
      ...configuration,
      presenceAndRoles: [...configuration.presenceAndRoles, ...remainingPresenceAndRoles]
    }

    // Do not forget players which can't play one of the gig voices
    const remainingPresences = presences
      .filter(presence => presence.player.roles.every(role => instrumentIds.every(instrumentId => instrumentId != role.instrumentId)));

    const formationVoices = instrumentIds.map(instrumentId => ({
      instrumentId,
      presenceAndRoles: completeConfiguration.presenceAndRoles.filter(presenceAndRole => presenceAndRole.role.instrumentId == instrumentId)
    }))

    const formation = await prisma.formation.create({
      data: {
        gig: {
          connect: {
            id: gig.id
          }
        },
        gigCurrentFrom: makeCurrent ? {
          connect: {
            id: gig.id
          }
        } : undefined,
        formationUndefinedVoicePresences: {
          createMany: {
            data: remainingPresences.map(presence => ({
              presenceId: presence.id
            }))
          }
        }
      }
    })

    await Promise.all(formationVoices.map((formationVoice) => prisma.formationVoice.create({
      data: {
        formation: {
          connect: {
            id: formation.id
          }
        },
        instrument: {
          connect: {
            id: formationVoice.instrumentId
          }
        },
        formationVoicePresences: {
          createMany: {
            data: formationVoice.presenceAndRoles.map(presenceAndRole => ({
              presenceId: presenceAndRole.presence.id
            }))
          }
        }
      }
    })));
  }

  await Promise.all(configurations.map((configuration) => createFormation(configuration, configuration == bestConfiguration)));
}

export const computePlayabilities = async (gigs: GigPayload[]) => {
  await Promise.all(gigs.map(gig => computePlayability(gig)));
}