import { novu } from "$lib/novu";

export const triggerEmailVerificationEmail = (data: { userId: string, email: string, name: string, password: string }) => {
  novu.trigger('email-verification', {
    to: {
      subscriberId: data.userId,
      email: data.email
    },
    payload: {
      password: data.password,
      name: data.name
    }
  });
}