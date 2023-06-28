import { NOVU_API_KEY } from "$env/static/private";
import { GigSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";
import { TriggerRecipientsTypeEnum } from "@novu/shared";
import { Novu } from "@novu/node";

const schema = GigSchema.omit({ id: true, playable: true }).strict();

export const create = verifiedProcedure
  .input(schema)
  .mutation(async ({ ctx, input: { bandId, ...data } }) => {
    const gig = await prisma.gig.create({
      data: {
        ...data,
        band: bandId ? {
          connect: {
            id: bandId
          }
        } : undefined,
        presences: {
          create: {
            player: {
              connect: {
                userId: ctx.user.userId
              }
            },
            value: true,
            isOrganizer: true
          }
        },
      }
    });

    const novu = new Novu(NOVU_API_KEY);

    const topicKey = `gig:${gig.id}`;
    const spamTopicKey = `gig:spam:${gig.id}`;

    await novu.topics.create({
      key: topicKey,
      name: `${gig.name} gig`
    });

    await novu.topics.create({
      key: spamTopicKey,
      name: `${gig.name} gig spam`
    });

    await novu.topics.addSubscribers(topicKey, {
      subscribers: [ctx.user.userId],
    });

    if (!bandId) {
      return gig;
    }

    const band = await prisma.band.findUniqueOrThrow({
      where: {
        id: bandId
      },
      include: {
        memberships: {
          include: {
            player: true
          }
        }
      }
    });

    await novu.topics.addSubscribers(topicKey, {
      subscribers: band.memberships.map(membership => membership.player.userId)
    });

    await novu.topics.addSubscribers(spamTopicKey, {
      subscribers: band.memberships.map(membership => membership.player.userId)
    });

    await novu.topics.removeSubscribers(spamTopicKey, {
      subscribers: [ctx.user.userId],
    });

    await novu.trigger('new-gig', {
      to: [{ type: TriggerRecipientsTypeEnum.TOPIC, topicKey }],
      payload: {
        gigId: gig.id,
        gigName: gig.name
      },
      actor: { subscriberId: ctx.user.userId },
    });

    return gig;
  });