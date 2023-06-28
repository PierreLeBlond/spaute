import { PresenceGigIdPlayerIdCompoundUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";

export const makeOrganizer = organizerProcedure
  .input(PresenceGigIdPlayerIdCompoundUniqueInputSchema)
  .mutation(async ({ input }) => prisma.presence.update({
    where: {
      gigId_playerId: input
    },
    data: {
      isOrganizer: true
    }
  }));