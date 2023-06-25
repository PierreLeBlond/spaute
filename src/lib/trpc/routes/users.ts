import { t } from "../t";
import { publicProcedure } from "../procedures/publicProcedure";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { auth, passwordResetToken } from "$lib/lucia";
import { LuciaError } from "lucia-auth";
import { authenticatedProcedure } from "../procedures/authenticatedProcedure";
import { NOVU_API_KEY } from '$env/static/private';
import prisma from "$lib/prisma";
import { Novu } from '@novu/node';
import { otpToken } from "$lib/token";
import { LuciaTokenError } from "@lucia-auth/tokens";

export const users = t.router({
  create: publicProcedure.input(
    z.object({ email: z.string(), password: z.string(), name: z.string() }).strict()
  ).mutation(async ({ input: { email, password, name }, ctx }) => {
    try {
      const user = await auth.createUser({
        primaryKey: {
          providerId: "email",
          providerUserId: email,
          password: password
        },
        attributes: {
          email,
          email_verified: false,
          player: {
            create: {
              name
            }
          }
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
  }),
  sendVerificationEmail: authenticatedProcedure.mutation(async ({ ctx }) => {
    const { user } = ctx;

    if (user.emailVerified) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Ton email est déjà vérifié !',
      })
    }

    const otp = await otpToken.issue(user.userId);
    const novu = new Novu(NOVU_API_KEY);

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.userId
      }
    });

    novu.trigger('email-validation', {
      to: {
        subscriberId: user.userId,
        email: user.email
      },
      payload: {
        password: otp.toString(),
        name: currentPlayer.name
      }
    });
  }),
  verifyEmail: authenticatedProcedure.input(z.object({ password: z.string() })).mutation(async ({ input, ctx }) => {
    try {
      const token = await otpToken.validate(input.password, ctx.user.userId);
      await auth.invalidateAllUserSessions(token.userId);
      await auth.updateUserAttributes(token.userId, {
        email_verified: true
      });

      const novu = new Novu(NOVU_API_KEY);

      await novu.subscribers.identify(ctx.user.userId, {
        email: ctx.user.email,
        locale: 'fr'
      });

      const session = await auth.createSession(ctx.user.userId);
      ctx.auth.setSession(session);

    } catch (error) {
      if (!(error instanceof LuciaTokenError)) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Unexpected error occured.',
          cause: error
        });
      }

      if (error.message === "EXPIRED_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The token has expired...',
          cause: error
        });
      }

      if (error.message === "INVALID_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The token is invalid...',
          cause: error
        });
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected lucia token error occured.',
        cause: error
      });
    }
  }),
  sendRecoveryEmail: publicProcedure.input(z.object({ email: z.string().email() })).mutation(async ({ input }) => {

    const user = await prisma.authUser.findUnique({
      where: {
        email: input.email
      }
    });

    if (!user) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Utilisateur inconnu !',
      })
    }

    const otp = await otpToken.issue(user.id);
    const novu = new Novu(NOVU_API_KEY);

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.id
      }
    });

    novu.trigger('password-reset', {
      to: {
        subscriberId: user.id,
        email: user.email
      },
      payload: {
        password: otp.toString(),
        name: currentPlayer.name
      }
    });
  }),
  getResetPasswordToken: publicProcedure.input(z.object({ password: z.string(), email: z.string() })).mutation(async ({ input }) => {
    try {
      const user = await prisma.authUser.findUniqueOrThrow({
        where: {
          email: input.email
        }
      });

      await otpToken.validate(input.password, user.id);
      const token = await passwordResetToken.issue(user.id);
      return { token: token.toString() };
    } catch (error) {
      if (!(error instanceof LuciaTokenError)) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Unexpected error occured.',
          cause: error
        });
      }

      if (error.message === "EXPIRED_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The token has expired...',
          cause: error
        });
      }

      if (error.message === "INVALID_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The token is invalid...',
          cause: error
        });
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected lucia token error occured.',
        cause: error
      });
    }
  }),
  resetPassword: publicProcedure.input(z.object({ token: z.string(), password: z.string() })).mutation(async ({ input }) => {
    try {
      const token = await passwordResetToken.validate(input.token ?? "");
      const user = await auth.getUser(token.userId);
      await auth.invalidateAllUserSessions(user.userId);
      // update key
      await auth.updateKeyPassword("email", user.email, input.password);
    } catch (error) {

      if (!(error instanceof LuciaTokenError)) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Unexpected error occured.',
          cause: error
        });
      }

      if (error.message === "EXPIRED_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The token has expired...',
          cause: error
        });
      }

      if (error.message === "INVALID_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The token is invalid...',
          cause: error
        });
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected lucia token error occured.',
        cause: error
      });
    }
  }),
})