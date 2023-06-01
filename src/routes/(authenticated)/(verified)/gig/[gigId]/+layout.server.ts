import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const { gigId } = event.params;
  const { currentPlayer } = await event.parent();
  const caller = router.createCaller(await createContext(event));
  const gig = await caller.gigs.read({ id: Number(gigId) });
  const currentPresence = () => caller.presences.read({ gigId: Number(gigId), playerId: currentPlayer.id });
  const band = () => gig.band ? caller.bands.read({ id: gig.band.id }) : null;
  const currentMembership = () => gig.band ? caller.memberships.read({ playerId: currentPlayer.id, bandId: gig.band.id }) : null;

  return {
    band: band(),
    currentMembership: currentMembership(),
    gig,
    currentPresence: currentPresence(),
    title: gig.name
  };
}
