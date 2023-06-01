import type { Actions, PageServerLoad } from './$types';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { z } from 'zod';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { TRPCError } from '@trpc/server';

const schema = z.object({
  bandId: z.number(),
  playerId: z.number()
});

export const load: PageServerLoad = async (event) => {
  const { bandId, playerId } = event.params;

  const caller = router.createCaller(await createContext(event));

  const player = () => caller.players.read({ id: Number(playerId) });
  const membership = () => caller.memberships.read({ bandId: Number(bandId), playerId: Number(playerId) });

  const form = () => superValidate(schema);

  return {
    form: form(),
    player: player(),
    membership: membership(),
    index: 13
  }
}

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
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Echec :(');
    }
  }
}

