import { GigCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    index: 201
  }
}

export const actions: Actions = {
  default: async ({ params, request, locals }) => {
    const { playerId } = locals;
    const { bandId } = params;

    const formData = Object.fromEntries(await request.formData());

    const data: Prisma.GigCreateInput = {
      band: {
        connect: {
          id: Number(bandId),
        }
      },
      presences: {
        create: {
          playerId: Number(playerId),
          value: true
        }
      },
      organizerRoles: {
        create: {
          playerId: Number(playerId)
        }
      },
      name: formData["name"] as string,
      location: formData["location"] as string,
      description: formData["description"] as string,
      date: new Date(formData["date"] as string)
    }

    const result = GigCreateInputSchema.safeParse(data);

    if (!result.success) {
      const formated = result.error.format();
      const errors = {
        name: formated.name?._errors.pop(),
        location: formated.location?._errors.pop(),
        date: formated.date?._errors.pop(),
        description: formated.description?._errors.pop()
      }

      return {
        success: false,
        message: 'Presta non valide :(',
        data,
        errors
      }
    }

    const response = await prisma.gig.create({ data });
    return { success: true, message: 'Presta créée :)', response };
  }
}