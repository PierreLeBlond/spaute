import { FormationWhereInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';

export const list = verifiedProcedure.input(FormationWhereInputSchema).query(async ({ input }) =>
  prisma.formation.findMany({
    where: input,
    include: {
      formationUndefinedVoicePresences: true,
      formationVoices: true
    }
  })
);
