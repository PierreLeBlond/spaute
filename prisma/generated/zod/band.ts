import * as z from "zod"
import { CompletePlayer, RelatedPlayerModel, CompleteGig, RelatedGigModel } from "./index"

export const BandModel = z.object({
  id: z.number().int(),
  name: z.string(),
})

export interface CompleteBand extends z.infer<typeof BandModel> {
  players: CompletePlayer[]
  gigs: CompleteGig[]
}

/**
 * RelatedBandModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBandModel: z.ZodSchema<CompleteBand> = z.lazy(() => BandModel.extend({
  players: RelatedPlayerModel.array(),
  gigs: RelatedGigModel.array(),
}))
