import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, locals }) => {
  const { slug } = params;
  const band = await prisma.band.findUniqueOrThrow({
    where: {
      id: Number(slug)
    },
    include: {
      players: true,
      gigs: true
    }
  });
  return {
    band
  };
}
