import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const instruments = router.createCaller(await createContext(event)).instruments.list();
  return {
    instruments,
    index: 10
  }
}

export const actions: Actions = {
  delete: async (event) => {
    const instrumentId = event.url.searchParams.get('instrumentId');
    const input = {
      id: Number(instrumentId)
    };

    const response = await router.createCaller(await createContext(event)).instruments.delete(input);

    return { success: true, message: 'Instrument supprimé :)', response };
  }
}