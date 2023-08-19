import prisma from "$lib/prisma";
import { generateRandomString } from "lucia/utils";

const EXPIRES_IN = 1000 * 60 * 10;

export const createOneTimePassword = async (email: string) => {
  await prisma.oneTimePassword.deleteMany({
    where: {
      email
    }
  });

  const password = generateRandomString(8); // Could be hashed
  const expires = new Date().getTime() + EXPIRES_IN;

  await prisma.oneTimePassword.create({
    data: {
      email,
      password,
      expires
    }
  });

  return password;
}