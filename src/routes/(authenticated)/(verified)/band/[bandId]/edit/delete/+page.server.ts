import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { TRPCError } from '@trpc/server';
import { redirect } from 'sveltekit-flash-message/server';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const schema = z.object({ bandId: z.string(), name: z.string(), nameCopy: z.string() });

export const load: PageServerLoad = async ({ parent }) => {
  const form = () => superValidate(schema);
  const { band } = await parent();
  return {
    form: form(),
    index: 17,
    nav: {
      return: `/band/${band.id}/edit`,
      label: band.name
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
      await router.createCaller(await createContext(event)).bands.delete({
        bandId: form.data.bandId
      });
      throw redirect(302, `/bands`, 'A plus tard, fanfare :)', event);
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(form, '', error.message);
      return message(form, 'Suppression impossible :(');
    }
  }
};
