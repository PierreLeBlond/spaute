import { InstrumentCreateInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { Prisma } from "@prisma/client";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    index: 11
  }
}

export const actions: Actions = {
  default: async ({ request }) => {

    const formData = Object.fromEntries(await request.formData());

    const data: Prisma.InstrumentCreateInput = {
      name: formData["name"] as string
    }

    const result = InstrumentCreateInputSchema.safeParse(data);

    if (!result.success) {
      const formated = result.error.format();
      const errors = {
        name: formated.name?._errors.pop()
      }

      return {
        success: false,
        message: 'Instrument non valide :(',
        data,
        errors
      }
    }

    try {
      const response = await prisma.instrument.create({ data });
      return { success: true, message: 'Instrument créé !', response };
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) {
        throw error;
      }
      if (error.code !== 'P2002') {
        throw error;
      }
      return {
        success: false, message: 'Instrument non valide :(', errors: {
          name: 'Nom déjà utilisé...'
        }
      }
    }
  }
}
