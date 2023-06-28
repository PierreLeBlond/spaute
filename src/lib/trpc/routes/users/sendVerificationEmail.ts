import { NOVU_API_KEY } from "$env/static/private";
import prisma from "$lib/prisma";
import { otpToken } from "$lib/token";
import { authenticatedProcedure } from "$lib/trpc/procedures/authenticatedProcedure";
import { Novu } from "@novu/node";
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

    const otp = await otpToken.issue(user.userId);
    const novu = new Novu(NOVU_API_KEY);

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.userId
      }
    });

    novu.trigger('email-validation', {
      to: {
        subscriberId: user.userId,
        email: user.email
      },
      payload: {
        password: otp.toString(),
        name: currentPlayer.name
      }
    });
  });