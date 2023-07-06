import { Novu } from "@novu/node";
import { NOVU_API_KEY } from "$env/static/private";
import { TriggerRecipientsTypeEnum } from "@novu/shared";

export const triggerGigSpam = (data: {
  gigId: string,
  gigName: string,
  userId: string
}) => {
  const novu = new Novu(NOVU_API_KEY);
  const spamTopicKey = `gig:spam:${data.gigId}`;

  return novu.trigger('spam-gig', {
    to: [{ type: TriggerRecipientsTypeEnum.TOPIC, topicKey: spamTopicKey }],
    payload: {
      gigId: data.gigId,
      gigName: data.gigName
    },
    actor: { subscriberId: data.userId }
  });
}