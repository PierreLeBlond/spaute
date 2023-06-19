import type { Actions, PageServerLoad } from './$types';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const schema = z.object({ email: z.string().email() });

export const load: PageServerLoad = async ({ url }) => {
  const form = await superValidate(schema);
  const expired = url.searchParams.get('expired');
  const invalid = url.searchParams.get('invalid');

  if (expired) {
    const error = 'Le lien de validation a expiré !';
    setError(form, null, error);
  }

  if (invalid) {
    const error = 'Le lien de récupération n\'est pas valide !';
    setError(form, null, error);
  }

  return {
    form,
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
  default: async (event) => {

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
        null,
        error.message
      );
      return message(form, 'Outch !');
    }

  }
};