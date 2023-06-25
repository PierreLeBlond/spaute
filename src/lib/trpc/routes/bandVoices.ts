import { BandVoiceSchema, BandVoiceWhereInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { verifiedProcedure } from "../procedures/verifiedProcedure";
import { adminProcedure } from "../procedures/adminProcedure";
import { z } from "zod";

export const bandVoices = t.router({
  list: verifiedProcedure.input(BandVoiceWhereInputSchema).query(({ input }) => prisma.bandVoice.findMany({
    where: input,
    orderBy: {
      instrument: {
        name: 'asc'
      }
    },
    include: {
      instrument: true
    }
  })),
  delete: adminProcedure.input(z.object({ id: z.string(), bandId: z.string() })).mutation(({ input }) => prisma.bandVoice.delete({
    where: {
      id_bandId: {
        id: input.id,
        bandId: input.bandId
      }
    }
  })),
  create: adminProcedure.input(
    BandVoiceSchema.omit({ id: true }).strict()
  ).mutation(({ input: { bandId, instrumentId } }) => prisma.bandVoice.create({
    data: {
      band: {
        connect: {
          id: bandId
        }
      },
      instrument: {
        connect: {
          id: instrumentId
        }
      }
    }
  }))
})