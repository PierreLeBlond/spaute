import { triggerPasswordReset } from "$lib/hook/notifications/triggerPasswordReset";
import prisma from "$lib/prisma";
import { otpToken } from "$lib/token";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export const sendRecoveryEmail = publicProcedure
  .input(schema)
  .mutation(({ input }) => prisma.authUser.findUnique({
    where: {
      email: input.email
    }
  }).then(user => {
    if (!user) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Utilisateur inconnu !',
      })
    }
    return user;
  }).then(async user => {
    const token = await otpToken.issue(user.id)
    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.id
      }
    });
    return triggerPasswordReset({
      userId: user.id,
      email: user.email,
      name: currentPlayer.name,
      token: token.toString()
    })
  }));