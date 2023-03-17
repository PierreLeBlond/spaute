import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { gigId } }) => {
  const deletedGig = await prisma.gig.delete({
    where: { id: Number(gigId) },
  });

  return json(deletedGig);
};