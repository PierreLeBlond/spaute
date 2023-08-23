import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { redirect } from '@sveltejs/kit';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
  email: z.string().email({ message: 'Email incorrect' }),
  password: z.string().min(8, { message: 'Au moins 8 caractères' }).max(32),
  passwordConfirmation: z.string(),
  name: z.string().min(1, { message: 'On veut un nom !' }).max(32)
});

export const load: PageServerLoad = async () => {
  const form = () => superValidate(schema);

  return {
    form: form(),
    index: 2
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    const { email, password, passwordConfirmation, name } = form.data;

    if (password != passwordConfirmation) {
      setError(form, 'passwordConfirmation', 'Ne correspond pas.');
    }

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).users.create({ email, password, name });

      const fromPathname = event.cookies.get('fromPathname');

      if (fromPathname) {
        event.cookies.delete('fromPathname');
        throw redirect(302, fromPathname);
      }

      return message(form, 'Fanfaronx crééx :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Fanfaronx non valide :(');
    }
  }
};
