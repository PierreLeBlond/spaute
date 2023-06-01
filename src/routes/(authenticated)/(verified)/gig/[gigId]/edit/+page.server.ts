import { DateTime } from 'luxon';
import type { Actions, PageServerLoad } from './$types';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { gigSchema } from '$lib/components/gigs/gig/gigSchema';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { redirect } from 'sveltekit-flash-message/server'

const updateSchema = gigSchema.extend({ gigId: z.number() });

const deleteSchema = z.object({ gigId: z.number(), name: z.string(), nameCopy: z.string() });
const updateDisabledVoiceSchema = z.object({ bandVoiceIds: z.array(z.number()), enableds: z.array(z.boolean()), gigId: z.number() });
const deleteGigVoiceSchema = z.object({ id: z.number(), gigId: z.number() });

export const load: PageServerLoad = async (event) => {
  const { gig } = await event.parent();
  const caller = router.createCaller(await createContext(event));
  const bandVoices = gig.band ? await caller.bandVoices.list({ bandId: gig.band.id }) : [];
  const disabledVoices = await caller.disabledVoices.list({ gigId: gig.id });
  const gigVoices = () => caller.gigVoices.list({ gigId: gig.id });

  const date = DateTime.fromJSDate(gig.date);

  const ISODate = date.toISODate();

  // https://github.com/moment/luxon/issues/1419
  if (!ISODate) {
    throw new Error('ISO Date is null');
  }

  const updateForm = () => superValidate({
    ...gig,
    date: ISODate,
    time: date.toLocaleString(DateTime.TIME_24_SIMPLE)
  }, updateSchema, { id: 'updateForm' });
  const deleteForm = () => superValidate(deleteSchema, { id: 'deleteForm' });
  const updateDisabledVoiceForm = () => superValidate({
    enableds: bandVoices.map(bandVoice => disabledVoices.every(disabledVoice => disabledVoice.bandVoiceId != bandVoice.id))
  }, updateDisabledVoiceSchema, { id: 'updateDisabledVoiceForm' });
  const deleteGigVoiceForm = () => superValidate(deleteGigVoiceSchema, { id: 'deleteGigVoiceForm' });

  return {
    updateForm: updateForm(),
    deleteForm: deleteForm(),
    updateDisabledVoiceForm: updateDisabledVoiceForm(),
    deleteGigVoiceForm: deleteGigVoiceForm(),
    bandVoices,
    gigVoices: gigVoices(),
    index: 104
  }
}

export const actions: Actions = {
  update: async (event) => {
    const { request } = event;
    const form = await superValidate(request, updateSchema, { id: 'updateForm' });

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    const { date, time, ...rest } = form.data;

    const data = {
      date: DateTime.fromISO(`${date}T${time}`).toJSDate(),
      ...rest
    }

    try {
      await router.createCaller(await createContext(event)).gigs.update(data);
      return message(form, 'Presta mise à jour :)');
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
  },
  updateDisabledVoice: async (event) => {
    const { request } = event;
    const updateDisabledVoiceForm = await superValidate(request, updateDisabledVoiceSchema, { id: 'updateDisabledVoiceForm' });

    try {
      const caller = router.createCaller(await createContext(event));
      const { gigId } = updateDisabledVoiceForm.data;
      await Promise.all(
        updateDisabledVoiceForm.data.enableds.map(async (enabled, index) => {
          const bandVoiceId = updateDisabledVoiceForm.data.bandVoiceIds[index] as number;

          const disabledVoice = await caller.disabledVoices.read({ bandVoiceId, gigId });

          if ((disabledVoice && !enabled) || (!disabledVoice && enabled)) {
            return;
          }

          if (enabled) {
            await caller.disabledVoices.delete({ bandVoiceId, gigId })
          } else {
            await caller.disabledVoices.create({ bandVoiceId, gigId })
          }
        })
      )
      return message(updateDisabledVoiceForm, 'Pupitres mis à jour :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        updateDisabledVoiceForm,
        null,
        error.message
      );
      return message(updateDisabledVoiceForm, 'Echec :(');
    }
  },
  deleteGigVoice: async (event) => {
    const { request } = event;
    const deleteGigVoiceForm = await superValidate(request, deleteGigVoiceSchema, { id: 'deleteGigVoiceForm' });

    try {
      await router.createCaller(await createContext(event)).gigVoices.delete(deleteGigVoiceForm.data);
      return message(deleteGigVoiceForm, 'Bye bye le pupitre :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        deleteGigVoiceForm,
        null,
        error.message
      );
      return message(deleteGigVoiceForm, 'Echec :(');
    }
  },
  delete: async (event) => {
    const { request } = event;
    const form = await superValidate(request, deleteSchema, { id: 'deleteForm' });

    if (form.data.name != form.data.nameCopy) {
      setError(form, 'nameCopy', 'titre incorrect');
    }

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).gigs.delete({
        gigId: form.data.gigId
      });
      throw redirect(302, `/gigs`, 'Hasta la vista, presta :)', event);
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Suppression impossible :(');
    }

  }
}

