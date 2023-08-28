import { PresenceGigIdPlayerIdCompoundUniqueInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';

export const read = verifiedProcedure.input(PresenceGigIdPlayerIdCompoundUniqueInputSchema).query(({ input }) =>
  prisma.presence.findUnique({
    where: {
      gigId_playerId: input
    }
  })
);
