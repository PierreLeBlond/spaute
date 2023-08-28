import { building } from '$app/environment';
import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from '$env/static/private';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { redirect } from 'sveltekit-flash-message/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

let redis: Redis;
let verifyRatelimit: Ratelimit;

if (!building) {
  redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN
  });

  verifyRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, '10 s')
  });
}

const schema = z.object({
  password: z.string(),
  email: z.string()
});

export const load: PageServerLoad = async ({ url }) => {
  const form = await superValidate(schema);
  const email = url.searchParams.get('email');
  const expired = url.searchParams.get('expired');
  const invalid = url.searchParams.get('invalid');

  if (expired) {
    const error = 'Le mot de passe a expiré !';
    setError(form, '', error);
  }

  if (invalid) {
    const error = "Le mot de passe n'est pas valide !";
    setError(form, '', error);
  }

  return {
    form,
    email,
    tabs: [
      {
        href: 'users/otp-validation',
        key: 'users/otp-validation',
        label: 'validation'
      }
    ],
    index: 1000001,
    nav: {
      return: '/users/otp-signup'
    }
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    const ip = event.getClientAddress();
    const rateLimitAttempt = await verifyRatelimit.limit(ip);
    if (!rateLimitAttempt.success) {
      const timeRemaining = Math.floor((rateLimitAttempt.reset - new Date().getTime()) / 1000);
      setError(form, '', `Trop de tentatives ! Essais à nouveau dans ${timeRemaining} secondes`, {
        status: 429
      });
      return message(form, 'Pas si vite !');
    }

    try {
      await router
        .createCaller(await createContext(event))
        .users.signup({ password: form.data.password, email: form.data.email });

      const fromPathname = event.cookies.get('fromPathname');

      if (fromPathname) {
        event.cookies.delete('fromPathname');
      }
      throw redirect(302, fromPathname || '/', 'Hello !', event);
    } catch (error) {
      if (error instanceof TRPCError && error.code === 'TIMEOUT') {
        throw redirect(302, `/users/otp-signup/otp-validation?expired=true&email=${form.data.email}`);
      }
      if (error instanceof TRPCError && error.code === 'NOT_FOUND') {
        throw redirect(302, `/users/otp-signup/otp-validation?invalid=true&email=${form.data.email}`);
      }
      throw error;
    }
  }
};
