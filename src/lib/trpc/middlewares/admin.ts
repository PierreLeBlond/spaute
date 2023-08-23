import prisma from '$lib/prisma';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { verified } from './verified';

const schema = z.object({
  bandId: z.string()
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
  });

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
