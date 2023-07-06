import { GigVoiceSchema } from "$lib/generated/zod";
import { computePlayability, gigIncludes } from "$lib/hook/computePlayability";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";

const schema = GigVoiceSchema.omit({ id: true }).strict();

export const create = organizerProcedure
  .input(schema)
  .mutation(async ({ input }) => {
    const gigVoice = await prisma.gigVoice.create({
      data: {
        gig: {
          connect: {
            id: input.gigId
          }
        },
        instrument: {
          connect: {
            id: input.instrumentId
          }
        }
      },
      include: {
        gig: gigIncludes
      }
    });

    await computePlayability(gigVoice.gig);

    return gigVoice;
  });