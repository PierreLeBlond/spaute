import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";
import { z } from "zod";

const schema = z.object({ id: z.string(), gigId: z.string() });

export const del = organizerProcedure
  .input(schema)
  .mutation(({ input }) => prisma.gigVoice.delete({
    where: {
      id_gigId: {
        id: input.id,
        gigId: input.gigId
      }
    }
  }));