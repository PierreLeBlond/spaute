import type { Actions, PageServerLoad } from './$types';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { redirect } from '@sveltejs/kit';

const schema = z.object({ email: z.string().email() });

const passwordSchema = z.object({
  password: z.string(),
  email: z.string()
});

export const load: PageServerLoad = async ({ url }) => {
  const form = await superValidate(schema);
  const expired = url.searchParams.get('expired');
  const invalid = url.searchParams.get('invalid');

  if (expired) {
    const error = 'Le code de récupération a expiré !';
    setError(form, "", error);
  }

  if (invalid) {
    const error = 'Le code de récupération n\'est pas valide !';
    setError(form, "", error);
  }

  const passwordForm = await superValidate(passwordSchema, { id: 'passwordForm' });

  return {
    form,
    passwordForm,
    tabs: [
      {
        href: 'users/password-reset',
        key: 'users/password-reset',
        label: 'récupération'
      }
    ],
    index: 100000
  }
};

export const actions: Actions = {
  send: async (event) => {

    const { request } = event;
    const form = await superValidate(request, schema);

    const { email } = form.data;

    try {
      await router.createCaller(await createContext(event)).users.sendRecoveryEmail({ email });
      return message(form, 'Email envoyé !');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Outch !');
    }

  },
  verify: async (event) => {
    const { request } = event;
    const form = await superValidate(request, passwordSchema, { id: 'passwordForm' });

    try {
      const result = await router.createCaller(await createContext(event)).users.getResetPasswordToken({ password: form.data.password, email: form.data.email });
      throw redirect(302, `/users/password-reset/${result.token}`);
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