import { NOVU_API_KEY } from "$env/static/private";
import { Novu } from "@novu/node";

export const addSubscriber = (data: { userId: string, email: string }) => {
  const novu = new Novu(NOVU_API_KEY);

  return novu.subscribers.identify(data.userId, {
    email: data.email,
    locale: 'fr'
  })
}