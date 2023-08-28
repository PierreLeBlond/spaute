import { triggerSignupEmail } from '$lib/hook/notifications/triggerSignupEmail';
import { publicProcedure } from '$lib/trpc/procedures/publicProcedure';
import { z } from 'zod';

import { createOneTimePassword } from './utils/createOneTimePassword';

const schema = z.object({ email: z.string() });

export const sendSignupPassword = publicProcedure.input(schema).mutation(async ({ input }) => {
  const password = await createOneTimePassword(input.email);

  return triggerSignupEmail({
    email: input.email,
    password
  });
});
