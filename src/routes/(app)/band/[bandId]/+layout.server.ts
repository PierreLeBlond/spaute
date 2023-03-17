import prisma from "$lib/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params }) => {
  const { bandId } = params;
  const band = await prisma.band.findUniqueOrThrow({
    where: {
      id: Number(bandId)
    }
  });
  return {
    band,
    title: band.name,
    backPathname: '/bands',
    backName: 'fanfares'
  };
}
