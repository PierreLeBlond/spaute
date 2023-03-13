import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const players = await prisma.player.findMany();
  return {
    players
  }
}

export const actions: Actions = {
  default: async ({ params, request }) => {
    const { bandId } = params;
    const data = await request.formData();
    const name = data.get("name") as string;
    const response = await prisma.player.create({
      data: {
        band: {
          connect: {
            id: Number(bandId)
          }
        },
        name
      }
    });
    return { success: true, response };
  }
}