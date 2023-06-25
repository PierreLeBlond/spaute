import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import prismaAdapter from "@lucia-auth/adapter-prisma";
import prisma from './prisma';
import { dev } from "$app/environment";
import { idToken } from "@lucia-auth/tokens";

export const auth = lucia({
  adapter: prismaAdapter(prisma),
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      email: userData.email,
      emailVerified: userData.email_verified,
    };
  }
});

export type Auth = typeof auth;

// https://github.com/pilcrowOnPaper/lucia/issues/583
// @ts-ignore
export const passwordResetToken = idToken(auth, "password-reset", {
  expiresIn: 60 * 60 // 1 hour
});
