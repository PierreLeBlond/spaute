import { computePlayability } from "$lib/hook/computePlayability";
import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const PATCH: RequestHandler = async ({ params, request }) => {
  const { data } = await request.json();
  const { presenceId } = params;
  const response = await prisma.presence.update({
    where: {
      id: Number(presenceId)
    },
    data
  });
  await computePlayability(response.gigId);
  return json(response);
}