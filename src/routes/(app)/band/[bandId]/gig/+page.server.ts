import type { Actions, PageServerLoad } from './$types';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { createContext } from '$lib/trpc/context';
import { TRPCError } from '@trpc/server';
import { router } from '$lib/trpc/router';
import { DateTime } from 'luxon';
import { gigSchema } from '$lib/components/gigs/gig/gigSchema';
import { z } from 'zod';

const schema = gigSchema.extend({ bandId: z.number() });

export const load: PageServerLoad = async () => {
  const form = await superValidate(schema);

  return {
    form,
    index: 201
  }
}

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    const { date, time, ...rest } = form.data;

    const data = {
      date: DateTime.fromISO(`${date}T${time}`).toJSDate(),
      ...rest
    }

    try {
      await router.createCaller(await createContext(event)).gigs.create(data);
      return message(form, 'Presta créée :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Presta non valide :(');
    }
  }
}