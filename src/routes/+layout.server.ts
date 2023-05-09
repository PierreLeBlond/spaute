import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
  return {
    href: url.href
  }
};