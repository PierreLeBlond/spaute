import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  const { playerId } = event.locals;

  const caller = router.createCaller(await createContext(event));
  const currentPlayer = await caller.players.read({ id: Number(playerId) });

  return {
    currentPlayer,
    title: currentPlayer.name,
    tabs: [
      {
        href: '/bands',
        key: '/band',
        label: 'mes fanfares'
      },
      {
        href: '/gigs',
        key: '/gig',
        label: 'mes prestas'
      },
      {
        href: '/roles',
        key: '/role',
        label: 'mes pupitres'
      }
    ]
  }
};