import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types"

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
    index: 10
  };
}
