import * as z from "zod"
import { CompletePresence, RelatedPresenceModel, CompleteRole, RelatedRoleModel, CompleteBand, RelatedBandModel } from "./index"

export const PlayerModel = z.object({
  id: z.number().int(),
  name: z.string(),
  bandId: z.number().int(),
})

export interface CompletePlayer extends z.infer<typeof PlayerModel> {
  presences: CompletePresence[]
  roles: CompleteRole[]
  band: CompleteBand
}

/**
 * RelatedPlayerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPlayerModel: z.ZodSchema<CompletePlayer> = z.lazy(() => PlayerModel.extend({
  presences: RelatedPresenceModel.array(),
  roles: RelatedRoleModel.array(),
  band: RelatedBandModel,
}))
