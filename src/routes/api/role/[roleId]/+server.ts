import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { roleId } }) => {
  const response = await prisma.role.delete({
    where: { id: Number(roleId) },
  });
  return json(response);
};