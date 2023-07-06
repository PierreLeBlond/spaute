import { z } from "zod";

export const gigSchema = z.object({
  name: z.string().min(1, { message: 'Tout est dans le titre.' }).max(32),
  location: z.string().min(1, { message: 'Ou ça ou ça ?' }).max(60),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Date chelou...' }),
  time: z.string().regex(/^\d{2}:\d{2}$/, { message: 'Heure pas correcte...' }),
  description: z.string().max(320).nullable()
});

export const GigSchema = typeof gigSchema;