import { gigSchema } from '$lib/components/gigs/gig/gigSchema';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { DateTime } from 'luxon';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const updateSchema = gigSchema.extend({ gigId: z.string() });

const updateDisabledVoiceSchema = z.object({
  bandVoiceId: z.string(),
  enabled: z.boolean(),
  gigId: z.string()
});
const deleteGigVoiceSchema = z.object({ id: z.string(), gigId: z.string() });

export const load: PageServerLoad = async (event) => {
  const { gig, bandVoices, disabledVoices } = await event.parent();
  const date = DateTime.fromJSDate(gig.date);

  const ISODate = date.toISODate();

  // https://github.com/moment/luxon/issues/1419
  if (!ISODate) {
    throw new Error('ISO Date is null');
  }

  const updateForm = () =>
    superValidate(
      {
        ...gig,
        date: ISODate,
        time: date.toLocaleString(DateTime.TIME_24_SIMPLE)
      },
      updateSchema,
      { id: 'updateForm' }
    );
  const updateDisabledVoicePayloads = () =>
    Promise.all(
      bandVoices.map(async (bandVoice) => {
        const form = await superValidate(
          {
            enabled: disabledVoices.every((disabledVoice) => disabledVoice.bandVoiceId != bandVoice.id)
          },
          updateDisabledVoiceSchema,
          { id: bandVoice.id }
        );
        return { bandVoice, form };
      })
    );
  const deleteGigVoiceForm = () => superValidate(deleteGigVoiceSchema, { id: 'deleteGigVoiceForm' });

  return {
    updateForm: updateForm(),
    updateDisabledVoicePayloads: updateDisabledVoicePayloads(),
    deleteGigVoiceForm: deleteGigVoiceForm(),
    index: 104,
    nav: {
      return: `/gig/${gig.id}`,
      label: gig.name
    }
  };
};

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
    };

    try {
      await router.createCaller(await createContext(event)).gigs.update(data);
      return message(form, 'Presta mise à jour :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Presta non valide :(');
    }
  },
  updateDisabledVoice: async (event) => {
    const { request } = event;
    const form = await superValidate(request, updateDisabledVoiceSchema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      const caller = router.createCaller(await createContext(event));
      const { enabled, bandVoiceId, gigId } = form.data;

      if (enabled) {
        await caller.disabledVoices.delete({
          bandVoiceId,
          gigId
        });
      } else {
        await caller.disabledVoices.create({
          bandVoiceId,
          gigId
        });
      }

      return message(form, 'Pupitre mis à jour :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      console.log(error);
      setError(form, '', error.message);
      return message(form, 'Echec :(');
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
      setError(deleteGigVoiceForm, '', error.message);
      return message(deleteGigVoiceForm, 'Echec :(');
    }
  }
};
