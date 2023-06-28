import { BandVoiceSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { adminProcedure } from "$lib/trpc/procedures/adminProcedure";

const schema = BandVoiceSchema.omit({ id: true }).strict();

export const create = adminProcedure
  .input(schema)
  .mutation(({ input }) => prisma.bandVoice.create({
    data: {
      band: {
        connect: {
          id: input.bandId
        }
      },
      instrument: {
        connect: {
          id: input.instrumentId
        }
      }
    }
  }));