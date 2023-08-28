import { GigSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { organizerProcedure } from '$lib/trpc/procedures/organizerProcedure';
import { z } from 'zod';

const schema = GigSchema.omit({ playable: true, bandId: true, id: true }).extend({ gigId: z.string() }).strict();

export const update = organizerProcedure.input(schema).mutation(async ({ input: { gigId, ...data } }) =>
  prisma.gig.update({
    where: {
      id: gigId
    },
    data
  })
);
