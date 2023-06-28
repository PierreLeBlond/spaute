import { NOVU_API_KEY } from "$env/static/private";
import { PresenceSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";
import { Novu } from "@novu/node";

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

    const novu = new Novu(NOVU_API_KEY);
    const spamTopicKey = `gig:spam:${gigId}`;

    await novu.topics.removeSubscribers(spamTopicKey, {
      subscribers: [ctx.user.userId],
    });

    return presence;
  });