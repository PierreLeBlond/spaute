import prisma from "$lib/prisma";
import { TRPCError } from "@trpc/server";
import { isWithinExpiration } from "lucia/utils";

export const validateOneTimePassword = async (email: string, password: string) => {
  const oneTimePassword = await prisma.oneTimePassword.findUnique({
    where: {
      password_email: {
        password,
        email
      }
    }
  });

  if (!oneTimePassword) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'Le mot de passe n\'est pas valide...',
    });
  }

  await prisma.oneTimePassword.deleteMany({
    where: {
      email
    }
  });

  if (!isWithinExpiration(Number(oneTimePassword.expires))) {
    throw new TRPCError({
      code: 'TIMEOUT',
      message: 'Le mot de passe à expiré...',
    });
  }
};