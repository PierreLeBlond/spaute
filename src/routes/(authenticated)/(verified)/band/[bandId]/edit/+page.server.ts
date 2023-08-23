import { z } from 'zod';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
  bandId: z.string(),
  id: z.string()
});

export const load: PageServerLoad = async (event) => {
  const { bandId } = event.params;
  const caller = router.createCaller(await createContext(event));
  const bandVoices = () => caller.bandVoices.list({ bandId: bandId });
  const form = () => superValidate(schema);
  return {
    form: form(),
    bandVoices: bandVoices(),
    index: 15
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    try {
      await router.createCaller(await createContext(event)).bandVoices.delete(form.data);
      return message(form, 'Bye bye le pupitre :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Echec :(');
    }
  }
};
