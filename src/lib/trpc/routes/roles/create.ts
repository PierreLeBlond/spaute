import { RoleSchema } from '$lib/generated/zod';
import { computePlayabilities, gigIncludes } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma';
import { ownerProcedure } from '$lib/trpc/procedures/ownerProcedure';
import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';

const schema = RoleSchema.omit({ id: true }).strict();

export const create = ownerProcedure.input(schema).mutation(({ input: { playerId, instrumentId, ...data } }) =>
  prisma.role
    .create({
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
      },
      include: {
        player: {
          include: {
            presences: {
              include: {
                gig: gigIncludes
              }
            }
          }
        }
      }
    })
    .then(async (role) => {
      await computePlayabilities(role.player.presences.map((presence) => presence.gig));
      return role;
    })
    .catch((error) => {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == 'P2002') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Pupitre déjà existant...',
          cause: error
        });
      }

      throw error;
    })
);
