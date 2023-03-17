import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { bandId } }) => {
  const deletedBand = await prisma.band.delete({
    where: { id: Number(bandId) },
  });

  return json(deletedBand);
};