import { redirect, type Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  const playerId = cookies['playerId'];

  if (playerId) {
    event.locals.playerId = playerId;
  }

  const fromPathname = event.url.pathname;
  if (fromPathname != '/logout' && fromPathname != '/login') {
    event.cookies.set('fromPathname', fromPathname, { path: '/' });
  }

  const redirectToLogin = !playerId && fromPathname != '/login';

  if (redirectToLogin) {
    throw redirect(302, '/login');
  }

  return resolve(event);
}