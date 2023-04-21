import type { Actions, PageServerLoad } from './$types';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import { z } from 'zod';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { TRPCError } from '@trpc/server';

const updateSchema = z.object({
  playerId: z.number(),
  ids: z.array(z.number()),
  playables: z.array(z.boolean())
});

const deleteSchema = z.object({
  playerId: z.number(),
  id: z.number()
})

export const load: PageServerLoad = async (event) => {
  const { playerId } = event.locals;
  const caller = router.createCaller(await createContext(event));
  const roles = await caller.roles.list({ playerId: Number(playerId) });
  const updateForm = () => superValidate({
    playables: roles.map(role => role.playable)
  }, updateSchema, { id: 'updateForm' })
  const deleteForm = () => superValidate(deleteSchema);

  return {
    updateForm: updateForm(),
    deleteForm: deleteForm(),
    roles,
    index: 30
  }
}

export const actions: Actions = {
  update: async (event) => {
    const { request } = event;

    const form = await superValidate(request, updateSchema, { id: 'updateForm' });

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      const caller = router.createCaller(await createContext(event));
      await Promise.all(
        form.data.playables.map((playable, index) => caller.roles.update({
          id: form.data.ids[index] as number,
          playable,
          playerId: form.data.playerId
        }))
      );
      return message(form, 'Pupitre mise à jour :)');
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
  },
  delete: async (event) => {
    const { request } = event;
    const form = await superValidate(request, deleteSchema, { id: 'deleteForm' });

    try {
      await router.createCaller(await createContext(event)).roles.delete(form.data);
      return message(form, 'Bye bye le pupitre :)');
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