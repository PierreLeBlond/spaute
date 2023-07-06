import { auth, passwordResetToken } from "$lib/lucia";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { LuciaTokenError } from "@lucia-auth/tokens";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const schema = z.object({ token: z.string(), password: z.string() });

export const resetPassword = publicProcedure
  .input(schema)
  .mutation(({ input }) =>
    passwordResetToken.validate(input.token ?? "").then(token =>
      auth.getUser(token.userId)
    ).then(user => Promise.all([
      auth.invalidateAllUserSessions(user.userId),
      auth.updateKeyPassword("email", user.email, input.password)
    ])
    ).catch(error => {

      if (error instanceof LuciaTokenError && error.message === "EXPIRED_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The token has expired...',
          cause: error
        });
      }

      if (error instanceof LuciaTokenError && error.message === "INVALID_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The token is invalid...',
          cause: error
        });
      }

      throw error;
    }));