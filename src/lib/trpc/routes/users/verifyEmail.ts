import { NOVU_API_KEY } from "$env/static/private";
import { auth } from "$lib/lucia";
import { otpToken } from "$lib/token";
import { authenticatedProcedure } from "$lib/trpc/procedures/authenticatedProcedure";
import { LuciaTokenError } from "@lucia-auth/tokens";
import { Novu } from "@novu/node";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const schema = z.object({ password: z.string() });

export const verifyEmail = authenticatedProcedure
  .input(schema)
  .mutation(({ input, ctx }) =>
    otpToken.validate(input.password, ctx.user.userId)
      .then(token => Promise.all([
        auth.invalidateAllUserSessions(token.userId),
        auth.updateUserAttributes(token.userId, { email_verified: true })
      ])).then(() => {
        const novu = new Novu(NOVU_API_KEY);

        return novu.subscribers.identify(ctx.user.userId, {
          email: ctx.user.email,
          locale: 'fr'
        })
      }).then(() =>
        auth.createSession(ctx.user.userId)
      ).then(session =>
        ctx.auth.setSession(session)
      ).catch(error => {
        if (error instanceof LuciaTokenError && error.message === "EXPIRED_TOKEN") {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Le token a expiré...',
            cause: error
          });
        }

        if (error instanceof LuciaTokenError && error.message === "INVALID_TOKEN") {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Le token n\'est pas valide...',
            cause: error
          });
        }

        throw error;
      }));