import prisma from "$lib/prisma";
import { generateRandomString } from "lucia/utils";

const EXPIRES_IN = 1000 * 60 * 10;

export const createToken = async (userId: string) => {
  await prisma.token.deleteMany({
    where: {
      user_id: userId
    }
  });

  const token = generateRandomString(64);
  const expires = new Date().getTime() + EXPIRES_IN;

  await prisma.token.create({
    data: {
      user_id: userId,
      id: token,
      expires
    }
  });

  return token;
}