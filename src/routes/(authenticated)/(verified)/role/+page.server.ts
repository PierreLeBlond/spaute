import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { TRPCError } from '@trpc/server';

const schema = z.object({
  playerId: z.number(),
  instrumentId: z.number(),
  playable: z.boolean()
})

export const load: PageServerLoad = async (event) => {
  const caller = router.createCaller(await createContext(event));
  const instruments = () => caller.instruments.list();

  const form = () => superValidate(schema);

  return {
    form: form(),
    instruments: instruments(),
    index: 1001
  }
}

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
      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Pupitre non valide :(');
    }


  }
}