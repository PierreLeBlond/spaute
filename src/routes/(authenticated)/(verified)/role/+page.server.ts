import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
  playerId: z.string(),
  instrumentId: z.string(),
  playable: z.boolean()
});

export const load: PageServerLoad = async (event) => {
  const caller = router.createCaller(await createContext(event));
  const instruments = () => caller.instruments.list();

  const form = () => superValidate(schema);

  return {
    form: form(),
    instruments: instruments(),
    index: 1001,
    nav: {
      return: '/roles'
    }
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;

    const form = await superValidate(request, schema);

    try {
      await router.createCaller(await createContext(event)).roles.create(form.data);
      return message(form, 'Et un pupitre de plus :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Pupitre non valide :(');
    }
  }
};
