import { DisabledVoiceWhereInputSchema, DisabledVoiceSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { verifiedProcedure } from "../procedures/verifiedProcedure";
import { z } from "zod";
import { organizerProcedure } from "../procedures/organizerProcedure";

export const disabledVoices = t.router({
  list: verifiedProcedure.input(DisabledVoiceWhereInputSchema).query(({ input }) => prisma.disabledVoice.findMany({
    where: input
  })),
  read: verifiedProcedure.input(z.object({ bandVoiceId: z.number(), gigId: z.number() })).query(({ input: { bandVoiceId, gigId } }) => prisma.disabledVoice.findUnique({
    where: {
      gigId_bandVoiceId: {
        bandVoiceId,
        gigId
      }
    }
  })),
  delete: organizerProcedure.input(z.object({ bandVoiceId: z.number(), gigId: z.number() })).mutation(({ input: { bandVoiceId, gigId } }) => prisma.disabledVoice.delete({
    where: {
      gigId_bandVoiceId: {
        bandVoiceId,
        gigId
      }
    }
  })),
  create: organizerProcedure.input(
    DisabledVoiceSchema.omit({ id: true }).strict()
  ).mutation(({ input: { gigId, bandVoiceId } }) => prisma.disabledVoice.create({
    data: {
      gig: {
        connect: {
          id: gigId
        }
      },
      bandVoice: {
        connect: {
          id: bandVoiceId
        }
      }
    }
  }))
})