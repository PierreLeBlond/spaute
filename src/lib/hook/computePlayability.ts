import prisma from "$lib/prisma"
import type { Voice, Player, Role, Presence } from "@prisma/client";

export const computePlayability = async (gigId: number) => {
  const gig = await prisma.gig.findUniqueOrThrow({
    where: {
      id: gigId
    },
    include: {
      presences: {
        include: {
          player: {
            include: {
              roles: true
            }
          }
        }
      },
      band: {
        include: {
          voices: true
        }
      }
    }
  });

  const findConfiguration = (voices: Voice[], presences: Presence[], configuration: Role[]) => {

    const voicesCopy = voices.slice(0);
    const voice = voicesCopy.pop();

    if (!voice) {
      return configuration;
    }

    const players = presences.map(presence => presence.player);

    const roles: Role[] = players.filter(player => player.roles.some((role: Role) => role.instrumentId == voice.instrumentId && role.playable))
      .map(player => player.roles.find((role: Role) => role.instrumentId == voice.instrumentId));

    let config;
    const foundConfiguration = roles.some(role => {
      const playerId = role.playerId;
      const remainingPresences = presences.filter(presence => presence.playerId != playerId);

      config = findConfiguration(voicesCopy, remainingPresences, [...configuration, role]);
      return !!config;
    });

    if (!foundConfiguration) {
      return null;
    }

    return config;
  }

  const presences = gig.presences.filter(presence => presence.value);

  const configuration = findConfiguration(gig.band.voices, presences, []);

  await prisma.gig.update({
    where: {
      id: gigId
    },
    data: {
      playable: !!configuration
    }
  })
}