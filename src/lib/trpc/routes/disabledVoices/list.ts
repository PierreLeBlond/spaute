import { DisabledVoiceWhereInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';

export const list = verifiedProcedure.input(DisabledVoiceWhereInputSchema).query(({ input }) =>
  prisma.disabledVoice.findMany({
    where: input
  })
);
