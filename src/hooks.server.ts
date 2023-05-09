import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { redirect, type Handle, type HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createTRPCHandle } from 'trpc-sveltekit';
import { dev } from '$app/environment';
import { auth } from "$lib/lucia";

const authHandle: Handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);

  const { user } = await event.locals.auth.validateUser();

  event.locals.user = user;

  const isPrivatePage = event.route.id?.startsWith('/(authenticated)/(verified)');

  if (isPrivatePage) {
    const fromPathname = event.url.pathname;
    event.cookies.set('fromPathname', fromPathname, { path: '/' });
  }

  const redirectToEmailVerification = user && !user.emailVerified && isPrivatePage;

  if (redirectToEmailVerification) {
    throw redirect(302, '/email-verification');
  }

  const redirectToLogin = !user && isPrivatePage;

  if (redirectToLogin) {
    throw redirect(302, '/users/login');
  }

  return resolve(event);
}

const trpcHandle: Handle = createTRPCHandle({
  router, createContext
});

export const handle = sequence(authHandle, trpcHandle);

export const handleError: HandleServerError = (input) => {

  const error = input.error as App.Error;

  if (!dev) {
    return {
      message: 'Unexpected error as occured',
      code: error?.code ?? 'UNKNOWN'
    };
  }

  console.error(`Unexpected error has occured: ${error.message}`);

  return {
    message: error.message,
    code: error?.code ?? 'UNKNOWN'
  }
}