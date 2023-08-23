import { building } from '$app/environment';
import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from '$env/static/private';
import { presenceSchema } from '$lib/components/gigs/presence/presenceSchema';
import { triggerGigSpam } from '$lib/hook/notifications/triggerGigSpam';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

let redis: Redis;
let spamRatelimit: Ratelimit;

if (!building) {
  redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN
  });

  spamRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1, '1h')
  });
}

const spamSchema = z.object({
  userId: z.string(),
  gigId: z.string(),
  gigName: z.string()
});

const joinSchema = z.object({
  bandId: z.string(),
  playerId: z.string()
});

export const load: PageServerLoad = async (event) => {
  const { currentPresence } = await event.parent();

  const spamForm = () => superValidate(spamSchema, { id: 'spamForm' });

  const form = () =>
    superValidate(
      {
        value: currentPresence?.value
      },
      presenceSchema,
      { id: 'presenceForm' }
    );

  const joinForm = () => superValidate(joinSchema, { id: 'joinForm' });

  return {
    form: form(),
    spamForm: spamForm(),
    joinForm: joinForm(),
    index: 102
  };
};

export const actions: Actions = {
  create: async (event) => {
    const { request } = event;
    const form = await superValidate(request, presenceSchema, { id: 'presenceForm' });

    try {
      await router.createCaller(await createContext(event)).presences.create(form.data);
      return message(form, 'Presta rejointe :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Impossible de rejoindre :(');
    }
  },
  update: async (event) => {
    const { request } = event;
    const form = await superValidate(request, presenceSchema, { id: 'presenceForm' });

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).presences.update(form.data);
      return message(form, 'Presence mise à jour :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }

      if (error.code == 'INTERNAL_SERVER_ERROR') {
        throw error.cause;
      }

      setError(form, '', error.message);
      return message(form, 'Impossible de mettre à jour :(');
    }
  },
  spam: async (event) => {
    const { request } = event;
    const form = await superValidate(request, spamSchema, { id: 'spamForm' });

    const rateLimitAttempt = await spamRatelimit.limit(form.data.gigId);
    if (!rateLimitAttempt.success) {
      const timeRemaining = Math.floor((rateLimitAttempt.reset - new Date().getTime()) / 1000);
      setError(form, '', `Attends ${Math.floor(timeRemaining / 60)} minutes pour spammer à nouveau !`, {
        status: 429
      });
      return message(form, 'Pas si vite !');
    }

    await triggerGigSpam({
      gigId: form.data.gigId,
      gigName: form.data.gigName,
      userId: form.data.userId
    });

    return message(form, 'Fanfaronx spamééx :)');
  },
  join: async (event) => {
    const { request } = event;
    const form = await superValidate(request, joinSchema, { id: 'joinForm' });

    try {
      await router.createCaller(await createContext(event)).memberships.create(form.data);
      return message(form, 'Bienvenue :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Echec :(');
    }
  }
};
