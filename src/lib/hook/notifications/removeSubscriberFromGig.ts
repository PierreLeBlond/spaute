import { NOVU_API_KEY } from "$env/static/private";
import { Novu } from "@novu/node";

export const removeSubscriberFromGig = (data: { userId: string, gigId: string }) => {
  const novu = new Novu(NOVU_API_KEY);
  const spamTopicKey = `gig:spam:${data.gigId}`;

  return novu.topics.removeSubscribers(spamTopicKey, {
    subscribers: [data.userId],
  });
}