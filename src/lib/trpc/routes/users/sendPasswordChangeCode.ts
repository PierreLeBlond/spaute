import { triggerPasswordResetEmail } from "$lib/hook/notifications/triggerPasswordResetEmail";
import prisma from "$lib/prisma";
import { createOneTimePassword } from "./utils/createOneTimePassword";
import { verifiedProcedure } from "$lib/trpc/procedures/verifiedProcedure";

export const sendPasswordChangeCode = verifiedProcedure
  .mutation(async ({ ctx }) => {
    const { user } = ctx;

    const password = await createOneTimePassword(user.email);

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.userId
      }
    });
    return triggerPasswordResetEmail({
      userId: user.userId,
      email: user.email,
      name: currentPlayer.name,
      password
    })
  });