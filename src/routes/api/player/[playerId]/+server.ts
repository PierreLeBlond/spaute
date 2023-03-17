import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { playerId } }) => {
  const deletedPlayer = await prisma.player.delete({
    where: { id: Number(playerId) },
  });

  return json(deletedPlayer);
};