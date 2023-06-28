import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";
import { z } from "zod";

const schema = z.object({ bandVoiceId: z.string(), gigId: z.string() });

export const del = organizerProcedure
  .input(schema)
  .mutation(({ input }) => prisma.disabledVoice.delete({
    where: {
      gigId_bandVoiceId: {
        bandVoiceId: input.bandVoiceId,
        gigId: input.gigId
      }
    }
  }));