import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
  bandId: z.string(),
  instrumentId: z.string()
});

export const load: PageServerLoad = async (event) => {
  const caller = router.createCaller(await createContext(event));
  const instruments = () => caller.instruments.list();

  const form = () => superValidate(schema);

  return {
    form: form(),
    instruments: instruments(),
    index: 16,
    title: 'Ajouter un pupitre'
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);
    try {
      await router.createCaller(await createContext(event)).bandVoices.create(form.data);
      return message(form, 'Et un pupitre de plus :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Echec :(');
    }
  }
};
