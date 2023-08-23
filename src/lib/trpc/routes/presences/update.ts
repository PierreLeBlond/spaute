import { PresenceSchema } from '$lib/generated/zod';
import { computePlayability, gigIncludes } from '$lib/hook/computePlayability';
import prisma from '$lib/prisma';
import { ownerProcedure } from '$lib/trpc/procedures/ownerProcedure';

const schema = PresenceSchema.omit({ id: true, isOrganizer: true }).strict();

export const update = ownerProcedure.input(schema).mutation(async ({ input: { playerId, gigId, ...data } }) => {
  const presence = await prisma.presence.update({
    where: {
      gigId_playerId: {
        gigId,
        playerId
      }
    },
    data,
    include: {
      gig: gigIncludes
    }
  });

  await computePlayability(presence.gig);

  return presence;
});
