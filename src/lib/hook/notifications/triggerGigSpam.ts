import { TriggerRecipientsTypeEnum } from "@novu/shared";
import { novu } from "$lib/novu";

export const triggerGigSpam = (data: {
  gigId: string,
  gigName: string,
  userId: string
}) => {
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