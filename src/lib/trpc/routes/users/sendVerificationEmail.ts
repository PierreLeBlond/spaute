import { triggerEmailVerification } from "$lib/hook/notifications/triggerEmailVerification";
import prisma from "$lib/prisma";
import { otpToken } from "$lib/token";
import { authenticatedProcedure } from "$lib/trpc/procedures/authenticatedProcedure";
import { TRPCError } from "@trpc/server";

export const sendVerificationEmail = authenticatedProcedure
  .mutation(async ({ ctx }) => {
    const { user } = ctx;

    if (user.emailVerified) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Ton email est déjà vérifié !',
      })
    }

    const token = await otpToken.issue(user.userId);
    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.userId
      }
    });

    return triggerEmailVerification({
      userId: user.userId,
      email: user.email,
      name: currentPlayer.name,
      token: token.toString()
    })
  });