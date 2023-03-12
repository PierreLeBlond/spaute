import * as z from "zod"
import { CompletePresence, RelatedPresenceModel, CompleteBand, RelatedBandModel } from "./index"

export const GigModel = z.object({
  id: z.number().int(),
  name: z.string(),
  bandId: z.number().int(),
  date: z.date(),
  location: z.string(),
})

export interface CompleteGig extends z.infer<typeof GigModel> {
  presences: CompletePresence[]
  band: CompleteBand
}

/**
 * RelatedGigModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGigModel: z.ZodSchema<CompleteGig> = z.lazy(() => GigModel.extend({
  presences: RelatedPresenceModel.array(),
  band: RelatedBandModel,
}))
