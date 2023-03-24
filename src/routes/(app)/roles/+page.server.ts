import { RoleCreateInputSchema, RoleUpdateArgsSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma'
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
  const { playerId } = await parent();
  const instruments = await prisma.instrument.findMany();
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
    instruments,
    roles
  }
}

export const actions: Actions = {
  add: async ({ locals, request }) => {
    const { playerId } = locals;
    const formData = Object.fromEntries(await request.formData());

    const data: Prisma.RoleCreateInput = {
      player: {
        connect: {
          id: Number(playerId)
        }
      },
      instrument: {
        connect: {
          id: Number(formData['instrumentId'])
        }
      },
      playable: !!formData['playable']
    }

    const result = RoleCreateInputSchema.safeParse(data);

    if (!result.success) {
      const formated = result.error.format();
      const errors = formated._errors;

      return {
        success: false,
        message: 'Pupitre non valide :(',
        data,
        errors
      }
    }

    const response = await prisma.role.create({
      data
    });


    return { success: true, message: 'Pupitre créé :)', response };
  },
  update: async ({ request }) => {
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