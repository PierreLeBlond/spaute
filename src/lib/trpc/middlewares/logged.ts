import { TRPCError } from "@trpc/server";
import { t } from "../t";

export const logged = t.middleware(async ({ next, ctx }) => {
  const { user } = ctx;
  if (!user?.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      user
    }
  });
});