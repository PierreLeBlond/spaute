import { redirect } from "@sveltejs/kit";
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';
import type { Prisma } from "@prisma/client";
import { PlayerCreateInputSchema } from "$lib/generated/zod";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.playerId) {
    throw redirect(302, '/');
  }

  const players = await prisma.player.findMany({
    orderBy: {
      name: 'asc'
    }
  });
  return {
    players,
    title: 'Login'
  }
}

export const actions: Actions = {
  addPlayer: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    const data: Prisma.PlayerCreateInput = {
      name: formData["name"] as string,
    };

    const result = PlayerCreateInputSchema.safeParse(data);

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

    const response = await prisma.player.create({ data });
    return { success: true, response };
  },
  login: async ({ cookies, request, locals }) => {
    const data = await request.formData();
    const playerId = data.get("playerId") as string;
    cookies.set('playerId', playerId);
    locals.playerId = playerId;

    const fromPathname = cookies.get('fromPathname');

    if (fromPathname) {
      cookies.delete('fromPathname');
      throw redirect(302, fromPathname);
    }

    return { success: true }
  }
}