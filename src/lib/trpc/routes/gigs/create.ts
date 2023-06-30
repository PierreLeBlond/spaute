import { GigSchema } from "$lib/generated/zod";
import { triggerNewGigNotifications } from "$lib/hook/notifications/triggerNewGigNotifications";
import prisma from "$lib/prisma";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";

const schema = GigSchema.omit({ id: true, playable: true }).strict();

export const create = verifiedProcedure
  .input(schema)
  .mutation(({ ctx, input: { bandId, ...data } }) => prisma.gig.create({
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
  }).then(gig => triggerNewGigNotifications({
    gig, userId: ctx.user.userId
  })));