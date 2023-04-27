import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createTRPCHandle } from 'trpc-sveltekit';
import { dev } from '$app/environment';
import { auth } from "$lib/lucia";

const authHandle: Handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);

  const { user } = await event.locals.auth.validateUser();

  event.locals.user = user;

  const isPrivatePage = event.route.id?.startsWith('/(app)');

  if (isPrivatePage) {
    const fromPathname = event.url.pathname;
    event.cookies.set('fromPathname', fromPathname, { path: '/' });
  }

  const redirectToLogin = !user && isPrivatePage;

  if (redirectToLogin) {
    throw redirect(302, '/users/login');
  }

  return resolve(event);
}

const trpcHandle: Handle = createTRPCHandle({
  router, createContext, onError: dev
    ? ({ type, path, error }) => console.error(`Encountered error while trying to process ${type} @ ${path}:`, error)
    : undefined
});

export const handle = sequence(authHandle, trpcHandle);