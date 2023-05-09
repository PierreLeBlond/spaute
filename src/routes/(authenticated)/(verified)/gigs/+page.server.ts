import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { currentPlayer } = await event.parent();
  const gigs = async () => router.createCaller(await createContext(event)).gigs.listForPlayer({ playerId: currentPlayer.id });

  return {
    gigs: gigs(),
    index: 20
  }
}