import * as z from "zod"
import { CompleteGig, RelatedGigModel, CompletePlayer, RelatedPlayerModel } from "./index"

export const PresenceModel = z.object({
  id: z.number().int(),
  value: z.boolean(),
  gigId: z.number().int(),
  playerId: z.number().int(),
})

export interface CompletePresence extends z.infer<typeof PresenceModel> {
  gig: CompleteGig
  player: CompletePlayer
}

/**
 * RelatedPresenceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPresenceModel: z.ZodSchema<CompletePresence> = z.lazy(() => PresenceModel.extend({
  gig: RelatedGigModel,
  player: RelatedPlayerModel,
}))
