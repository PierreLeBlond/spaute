import { NOVU_API_KEY } from "$env/static/private";
import { Novu } from "@novu/node";

export const triggerEmailVerification = (data: { userId: string, email: string, name: string, token: string }) => {
  const novu = new Novu(NOVU_API_KEY);

  novu.trigger('email-validation', {
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