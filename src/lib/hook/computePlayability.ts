import prisma from "$lib/prisma"
import type { BandVoice, Player, Role, Presence, Gig, Band, DisabledVoice, GigVoice } from "@prisma/client";

type GigPayload = Gig & { band: Band & { bandVoices: BandVoice[] } | null, gigVoices: GigVoice[], disabledVoices: DisabledVoice[], presences: (Presence & { player: Player & { roles: Role[] } })[] };

export const computePlayability = async (gig: GigPayload) => {

  const findConfiguration = (instrumentIds: number[], presences: (Presence & { player: Player & { roles: Role[] } })[], configuration: Role[]) => {

    const instrumentIdsCopy = instrumentIds.slice(0);
    const instrumentId = instrumentIdsCopy.pop();

    if (!instrumentId) {
      return configuration;
    }

    const players = presences.map(presence => presence.player);

    const roles = players.filter(player => player.roles.some((role: Role) => role.instrumentId == instrumentId && role.playable))
      .map(player => player.roles.find((role: Role) => role.instrumentId == instrumentId))
      .filter(Boolean);

    let config;
    const foundConfiguration = roles.some(role => {
      const playerId = role.playerId;
      const remainingPresences = presences.filter(presence => presence.playerId != playerId);

      config = findConfiguration(instrumentIdsCopy, remainingPresences, [...configuration, role]);
      return !!config;
    });

    if (!foundConfiguration) {
      return null;
    }

    return config;
  }

  const presences = gig.presences.filter(presence => presence.value);

  const instrumentIds = gig.gigVoices.map(gigVoice => gigVoice.instrumentId);
  if (gig.band) {
    instrumentIds.push(...gig.band.bandVoices.filter(bandVoice => gig.disabledVoices.every(disabledVoice => disabledVoice.bandVoiceId != bandVoice.id)).map(bandVoice => bandVoice.instrumentId));
  }

  const configuration = findConfiguration(instrumentIds, presences, []);

  await prisma.gig.update({
    where: {
      id: gig.id
    },
    data: {
      playable: !!configuration
    }
  })
}

export const computePlayabilities = async (gigs: GigPayload[]) => {
  await Promise.all(gigs.map(gig => computePlayability(gig)));
}