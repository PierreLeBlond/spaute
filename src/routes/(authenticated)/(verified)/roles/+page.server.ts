import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const updateSchema = z.object({
  playerId: z.string(),
  id: z.string(),
  playable: z.boolean()
});

const deleteSchema = z.object({
  playerId: z.string(),
  id: z.string()
});

export const load: PageServerLoad = async (event) => {
  const { currentPlayer } = await event.parent();
  const caller = router.createCaller(await createContext(event));
  const roles = await caller.roles.list({ playerId: currentPlayer.id });
  const updatePayloads = () =>
    Promise.all(
      roles.map(async (role) => {
        const form = await superValidate(
          {
            playable: role.playable
          },
          updateSchema,
          { id: role.id }
        );
        return { role, form };
      })
    );
  const deleteForm = () => superValidate(deleteSchema);

  return {
    updatePayloads: updatePayloads(),
    deleteForm: deleteForm(),
    roles,
    index: 1000
  };
};

export const actions: Actions = {
  update: async (event) => {
    const { request } = event;

    const form = await superValidate(request, updateSchema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      const caller = router.createCaller(await createContext(event));
      await caller.roles.update(form.data);
      return message(form, 'Pupitre mise à jour :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Impossible de mettre à jour :(');
    }
  },
  delete: async (event) => {
    const { request } = event;
    const form = await superValidate(request, deleteSchema);

    try {
      await router.createCaller(await createContext(event)).roles.delete(form.data);
      return message(form, 'Bye bye le pupitre :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Echec :(');
    }
  }
};
