import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const PATCH: RequestHandler = async ({ params, request }) => {
  const { data } = await request.json();
  const { roleId } = params;
  const response = await prisma.role.update({
    where: {
      id: Number(roleId)
    },
    data
  });
  return json(response);
}