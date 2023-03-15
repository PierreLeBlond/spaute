import { computePlayability } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { playerId } = locals;
  const { bandId } = params;
  const players = await prisma.player.findMany({
    where: {
      id: Number(playerId),
      bands: {
        some: {
          id: Number(bandId)
        }
      }
    }
  });
  const band = await prisma.band.findUniqueOrThrow({
    where: {
      id: Number(bandId)
    },
    include: {
      players: {
        orderBy: {
          name: 'asc'
        }
      }
    }
  });
  return {
    band,
    players
  }
}

export const actions: Actions = {
  join: async ({ params, locals }) => {
    const { bandId } = params;
    const { playerId } = locals;

    const response = await prisma.player.update({
      where: {
        id: Number(playerId)
      },
      data: {
        bands: {
          connect: {
            id: Number(bandId)
          }
        }
      }
    });

    return { success: true, response };
  }
}

