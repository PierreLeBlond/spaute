import { create } from '$lib/api/gig/create';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    index: 21
  }
}

export const actions: Actions = {
  default: async ({ params, request, locals }) => {
    const { playerId } = locals;
    const { bandId } = params;

    const formData = Object.fromEntries(await request.formData());

    return await create(playerId, bandId, formData);
  }
}