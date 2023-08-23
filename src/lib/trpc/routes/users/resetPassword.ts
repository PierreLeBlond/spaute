import { auth } from '$lib/lucia';
import { publicProcedure } from '$lib/trpc/procedures/publicProcedure';
import { z } from 'zod';

import { validateToken } from './utils/validateToken';

const schema = z.object({ tokenId: z.string(), password: z.string() });

export const resetPassword = publicProcedure.input(schema).mutation(async ({ input }) => {
  const token = await validateToken(input.tokenId);
  const user = await auth.getUser(token.user_id);
  await auth.invalidateAllUserSessions(user.userId);
  await auth.updateUserAttributes(user.userId, { has_password: true });
  await auth.updateKeyPassword('email', user.email, input.password);
});
