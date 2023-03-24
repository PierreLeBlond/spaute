import { PresenceUpdateArgsSchema } from "$lib/generated/zod";
import { computePlayability } from "$lib/hook/computePlayability";
import prisma from "$lib/prisma";
import type { Prisma } from "@prisma/client";

export const update = async (formData: { [k: string]: FormDataEntryValue }) => {
  const args: Prisma.PresenceUpdateArgs = {
    data: {
      value: !!formData.presence
    },
    where: {
      id: Number(formData.presenceId)
    },
  }

  const result = PresenceUpdateArgsSchema.safeParse(args);

  if (!result.success) {
    const formated = result.error.format();
    const errors = formated._errors;

    return {
      data: args.data,
      errors
    }
  }

  const response = await prisma.presence.update(args);

  await computePlayability(response.gigId);
  return { success: true, response };
}