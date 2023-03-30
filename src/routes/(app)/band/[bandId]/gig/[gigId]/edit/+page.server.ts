import { GigUpdateArgsSchema } from '$lib/generated/zod';
import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client';
import { error, redirect } from '@sveltejs/kit';
import { DateTime } from 'luxon';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    index: 203
  }
}

export const actions: Actions = {
  update: async ({ request, params }) => {
    const { gigId } = params;
    const formData = Object.fromEntries(await request.formData());

    const date = DateTime.fromISO(`${formData["date"]}T${formData["time"]}`).toISO();

    const data = {
      name: formData["name"] as string,
      location: formData["location"] as string,
      description: formData["description"] as string,
      date
    }

    const args: Prisma.GigUpdateArgs = {
      data,
      where: {
        id: Number(gigId)
      },
    }

    const result = GigUpdateArgsSchema.safeParse(args);

    if (!result.success) {
      const formated = result.error.format();

      const errors = {
        name: formated.data?.name?._errors.pop(),
        location: formated.data?.location?._errors.pop(),
        date: formated.data?.date?._errors.pop(),
        description: formated.data?.description?._errors.pop()
      }

      return {
        success: false,
        message: 'Impossible de mettre à jour :(',
        updateData: data,
        updateErrors: errors
      }
    }

    const response = await prisma.gig.update(args);

    return { success: true, message: 'presta mise à jour :)', response };
  },
  delete: async ({ url, params, locals, request }) => {
    const { playerId } = locals;
    const { bandId } = params;
    const gigId = url.searchParams.get('gigId');
    const formData = Object.fromEntries(await request.formData());
    const gig = await prisma.gig.findUniqueOrThrow({
      where: {
        id: Number(gigId)
      },
      include: {
        organizerRoles: {
          include: {
            player: true
          }
        },
        band: {
          include: {
            adminRoles: {
              include: {
                player: true
              }
            }
          }
        }
      }
    })

    const data = {
      confirm: formData['confirm'] as string
    }

    if (formData['confirm'] != gig.name) {
      return {
        success: false,
        message: 'Impossible de mettre à jour :(',
        confirmData: data,
        confirmErrors: {
          confirm: 'Ne correspond pas au titre'
        }
      }
    }

    const isAdmin = gig && gig.band.adminRoles.some(adminRole => adminRole.player.id == Number(playerId));
    const isOrganizer = gig && gig.organizerRoles.some(organizerRole => organizerRole.player.id == Number(playerId));

    if (!isOrganizer && !isAdmin) {
      throw error(404);
    }

    await prisma.gig.delete({
      where: { id: Number(gigId) },
    });

    throw redirect(303, `/band/${bandId}/gigs`);
  }
}

