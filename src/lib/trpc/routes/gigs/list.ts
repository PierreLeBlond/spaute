import { GigWhereInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";

export const list = verifiedProcedure
  .input(GigWhereInputSchema)
  .query(({ input }) => prisma.gig.findMany({
    where: input,
    orderBy: {
      date: 'desc'
    },
    include: {
      band: true,
      presences: {
        include: {
          player: true
        }
      }
    }
  }));