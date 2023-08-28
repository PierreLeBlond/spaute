import type { LayoutServerLoad } from './$types';

export const load = (({ cookies }) => {
  const fromPathname = cookies.get('fromPathname') ?? '/';
  return {
    fromPathname
  };
}) satisfies LayoutServerLoad;
