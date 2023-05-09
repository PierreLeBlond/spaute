import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { message, setError, superValidate } from "sveltekit-superforms/server";
import type { Actions, PageServerLoad } from "./$types";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

const schema = z.object({
  id: z.number()
});

export const load: PageServerLoad = (event) => {
  const form = () => superValidate(schema);
  const instruments = async () => router.createCaller(await createContext(event)).instruments.list();
  return {
    instruments: instruments(),
    index: 10,
    form: form()
  }
}

export const actions: Actions = {
  delete: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).instruments.delete(form.data);
      return message(form, 'Instrument supprimé :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Suppression impossible :(');
    }
  }
}