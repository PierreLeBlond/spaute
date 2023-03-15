import { computePlayability } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, parent }) => {
  const { playerId } = locals;
  const { gig } = await parent();
  const presence = await prisma.presence.findUnique({
    where: {
      gigId_playerId: {
        gigId: gig.id,
        playerId: Number(playerId)
      }
    }
  });
  const availablePlayers = await prisma.player.findMany({
    where: {
      presences: {
        some: {
          gigId: gig.id,
          value: true
        }
      }
    }
  });
  const unavailablePlayers = await prisma.player.findMany({
    where: {
      presences: {
        some: {
          gigId: gig.id,
          value: false
        }
      }
    }
  })
  const remainingPlayers = await prisma.player.findMany({
    where: {
      NOT: {
        presences: {
          some: {
            gigId: gig.id
          }
        }
      }
    }
  })
  return {
    availablePlayers,
    unavailablePlayers,
    remainingPlayers,
    presence,
    backPathname: '../gigs',
    title: gig.name
  }
}

export const actions: Actions = {
  join: async ({ params, locals }) => {
    const { gigId } = params;
    const { playerId } = locals;

    const response = await prisma.presence.create({
      data: {
        gigId: Number(gigId),
        playerId: Number(playerId),
        value: true
      }
    });

    await computePlayability(Number(gigId));

    return { success: true, response };
  },
  update: async ({ request }) => {
    const data = await request.formData();
    const presence = data.get('presence') == 'true';
    const presenceId = Number(data.get('presenceId'));

    const response = await prisma.presence.update({
      where: {
        id: presenceId
      },
      data: {
        value: presence
      }
    });

    await computePlayability(response.gigId);
    return { success: true, response };
  }
}

