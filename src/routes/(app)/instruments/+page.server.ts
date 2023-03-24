import { InstrumentCreateInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import type { Prisma } from "@prisma/client";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const instruments = await prisma.instrument.findMany({
    orderBy: {
      name: 'asc'
    }
  });
  return {
    instruments,
    backPathname: '/',
    title: 'Instruments'
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
      const errors = formated._errors;

      return {
        data,
        errors
      }
    }

    const response = await prisma.instrument.create({
      data
    });

    return { success: true, response };
  }
}
