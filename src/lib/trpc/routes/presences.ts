import { PresenceGigIdPlayerIdCompoundUniqueInputSchema, PresenceSchema, PresenceWhereInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { privateProcedure } from "../procedures/privateProcedure";
import { organizerProcedure } from "../procedures/organizerProcedure";
import { ownerProcedure } from "../procedures/ownerProcedure";

export const presences = t.router({
  list: privateProcedure.input(PresenceWhereInputSchema).query(async ({ input }) => prisma.presence.findMany({
    where: input,
    include: {
      gig: true,
      player: true
    },
    orderBy: {
      player: {
        name: 'asc'
      }
    }
  })),
  read: privateProcedure.input(PresenceGigIdPlayerIdCompoundUniqueInputSchema).query(async ({ input }) => {
    const presence = await prisma.presence.findUnique({
      where: {
        gigId_playerId: input
      }
    });
    return presence;
  }),
  create: privateProcedure.input(
    PresenceSchema.omit({ id: true, isOrganizer: true })
  ).mutation(async ({ input }) => {
    const { playerId, gigId, ...rest } = input;
    const presence = await prisma.presence.create({
      data: {
        ...rest,
        gig: {
          connect: {
            id: gigId
          }
        },
        player: {
          connect: {
            id: playerId
          }
        },
      }
    });
    return presence;
  }),
  update: ownerProcedure.input(PresenceSchema.omit({ id: true, isOrganizer: true })).mutation(async ({ input }) => {
    const { playerId, gigId, ...data } = input;

    const presence = await prisma.presence.update({
      where: {
        gigId_playerId: {
          gigId,
          playerId
        }
      },
      data,
    });
    return presence;
  }),
  makeOrganizer: organizerProcedure.input(
    PresenceGigIdPlayerIdCompoundUniqueInputSchema
  ).mutation(async ({ input }) => prisma.presence.update({
    where: {
      gigId_playerId: input
    },
    data: {
      isOrganizer: true
    }
  }))
})