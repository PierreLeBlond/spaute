import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';
import type { Prisma } from "@prisma/client";
import { PlayerCreateInputSchema } from "$lib/generated/zod";

export const load: PageServerLoad = () => ({
  index: 2
})

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    const data: Prisma.PlayerCreateInput = {
      name: formData["name"] as string,
    };

    const result = PlayerCreateInputSchema.safeParse(data);

    if (!result.success) {
      const formated = result.error.format();
      const errors = {
        name: formated.name?._errors,
      }

      return {
        success: false,
        message: 'Musicien non valide :(',
        data,
        errors
      }
    }

    const response = await prisma.player.create({ data });

    return { success: true, messagge: 'Musicien créé :)', response };
  }
}