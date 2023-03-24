import { VoiceCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { bandId } = params;
  const instruments = await prisma.instrument.findMany();
  const voices = await prisma.voice.findMany({
    where: {
      bandId: Number(bandId)
    },
    include: {
      instrument: true
    }
  });
  return {
    voices,
    instruments
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
        data,
        errors
      }
    }

    const response = await prisma.voice.create({
      data
    });
    return { success: true, response };
  }
}

