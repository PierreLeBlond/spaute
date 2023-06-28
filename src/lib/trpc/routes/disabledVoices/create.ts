import { DisabledVoiceSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";

const schema = DisabledVoiceSchema.omit({ id: true }).strict();

export const create = organizerProcedure
  .input(schema)
  .mutation(({ input }) => prisma.disabledVoice.create({
    data: {
      gig: {
        connect: {
          id: input.gigId
        }
      },
      bandVoice: {
        connect: {
          id: input.bandVoiceId
        }
      }
    }
  }));