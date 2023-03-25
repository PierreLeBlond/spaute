import { RoleUpdateArgsSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
  const { playerId } = await parent();
  const roles = await prisma.role.findMany({
    where: {
      playerId: Number(playerId)
    },
    include: {
      instrument: true
    },
    orderBy: {
      id: 'desc'
    }
  });
  return {
    roles,
    index: 30
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    const args: Prisma.RoleUpdateArgs = {
      where: {
        id: Number(formData['roleId'])
      },
      data: {
        playable: !!formData['playable']
      }
    }

    const result = RoleUpdateArgsSchema.safeParse(args);

    if (!result.success) {
      const formated = result.error.format();
      const errors = formated._errors;

      return {
        success: false,
        message: 'Pupitre non valide :(',
        data: args.data,
        errors
      }
    }

    const response = await prisma.role.update(
      args
    );

    return { success: true, message: 'Pupitre mis à jour :)', response };
  }
}