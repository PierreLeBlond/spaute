import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';
import { create } from '$lib/api/gig/create';

export const load: PageServerLoad = async ({ locals }) => {
  const playerId = Number(locals.playerId);

  const bands = prisma.band.findMany({
    where: {
      players: {
        some: {
          id: playerId
        }
      }
    }
  })
  return {
    bands,
    index: 21
  }
}

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const { playerId } = locals;

    const formData = Object.fromEntries(await request.formData());

    return await create(playerId, formData['bandId'] as string, formData);

  }
}