import { novu } from "$lib/novu";

export const removeSubscriberFromGig = (data: { userId: string, gigId: string }) => {
  const spamTopicKey = `gig:spam:${data.gigId}`;

  return novu.topics.removeSubscribers(spamTopicKey, {
    subscribers: [data.userId],
  });
}