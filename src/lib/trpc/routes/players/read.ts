import { PlayerWhereUniqueInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { authenticatedProcedure } from '$lib/trpc/procedures/authenticatedProcedure';

export const read = authenticatedProcedure.input(PlayerWhereUniqueInputSchema).query(({ input }) =>
  prisma.player.findUniqueOrThrow({
    where: input
  })
);
