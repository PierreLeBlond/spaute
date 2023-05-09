import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  const { locals } = event;
  const { user } = await locals.auth.validateUser();
  if (!user) {
    throw redirect(302, "/users/login");
  }

  const caller = router.createCaller(await createContext(event));
  const currentPlayer = await caller.players.read({ id: Number(user.playerId) });

  return {
    currentPlayer,
    title: currentPlayer.name
  }
};