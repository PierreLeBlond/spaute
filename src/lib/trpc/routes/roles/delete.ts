import { computePlayabilities, gigIncludes } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma';
import { ownerProcedure } from '$lib/trpc/procedures/ownerProcedure';
import { z } from 'zod';

const schema = z.object({ id: z.string(), playerId: z.string() });

export const del = ownerProcedure.input(schema).mutation(async ({ input }) => {
  const role = await prisma.role.delete({
    where: {
      id: input.id
    }
  });

  // Refetch presences without the deleted role
  const presences = await prisma.presence.findMany({
    where: {
      playerId: role.playerId
    },
    include: {
      gig: gigIncludes
    }
  });

  await computePlayabilities(presences.map((presence) => presence.gig));

  return role;
});
