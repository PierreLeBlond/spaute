import prisma from "$lib/prisma";
import type { Actions, PageServerLoad } from "./$types"

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
    bands
  };
}

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const { playerId } = locals;

    const response = await prisma.band.create({
      data: {
        name,
        players: {
          connect: [{
            id: Number(playerId)
          }]
        }
      }
    });

    return { success: true, response };
  }
}

