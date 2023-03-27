import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => ({
  tabs: [
    {
      href: '/login',
      key: '/login',
      label: 'login'
    }
  ],
  title: 'Spaute',
  index: 1
});