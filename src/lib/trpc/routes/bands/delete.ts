import prisma from '$lib/prisma';
import { adminProcedure } from '$lib/trpc/procedures/adminProcedure';
import { z } from 'zod';

const schema = z.object({ bandId: z.string() });

export const del = adminProcedure.input(schema).mutation(({ input }) =>
  prisma.band.delete({
    where: {
      id: input.bandId
    }
  })
);
