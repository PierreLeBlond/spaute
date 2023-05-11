import type { Actions, PageServerLoad } from './$types';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { redirect } from '@sveltejs/kit';

const schema = z.object({
  password: z.string().min(8, { message: 'Au moins 8 caractères' }).max(32),
  passwordConfirmation: z.string(),
});

export const load: PageServerLoad = async () => {
  const form = await superValidate(schema);

  return {
    form,
    index: 100001
  }
};

export const actions: Actions = {
  default: async (event) => {
    const { token } = event.params;

    const { request } = event;
    const form = await superValidate(request, schema);

    const { password, passwordConfirmation } = form.data;

    if (password != passwordConfirmation) {
      setError(form, 'passwordConfirmation', 'Ne correspond pas.');
    }

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).users.resetPassword({ token, password });
      throw redirect(302, '/users/login');
    } catch (error) {
      if (error instanceof TRPCError && error.cause?.message === "EXPIRED_TOKEN") {
        throw redirect(302, '/users/password-reset?expired=true');
      }
      if (error instanceof TRPCError && error.cause?.message === "INVALID_TOKEN") {
        throw redirect(302, '/users/password-reset?invalid=true');
      }
      throw error;
    }

  }
};