import { RoleSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { ownerProcedure } from "$lib/trpc/procedures/ownerProcedure";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";

const schema = RoleSchema.omit({ id: true }).strict();

export const create = ownerProcedure
  .input(schema)
  .mutation(({ input: { playerId, instrumentId, ...data } }) => prisma.role.create({
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

    throw error;
  }));