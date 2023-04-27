import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import prismaAdapter from "@lucia-auth/adapter-prisma";
import prisma from './prisma';
import { dev } from "$app/environment";


export const auth = lucia({
  adapter: prismaAdapter(prisma),
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      playerId: userData.playerId
    };
  }
});

export type Auth = typeof auth;