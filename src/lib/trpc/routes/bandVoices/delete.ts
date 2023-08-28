import { computePlayabilities, gigIncludes } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma';
import { adminProcedure } from '$lib/trpc/procedures/adminProcedure';
import { z } from 'zod';

const schema = z.object({ id: z.string(), bandId: z.string() });

export const del = adminProcedure.input(schema).mutation(async ({ input }) => {
  const bandVoice = await prisma.bandVoice.delete({
    where: {
      id_bandId: {
        id: input.id,
        bandId: input.bandId
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

  // Refetch band without the deleted band voice
  const band = await prisma.band.findUniqueOrThrow({
    where: {
      id: input.bandId
    },
    include: {
      gigs: gigIncludes
    }
  });

  computePlayabilities(band.gigs);

  return bandVoice;
});
