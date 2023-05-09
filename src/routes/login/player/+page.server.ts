import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { TRPCError } from '@trpc/server';

const schema = z.object({
  name: z.string().min(1, { message: 'On veut un nom !' }).max(32)
});

export const load: PageServerLoad = () => ({
  form: superValidate(schema),
  index: 2
})

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).players.create(form.data);
      return message(form, 'Fanfaronx crééx :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Fanfaronx non valide :(');
    }

  }
}