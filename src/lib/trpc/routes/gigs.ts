import { GigSchema, GigWhereInputSchema, GigWhereUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { t } from "../t";
import { verifiedProcedure } from "../procedures/verifiedProcedure";
import { organizerProcedure } from "../procedures/organizerProcedure";
import { z } from "zod";
import { ownerProcedure } from "../procedures/ownerProcedure";
import { Novu } from "@novu/node";
import { TriggerRecipientsTypeEnum } from "@novu/shared";
import { NOVU_API_KEY } from "$env/static/private";

export const gigs = t.router({
  list: verifiedProcedure.input(GigWhereInputSchema).query(({ input }) => prisma.gig.findMany({
    where: input,
    orderBy: {
      date: 'desc'
    },
    include: {
      band: true,
      presences: {
        include: {
          player: true
        }
      }
    }
  })),
  listForPlayer: ownerProcedure.input(z.object({ playerId: z.string() })).query(({ input: { playerId } }) => prisma.gig.findMany({
    where: {
      OR: [
        {
          presences: {
            some: {
              playerId
            }
          },
        }, {
          band: {
            memberships: {
              some: {
                playerId
              }
            }
          }
        }
      ],
    },
    orderBy: {
      date: 'desc'
    },
    include: {
      band: true,
      presences: true
    }
  })),
  read: verifiedProcedure.input(GigWhereUniqueInputSchema).query(async ({ input }) => prisma.gig.findUniqueOrThrow({
    where: input,
    include: {
      band: true,
      presences: {
        include: {
          player: true
        }
      },
      currentFormation: {
        include: {
          formationVoices: {
            include: {
              formationVoicePresences: {
                include: {
                  presence: {
                    include: {
                      player: true
                    }
                  }
                }
              },
              instrument: true,
            }
          },
          formationUndefinedVoicePresences: {
            include: {
              presence: {
                include: {
                  player: true
                }
              }
            }
          }
        }
      }
    }
  })),
  delete: organizerProcedure.input(z.object({ gigId: z.string() })).mutation(async ({ input, ctx }) => {
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
      return;
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
  }),
  create: verifiedProcedure.input(
    GigSchema.omit({ id: true, playable: true }).strict()
  ).mutation(async ({ ctx, input: { bandId, ...data } }) => {
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
      return;
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
  }),
  update: organizerProcedure.input(
    GigSchema.omit({ playable: true, bandId: true, id: true }).extend({ gigId: z.string() }).strict()
  ).mutation(async ({ input: { gigId, ...data } }) => prisma.gig.update({
    where: {
      id: gigId
    },
    data
  })),
})