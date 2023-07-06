import { auth } from "$lib/lucia";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const schema = z.object({ email: z.string(), password: z.string(), name: z.string() }).strict();

export const create = publicProcedure
  .input(schema)
  .mutation(({ input, ctx }) =>
    auth.createUser({
      primaryKey: {
        providerId: "email",
        providerUserId: input.email,
        password: input.password
      },
      attributes: {
        email: input.email,
        email_verified: false,
        player: {
          create: {
            name: input.name
          }
        }
      }
    }).then(
      user => auth.createSession(user.userId)
    ).then(
      session => ctx.auth.setSession(session)
    ).catch(error => {
      if ((error instanceof Prisma.PrismaClientKnownRequestError) && error.code == 'P2002') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Email déjà utilisé...',
          cause: error
        });
      }

      if (error.message == 'AUTH_DUPLICATE_KEY_ID') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Email déjà utilisé...',
          cause: error
        });
      }

      throw error;

    }));