import prisma from '$lib/prisma';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
  const { playerId } = locals;

  if (!playerId) {
    return {};
  }

  const player = await prisma.player.findUniqueOrThrow({
    where: {
      id: Number(playerId)
    }
  });

  return {
    playerId,
    playerName: player.name,
    title: player.name,
    href: url.href
  }
}