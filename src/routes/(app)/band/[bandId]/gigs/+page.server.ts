import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
  const playerId = Number(locals.playerId);
  const { bandId } = params;

  const presences = await prisma.presence.findMany({
    where: {
      AND: {
        playerId: playerId,
        gig: {
          bandId: Number(bandId)
        }
      }
    },
    include: {
      gig: {
        include: {
          band: true
        }
      }
    }
  });

  const newGigs = await prisma.gig.findMany({
    where: {
      AND: {
        bandId: Number(bandId),
        NOT: {
          presences: {
            some: {
              playerId: playerId
            }
          }
        }
      }
    },
    include: {
      band: true
    }
  });

  return {
    presences,
    newGigs,
    index: 20
  }
}