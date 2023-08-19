import { triggerPasswordResetEmail } from "$lib/hook/notifications/triggerPasswordResetEmail";
import prisma from "$lib/prisma";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createOneTimePassword } from "./utils/createOneTimePassword";

const schema = z.object({ email: z.string().email() });

export const sendPasswordResetPassword = publicProcedure
  .input(schema)
  .mutation(async ({ input }) => {
    const user = await prisma.user.findUnique({
      where: {
        email: input.email
      }
    });

    if (!user) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Utilisateur inconnu !',
      })
    }

    const password = await createOneTimePassword(input.email);

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.id
      }
    });
    return triggerPasswordResetEmail({
      userId: user.id,
      email: user.email,
      name: currentPlayer.name,
      password
    })
  });