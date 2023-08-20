import prisma from "$lib/prisma";
import bcrypt from "bcrypt";
import { TRPCError } from "@trpc/server";
import { isWithinExpiration } from "lucia/utils";

export const validateOneTimePassword = async (email: string, password: string) => {
  const oneTimePassword = await prisma.oneTimePassword.findUnique({
    where: {
      email
    }
  });

  if (!oneTimePassword) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'Le mot de passe n\'est pas valide...',
    });
  }

  const match = await bcrypt.compare(password, oneTimePassword.password);

  if (!match) {
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