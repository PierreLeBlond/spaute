import { GigSchema, GigWhereInputSchema, GigWhereUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { verifiedProcedure } from "../procedures/verifiedProcedure";
import { organizerProcedure } from "../procedures/organizerProcedure";
import { z } from "zod";
import { ownerProcedure } from "../procedures/ownerProcedure";

export const gigs = t.router({
  list: verifiedProcedure.input(GigWhereInputSchema).query(({ input }) => prisma.gig.findMany({
    where: input,
    orderBy: {
      date: 'desc'
    },
    include: {
      band: true,
      presences: {
        include: {
          player: true
        }
      }
    }
  })),
  listForPlayer: ownerProcedure.input(z.object({ playerId: z.number() })).query(({ input: { playerId } }) => prisma.gig.findMany({
    where: {
      OR: {
        presences: {
          some: {
            playerId
          }
        },
        band: {
          memberships: {
            some: {
              playerId
            }
          }
        }
      },
    },
    orderBy: {
      date: 'desc'
    },
    include: {
      band: true,
      presences: true
    }
  })),
  read: verifiedProcedure.input(GigWhereUniqueInputSchema).query(async ({ input }) => prisma.gig.findUniqueOrThrow({
    where: input,
    include: {
      band: true,
      presences: {
        include: {
          player: true
        }
      }
    }
  })),
  delete: organizerProcedure.input(z.object({ gigId: z.number() })).mutation(async ({ input }) => prisma.gig.delete({
    where: {
      id: input.gigId
    }
  })),
  create: verifiedProcedure.input(
    GigSchema.omit({ id: true, playable: true }).strict()
  ).mutation(async ({ ctx, input: { bandId, ...data } }) => prisma.gig.create({
    data: {
      ...data,
      band: {
        connect: {
          id: bandId
        }
      },
      presences: {
        create: {
          playerId: ctx.user.playerId,
          value: true,
          isOrganizer: true
        }
      },
    }
  })),
  update: organizerProcedure.input(
    GigSchema.omit({ playable: true, bandId: true, id: true }).extend({ gigId: z.number() }).strict()
  ).mutation(async ({ input: { gigId, ...data } }) => prisma.gig.update({
    where: {
      id: gigId
    },
    data
  })),
})