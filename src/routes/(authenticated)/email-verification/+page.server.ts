import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const schema = z.object({});

export const load: PageServerLoad = async ({ locals, cookies, url }) => {
  const { user } = await locals.auth.validateUser();

  if (!user) {
    throw redirect(302, "/users/login");
  }

  const form = await superValidate(schema);
  const expired = url.searchParams.get('expired');
  const invalid = url.searchParams.get('invalid');

  if (expired) {
    const error = 'Le lien de validation a expiré !';
    setError(form, "", error);
  }

  if (invalid) {
    const error = 'Le lien de validation n\'est pas valide !';
    setError(form, "", error);
  }

  const fromPathname = cookies.get('fromPathname');

  return {
    form,
    fromPathname: fromPathname ?? '/gigs',
    email: user.email,
    emailVerified: user.emailVerified,
    tabs: [
      {
        href: '/email-verification',
        key: '/email-verification',
        label: 'vérification'
      }
    ],
    index: 10000
  }
};

export const actions: Actions = {
  default: async (event) => {

    const { request } = event;
    const form = await superValidate(request, schema);

    try {
      await router.createCaller(await createContext(event)).users.sendVerificationEmail();
      return message(form, 'Email envoyé !');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      return message(form, error.message);
    }

  }
};