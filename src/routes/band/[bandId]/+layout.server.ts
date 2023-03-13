import prisma from "$lib/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params, locals }) => {
  const { bandId } = params;
  const band = await prisma.band.findUniqueOrThrow({
    where: {
      id: Number(bandId)
    }
  });
  return {
    band
  };
}
