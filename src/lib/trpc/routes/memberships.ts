import prisma from "$lib/prisma";
import { t } from "../t";
import { MembershipBandIdPlayerIdCompoundUniqueInputSchema, MembershipWhereInputSchema } from "$lib/generated/zod";
import { verifiedProcedure } from "../procedures/verifiedProcedure";
import { adminProcedure } from "../procedures/adminProcedure";
import { Novu } from "@novu/node";
import { NOVU_API_KEY } from "$env/static/private";

export const memberships = t.router({
  list: verifiedProcedure.input(MembershipWhereInputSchema).query(async ({ input }) => prisma.membership.findMany({
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
  read: verifiedProcedure.input(MembershipBandIdPlayerIdCompoundUniqueInputSchema).query(async ({ input }) => {
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
  create: verifiedProcedure.input(
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
      },
      include: {
        band: {
          include: {
            gigs: {
              include: {
                presences: true
              }
            }
          }
        }
      }
    });

    const player = await prisma.player.findUniqueOrThrow({
      where: {
        id: input.playerId
      }
    });

    const novu = new Novu(NOVU_API_KEY);
    await Promise.all(
      membership.band.gigs
        .filter(gig => gig.presences.every(presence => presence.playerId != input.playerId))
        .map(gig => novu.topics.addSubscribers(`gig:spam:${gig.id}`, { subscribers: [player.userId] }))

    );

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