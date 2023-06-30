import { computePlayability, gigIncludes } from "$lib/hook/computePlayability";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";
import { z } from "zod";

const schema = z.object({ bandVoiceId: z.string(), gigId: z.string() });

export const del = organizerProcedure
  .input(schema)
  .mutation(async ({ input }) => {
    const disabledVoice = await prisma.disabledVoice.delete({
      where: {
        gigId_bandVoiceId: {
          bandVoiceId: input.bandVoiceId,
          gigId: input.gigId
        }
      }
    });

    // Refetch gig without the deleted disabled voice
    const gig = await prisma.gig.findUniqueOrThrow({
      where: {
        id: input.gigId
      },
      ...gigIncludes
    });

    await computePlayability(gig);

    return disabledVoice;

  });