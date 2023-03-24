import { join } from '$lib/api/gig/join';
import { update } from '$lib/api/gig/update';
import { PresenceCreateInputSchema, PresenceUpdateArgsSchema } from '$lib/generated/zod';
import { computePlayability } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
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
    backName: 'prestas',
    title: gig.name
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

