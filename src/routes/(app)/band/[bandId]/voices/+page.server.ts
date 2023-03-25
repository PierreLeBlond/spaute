import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { bandId } = params;
  const voices = await prisma.voice.findMany({
    where: {
      bandId: Number(bandId)
    },
    include: {
      instrument: true
    }
  });
  return {
    voices,
    index: 30
  }
}