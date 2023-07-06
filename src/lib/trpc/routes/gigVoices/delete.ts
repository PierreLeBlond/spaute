import { computePlayability, gigIncludes } from "$lib/hook/computePlayability";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";
import { z } from "zod";

const schema = z.object({ id: z.string(), gigId: z.string() });

export const del = organizerProcedure
  .input(schema)
  .mutation(async ({ input }) => {
    const gigVoice = await prisma.gigVoice.delete({
      where: {
        id_gigId: {
          id: input.id,
          gigId: input.gigId
        },
      }
    });

    // Refetch gig without the deleted gig voice
    const gig = await prisma.gig.findUniqueOrThrow({
      where: {
        id: input.gigId
      },
      ...gigIncludes
    });

    await computePlayability(gig);

    return gigVoice;
  });