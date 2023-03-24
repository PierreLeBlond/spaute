import { PresenceCreateInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import type { Prisma } from "@prisma/client";

export const join = async (gigId: string, playerId: string, formData: { [k: string]: FormDataEntryValue }) => {
  const data: Prisma.PresenceCreateInput = {
    gig: {
      connect: {
        id: Number(gigId)
      }
    },
    player: {
      connect: {
        id: Number(playerId)
      }
    },
    value: !!formData["available"]
  }

  const result = PresenceCreateInputSchema.safeParse(data);

  if (!result.success) {
    const formated = result.error.format();
    const errors = formated._errors;

    return {
      data,
      errors
    }
  }

  const response = await prisma.presence.create({
    data
  });

  return { success: true, response };
}
