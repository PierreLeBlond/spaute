import { PresenceSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import { ownerProcedure } from "$lib/trpc/procedures/ownerProcedure";

const schema = PresenceSchema.omit({ id: true, isOrganizer: true }).strict();

export const update = ownerProcedure
  .input(schema)
  .mutation(({ input: { playerId, gigId, ...data } }) =>
    prisma.presence.update({
      where: {
        gigId_playerId: {
          gigId,
          playerId
        }
      },
      data,
    }));