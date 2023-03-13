import prisma from "$lib/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params }) => {
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
