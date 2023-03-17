import { computePlayability } from "$lib/hook/computePlayability";
import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { roleId } }) => {
  const response = await prisma.role.delete({
    where: { id: Number(roleId) },
    include: {
      player: {
        include: {
          presences: true
        }
      }
    }
  });
  await Promise.all(response.player.presences.map(presence => computePlayability(presence.gigId)));
  return json(response);
};