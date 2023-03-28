import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { bandId }, locals: { playerId } }) => {

  const band = await prisma.band.findUnique({
    where: {
      id: Number(bandId)
    },
    include: {
      adminRoles: {
        include: {
          player: true
        }
      }
    }
  });

  const isAdmin = band && band.adminRoles.some(adminRole => adminRole.player.id == Number(playerId));

  if (!isAdmin) {
    return json(null, { status: 404 });
  }

  const deletedBand = await prisma.band.delete({
    where: { id: Number(bandId) },
  });

  return json(deletedBand);
};