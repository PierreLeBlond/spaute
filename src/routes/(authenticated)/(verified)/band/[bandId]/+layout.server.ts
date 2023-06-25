import type { LayoutServerLoad } from "./$types";
import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";

export const load: LayoutServerLoad = async (event) => {
  const { currentPlayer } = await event.parent();
  const { bandId } = event.params;

  const caller = router.createCaller(await createContext(event));
  const band = await caller.bands.read({ id: bandId });
  const currentMembership = () => caller.memberships.read({ bandId: bandId, playerId: currentPlayer.id });

  return {
    band,
    currentMembership: currentMembership(),
    title: band.name
  };
}
