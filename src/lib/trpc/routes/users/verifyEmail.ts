import { addSubscriber } from "$lib/hook/notifications/addSubscriber";
import { auth } from "$lib/lucia";
import { authenticatedProcedure } from "$lib/trpc/procedures/authenticatedProcedure";
import { z } from "zod";
import { validateOneTimePassword } from "./utils/validateOneTimePassword";

const schema = z.object({ password: z.string() });

export const verifyEmail = authenticatedProcedure
  .input(schema)
  .mutation(async ({ input, ctx }) => {
    await validateOneTimePassword(ctx.user.email, input.password);
    await auth.invalidateAllUserSessions(ctx.user.userId);
    await auth.updateUserAttributes(ctx.user.userId, { email_verified: true })
    await addSubscriber({
      userId: ctx.user.userId,
      email: ctx.user.email
    });
    const session = await auth.createSession({
      userId: ctx.user.userId,
      attributes: {}
    });
    ctx.auth.setSession(session);
  });