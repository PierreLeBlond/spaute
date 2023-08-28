import { gigSchema } from '$lib/components/gigs/gig/gigSchema';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { DateTime } from 'luxon';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const schema = gigSchema.extend({ bandId: z.string() });

export const load: PageServerLoad = async (event) => {
  const { currentPlayer } = await event.parent();

  const memberships = async () =>
    router.createCaller(await createContext(event)).memberships.list({ playerId: currentPlayer.id });
  const form = () => superValidate(schema);

  return {
    form: form(),
    memberships: memberships(),
    index: 101,
    nav: {
      return: '/gigs'
    }
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    const { date, time, bandId, ...rest } = form.data;

    const data = {
      bandId: bandId != '' ? bandId : null,
      date: DateTime.fromISO(`${date}T${time}`).toJSDate(),
      ...rest
    };

    try {
      await router.createCaller(await createContext(event)).gigs.create(data);
      return message(form, 'Presta créée :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Presta non valide :(');
    }
  }
};
