import prisma from "$lib/prisma";
import { adminProcedure } from "$lib/trpc/procedures/adminProcedure"
import { z } from "zod"

const schema = z.object({ id: z.string(), bandId: z.string() });

export const del = adminProcedure
  .input(schema)
  .mutation(({ input }) => prisma.bandVoice.delete({
    where: {
      id_bandId: {
        id: input.id,
        bandId: input.bandId
      }
    }
  }));