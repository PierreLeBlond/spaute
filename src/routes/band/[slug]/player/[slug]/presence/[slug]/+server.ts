import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const PATCH: RequestHandler = async ({ params, request }) => {
  const { data } = await request.json();
  const { slug } = params;
  const response = await prisma.presence.update({
    where: {
      id: Number(slug)
    },
    data
  });
  return json(response);
}