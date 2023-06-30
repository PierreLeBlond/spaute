import { NOVU_API_KEY } from "$env/static/private";
import { TriggerRecipientsTypeEnum } from "@novu/shared";
import { Novu } from "@novu/node";
import type { Gig } from "@prisma/client";
import prisma from "$lib/prisma";

export const triggerNewGigNotifications = async (data: {
  gig: Gig, userId: string
}) => {
  const novu = new Novu(NOVU_API_KEY);

  const topicKey = `gig:${data.gig.id}`;
  const spamTopicKey = `gig:spam:${data.gig.id}`;

  await novu.topics.create({
    key: topicKey,
    name: `${data.gig.name} gig`
  });

  await novu.topics.create({
    key: spamTopicKey,
    name: `${data.gig.name} gig spam`
  });

  await novu.topics.addSubscribers(topicKey, {
    subscribers: [data.userId],
  });

  if (!data.gig.bandId) {
    return data.gig;
  }

  const band = await prisma.band.findUniqueOrThrow({
    where: {
      id: data.gig.bandId
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
    subscribers: [data.userId],
  });

  await novu.trigger('new-gig', {
    to: [{ type: TriggerRecipientsTypeEnum.TOPIC, topicKey }],
    payload: {
      gigId: data.gig.id,
      gigName: data.gig.name
    },
    actor: { subscriberId: data.userId },
  });

  return data.gig;
}