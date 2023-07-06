import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";
import { z } from "zod";

const schema = z.object({ search: z.string().nullable() });

export const list = verifiedProcedure
  .input(schema)
  .query(({ input }) =>
    prisma.band.findMany({
      where: {
        name: {
          startsWith: input.search ?? undefined,
          mode: 'insensitive'
        }
      },
      orderBy: {
        name: 'asc'
      },
      include: {
        memberships: true
      }
    }));