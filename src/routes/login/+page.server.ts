import { json, redirect } from "@sveltejs/kit";
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
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
    const data = await request.formData();
    const name = data.get("name") as string;

    if (!name || name == "") {
      return { success: false };
    }

    const response = await prisma.player.create({
      data: {
        name
      }
    });

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