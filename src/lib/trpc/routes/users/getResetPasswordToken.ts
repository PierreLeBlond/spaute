import { passwordResetToken } from "$lib/lucia";
import prisma from "$lib/prisma";
import { otpToken } from "$lib/token";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { LuciaTokenError } from "@lucia-auth/tokens";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const schema = z.object({ password: z.string(), email: z.string() });

export const getResetPasswordToken = publicProcedure
  .input(schema)
  .mutation(async ({ input }) =>
    prisma.authUser.findUniqueOrThrow({
      where: {
        email: input.email
      }
    }).then(async user => {
      await otpToken.validate(input.password, user.id);
      const token = await passwordResetToken.issue(user.id);
      return { token: token.toString() };
    }).catch(error => {
      if (error instanceof LuciaTokenError && error.message === "EXPIRED_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Le token a expiré...',
          cause: error
        });
      }

      if (error instanceof LuciaTokenError && error.message === "INVALID_TOKEN") {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Le token est invalide...',
          cause: error
        });
      }

      throw error;
    }));