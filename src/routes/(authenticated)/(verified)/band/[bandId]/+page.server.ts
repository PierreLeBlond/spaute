import type { Actions, PageServerLoad } from './$types';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

const schema = z.object({
  bandId: z.string(),
  playerId: z.string()
});

export const load: PageServerLoad = async () => {
  const form = () => superValidate(schema);

  return {
    form: form(),
    index: 13
  }
}

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    try {
      await router.createCaller(await createContext(event)).memberships.create(form.data);
      return message(form, 'Bienvenue :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Echec :(');
    }
  }
}

