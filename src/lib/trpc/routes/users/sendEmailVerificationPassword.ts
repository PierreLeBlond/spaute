import { triggerEmailVerificationEmail } from "$lib/hook/notifications/triggerEmailVerificationEmail";
import prisma from "$lib/prisma";
import { authenticatedProcedure } from "$lib/trpc/procedures/authenticatedProcedure";
import { TRPCError } from "@trpc/server";
import { createOneTimePassword } from "./utils/createOneTimePassword";

export const sendEmailVerificationPassword = authenticatedProcedure
  .mutation(async ({ ctx }) => {
    const { user } = ctx;

    if (user.emailVerified) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Ton email est déjà vérifié !',
      })
    }

    const password = await createOneTimePassword(user.email);

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.userId
      }
    });

    return triggerEmailVerificationEmail({
      userId: user.userId,
      email: user.email,
      name: currentPlayer.name,
      password
    })
  });