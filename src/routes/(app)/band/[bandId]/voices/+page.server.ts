import { computePlayability } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { bandId } = params;
  const instruments = await prisma.instrument.findMany();
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
    instruments
  }
}

export const actions: Actions = {
  default: async ({ params, request }) => {
    const data = await request.formData();
    const instrumentId = data.get('instrumentId');
    const { bandId } = params;

    const response = await prisma.voice.create({
      data: {
        bandId: Number(bandId),
        instrumentId: Number(instrumentId)
      },
      include: {
        band: {
          include: {
            gigs: true
          }
        }
      }
    });
    await Promise.all(response.band.gigs.map(gig => computePlayability(gig.id)));
    return { success: true, response };
  }
}

