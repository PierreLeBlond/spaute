import { RoleSchema } from '$lib/generated/zod';
import { computePlayabilities, gigIncludes } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma';
import { ownerProcedure } from '$lib/trpc/procedures/ownerProcedure';

const schema = RoleSchema.omit({ instrumentId: true }).strict();

export const update = ownerProcedure.input(schema).mutation(async ({ input: { playerId, id, ...data } }) => {
  const role = await prisma.role.update({
    where: {
      id
    },
    data,
    include: {
      player: {
        include: {
          presences: {
            include: {
              gig: gigIncludes
            }
          }
        }
      }
    }
  });

computePlayabilities(role.player.presences.map((presence) => presence.gig));

  return role;
});
