import { novu } from "$lib/novu";

export const triggerPasswordResetEmail = (data: { userId: string, email: string, name: string, password: string }) => {

  novu.trigger('password-reset', {
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