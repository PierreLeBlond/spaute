import { PlayerWhereInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";

export const list = publicProcedure
  .input(PlayerWhereInputSchema)
  .query(({ input }) => prisma.player.findMany({
    where: input,
    orderBy: {
      name: 'asc'
    }
  }));