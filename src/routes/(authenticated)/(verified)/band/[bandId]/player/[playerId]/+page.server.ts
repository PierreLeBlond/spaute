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
  const { bandId, playerId } = event.params;

  const caller = router.createCaller(await createContext(event));

  const player = () => caller.players.read({ id: playerId });
  const membership = () => caller.memberships.read({ bandId: bandId, playerId: playerId });

  const form = () => superValidate(schema);

  const { band } = await event.parent();

  return {
    form: form(),
    player: player(),
    membership: membership(),
    index: 14,
    nav: {
      return: `/band/${band.id}`,
      label: band.name
    }
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    try {
      await router.createCaller(await createContext(event)).memberships.makeAdmin(form.data);
      return message(form, 'Nouveleau admin :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Echec :(');
    }
  }
};
