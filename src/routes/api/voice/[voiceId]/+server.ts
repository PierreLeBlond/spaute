import { computePlayability } from "$lib/hook/computePlayability";
import prisma from "$lib/prisma";
import { json, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params: { voiceId } }) => {
  const response = await prisma.voice.delete({
    where: { id: Number(voiceId) },
    include: {
      band: {
        include: {
          gigs: true
        }
      }
    }
  });
  await Promise.all(response.band.gigs.map(gig => computePlayability(gig.id)));

  return json(response);
};