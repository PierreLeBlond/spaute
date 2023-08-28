import { auth } from '$lib/lucia';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { validateToken } from './utils/validateToken';

const schema = z.object({ tokenId: z.string(), password: z.string() });

export const changePassword = verifiedProcedure.input(schema).mutation(async ({ input, ctx }) => {
  const token = await validateToken(input.tokenId);

  const { user } = ctx;
  if (token.user_id !== user.userId) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: "Le token n'est pas valide..."
    });
  }
  await auth.invalidateAllUserSessions(user.userId);
  await auth.updateUserAttributes(user.userId, { has_password: true });
  await auth.updateKeyPassword('email', user.email, input.password);
  const session = await auth.createSession({
    userId: user.userId,
    attributes: {}
  });
  ctx.auth.setSession(session);
});
