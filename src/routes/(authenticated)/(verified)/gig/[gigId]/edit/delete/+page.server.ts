import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { redirect } from 'sveltekit-flash-message/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({ gigId: z.string(), name: z.string(), nameCopy: z.string() });

export const load: PageServerLoad = async (event) => {
  const form = () => superValidate(schema);

  const { gig } = await event.parent();

  return {
    form: form(),
    index: 106,
    nav: {
      return: `/gig/${gig.id}/edit`,
      label: gig.name
    }
  };
};

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    if (form.data.name != form.data.nameCopy) {
      setError(form, 'nameCopy', 'le nom de correspond pas');
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
      setError(form, '', error.message);
      return message(form, 'Suppression impossible :(');
    }
  }
};
