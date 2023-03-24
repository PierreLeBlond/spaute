import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { voiceId } }) => {
  const response = await prisma.voice.delete({
    where: { id: Number(voiceId) }
  });

  return json(response);
};