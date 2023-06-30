import { PresenceSchema } from "$lib/generated/zod";
import { removeSubscriberFromGig } from "$lib/hook/notifications/removeSubscriberFromGig";
import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";

const schema = PresenceSchema.omit({ id: true, isOrganizer: true });

export const create = verifiedProcedure
  .input(schema).mutation(async ({ input, ctx }) => {
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

    await removeSubscriberFromGig({
      userId: ctx.user.userId,
      gigId
    });

    return presence;
  });