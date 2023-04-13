import { InstrumentCreateInputSchema, InstrumentWhereUniqueInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { t } from "../t";

export const instruments = t.router({
  list: t.procedure.query(async () => {
    const instruments = await prisma.instrument.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return instruments;
  }),
  delete: t.procedure.input(InstrumentWhereUniqueInputSchema).mutation(async ({ input }) => {
    const response = await prisma.instrument.delete({
      where: input
    });

    return response;
  }),
  create: t.procedure.input(
    InstrumentCreateInputSchema
  ).mutation(async ({ input: { name } }) => {
    try {
      const response = await prisma.instrument.create({
        data: {
          name
        }
      });
      return {
        id: response.id,
        result: response
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == 'P2002') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Nom déjà utilisé...',
          cause: error
        });
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected prisma error occured.',
        cause: error
      });
    }
  })
})