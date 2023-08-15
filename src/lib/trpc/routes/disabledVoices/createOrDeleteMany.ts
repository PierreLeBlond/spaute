import { computePlayability, gigIncludes } from "$lib/hook/computePlayability";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";
import { z } from "zod";

const schema = z.object({
  gigId: z.string(),
  schemas: z.array(z.object({ bandVoiceId: z.string(), create: z.boolean() }).strict())
});

export const createOrDeleteMany = organizerProcedure
  .input(schema)
  .mutation(async ({ input }) => {
    const disabledVoices = await Promise.all(input.schemas.map((schema) => schema.create
      ? prisma.disabledVoice.create({
        data: {
          gig: {
            connect: {
              id: input.gigId
            }
          },
          bandVoice: {
            connect: {
              id: schema.bandVoiceId
            }
          }
        },
        include: {
          gig: gigIncludes
        }
      })
      : prisma.disabledVoice.delete({
        where: {
          gigId_bandVoiceId: {
            bandVoiceId: schema.bandVoiceId,
            gigId: input.gigId
          }
        },
        include: {
          gig: gigIncludes
        }
      }
      )));

    const disabledVoice = disabledVoices[disabledVoices.length - 1];

    if (disabledVoice) {
      await computePlayability(disabledVoice.gig);
    }

    return disabledVoices;
  });