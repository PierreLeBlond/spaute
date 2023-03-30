import prisma from "$lib/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params, locals }) => {
  const { playerId } = locals;
  const { gigId } = params;
  const gig = async () => await prisma.gig.findUniqueOrThrow({
    where: {
      id: Number(gigId)
    },
    include: {
      band: true
    }
  });
  const organizerRole = async () => await prisma.organizerRole.findUnique({
    where: {
      gigId_playerId: {
        gigId: Number(gigId),
        playerId: Number(playerId)
      }
    }
  });

  return {
    gig: gig(),
    organizerRole: organizerRole()
  };
}
