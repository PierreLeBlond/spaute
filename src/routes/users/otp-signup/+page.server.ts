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
let sendRatelimit: Ratelimit;

if (!building) {
  redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN
  });

  sendRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1, '60 s')
  });
}

const schema = z.object({
  email: z.string().email({ message: 'Email incorrect' })
});

export const load: PageServerLoad = async () => {
  const form = () => superValidate(schema);

  return {
    form: form(),
    tabs: [
      {
        href: 'users/otp-signup',
        key: 'users/otp-signup',
        label: 'otp'
      }
    ],
    index: 1000000
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    const ip = event.getClientAddress();
    const rateLimitAttempt = await sendRatelimit.limit(ip);
    if (!rateLimitAttempt.success) {
      const timeRemaining = Math.floor((rateLimitAttempt.reset - new Date().getTime()) / 1000);
      setError(form, '', `Attends encore ${timeRemaining} secondes avant de demander un nouvel email !`, {
        status: 429
      });
      return message(form, 'Pas si vite !');
    }

    const { email } = form.data;

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).users.sendSignupPassword({ email });
      throw redirect(302, `/users/otp-signup/otp-validation?email=${email}`, 'Email envoyé !', event);
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Outch !');
    }
  }
};
