import { BandCreateInputSchema, BandWhereInputSchema, BandWhereUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { t } from "../t";
import { verifiedProcedure } from "../procedures/verifiedProcedure";
import { adminProcedure } from "../procedures/adminProcedure";
import { z } from "zod";

export const bands = t.router({
  list: verifiedProcedure.input(BandWhereInputSchema).query(({ input }) =>
    prisma.band.findMany({
      where: input,
      orderBy: {
        name: 'asc'
      },
      include: {
        memberships: true
      }
    })),
  read: verifiedProcedure.input(BandWhereUniqueInputSchema).query(({ input }) =>
    prisma.band.findUniqueOrThrow({
      where: input,
      include: {
        memberships: {
          include: {
            player: true
          }
        }
      }
    })),
  delete: adminProcedure.input(z.object({ bandId: z.number() })).mutation(async ({ input }) => {
    const response = await prisma.band.delete({
      where: {
        id: input.bandId
      }
    });

    return response;
  }),
  create: verifiedProcedure.input(
    BandCreateInputSchema
  ).mutation(async ({ ctx, input }) => {
    try {
      const response = await prisma.band.create({
        data: {
          ...input,
          memberships: {
            create: [{
              playerId: ctx.user.playerId,
              isAdmin: true
            }]
          },
        }
      });
      return response;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == 'P2002') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Nom déjà utilisé...',
          cause: error
        });
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: `Unexpected error occured : ${error}`,
        cause: error
      });
    }
  })
})