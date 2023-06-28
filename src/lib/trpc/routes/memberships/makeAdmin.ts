import { MembershipBandIdPlayerIdCompoundUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { adminProcedure } from "$lib/trpc/procedures/adminProcedure";

export const makeAdmin = adminProcedure
  .input(MembershipBandIdPlayerIdCompoundUniqueInputSchema)
  .mutation(({ input }) => prisma.membership.update({
    where: {
      bandId_playerId: input
    },
    data: {
      isAdmin: true
    }
  }));