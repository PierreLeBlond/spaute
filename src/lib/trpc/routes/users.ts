import { t } from "../t";
import { publicProcedure } from "../procedures/publicProcedure";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { auth, emailVerificationToken, passwordResetToken } from "$lib/lucia";
import { LuciaError } from "lucia-auth";
import { authenticatedProcedure } from "../procedures/authenticatedProcedure";
import * as nodemailer from 'nodemailer';
import { SMTP_USER, SMTP_FROM, SMTP_PASS, SMTP_HOST, NOVU_API_KEY } from '$env/static/private';
import prisma from "$lib/prisma";
import { render } from "svelte-email";
import Verification from '$lib/emails/Verification.svelte';
import Recovering from '$lib/emails/Recovering.svelte';
import { LuciaTokenError } from "@lucia-auth/tokens";
import { Novu } from '@novu/node';

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

    const token = await emailVerificationToken.issue(user.userId);

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.userId
      }
    });

    const emailHtml = render({
      template: Verification,
      props: {
        name: currentPlayer.name,
        token: token.toString()
      }
    });

    const options = {
      from: SMTP_FROM,
      to: user.email,
      subject: '[Spaute] Vérification de ton email',
      html: emailHtml
    };

    transporter.sendMail(options);
  }),
  verifyEmail: authenticatedProcedure.input(z.object({ token: z.string() })).mutation(async ({ input, ctx }) => {
    try {

      const token = await emailVerificationToken.validate(input.token);
      await auth.invalidateAllUserSessions(token.userId);
      await auth.updateUserAttributes(token.userId, {
        email_verified: true
      });
      const session = await auth.createSession(token.userId);
      ctx.auth.setSession(session);

      const novu = new Novu(NOVU_API_KEY);

      await novu.subscribers.identify(ctx.user.userId, {
        email: ctx.user.email,
        locale: 'fr'
      });

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

    const token = await passwordResetToken.issue(user.id);

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.id
      }
    });

    const emailHtml = render({
      template: Recovering,
      props: {
        name: currentPlayer.name,
        token: token.toString()
      }
    });

    const options = {
      from: SMTP_FROM,
      to: user.email,
      subject: '[Spaute] Récupération de ton compte',
      html: emailHtml
    };

    transporter.sendMail(options);
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