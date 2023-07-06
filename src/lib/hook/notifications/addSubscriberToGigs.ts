import { NOVU_API_KEY } from "$env/static/private";
import { Novu } from "@novu/node";

export const addSubscriberToGigs = (data: { gigIds: string[], userId: string }) => {
  const novu = new Novu(NOVU_API_KEY);

  return Promise.all(
    data.gigIds
      .map(gigId => novu.topics.addSubscribers(`gig:spam:${gigId}`, { subscribers: [data.userId] }))
  );
}