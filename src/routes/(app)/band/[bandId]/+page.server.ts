import { PlayerUpdateArgsSchema } from '$lib/generated/zod';
import { computePlayability } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
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

    const args: Prisma.PlayerUpdateArgs = {
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
    }

    const result = PlayerUpdateArgsSchema.safeParse(args);

    if (!result.success) {
      const formated = result.error.format();
      const errors = formated._errors;

      return {
        data: args.data,
        errors
      }
    }

    const response = await prisma.player.update(args);

    return { success: true, response };
  }
}

