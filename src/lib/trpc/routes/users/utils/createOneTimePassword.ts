import prisma from "$lib/prisma";
import bcrypt from "bcrypt";
import { generateRandomString } from "lucia/utils";

const SALT_ROUNDS = 10;
const EXPIRES_IN = 1000 * 60 * 10;

export const createOneTimePassword = async (email: string) => {
  await prisma.oneTimePassword.deleteMany({
    where: {
      email
    }
  });

  const password = generateRandomString(8);
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  const expires = new Date().getTime() + EXPIRES_IN;

  await prisma.oneTimePassword.create({
    data: {
      email,
      password: hash,
      expires
    }
  });

  return password;
}