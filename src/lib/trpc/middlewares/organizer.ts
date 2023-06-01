import { TRPCError } from "@trpc/server";
import prisma from "$lib/prisma";
import { z } from "zod";
import { verified } from "./verified";

const schema = z.object({
  gigId: z.number()
});

export const organizer = verified.unstable_pipe(async ({ next, ctx, rawInput }) => {
  const result = schema.safeParse(rawInput);
  if (!result.success) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'Gig context id is null or undefined.' });
  }

  const player = await prisma.player.findUniqueOrThrow({
    where: {
      userId: ctx.user.userId
    }
  })
  const { gigId } = result.data;

  const presence = await prisma.presence.findUnique({
    where: {
      gigId_playerId: {
        gigId,
        playerId: player.id
      }
    }
  });

  if (presence?.isOrganizer) {
    return next();
  }

  const gig = await prisma.gig.findUniqueOrThrow({
    where: {
      id: gigId
    }
  });

  const { bandId } = gig;
  if (bandId) {
    const membership = await prisma.membership.findUnique({
      where: {
        bandId_playerId: {
          bandId: bandId,
          playerId: player.id
        }
      }
    });

    if (membership?.isAdmin) {
      return next();
    }
  }

  throw new TRPCError({ code: 'UNAUTHORIZED', message: 'The player does not have organizer role on this gig.' });
})