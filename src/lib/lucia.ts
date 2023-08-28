import { dev } from '$app/environment';
import { prisma } from '@lucia-auth/adapter-prisma';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';

import client from './prisma';

export const auth = lucia({
  adapter: prisma(client),
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  getUserAttributes: (data) => {
    return {
      email: data.email,
      emailVerified: data.email_verified,
      hasPassword: data.has_password
    };
  }
});

export type Auth = typeof auth;
