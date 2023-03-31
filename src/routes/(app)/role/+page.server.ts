import { RoleCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma'
import { Prisma } from '@prisma/client';
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
      const errors = {
        instrument: formated.instrument?._errors.pop(),
      }


      return {
        success: false,
        message: 'Pupitre non valide :(',
        data,
        errors
      }
    }

    try {
      const response = await prisma.role.create({ data });
      return { success: true, message: 'Pupitre créé :)', response };
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) {
        throw error;
      }
      if (error.code !== 'P2002') {
        throw error;
      }
      return {
        success: false, message: 'Pupitre non valide :(', data, errors: {
          instrument: 'Pupitre déjà existant...'
        }
      }
    }

  }
}