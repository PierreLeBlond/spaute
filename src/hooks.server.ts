import { redirect, type Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  const playerId = cookies.playerId;

  event.locals.playerId = playerId;

  const redirectToLogin = !playerId && event.url.pathname != '/login';

  if (redirectToLogin) {
    const fromPathname = event.url.pathname;
    event.cookies.set('fromPathname', fromPathname, { path: '/' });
    throw redirect(302, '/login');
  }

  return resolve(event);
}