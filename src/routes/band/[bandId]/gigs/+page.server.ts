import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const gigs = await prisma.gig.findMany();
  return {
    gigs
  }
}