import { RoleCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const instruments = await prisma.instrument.findMany();
  return {
    instruments,
    index: 31
  }
}

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const { playerId } = locals;
    const formData = Object.fromEntries(await request.formData());

    const data: Prisma.RoleCreateInput = {
      player: {
        connect: {
          id: Number(playerId)
        }
      },
      instrument: {
        connect: {
          id: Number(formData['instrumentId'])
        }
      },
      playable: !!formData['playable']
    }

    const result = RoleCreateInputSchema.safeParse(data);

    if (!result.success) {
      const formated = result.error.format();
      const errors = formated._errors;

      return {
        success: false,
        message: 'Pupitre non valide :(',
        data,
        errors
      }
    }

    const response = await prisma.role.create({
      data
    });


    return { success: true, message: 'Pupitre créé :)', response };
  }
}