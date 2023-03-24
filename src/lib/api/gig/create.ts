import { GigCreateInputSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import type { Prisma } from "@prisma/client";

export const create = async (playerId: string, bandId: string, formData: { [k: string]: FormDataEntryValue }) => {

  const data: Prisma.GigCreateInput = {
    band: {
      connect: {
        id: Number(bandId),
      }
    },
    presences: {
      create: {
        playerId: Number(playerId),
        value: true
      }
    },
    name: formData["name"] as string,
    location: formData["location"] as string,
    date: new Date(formData["date"] as string)
  }

  const result = GigCreateInputSchema.safeParse(data);

  if (!result.success) {
    const formated = result.error.format();
    const errors = {
      name: formated.name?._errors.pop(),
      location: formated.location?._errors.pop(),
      date: formated.date?._errors.pop(),
    }

    return {
      success: false,
      message: 'Presta non valide :(',
      data,
      errors
    }
  }

  const response = await prisma.gig.create({ data });
  return { success: true, message: 'Presta créée :)', response };
}