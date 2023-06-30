import { NOVU_API_KEY } from "$env/static/private";
import { Novu } from "@novu/node";

export const triggerPasswordReset = (data: { userId: string, email: string, name: string, token: string }) => {

  const novu = new Novu(NOVU_API_KEY);
  novu.trigger('password-reset', {
    to: {
      subscriberId: data.userId,
      email: data.email
    },
    payload: {
      password: data.token,
      name: data.name
    }
  });
}