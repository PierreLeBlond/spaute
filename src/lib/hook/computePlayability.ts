import prisma from "$lib/prisma"
import type { Voice, Player, Role, Presence, Gig, Band } from "@prisma/client";

type GigPayload = Gig & { band: Band & { voices: Voice[] }, presences: (Presence & { player: Player & { roles: Role[] } })[] };

export const computePlayability = async (gig: GigPayload) => {

  const findConfiguration = (voices: Voice[], presences: (Presence & { player: Player & { roles: Role[] } })[], configuration: Role[]) => {

    const voicesCopy = voices.slice(0);
    const voice = voicesCopy.pop();

    if (!voice) {
      return configuration;
    }

    const players = presences.map(presence => presence.player);

    const roles = players.filter(player => player.roles.some((role: Role) => role.instrumentId == voice.instrumentId && role.playable))
      .map(player => player.roles.find((role: Role) => role.instrumentId == voice.instrumentId))
      .filter(Boolean);

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