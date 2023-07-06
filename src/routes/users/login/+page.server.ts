import type { Actions, PageServerLoad } from './$types';
import { z } from "zod";
import { message, setError, superValidate } from "sveltekit-superforms/server";
import { router } from "$lib/trpc/router";
import { createContext } from "$lib/trpc/context";
import { TRPCError } from "@trpc/server";
import { redirect } from 'sveltekit-flash-message/server'

const schema = z.object({
  email: z.string(),
  password: z.string()
});

export const load: PageServerLoad = async () => {
  const form = await superValidate(schema);

  return {
    form,
    index: 1
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
      await router.createCaller(await createContext(event)).users.login(form.data);

      const fromPathname = event.cookies.get('fromPathname');

      if (fromPathname) {
        event.cookies.delete('fromPathname');
      }
      throw redirect(302, fromPathname || '/', 'Hello !', event);

    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      form.data.password = "";
      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Vous ne passerez pas :(');
    }
  }
}