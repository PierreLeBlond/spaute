import { redirect } from "@sveltejs/kit";
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const players = await prisma.player.findMany({
    orderBy: {
      name: 'asc'
    }
  });
  return {
    players,
    index: 1
  }
}

export const actions: Actions = {
  default: async ({ cookies, request, locals }) => {
    const data = await request.formData();
    const playerId = data.get("playerId") as string;
    cookies.set('playerId', playerId);
    locals.playerId = playerId;

    const fromPathname = cookies.get('fromPathname');

    if (fromPathname) {
      cookies.delete('fromPathname');
      throw redirect(302, fromPathname);
    }

    return { success: true, message: 'Connexion réussi :)' }
  }
}