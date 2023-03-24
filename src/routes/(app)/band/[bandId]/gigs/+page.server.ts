import { create } from '$lib/api/gig/create';
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

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
    newGigs
  }
}

export const actions: Actions = {
  default: async ({ params, request, locals }) => {
    const { playerId } = locals;
    const { bandId } = params;

    const formData = Object.fromEntries(await request.formData());

    return await create(playerId, bandId, formData);
  }
}