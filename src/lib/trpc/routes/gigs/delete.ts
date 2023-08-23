import { gigIncludes } from '$lib/hook/computePlayability';
import { triggerDeletedGigNotifications } from '$lib/hook/notifications/triggerDeletedGigNotifications';
import prisma from '$lib/prisma';
import { organizerProcedure } from '$lib/trpc/procedures/organizerProcedure';
import { z } from 'zod';

const schema = z.object({ gigId: z.string() });

export const del = organizerProcedure.input(schema).mutation(async ({ input, ctx }) => {
  const gig = await prisma.gig.delete({
    where: {
      id: input.gigId
    },
    ...gigIncludes
  });

  await triggerDeletedGigNotifications({
    gig,
    userId: ctx.user.userId
  });
});
