import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { verified } from "./verified";

const schema = z.object({
  playerId: z.number()
});

export const owner = verified.unstable_pipe(async ({ next, ctx, rawInput }) => {
  const result = schema.safeParse(rawInput);
  if (!result.success) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'Player id is null or undefined.' });
  }

  const { playerId } = ctx.user;
  if (playerId != result.data.playerId) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'The player does not own this resource.' });
  }
  return next();
})