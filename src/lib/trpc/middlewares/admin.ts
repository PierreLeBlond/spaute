import { TRPCError } from "@trpc/server";
import { verified } from "./verified";
import { z } from "zod";
import prisma from "$lib/prisma";

const schema = z.object({
  bandId: z.number()
});

export const admin = verified.unstable_pipe(async ({ next, ctx, rawInput }) => {
  const result = schema.safeParse(rawInput);
  if (!result.success) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'Band id is null or undefined.' });
  }

  const player = await prisma.player.findUniqueOrThrow({
    where: {
      userId: ctx.user.userId
    }
  })

  const { bandId } = result.data;

  const membership = await prisma.membership.findUnique({
    where: {
      bandId_playerId: {
        bandId,
        playerId: player.id
      }
    }
  });

  if (!membership?.isAdmin) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'The player does not have admin role on this band.' });
  }
  return next();
});