import { addSubscriber } from '$lib/hook/notifications/addSubscriber';
import { auth } from '$lib/lucia';
import { novu } from '$lib/novu';
import prisma from '$lib/prisma';
import { publicProcedure } from '$lib/trpc/procedures/publicProcedure';
import { generateRandomString } from 'lucia/utils';
import { z } from 'zod';

import { validateOneTimePassword } from './utils/validateOneTimePassword';

const schema = z.object({ email: z.string(), password: z.string() });

export const signup = publicProcedure.input(schema).mutation(async ({ input, ctx }) => {
  await validateOneTimePassword(input.email, input.password);

  let existingUser;

  const authUser = await prisma.user.findUnique({
    where: {
      email: input.email
    }
  });

  existingUser = authUser ? await auth.getUser(authUser.id) : null;

  if (!existingUser) {
    existingUser = await auth.createUser({
      key: {
        providerId: 'email',
        providerUserId: input.email,
        password: generateRandomString(40)
      },
      attributes: {
        email: input.email,
        email_verified: true,
        has_password: false,
        player: {
          create: {
            name: `Fanfaronx-${generateRandomString(4)}`
          }
        }
      }
    });

    addSubscriber({
      userId: existingUser.userId,
      email: existingUser.email
    });

    await novu.subscribers.delete(existingUser.email);
  }

  const session = await auth.createSession({
    userId: existingUser.userId,
    attributes: {}
  });

  ctx.auth.setSession(session);
});
