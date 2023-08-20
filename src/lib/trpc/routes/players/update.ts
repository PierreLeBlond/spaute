import prisma from "$lib/prisma";
import { ownerProcedure } from "$lib/trpc/procedures/ownerProcedure";
import { z } from "zod";

const schema = z.object({ name: z.string(), playerId: z.string() }).strict();

export const update = ownerProcedure
  .input(schema)
  .mutation(async ({ input }) => prisma.player.update({
    where: {
      id: input.playerId
    },
    data: {
      name: input.name
    }
  }));