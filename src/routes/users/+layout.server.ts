import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (user) {
    throw redirect(302, "/gigs");
  }

  return {
    tabs: [
      {
        href: '/users/login',
        key: '/users/login',
        label: 'login'
      },
      {
        href: '/users/signup',
        key: '/users/signup',
        label: 'signup'
      }
    ],
    title: 'Spaute'
  }
};