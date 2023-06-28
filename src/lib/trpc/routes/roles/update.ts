import { RoleSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { ownerProcedure } from "$lib/trpc/procedures/ownerProcedure";

const schema = RoleSchema.omit({ instrumentId: true }).strict();

export const update = ownerProcedure
  .input(schema)
  .mutation(({ input: { playerId, id, ...data } }) => prisma.role.update({
    where: {
      id
    },
    data
  }));