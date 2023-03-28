import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { roleId }, locals: { playerId } }) => {

  const role = await prisma.role.findUnique({
    where: {
      id: Number(roleId)
    },
    include: {
      player: true
    }
  });

  const isOwner = role && role.player.id == Number(playerId);

  if (!isOwner) {
    return json(null, { status: 404 });
  }

  const deletedRole = await prisma.role.delete({
    where: { id: Number(roleId) },
  });
  return json(deletedRole);
};