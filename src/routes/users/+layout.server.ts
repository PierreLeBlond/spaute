import { redirect } from '@sveltejs/kit';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();

  const user = session?.user;

  if (user) {
    throw redirect(302, '/');
  }

  return {
    tabs: [
      {
        href: '/users/login',
        key: '/users/login',
        label: 'connexion'
      },
      {
        href: '/users/signup',
        key: '/users/signup',
        label: 'inscription'
      }
    ],
    title: 'Spaute'
  };
};
