import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { currentPlayer } = await event.parent();
  const caller = router.createCaller(await createContext(event));
  const memberships = async () => caller.memberships.list({ playerId: currentPlayer.id });

  return {
    memberships: memberships(),
    index: 10
  };
};
