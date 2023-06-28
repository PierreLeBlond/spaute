import { NOVU_API_KEY } from "$env/static/private";
import { MembershipBandIdPlayerIdCompoundUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";
import { Novu } from "@novu/node";

export const create = verifiedProcedure
  .input(MembershipBandIdPlayerIdCompoundUniqueInputSchema)
  .mutation(async ({ input }) => {
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
  });