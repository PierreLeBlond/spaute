import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { TRPCError } from '@trpc/server';

const schema = z.object({
  bandId: z.number(),
  id: z.number()
});

export const load: PageServerLoad = async (event) => {
  const { bandId } = event.params;
  const caller = router.createCaller(await createContext(event));
  const voices = () => caller.voices.list({ bandId: Number(bandId) });
  const form = () => superValidate(schema);
  return {
    form: form(),
    voices: voices(),
    index: 300
  }
}

export const actions: Actions = {
  delete: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    try {
      await router.createCaller(await createContext(event)).voices.delete(form.data);
      return message(form, 'Bye bye le pupitre :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Echec :(');
    }
  }
}