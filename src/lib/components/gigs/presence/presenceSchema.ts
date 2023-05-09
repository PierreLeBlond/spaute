import { z } from "zod";

export const presenceSchema = z.object({
  value: z.boolean(),
  gigId: z.number(),
  playerId: z.number()
});

export type PresenceSchema = typeof presenceSchema;
