import { BandCreateInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { Prisma } from "@prisma/client";
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = () => ({
  index: 11
});

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const { playerId } = locals;

    const formData = Object.fromEntries(await request.formData());
    const data: Prisma.BandCreateInput = {
      name: formData["name"] as string,
      players: {
        connect: [{
          id: Number(playerId)
        }]
      },
      adminRoles: {
        create: [{
          playerId: Number(playerId)
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
        success: false,
        message: 'Fanfare non valide :(',
        data,
        errors
      }
    }

    try {
      const response = await prisma.band.create({ data });
      return { success: true, message: 'Fanfare créée !', response };
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) {
        throw error;
      }
      if (error.code !== 'P2002') {
        throw error;
      }
      return {
        success: false, message: 'Fanfare non valide :(', errors: {
          name: 'Nom déjà utilisé...'
        }
      }
    }


  }
}

