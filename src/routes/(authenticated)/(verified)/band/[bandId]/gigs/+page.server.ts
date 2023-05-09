import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { bandId } = event.params;
  const gigs = async () => router.createCaller(await createContext(event)).gigs.list({ bandId: Number(bandId) });

  return {
    gigs: gigs(),
    index: 200
  }
}