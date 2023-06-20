import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { TRPCError } from '@trpc/server';
import { redirect } from 'sveltekit-flash-message/server'

const deleteBandVoiceSchema = z.object({
  bandId: z.number(),
  id: z.number()
});

const deleteSchema = z.object({ bandId: z.number(), name: z.string(), nameCopy: z.string() });

export const load: PageServerLoad = async (event) => {
  const { bandId } = event.params;
  const caller = router.createCaller(await createContext(event));
  const bandVoices = () => caller.bandVoices.list({ bandId: Number(bandId) });
  const deleteBandVoiceForm = () => superValidate(deleteBandVoiceSchema, { id: 'deleteBandVoiceForm' });
  const deleteForm = () => superValidate(deleteSchema, { id: 'deleteForm' });
  return {
    deleteBandVoiceForm: deleteBandVoiceForm(),
    deleteForm: deleteForm(),
    bandVoices: bandVoices(),
    index: 15
  }
}

export const actions: Actions = {
  deleteBandVoice: async (event) => {
    const { request } = event;
    const deleteBandVoiceForm = await superValidate(request, deleteBandVoiceSchema, { id: 'deleteBandVoiceForm' });

    try {
      await router.createCaller(await createContext(event)).bandVoices.delete(deleteBandVoiceForm.data);
      return message(deleteBandVoiceForm, 'Bye bye le pupitre :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        deleteBandVoiceForm,
        "",
        error.message
      );
      return message(deleteBandVoiceForm, 'Echec :(');
    }
  },
  delete: async (event) => {
    const { request } = event;
    const form = await superValidate(request, deleteSchema, { id: 'deleteForm' });

    if (form.data.name != form.data.nameCopy) {
      setError(form, 'nameCopy', 'le nom de correspond pas');
    }

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).bands.delete({
        bandId: form.data.bandId
      });
      throw redirect(302, `/bands`, 'A plus tard, fanfare :)', event);
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Suppression impossible :(');
    }

  }
}