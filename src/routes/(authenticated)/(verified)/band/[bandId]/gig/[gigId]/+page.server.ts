import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Actions, PageServerLoad } from './$types';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { TRPCError } from '@trpc/server';
import { presenceSchema, type PresenceSchema } from '$lib/components/gigs/presence/presenceSchema';
import type { Message } from '$lib/components/superforms/Message';

export const load: PageServerLoad = async ({ parent }) => {
  const { currentPresence } = await parent();
  const form = await superValidate<PresenceSchema, Message>({
    value: currentPresence?.value
  }, presenceSchema);

  return {
    form,
    index: 202
  }
}

export const actions: Actions = {
  create: async (event) => {
    const { request } = event;
    const form = await superValidate(request, presenceSchema);

    try {
      await router.createCaller(await createContext(event)).presences.create(form.data);
      return message(form, 'Presta rejointe :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Impossible de rejoindre :(');
    }
  },
  update: async (event) => {
    const { request } = event;
    const form = await superValidate(request, presenceSchema);

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
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Impossible de mettre à jour :(');
    }
  }
}

