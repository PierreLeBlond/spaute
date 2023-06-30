import { MembershipBandIdPlayerIdCompoundUniqueInputSchema } from "$lib/generated/zod";
import { addSubscriberToGigs } from "$lib/hook/notifications/addSubscriberToGigs";
import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";

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

    const gigIds = membership.band.gigs
      .filter(gig => gig.presences.every(presence => presence.playerId != input.playerId))
      .map(gig => gig.id);

    await addSubscriberToGigs({
      gigIds,
      userId: player.userId
    })

    return membership;
  });