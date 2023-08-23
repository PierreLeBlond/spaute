import { PresenceWhereInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';

export const list = verifiedProcedure.input(PresenceWhereInputSchema).query(({ input }) =>
  prisma.presence.findMany({
    where: input,
    include: {
      gig: true,
      player: true
    },
    orderBy: {
      player: {
        name: 'asc'
      }
    }
  })
);
