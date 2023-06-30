import { triggerDeletedGigNotifications } from "$lib/hook/notifications/triggerDeletedGigNotifications";
import prisma from "$lib/prisma";
import { organizerProcedure } from "$lib/trpc/procedures/organizerProcedure";
import { z } from "zod";

const schema = z.object({ gigId: z.string() });

export const del = organizerProcedure
  .input(schema)
  .mutation(({ input, ctx }) => prisma.gig.delete({
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
  }).then(gig => triggerDeletedGigNotifications({
    gig, userId: ctx.user.userId
  })));