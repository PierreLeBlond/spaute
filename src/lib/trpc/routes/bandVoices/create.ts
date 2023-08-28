import { BandVoiceSchema } from '$lib/generated/zod';
import { computePlayabilities, gigIncludes } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma';
import { adminProcedure } from '$lib/trpc/procedures/adminProcedure';

const schema = BandVoiceSchema.omit({ id: true }).strict();

export const create = adminProcedure.input(schema).mutation(async ({ input }) => {
  const bandVoice = await prisma.bandVoice.create({
    data: {
      band: {
        connect: {
          id: input.bandId
        }
      },
      instrument: {
        connect: {
          id: input.instrumentId
        }
      }
    },
    include: {
      band: {
        include: {
          gigs: gigIncludes
        }
      }
    }
  });

  computePlayabilities(bandVoice.band.gigs);

  return bandVoice;
});
