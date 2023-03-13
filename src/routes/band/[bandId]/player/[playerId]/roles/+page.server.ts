import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';
import type { Instrument } from "@prisma/client";

export const load: PageServerLoad = async ({ parent }) => {
  const { player } = await parent();
  const instruments = await prisma.instrument.findMany();
  const roles = await prisma.role.findMany({
    where: {
      playerId: player.id
    },
    include: {
      instrument: true
    }
  });
  return {
    instruments,
    roles
  }
}

export const actions: Actions = {
  default: async ({ params, request }) => {
    const { playerId } = params;
    const data = await request.formData();
    const instrumentId = Number(data.get("instrumentId"));
    const playable = !!data.get("playable");
    const response = await prisma.role.create({
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
    return { success: true, response };
  }
}