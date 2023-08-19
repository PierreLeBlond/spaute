import { auth } from "$lib/lucia";
import { publicProcedure } from "$lib/trpc/procedures/publicProcedure";
import { TRPCError } from "@trpc/server";
import { LuciaError } from "lucia";
import { z } from "zod";

const schema = z.object({ email: z.string(), password: z.string() });

export const login = publicProcedure
  .input(schema)
  .mutation(({ input, ctx }) =>
    auth.useKey("email", input.email, input.password)
      .then(
        key => auth.createSession({
          userId: key.userId,
          attributes: {}
        })
      ).then(
        session => ctx.auth.setSession(session)
      ).catch(error => {

        if (error instanceof LuciaError && error.message == 'AUTH_INVALID_USER_ID') {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Utilisateur inconnu...',
            cause: error
          });
        }

        if (error instanceof LuciaError && (error.message == 'AUTH_INVALID_PASSWORD' || error.message == 'AUTH_INVALID_KEY_ID')) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Identifiants incorrects...',
            cause: error
          });
        }

        throw error;
      }));