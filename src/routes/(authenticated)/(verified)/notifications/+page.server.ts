import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
  const fromPathname = cookies.get('fromPathname');

  return {
    fromPathname,
    index: 10000000,
    tabs: [
      {
        href: '/notifications',
        key: '/notifications',
        label: 'notifications'
      }
    ],
    title: 'Cloche ! cloche ! cloche !'
  };
};
