import { novu } from "$lib/novu";

export const addSubscriberToGigs = (data: { gigIds: string[], userId: string }) => {
  return Promise.all(
    data.gigIds
      .map(gigId => novu.topics.addSubscribers(`gig:spam:${gigId}`, { subscribers: [data.userId] }))
  );
}