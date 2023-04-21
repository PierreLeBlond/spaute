import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
  const { playerId } = locals;

  if (!playerId) {
    return {};
  }

  return {
    playerId,
    href: url.href
  }
}