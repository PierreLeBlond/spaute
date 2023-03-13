import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  const gig = await prisma.gig.findUniqueOrThrow({
    where: {
      id: Number(slug)
    }
  });
  return {
    gig
  };
}
