import { MembershipWhereInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';

export const list = verifiedProcedure.input(MembershipWhereInputSchema).query(({ input }) =>
  prisma.membership.findMany({
    where: input,
    include: {
      band: true,
      player: true
    },
    orderBy: {
      player: {
        name: 'asc'
      }
    }
  })
);
