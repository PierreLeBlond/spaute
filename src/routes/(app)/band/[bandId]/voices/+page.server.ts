import prisma from '$lib/prisma'
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { bandId } = params;
  const voices = await prisma.voice.findMany({
    where: {
      bandId: Number(bandId)
    },
    include: {
      instrument: true
    }
  });
  return {
    voices,
    index: 300
  }
}


export const actions: Actions = {
  delete: async ({ url, locals }) => {
    const { playerId } = locals;
    const voiceId = url.searchParams.get('voiceId');
    const voice = await prisma.voice.findUnique({
      where: {
        id: Number(voiceId)
      },
      include: {
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
    });

    const isAdmin = voice && voice.band.adminRoles.some(adminRole => adminRole.player.id == Number(playerId));

    if (!isAdmin) {
      throw error(401);
    }

    const response = await prisma.voice.delete({
      where: { id: Number(voiceId) }
    });

    return { success: true, message: 'Pupitre supprimé :)', response };
  }

}