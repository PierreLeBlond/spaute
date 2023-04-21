import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import * as cookie from 'cookie';
import { createTRPCHandle } from 'trpc-sveltekit';
import { dev } from '$app/environment';

const authHandle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  const playerId = cookies['playerId'];

  if (playerId) {
    event.locals.playerId = playerId;
  }

  const fromPathname = event.url.pathname;
  if (fromPathname != '/logout' && fromPathname != '/login') {
    event.cookies.set('fromPathname', fromPathname, { path: '/' });
  }

  const redirectToLogin = !playerId && !fromPathname.startsWith('/login');

  if (redirectToLogin) {
    throw redirect(302, '/login');
  }

  return resolve(event);
}

const trpcHandle: Handle = createTRPCHandle({
  router, createContext, onError: dev
    ? ({ type, path, error }) => console.error(`Encountered error while trying to process ${type} @ ${path}:`, error)
    : undefined
});

export const handle = sequence(authHandle, trpcHandle);