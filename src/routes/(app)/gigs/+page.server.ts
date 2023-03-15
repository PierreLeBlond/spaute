import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const playerId = Number(locals.playerId);
  const presences = await prisma.presence.findMany({
    where: {
      playerId: playerId
    },
    include: {
      gig: {
        include: {
          band: true,
        }
      }
    }
  });

  const newGigs = await prisma.gig.findMany({
    where: {
      AND: {
        NOT: {
          presences: {
            some: {
              playerId: playerId
            }
          }
        },
        band: {
          players: {
            some: {
              id: playerId
            }
          }
        }
      }
    },
    include: {
      band: true
    }
  });

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
    presences,
    newGigs,
    bands
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const bandId = Number(data.get("bandId"));
    const name = data.get("name") as string;
    const location = data.get("location") as string;
    const date = data.get("date") as string;
    const response = await prisma.gig.create({
      data: {
        band: {
          connect: {
            id: bandId
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