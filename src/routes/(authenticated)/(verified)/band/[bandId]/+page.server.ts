import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
  bandId: z.string(),
  playerId: z.string()
});

export const load: PageServerLoad = async (event) => {
  const form = () => superValidate(schema);

  const { band, currentMembership } = await event.parent();

  return {
    form: form(),
    index: 13,
    nav: {
      return: `/bands`,
      label: band.name,
      edit: currentMembership?.isAdmin ? `/band/${band.id}/edit` : null
    }
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

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
