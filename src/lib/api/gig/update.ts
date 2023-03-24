import { PresenceUpdateArgsSchema } from "$lib/generated/zod";
import prisma from "$lib/prisma";
import type { Prisma } from "@prisma/client";

export const update = async (formData: { [k: string]: FormDataEntryValue }) => {
  const args: Prisma.PresenceUpdateArgs = {
    data: {
      value: !!formData["presence"]
    },
    where: {
      id: Number(formData["presenceId"])
    },
  }

  const result = PresenceUpdateArgsSchema.safeParse(args);

  if (!result.success) {
    const formated = result.error.format();
    const errors = formated._errors;

    return {
      success: false,
      message: 'Impossible de mettre à jour :(',
      data: args.data,
      errors
    }
  }

  const response = await prisma.presence.update(args);

  return { success: true, message: 'participation mise à jour :)', response };
}