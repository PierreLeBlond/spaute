import { GigUpdateArgsSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    index: 203
  }
}

export const actions: Actions = {
  default: async ({ request, params }) => {
    const { gigId } = params;
    const formData = Object.fromEntries(await request.formData());

    const args: Prisma.GigUpdateArgs = {
      data: {
        name: formData["name"] as string,
        location: formData["location"] as string,
        date: new Date(formData["date"] as string),
        description: formData["description"] as string,
      },
      where: {
        id: Number(gigId)
      },
    }

    const result = GigUpdateArgsSchema.safeParse(args);

    if (!result.success) {
      const formated = result.error.format();

      const errors = {
        name: formated.data?.name?._errors.pop(),
        location: formated.data?.location?._errors.pop(),
        date: formated.data?.date?._errors.pop(),
        description: formated.data?.description?._errors.pop()
      }

      return {
        success: false,
        message: 'Impossible de mettre à jour :(',
        data: args.data,
        errors
      }
    }

    const response = await prisma.gig.update(args);

    return { success: true, message: 'presta mise à jour :)', response };
  }
}

