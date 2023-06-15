import { FormationWhereInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { verifiedProcedure } from "../procedures/verifiedProcedure";

export const formations = t.router({
  list: verifiedProcedure.input(FormationWhereInputSchema).query(async ({ input }) => prisma.formation.findMany({
    where: input,
    include: {
      formationUndefinedVoicePresences: true,
      formationVoices: true
    }
  })),
})