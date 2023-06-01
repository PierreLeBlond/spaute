import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
  const { currentPlayer } = await event.parent();
  const memberships = async () => router.createCaller(await createContext(event)).memberships.list({ playerId: currentPlayer.id });
  return {
    memberships: memberships(),
    index: 10
  };
}