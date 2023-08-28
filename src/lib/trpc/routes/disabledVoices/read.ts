import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';
import { z } from 'zod';

const schema = z.object({ bandVoiceId: z.string(), gigId: z.string() });

export const read = verifiedProcedure.input(schema).query(({ input }) =>
  prisma.disabledVoice.findUnique({
    where: {
      gigId_bandVoiceId: {
        bandVoiceId: input.bandVoiceId,
        gigId: input.gigId
      }
    }
  })
);
