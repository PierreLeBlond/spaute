import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';
import { create } from '$lib/api/gig/create';

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
    }
  });

  const bands = prisma.band.findMany({
    where: {
      players: {
        some: {
          id: playerId
        }
      }
    }
  })
  return {
    presences,
    newGigs,
    bands
  }
}

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const { playerId } = locals;

    const formData = Object.fromEntries(await request.formData());

    return await create(playerId, formData.bandId as string, formData);

  }
}