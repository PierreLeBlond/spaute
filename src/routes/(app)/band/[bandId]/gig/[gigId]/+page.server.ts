import { join } from '$lib/api/gig/join';
import { update } from '$lib/api/gig/update';
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { bandId, gigId } = params;
  const { playerId } = locals;
  const presence = async () => await prisma.presence.findUnique({
    where: {
      gigId_playerId: {
        gigId: Number(gigId),
        playerId: Number(playerId)
      }
    }
  });
  const presences = async () => await prisma.presence.findMany({
    where: {
      gigId: Number(gigId)
    },
    include: {
      player: {
        include: {
          organizerRoles: {
            where: {
              gigId: Number(gigId)
            }
          }
        }
      }
    }
  });
  const players = async () => await prisma.player.findMany({
    where: {
      AND: {
        bands: {
          some: {
            id: Number(bandId)
          }
        },
        NOT: {
          presences: {
            some: {
              gigId: Number(gigId)
            }
          }
        }
      }
    },
    include: {
      organizerRoles: {
        where: {
          gigId: Number(gigId)
        }
      }
    }
  })
  return {
    presence: presence(),
    presences: presences(),
    players: players(),
    index: 202
  }
}

export const actions: Actions = {
  join: async ({ params, locals, request }) => {
    const { gigId } = params;
    const { playerId } = locals;
    const formData = Object.fromEntries(await request.formData());

    return await join(gigId, playerId, formData);
  },
  update: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    return await update(formData);
  }
}

