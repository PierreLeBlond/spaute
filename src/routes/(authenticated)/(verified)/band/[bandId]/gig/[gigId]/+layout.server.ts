import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const { gigId } = event.params;
  const { currentPlayer } = await event.parent();
  const caller = router.createCaller(await createContext(event));
  const gig = () => caller.gigs.read({ id: Number(gigId) });
  const currentPresence = () => caller.presences.read({ gigId: Number(gigId), playerId: currentPlayer.id });

  return {
    gig: gig(),
    currentPresence: currentPresence()
  };
}
