import { AuthUserSchema } from "$lib/generated/zod";
import { t } from "../t";
import { publicProcedure } from "../procedures/publicProcedure";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { auth } from "$lib/lucia";
import { LuciaError } from "lucia-auth";

export const users = t.router({
  create: publicProcedure.input(
    AuthUserSchema.omit({ id: true }).extend({ password: z.string() }).strict()
  ).mutation(async ({ input: { email, password, playerId }, ctx }) => {
    try {
      const user = await auth.createUser({
        primaryKey: {
          providerId: "email",
          providerUserId: email,
          password: password
        },
        attributes: {
          email,
          playerId
        }
      });
      const session = await auth.createSession(user.userId);
      ctx.auth.setSession(session);
    } catch (error) {
      if (!(error instanceof LuciaError)) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Unexpected error occured`,
          cause: error
        });
      }

      if (error.message == 'AUTH_DUPLICATE_KEY_ID') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Email déjà utilisé...',
          cause: error
        });
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected lucia error occured.',
        cause: error
      });
    }
  }),
  login: publicProcedure.input(
    z.object({ email: z.string(), password: z.string() })
  ).mutation(async ({ input: { email, password }, ctx }) => {
    try {
      const key = await auth.useKey("email", email, password);
      const session = await auth.createSession(key.userId);
      ctx.auth.setSession(session);
    } catch (error) {

      if (!(error instanceof LuciaError)) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Unexpected error occured.',
          cause: error
        });
      }

      if (error.message == 'AUTH_INVALID_USER_ID') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Utilisateur inconnu...',
          cause: error
        });
      }

      if (error.message == 'AUTH_INVALID_KEY_ID') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Identifiants incorrects...',
          cause: error
        });
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected lucia error occured.',
        cause: error
      });

    }
  })
})