import { OrganizerRoleCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { gigId, playerId } = params;

  const player = async () => await prisma.player.findUniqueOrThrow({
    where: {
      id: Number(playerId)
    }
  });

  const organizerRole = async () => await prisma.organizerRole.findUnique({
    where: {
      gigId_playerId: {
        gigId: Number(gigId),
        playerId: Number(playerId)
      }
    }
  });

  return {
    player: player(),
    playerOrganizerRole: organizerRole(),
    index: 204
  }
}

export const actions: Actions = {
  default: async ({ params }) => {
    const { gigId, playerId } = params;

    const data: Prisma.OrganizerRoleCreateInput = {
      gig: {
        connect: {
          id: Number(gigId)
        }
      },
      player: {
        connect: {
          id: Number(playerId)
        }
      }
    }

    const result = OrganizerRoleCreateInputSchema.safeParse(data);

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

    const response = await prisma.organizerRole.create({
      data
    });

    return { success: true, message: 'Nouvelleau organisateurice :)', response };
  }
}

