import { BandCreateInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';
import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';

export const create = verifiedProcedure.input(BandCreateInputSchema).mutation(async ({ ctx, input }) => {
  try {
    return prisma.band.create({
      data: {
        ...input,
        memberships: {
          create: [
            {
              player: {
                connect: {
                  userId: ctx.user.userId
                }
              },
              isAdmin: true
            }
          ]
        }
      }
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == 'P2002') {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Nom déjà utilisé...',
        cause: error
      });
    }

    throw error;
  }
});
