import { TRPCError } from "@trpc/server";
import { t } from "../t";

export const auth = t.middleware(async ({ next, ctx }) => {
  const { playerId } = ctx;
  if (!playerId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      playerId
    }
  });
});