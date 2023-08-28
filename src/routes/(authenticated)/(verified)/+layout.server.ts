import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  return {
    tabs: [
      {
        href: '/bands',
        key: '/band',
        label: 'Fanfares'
      },
      {
        href: '/gigs',
        key: '/gig',
        label: 'Prestas'
      },
      {
        href: '/roles',
        key: '/role',
        label: 'Pupitres'
      }
    ]
  };
};
