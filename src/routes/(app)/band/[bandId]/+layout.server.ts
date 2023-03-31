import prisma from "$lib/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, params }) => {
  const { playerId } = locals;
  const { bandId } = params;
  const band = await prisma.band.findUniqueOrThrow({
    where: {
      id: Number(bandId)
    },
    include: {
      adminRoles: {
        where: {
          playerId: Number(playerId)
        }
      }
    }
  });
  return {
    band,
    isAdmin: band.adminRoles.length != 0,
    title: band.name,
    backPathname: '/bands',
    backName: 'fanfares',
    tabs: [
      {
        href: `/band/${bandId}/players`,
        key: `/band/${bandId}/player`,
        label: 'ses musiciens'
      },
      {
        href: `/band/${bandId}/gigs`,
        key: `/band/${bandId}/gig`,
        label: 'ses prestas'
      },
      {
        href: `/band/${bandId}/voices`,
        key: `/band/${bandId}/voice`,
        label: 'ses pupitres'
      }
    ]
  };
}
