import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { TRPCError } from "@trpc/server";
import type { Actions, PageServerLoad } from "./$types";
import { message, setError, superValidate } from "sveltekit-superforms/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: 'Ce truc a bien un nom ?' }).max(32)
});

export const load: PageServerLoad = async () => {

  const form = await superValidate(schema);

  return {
    index: 11,
    form
  }
}

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).instruments.create(form.data);
      return message(form, 'Instrument créé :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Instrument non valide :(');
    }
  }
}
