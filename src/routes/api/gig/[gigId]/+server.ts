import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { gigId }, locals: { playerId } }) => {

  const gig = await prisma.gig.findUnique({
    where: {
      id: Number(gigId)
    },
    include: {
      organizerRoles: {
        include: {
          player: true
        }
      }
    }
  })

  const isOrganizer = gig && gig.organizerRoles.some(organizerRole => organizerRole.player.id == Number(playerId));

  if (!isOrganizer) {
    return json(null, { status: 404 });
  }

  const deletedGig = await prisma.gig.delete({
    where: { id: Number(gigId) },
  });

  return json(deletedGig);
};