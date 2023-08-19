import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { z } from "zod";
import { validateOneTimePassword } from "./utils/validateOneTimePassword";
import prisma from "$lib/prisma";
import { createToken } from "./utils/createToken";

const schema = z.object({ password: z.string(), email: z.string() });

export const validatePasswordReset = publicProcedure
  .input(schema)
  .mutation(async ({ input }) => {
    await validateOneTimePassword(input.email, input.password);

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: input.email
      }
    });

    const token = await createToken(user.id);

    return { token };
  });