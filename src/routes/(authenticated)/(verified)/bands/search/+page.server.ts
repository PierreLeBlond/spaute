import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    index: 12,
    nav: {
      return: '/bands'
    }
  };
};
