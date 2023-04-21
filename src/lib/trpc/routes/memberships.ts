import prisma from "$lib/prisma";
import { t } from "../t";
import { MembershipBandIdPlayerIdCompoundUniqueInputSchema, MembershipWhereInputSchema } from "$lib/generated/zod";
import { privateProcedure } from "../procedures/privateProcedure";
import { adminProcedure } from "../procedures/adminProcedure";

export const memberships = t.router({
  list: privateProcedure.input(MembershipWhereInputSchema).query(async ({ input }) => prisma.membership.findMany({
    where: input,
    include: {
      band: true,
      player: true
    },
    orderBy: {
      player: {
        name: 'asc'
      }
    }
  })),
  read: privateProcedure.input(MembershipBandIdPlayerIdCompoundUniqueInputSchema).query(async ({ input }) => {
    const membership = await prisma.membership.findUnique({
      where: {
        bandId_playerId: input
      },
      include: {
        band: true,
        player: true
      }
    });
    return membership;
  }),
  create: privateProcedure.input(
    MembershipBandIdPlayerIdCompoundUniqueInputSchema
  ).mutation(async ({ input }) => {
    const membership = await prisma.membership.create({
      data: {
        band: {
          connect: {
            id: input.bandId
          }
        },
        player: {
          connect: {
            id: input.playerId
          }
        }
      }
    });
    return membership;
  }),
  makeAdmin: adminProcedure.input(
    MembershipBandIdPlayerIdCompoundUniqueInputSchema
  ).mutation(async ({ input }) => prisma.membership.update({
    where: {
      bandId_playerId: input
    },
    data: {
      isAdmin: true
    }
  }))
})