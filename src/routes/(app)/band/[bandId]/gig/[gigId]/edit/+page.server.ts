import { redirect } from '@sveltejs/kit';
import { DateTime } from 'luxon';
import type { Actions, PageServerLoad } from './$types';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { gigSchema } from '$lib/components/gigs/gig/gigSchema';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const updateSchema = gigSchema.extend({ gigId: z.number() });

const deleteSchema = z.object({ gigId: z.number(), name: z.string(), nameCopy: z.string() })

export const load: PageServerLoad = async ({ parent }) => {
  const { gig } = await parent();

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

  return {
    updateForm: updateForm(),
    deleteForm: deleteForm(),
    index: 203
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
  delete: async (event) => {
    const { request } = event;
    const { bandId } = event.params;
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
      message(form, 'Hasta la vista, presta :)');
      throw redirect(303, `/band/${bandId}/gigs`);
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

