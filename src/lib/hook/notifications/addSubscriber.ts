import { novu } from '$lib/novu';

export const addSubscriber = (data: { userId: string; email: string }) => {
  return novu.subscribers.identify(data.userId, {
    email: data.email,
    locale: 'fr'
  });
};
