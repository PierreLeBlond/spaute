import { novu } from "$lib/novu";

export const triggerSignupEmail = (data: { email: string, password: string }) => {
  novu.trigger('signup', {
    to: {
      subscriberId: data.email,
      email: data.email
    },
    payload: {
      password: data.password,
    }
  });
}