import { BandCreateInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import type { Prisma } from "@prisma/client";
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ locals }) => {
  const playerId = Number(locals.playerId);
  const bands = prisma.band.findMany({
    where: {
      players: {
        some: {
          id: playerId
        }
      }
    }
  })
  return {
    bands
  };
}

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const { playerId } = locals;

    const formData = Object.fromEntries(await request.formData());
    const data: Prisma.BandCreateInput = {
      name: formData.name as string,
      players: {
        connect: [{
          id: Number(playerId)
        }]
      }
    };

    const result = BandCreateInputSchema.safeParse(data);

    if (!result.success) {
      const formated = result.error.format();
      const errors = {
        name: formated.name?._errors.pop(),
      }

      return {
        data,
        errors
      }
    }

    const response = await prisma.band.create({ data });
    return { success: true, response };
  }
}

