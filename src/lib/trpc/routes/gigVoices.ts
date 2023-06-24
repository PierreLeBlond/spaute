import { GigVoiceSchema, GigVoiceWhereInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { verifiedProcedure } from "../procedures/verifiedProcedure";
import { z } from "zod";
import { organizerProcedure } from "../procedures/organizerProcedure";

export const gigVoices = t.router({
  list: verifiedProcedure.input(GigVoiceWhereInputSchema).query(({ input }) => prisma.gigVoice.findMany({
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
  delete: organizerProcedure.input(z.object({ id: z.string(), gigId: z.string() })).mutation(({ input }) => prisma.gigVoice.delete({
    where: {
      id_gigId: {
        id: input.id,
        gigId: input.gigId
      }
    }
  })),
  create: organizerProcedure.input(
    GigVoiceSchema.omit({ id: true }).strict()
  ).mutation(({ input: { gigId, instrumentId } }) => prisma.gigVoice.create({
    data: {
      gig: {
        connect: {
          id: gigId
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