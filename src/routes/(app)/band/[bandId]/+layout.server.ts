import type { LayoutServerLoad } from "./$types";
import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";

export const load: LayoutServerLoad = async (event) => {
  const { playerId } = event.locals;
  const { bandId } = event.params;

  const caller = router.createCaller(await createContext(event));
  const band = await caller.bands.read({ id: Number(bandId) });
  const currentMembership = () => caller.memberships.read({ bandId: Number(bandId), playerId: Number(playerId) });

  return {
    band,
    currentMembership: currentMembership(),
    title: band.name,
    backPathname: '/bands',
    backName: 'fanfares',
    tabs: [
      {
        href: `/band/${bandId}/players`,
        key: `/band/${bandId}/player`,
        label: 'ses fanfaronx'
      },
      {
        href: `/band/${bandId}/gigs`,
        key: `/band/${bandId}/gig`,
        label: 'ses prestas'
      },
      {
        href: `/band/${bandId}/voices`,
        key: `/band/${bandId}/voice`,
        label: 'ses pupitres'
      }
    ]
  };
}
