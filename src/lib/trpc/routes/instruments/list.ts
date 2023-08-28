import prisma from '$lib/prisma';
import { publicProcedure } from '$lib/trpc/procedures/publicProcedure';

export const list = publicProcedure.query(() =>
  prisma.instrument.findMany({
    orderBy: {
      name: 'asc'
    }
  })
);
