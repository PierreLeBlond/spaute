import { GigCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client';
import { DateTime } from 'luxon';
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

    const date = DateTime.fromISO(`${formData["date"]}T${formData["time"]}`).toISO();

    const createData = {
      name: formData["name"] as string,
      location: formData["location"] as string,
      description: formData["description"] as string,
      date
    }

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
      ...createData
    }

    const result = GigCreateInputSchema.safeParse(data);

    if (!result.success) {
      const formated = result.error.format();
      const errors = {
        name: formated.name?._errors,
        location: formated.location?._errors,
        date: formated.date?._errors,
        description: formated.description?._errors
      }

      return {
        success: false,
        message: 'Presta non valide :(',
        data: createData,
        errors
      }
    }

    const response = await prisma.gig.create({ data });
    return { success: true, message: 'Presta créée :)', response };
  }
}