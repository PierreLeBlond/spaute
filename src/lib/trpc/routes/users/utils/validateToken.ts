import prisma from "$lib/prisma";
import { TRPCError } from "@trpc/server";
import { isWithinExpiration } from "lucia/utils";

export const validateToken = async (id: string) => {
  const token = await prisma.token.findUnique({
    where: {
      id
    }
  });

  if (!token) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'Le token n\'est pas valide...',
    });
  }

  await prisma.token.delete({
    where: {
      id
    }
  });

  if (!isWithinExpiration(Number(token.expires))) {
    throw new TRPCError({
      code: 'TIMEOUT',
      message: 'Le token à expiré...',
    });
  }

  return token;
};