import prisma from "$lib/prisma";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const instruments = await prisma.instrument.findMany({
    orderBy: {
      name: 'asc'
    }
  });
  return {
    instruments,
    index: 10
  }
}


export const actions: Actions = {
  delete: async ({ url }) => {
    const instrumentId = url.searchParams.get('instrumentId');

    const response = await prisma.instrument.delete({
      where: { id: Number(instrumentId) }
    });

    return { success: true, message: 'Instrument supprimé :)', response };
  }
}