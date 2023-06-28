import { NOVU_API_KEY } from "$env/static/private";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";
import { Novu } from "@novu/node";
import { TriggerRecipientsTypeEnum } from "@novu/shared";
import { z } from "zod";

const schema = z.object({ gigId: z.string() });

export const del = organizerProcedure
  .input(schema)
  .mutation(async ({ input, ctx }) => {
    const gig = await prisma.gig.delete({
      where: {
        id: input.gigId
      },
      include: {
        presences: {
          include: {
            player: true
          }
        }
      }
    });

    const novu = new Novu(NOVU_API_KEY);
    const topicKey = `gig:${gig.id}`;

    await novu.trigger('deleted-gig', {
      to: [{ type: TriggerRecipientsTypeEnum.TOPIC, topicKey }],
      payload: {
        gigName: gig.name
      },
      actor: { subscriberId: ctx.user.userId },
    });

    await novu.topics.removeSubscribers(topicKey, {
      subscribers: gig.presences.map(presence => presence.player.userId)
    });

    await novu.topics.delete(topicKey);

    if (!gig.bandId) {
      return gig;
    }

    const players = await prisma.player.findMany({
      where: {
        AND: {
          memberships: {
            some: {
              bandId: gig.bandId
            }
          },
          NOT: {
            presences: {
              some: {
                gigId: gig.id
              }
            }
          }
        }
      }
    });

    const spamTopicKey = `gig:spam:${gig.id}`;

    await novu.topics.removeSubscribers(spamTopicKey, {
      subscribers: players.map(player => player.userId),
    });

    return gig;
  });