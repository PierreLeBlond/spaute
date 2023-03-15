import { computePlayability } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
  const { playerId } = await parent();
  const instruments = await prisma.instrument.findMany();
  const roles = await prisma.role.findMany({
    where: {
      playerId: Number(playerId)
    },
    include: {
      instrument: true
    },
    orderBy: {
      id: 'desc'
    }
  });
  return {
    instruments,
    roles
  }
}

export const actions: Actions = {
  add: async ({ locals, request }) => {
    const { playerId } = locals;
    const data = await request.formData();
    const instrumentId = Number(data.get("instrumentId"));
    const playable = !!data.get("playable");
    const response = await prisma.role.create({
      include: {
        player: {
          include: {
            presences: true
          }
        }
      },
      data: {
        player: {
          connect: {
            id: Number(playerId)
          }
        },
        instrument: {
          connect: {
            id: instrumentId
          }
        },
        playable
      }
    });
    await Promise.all(response.player.presences.map(presence => computePlayability(presence.gigId)));
    return { success: true, response };
  },
  update: async ({ request }) => {
    const data = await request.formData();
    const playable = !!data.get('playable');
    const roleId = Number(data.get('roleId'));

    const response = await prisma.role.update({
      where: {
        id: Number(roleId)
      },
      include: {
        player: {
          include: {
            presences: true
          }
        }
      },
      data: {
        playable
      }
    });
    await Promise.all(response.player.presences.map(presence => computePlayability(presence.gigId)));
    return { success: true, response };
  }
}