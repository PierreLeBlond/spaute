import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const players = await prisma.player.findMany();
  return {
    players
  }
}