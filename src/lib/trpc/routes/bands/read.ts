import { BandWhereUniqueInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';

export const read = verifiedProcedure.input(BandWhereUniqueInputSchema).query(({ input }) =>
  prisma.band.findUniqueOrThrow({
    where: input,
    include: {
      memberships: {
        include: {
          player: true
        }
      }
    }
  })
);
