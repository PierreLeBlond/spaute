import { NOVU_API_KEY } from "$env/static/private";
import prisma from "$lib/prisma";
import { otpToken } from "$lib/token";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { Novu } from "@novu/node";
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
    const novu = new Novu(NOVU_API_KEY);

    const currentPlayer = await prisma.player.findUniqueOrThrow({
      where: {
        userId: user.id
      }
    });

    novu.trigger('password-reset', {
      to: {
        subscriberId: user.id,
        email: user.email
      },
      payload: {
        password: token.toString(),
        name: currentPlayer.name
      }
    });
  }));