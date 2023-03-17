import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
  const playerId = Number(locals.playerId);
  const { bandId } = params;

  const presences = await prisma.presence.findMany({
    where: {
      AND: {
        playerId: playerId,
        gig: {
          bandId: Number(bandId)
        }
      }
    },
    include: {
      gig: {
        include: {
          band: true
        }
      }
    }
  });

  const newGigs = await prisma.gig.findMany({
    where: {
      AND: {
        bandId: Number(bandId),
        NOT: {
          presences: {
            some: {
              playerId: playerId
            }
          }
        }
      }
    },
    include: {
      band: true
    }
  });

  return {
    presences,
    newGigs
  }
}

export const actions: Actions = {
  default: async ({ params, request }) => {
    const data = await request.formData();
    const { bandId } = params;
    const name = data.get("name") as string;
    const location = data.get("location") as string;
    const date = data.get("date") as string;
    const response = await prisma.gig.create({
      data: {
        band: {
          connect: {
            id: Number(bandId)
          }
        },
        name,
        location,
        date: new Date(date)
      }
    });
    return { success: true, response };
  }
}