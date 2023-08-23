import { GigWhereUniqueInputSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import { verifiedProcedure } from '$lib/trpc/procedures/verifiedProcedure';

export const read = verifiedProcedure.input(GigWhereUniqueInputSchema).query(async ({ input }) =>
  prisma.gig.findUniqueOrThrow({
    where: input,
    include: {
      band: true,
      presences: {
        include: {
          player: true
        }
      },
      currentFormation: {
        include: {
          formationVoices: {
            include: {
              formationVoicePresences: {
                include: {
                  presence: {
                    include: {
                      player: true
                    }
                  }
                }
              },
              instrument: true
            }
          },
          formationUndefinedVoicePresences: {
            include: {
              presence: {
                include: {
                  player: true
                }
              }
            }
          }
        }
      }
    }
  })
);
