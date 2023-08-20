import { message, setError, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';

const schema = z.object({
  playerId: z.string(),
  name: z.string().min(1, { message: 'On veut un nom !' }).max(32)
});

export const load = (async ({ parent }) => {
  const { currentPlayer } = await parent();
  const form = () => superValidate({
    name: currentPlayer.name
  }, schema);

  return {
    form: form(),
    index: 1000000,
    tabs: [
      {
        href: '/settings',
        key: '/settings',
        label: 'configuration'
      }
    ],
    title: 'Configuration'
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {

    const { request } = event;
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).players.update(form.data);
      return message(form, 'Nom mis à jour :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Pas mis à jour :(');
    }
  }
};