import prisma from "$lib/prisma";
import { ownerProcedure } from "$lib/trpc/procedures/ownerProcedure";
import { z } from "zod";

const schema = z.object({ playerId: z.string() });

export const listForPlayer = ownerProcedure
  .input(schema)
  .query(({ input }) => prisma.gig.findMany({
    where: {
      OR: [
        {
          presences: {
            some: {
              playerId: input.playerId
            }
          },
        }, {
          band: {
            memberships: {
              some: {
                playerId: input.playerId
              }
            }
          }
        }
      ],
    },
    orderBy: {
      date: 'desc'
    },
    include: {
      band: true,
      presences: true
    }
  }));