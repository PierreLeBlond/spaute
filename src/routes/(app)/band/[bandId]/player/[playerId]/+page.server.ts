import { join } from '$lib/api/gig/join';
import { update } from '$lib/api/gig/update';
import { AdminRoleCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { bandId, playerId } = params;

  const player = async () => await prisma.player.findUnique({
    where: {
      id: Number(playerId)
    }
  });

  const adminRole = async () => await prisma.adminRole.findUnique({
    where: {
      bandId_playerId: {
        bandId: Number(bandId),
        playerId: Number(playerId)
      }
    }
  });

  return {
    player: player(),
    adminRole: adminRole(),
    index: 101
  }
}

export const actions: Actions = {
  default: async ({ params }) => {
    const { bandId, playerId } = params;

    const data: Prisma.AdminRoleCreateInput = {
      band: {
        connect: {
          id: Number(bandId)
        }
      },
      player: {
        connect: {
          id: Number(playerId)
        }
      }
    }

    const result = AdminRoleCreateInputSchema.safeParse(data);

    if (!result.success) {
      const formated = result.error.format();
      const errors = formated._errors;

      return {
        success: false,
        message: 'Echec de l\'opération :(',
        data,
        errors
      }
    }

    const response = await prisma.adminRole.create({
      data
    });

    return { success: true, message: 'Nouvel admin :)', response };
  }
}

