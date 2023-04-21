import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from './$types';
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";
import { router } from "$lib/trpc/router";
import { createContext } from "$lib/trpc/context";

const schema = z.object({
  playerId: z.number()
});

export const load: PageServerLoad = async (event) => {
  const form = () => superValidate(schema);
  const players = async () => router.createCaller(await createContext(event)).players.list({});
  return {
    form: form(),
    players: players(),
    index: 1
  }
}

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    event.cookies.set('playerId', form.data.playerId.toString());

    const fromPathname = event.cookies.get('fromPathname');

    if (fromPathname) {
      event.cookies.delete('fromPathname');
      throw redirect(302, fromPathname);
    }

    return { success: true, message: 'A toi de jouer :)' }
  }
}