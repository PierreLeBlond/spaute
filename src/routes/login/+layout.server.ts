import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
  if (locals.playerId) {
    throw redirect(302, '/');
  }

  return {
    tabs: [
      {
        href: '/login',
        key: '/login',
        label: 'login'
      }
    ],
    title: 'Spaute'
  }
};