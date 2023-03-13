import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
  const { player } = await parent();
  const newGigs = await prisma.gig.findMany({
    where: {
      bandId: player.bandId,
      NOT: {
        presences: {
          some: {
            playerId: player.id
          }
        }
      }
    }
  })
  const presences = await prisma.presence.findMany({
    where: {
      playerId: player.id
    },
    include: {
      gig: true
    }
  });
  return {
    newGigs,
    presences
  }
}