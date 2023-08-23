import { DisabledVoiceSchema } from '$lib/generated/zod';
import { computePlayability, gigIncludes } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma';
import { organizerProcedure } from '$lib/trpc/procedures/organizerProcedure';

const schema = DisabledVoiceSchema.omit({ id: true }).strict();

export const create = organizerProcedure.input(schema).mutation(async ({ input }) => {
  const disabledVoice = await prisma.disabledVoice.create({
    data: {
      gig: {
        connect: {
          id: input.gigId
        }
      },
      bandVoice: {
        connect: {
          id: input.bandVoiceId
        }
      }
    },
    include: {
      gig: gigIncludes
    }
  });

  await computePlayability(disabledVoice.gig);

  return disabledVoice;
});
