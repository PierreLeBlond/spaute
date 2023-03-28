import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const playerId = Number(locals.playerId);
  const presences = await prisma.presence.findMany({
    where: {
      playerId: playerId
    },
    include: {
      gig: {
        include: {
          band: true,
        }
      }
    },
    orderBy: {
      gig: {
        date: 'asc'
      }
    }
  });

  const newGigs = await prisma.gig.findMany({
    where: {
      AND: {
        NOT: {
          presences: {
            some: {
              playerId: playerId
            }
          }
        },
        band: {
          players: {
            some: {
              id: playerId
            }
          }
        }
      }
    },
    include: {
      band: true
    },
    orderBy: {
      date: 'asc'
    }
  });

  return {
    presences,
    newGigs,
    index: 20
  }
}