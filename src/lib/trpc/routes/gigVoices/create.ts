import { GigVoiceSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";

const schema = GigVoiceSchema.omit({ id: true }).strict();

export const create = organizerProcedure
  .input(schema)
  .mutation(({ input }) => prisma.gigVoice.create({
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
    }
  }));