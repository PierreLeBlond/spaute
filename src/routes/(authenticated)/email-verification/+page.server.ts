import type { Actions, PageServerLoad } from './$types';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import {
  UPSTASH_REDIS_REST_TOKEN,
  UPSTASH_REDIS_REST_URL,
} from "$env/static/private";

import { building } from "$app/environment";
import { redirect } from 'sveltekit-flash-message/server';

let redis: Redis;
let sendRatelimit: Ratelimit;

if (!building) {
  redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
  });

  sendRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1, "60 s"),
  });
}

const schema = z.object({ email: z.string().email() });

export const load: PageServerLoad = async () => {
  const form = await superValidate(schema);

  return {
    form,
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

    const ip = event.getClientAddress();
    const rateLimitAttempt = await sendRatelimit.limit(ip);
    if (!rateLimitAttempt.success) {
      const timeRemaining = Math.floor(
        (rateLimitAttempt.reset - new Date().getTime()) / 1000
      );
      setError(
        form,
        "",
        `Attends ${timeRemaining} secondes pour un nouvel email !`,
        {
          status: 429
        }
      );
      return message(form, 'Pas si vite !');
    }

    const { email } = form.data;

    try {
      await router.createCaller(await createContext(event)).users.sendEmailVerificationPassword();
      throw redirect(302, `/email-verification/code-validation?email=${email}`, 'Email envoyé !', event);
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

  }
};