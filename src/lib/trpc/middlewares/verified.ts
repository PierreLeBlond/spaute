import { TRPCError } from "@trpc/server";
import { authenticated } from "./authenticated";

export const verified = authenticated.unstable_pipe(async ({ next, ctx }) => {
  const { user } = ctx;
  if (!user.emailVerified) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      user
    }
  });
});