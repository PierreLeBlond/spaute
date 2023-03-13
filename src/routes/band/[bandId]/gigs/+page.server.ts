import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const gigs = await prisma.gig.findMany();
  return {
    gigs
  }
}

export const actions: Actions = {
  default: async ({ params, request }) => {
    const { bandId } = params;
    const data = await request.formData();
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