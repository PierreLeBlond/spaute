import * as z from "zod"
import { CompleteInstrument, RelatedInstrumentModel, CompletePlayer, RelatedPlayerModel } from "./index"

export const RoleModel = z.object({
  id: z.number().int(),
  playable: z.boolean(),
  instrumentId: z.number().int(),
  playerId: z.number().int(),
})

export interface CompleteRole extends z.infer<typeof RoleModel> {
  instrument: CompleteInstrument
  player: CompletePlayer
}

/**
 * RelatedRoleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRoleModel: z.ZodSchema<CompleteRole> = z.lazy(() => RoleModel.extend({
  instrument: RelatedInstrumentModel,
  player: RelatedPlayerModel,
}))
