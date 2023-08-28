import { z } from 'zod';

export const presenceSchema = z.object({
  value: z.boolean(),
  gigId: z.string(),
  playerId: z.string()
});

export type PresenceSchema = typeof presenceSchema;
