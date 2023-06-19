import type { Actions, PageServerLoad } from "./$types"
import { z } from "zod";
import { setError, message, superValidate } from "sveltekit-superforms/server";
import { router } from "$lib/trpc/router";
import { TRPCError } from "@trpc/server";
import { createContext } from "$lib/trpc/context";

const schema = z.object({
  name: z.string().min(1, { message: 'Mais vous êtes qui ?' }).max(32)
});

export const load: PageServerLoad = async () => {
  const form = await superValidate(schema);

  return {
    form,
    index: 11
  }
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).bands.create(form.data);
      return message(form, 'Fanfare créée :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }

      if (error.code != 'BAD_REQUEST') {
        throw error;
      }

      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Fanfare non valide :(');
    }
  }
}

