import prisma from "$lib/prisma";
import { ownerProcedure } from "$lib/trpc/procedures/ownerProcedure";
import { z } from "zod";

const schema = z.object({ id: z.string(), playerId: z.string() });

export const del = ownerProcedure
  .input(schema)
  .mutation(({ input }) => prisma.role.delete({
    where: {
      id: input.id
    }
  }));