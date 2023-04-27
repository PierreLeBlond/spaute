import { RoleSchema, RoleWhereInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { privateProcedure } from "../procedures/privateProcedure";
import { ownerProcedure } from "../procedures/ownerProcedure";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";

export const roles = t.router({
  list: privateProcedure.input(RoleWhereInputSchema).query(({ input }) => prisma.role.findMany({
    where: input,
    orderBy: {
      instrument: {
        name: 'asc'
      }
    },
    include: {
      instrument: true
    }
  })),
  delete: ownerProcedure.input(z.object({ id: z.number(), playerId: z.number() })).mutation(({ input }) => prisma.role.delete({
    where: {
      id: input.id
    }
  })),
  create: ownerProcedure.input(
    RoleSchema.omit({ id: true }).strict()
  ).mutation(({ input: { playerId, instrumentId, ...data } }) => prisma.role.create({
    data: {
      ...data,
      player: {
        connect: {
          id: playerId
        }
      },
      instrument: {
        connect: {
          id: instrumentId
        }
      }
    }
  }).catch((error) => {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == 'P2002') {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Pupitre déjà existant...',
        cause: error
      });
    }

    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Unexpected prisma error occured.',
      cause: error
    });
  })
  ),
  update: ownerProcedure.input(
    RoleSchema.omit({ instrumentId: true }).strict()
  ).mutation(({ input: { playerId, id, ...data } }) => prisma.role.update({
    where: {
      id
    },
    data
  }))
})