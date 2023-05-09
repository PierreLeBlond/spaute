import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  return {
    tabs: [
      {
        href: '/bands',
        key: '/band',
        label: 'mes fanfares'
      },
      {
        href: '/gigs',
        key: '/gig',
        label: 'mes prestas'
      },
      {
        href: '/roles',
        key: '/role',
        label: 'mes pupitres'
      }
    ]
  }
};