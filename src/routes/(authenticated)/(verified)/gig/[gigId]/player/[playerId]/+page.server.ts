import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({
  gigId: z.string(),
  playerId: z.string()
});

export const load: PageServerLoad = async (event) => {
  const { gigId, playerId } = event.params;
  const caller = router.createCaller(await createContext(event));

  const player = () =>
    caller.players.read({
      id: playerId
    });
  const presence = () => caller.presences.read({ gigId, playerId });

  const form = () => superValidate(schema);

  const { gig } = await event.parent();

  return {
    form: form(),
    player: player(),
    presence: presence(),
    index: 103,
    nav: {
      return: `/gig/${gig.id}`,
      label: gig.name
    }
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    try {
      await router.createCaller(await createContext(event)).presences.makeOrganizer(form.data);
      return message(form, 'Nouveleau organisateurise :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Echec :(');
    }
  }
};
