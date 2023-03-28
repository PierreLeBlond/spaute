import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { voiceId }, locals: { playerId } }) => {

  const voice = await prisma.voice.findUnique({
    where: {
      id: Number(voiceId)
    },
    include: {
      band: {
        include: {
          adminRoles: {
            include: {
              player: true
            }
          }
        }
      }
    }
  });

  const isAdmin = voice && voice.band.adminRoles.some(adminRole => adminRole.player.id == Number(playerId));

  if (!isAdmin) {
    return json(null, { status: 404 });
  }


  const response = await prisma.voice.delete({
    where: {
      id: Number(voiceId),
    }
  });

  return json(response);
};