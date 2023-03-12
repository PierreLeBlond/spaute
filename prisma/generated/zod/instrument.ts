import * as z from "zod"
import { CompleteRole, RelatedRoleModel } from "./index"

export const InstrumentModel = z.object({
  id: z.number().int(),
  name: z.string(),
})

export interface CompleteInstrument extends z.infer<typeof InstrumentModel> {
  role?: CompleteRole | null
}

/**
 * RelatedInstrumentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedInstrumentModel: z.ZodSchema<CompleteInstrument> = z.lazy(() => InstrumentModel.extend({
  role: RelatedRoleModel.nullish(),
}))
