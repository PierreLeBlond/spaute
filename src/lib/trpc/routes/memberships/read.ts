import { MembershipBandIdPlayerIdCompoundUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";

export const read = verifiedProcedure
  .input(MembershipBandIdPlayerIdCompoundUniqueInputSchema)
  .query(({ input }) =>
    prisma.membership.findUnique({
      where: {
        bandId_playerId: input
      },
      include: {
        band: true,
        player: true
      }
    }));