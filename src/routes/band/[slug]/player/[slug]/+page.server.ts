import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, locals }) => {
  const { slug } = params;
  const player = await prisma.player.findUniqueOrThrow({
    where: {
      id: Number(slug)
    }
  });
  return {
    player
  };
}
