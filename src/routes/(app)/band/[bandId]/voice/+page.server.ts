import { VoiceCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const instruments = await prisma.instrument.findMany();

  return {
    instruments,
    index: 301
  }
}

export const actions: Actions = {
  default: async ({ params, request }) => {
    const { bandId } = params;

    const formData = Object.fromEntries(await request.formData());

    const data: Prisma.VoiceCreateInput = {
      band: {
        connect: {
          id: Number(bandId)
        }
      },
      instrument: {
        connect: {
          id: Number(formData['instrumentId'])
        }
      }
    }

    const result = VoiceCreateInputSchema.safeParse(data);

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

    const response = await prisma.voice.create({
      data
    });
    return { success: true, message: 'Pupitre créé :)', response };
  }
}

