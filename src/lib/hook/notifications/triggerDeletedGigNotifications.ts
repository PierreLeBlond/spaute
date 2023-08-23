import { novu } from '$lib/novu';
import prisma from '$lib/prisma';
import { TriggerRecipientsTypeEnum } from '@novu/shared';
import type { Gig, Player, Presence } from '@prisma/client';

export const triggerDeletedGigNotifications = async (data: {
  gig: Gig & { presences: (Presence & { player: Player })[] };
  userId: string;
}) => {
  const topicKey = `gig:${data.gig.id}`;

  await novu.trigger('deleted-gig', {
    to: [{ type: TriggerRecipientsTypeEnum.TOPIC, topicKey }],
    payload: {
      gigName: data.gig.name
    },
    actor: { subscriberId: data.userId }
  });

  const remainingPlayers = data.gig.bandId
    ? await prisma.player.findMany({
        where: {
          AND: {
            memberships: {
              some: {
                bandId: data.gig.bandId
              }
            },
            NOT: {
              presences: {
                some: {
                  gigId: data.gig.id
                }
              }
            }
          }
        }
      })
    : [];

  await novu.topics.removeSubscribers(topicKey, {
    subscribers: [
      ...remainingPlayers.map((player) => player.userId),
      ...data.gig.presences.map((presence) => presence.player.userId)
    ]
  });

  await novu.topics.delete(topicKey);

  if (remainingPlayers.length == 0) {
    return data.gig;
  }

  const spamTopicKey = `gig:spam:${data.gig.id}`;

  await novu.topics.removeSubscribers(spamTopicKey, {
    subscribers: remainingPlayers.map((player) => player.userId)
  });

  return data.gig;
};
