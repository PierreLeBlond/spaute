import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const { gigId } = params;
  const gig = await prisma.gig.findUniqueOrThrow({
    where: {
      id: Number(gigId)
    },
    include: {
      band: true
    }
  });
  return {
    gig
  };
}
