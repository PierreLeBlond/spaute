import { VoiceSchema, VoiceWhereInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { verifiedProcedure } from "../procedures/verifiedProcedure";
import { adminProcedure } from "../procedures/adminProcedure";
import { z } from "zod";

export const voices = t.router({
  list: verifiedProcedure.input(VoiceWhereInputSchema).query(({ input }) => prisma.voice.findMany({
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
  delete: adminProcedure.input(z.object({ id: z.number(), bandId: z.number() })).mutation(({ input }) => prisma.voice.delete({
    where: {
      id: input.id
    }
  })),
  create: adminProcedure.input(
    VoiceSchema.omit({ id: true }).strict()
  ).mutation(({ input: { bandId, instrumentId } }) => prisma.voice.create({
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