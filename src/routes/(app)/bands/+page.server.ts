import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { z } from "zod";
import type { Actions, PageServerLoad } from "./$types"
import { message, setError, superValidate } from "sveltekit-superforms/server";
import { TRPCError } from "@trpc/server";

const schema = z.object({
  bandId: z.number()
});

export const load: PageServerLoad = (event) => {
  const { playerId } = event.locals;
  const form = () => superValidate(schema);
  const memberships = async () => router.createCaller(await createContext(event)).memberships.list({ playerId: Number(playerId) });
  return {
    form: form(),
    memberships: memberships(),
    index: 10
  };
}

export const actions: Actions = {
  delete: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).bands.delete(form.data);
      return message(form, 'A plus tard, fanfare :)');
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
