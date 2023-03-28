import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { playerId }, locals: { playerId: localPlayerId } }) => {

  const isOwner = Number(playerId) == Number(localPlayerId);

  if (!isOwner) {
    return json(null, { status: 404 });
  }

  const deletedPlayer = await prisma.player.delete({
    where: { id: Number(playerId) },
  });

  return json(deletedPlayer);
};