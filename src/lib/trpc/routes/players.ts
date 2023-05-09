import { PlayerCreateInputSchema, PlayerWhereInputSchema, PlayerWhereUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { authenticatedProcedure } from "../procedures/authenticatedProcedure";
import { publicProcedure } from "../procedures/publicProcedure";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";

export const players = t.router({
  list: publicProcedure.input(PlayerWhereInputSchema).query(async ({ input }) => prisma.player.findMany({
    where: input,
    orderBy: {
      name: 'asc'
    }
  })),
  read: authenticatedProcedure.input(PlayerWhereUniqueInputSchema).query(async ({ input }) => {
    const player = await prisma.player.findUniqueOrThrow({
      where: input
    });
    return player;
  }),
  create: publicProcedure.input(
    PlayerCreateInputSchema
  ).mutation(async ({ input }) =>
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

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected prisma error occured.',
        cause: error
      });
    }))
})