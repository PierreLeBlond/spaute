import { GigSchema } from '$lib/generated/zod';
import { computePlayability, gigIncludes } from '$lib/hook/computePlayability';
import { triggerNewGigNotifications } from '$lib/hook/notifications/triggerNewGigNotifications';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';

const schema = GigSchema.omit({ id: true, playable: true }).strict();

export const create = verifiedProcedure.input(schema).mutation(async ({ ctx, input: { bandId, ...data } }) => {
  const gig = await prisma.gig.create({
    data: {
      ...data,
      band: bandId
        ? {
            connect: {
              id: bandId
            }
          }
        : undefined,
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
      }
    },
    ...gigIncludes
  });

  await computePlayability(gig);

  await triggerNewGigNotifications({
    gig,
    userId: ctx.user.userId
  });

  return gig;
});
