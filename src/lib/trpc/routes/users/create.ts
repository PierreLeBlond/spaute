import { auth } from '$lib/lucia';
import prisma from '$lib/prisma';
import { publicProcedure } from '$lib/trpc/procedures/publicProcedure';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const schema = z.object({ email: z.string(), password: z.string(), name: z.string() }).strict();

export const create = publicProcedure.input(schema).mutation(async ({ input, ctx }) => {
  let existingUser;

  const authUser = await prisma.user.findUnique({
    where: {
      email: input.email
    }
  });

  existingUser = authUser ? await auth.getUser(authUser.id) : null;

  // User exists
  if (existingUser) {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'Email déjà utilisé...'
    });
  }

  return auth
    .createUser({
      key: {
        providerId: 'email',
        providerUserId: input.email,
        password: input.password
      },
      attributes: {
        email: input.email,
        email_verified: false,
        has_password: true,
        player: {
          create: {
            name: input.name
          }
        }
      }
    })
    .then((user) =>
      auth.createSession({
        userId: user.userId,
        attributes: {}
      })
    )
    .then((session) => ctx.auth.setSession(session));
});
