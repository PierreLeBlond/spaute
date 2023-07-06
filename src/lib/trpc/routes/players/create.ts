import { PlayerCreateInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";

export const create = publicProcedure
  .input(PlayerCreateInputSchema)
  .mutation(({ input }) =>
    prisma.player.create({
      data: {
        ...input,
      }
    }).catch(error => {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == 'P2002') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Nom déjà utilisé...',
          cause: error
        });
      }

      throw error;
    }));