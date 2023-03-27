import prisma from "$lib/prisma";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params }) => {
  const { bandId } = params;
  const band = await prisma.band.findUniqueOrThrow({
    where: {
      id: Number(bandId)
    }
  });
  return {
    band,
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
