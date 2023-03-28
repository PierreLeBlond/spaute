import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AdminRoleScalarFieldEnumSchema = z.enum(['id','bandId','playerId']);

export const BandScalarFieldEnumSchema = z.enum(['id','name']);

export const GigScalarFieldEnumSchema = z.enum(['id','name','bandId','date','location','playable']);

export const InstrumentScalarFieldEnumSchema = z.enum(['id','name']);

export const OrganizerRoleScalarFieldEnumSchema = z.enum(['id','gigId','playerId']);

export const PlayerScalarFieldEnumSchema = z.enum(['id','name']);

export const PresenceScalarFieldEnumSchema = z.enum(['id','value','gigId','playerId']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const RoleScalarFieldEnumSchema = z.enum(['id','playable','instrumentId','playerId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const VoiceScalarFieldEnumSchema = z.enum(['id','instrumentId','bandId']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BAND SCHEMA
/////////////////////////////////////////

export const BandSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32),
})

export type Band = z.infer<typeof BandSchema>

/////////////////////////////////////////
// PLAYER SCHEMA
/////////////////////////////////////////

export const PlayerSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1, { message: "J'ai pas compris." }).max(32),
})

export type Player = z.infer<typeof PlayerSchema>

/////////////////////////////////////////
// GIG SCHEMA
/////////////////////////////////////////

export const GigSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1, { message: "C\'est vide :(" }).max(32),
  bandId: z.number().int(),
  date: z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),
  location: z.string().min(1, { message: "Dans ton c** ?" }).max(60),
  playable: z.boolean(),
})

export type Gig = z.infer<typeof GigSchema>

/////////////////////////////////////////
// PRESENCE SCHEMA
/////////////////////////////////////////

export const PresenceSchema = z.object({
  id: z.number().int(),
  value: z.boolean(),
  gigId: z.number().int(),
  playerId: z.number().int(),
})

export type Presence = z.infer<typeof PresenceSchema>

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  id: z.number().int(),
  playable: z.boolean(),
  instrumentId: z.number().int(),
  playerId: z.number().int(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// INSTRUMENT SCHEMA
/////////////////////////////////////////

export const InstrumentSchema = z.object({
  id: z.number().int(),
  /**
   * .min(1, { message: "Ce truc à bien un nom ?" }).max(32)
   */
  name: z.string(),
})

export type Instrument = z.infer<typeof InstrumentSchema>

/////////////////////////////////////////
// VOICE SCHEMA
/////////////////////////////////////////

export const VoiceSchema = z.object({
  id: z.number().int(),
  instrumentId: z.number().int(),
  bandId: z.number().int(),
})

export type Voice = z.infer<typeof VoiceSchema>

/////////////////////////////////////////
// ORGANIZER ROLE SCHEMA
/////////////////////////////////////////

export const OrganizerRoleSchema = z.object({
  id: z.number().int(),
  gigId: z.number().int(),
  playerId: z.number().int(),
})

export type OrganizerRole = z.infer<typeof OrganizerRoleSchema>

/////////////////////////////////////////
// ADMIN ROLE SCHEMA
/////////////////////////////////////////

export const AdminRoleSchema = z.object({
  id: z.number().int(),
  bandId: z.number().int(),
  playerId: z.number().int(),
})

export type AdminRole = z.infer<typeof AdminRoleSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BAND
//------------------------------------------------------

export const BandIncludeSchema: z.ZodType<Prisma.BandInclude> = z.object({
  players: z.union([z.boolean(),z.lazy(() => PlayerFindManyArgsSchema)]).optional(),
  gigs: z.union([z.boolean(),z.lazy(() => GigFindManyArgsSchema)]).optional(),
  voices: z.union([z.boolean(),z.lazy(() => VoiceFindManyArgsSchema)]).optional(),
  adminRoles: z.union([z.boolean(),z.lazy(() => AdminRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BandCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BandArgsSchema: z.ZodType<Prisma.BandArgs> = z.object({
  select: z.lazy(() => BandSelectSchema).optional(),
  include: z.lazy(() => BandIncludeSchema).optional(),
}).strict();

export const BandCountOutputTypeArgsSchema: z.ZodType<Prisma.BandCountOutputTypeArgs> = z.object({
  select: z.lazy(() => BandCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BandCountOutputTypeSelectSchema: z.ZodType<Prisma.BandCountOutputTypeSelect> = z.object({
  players: z.boolean().optional(),
  gigs: z.boolean().optional(),
  voices: z.boolean().optional(),
  adminRoles: z.boolean().optional(),
}).strict();

export const BandSelectSchema: z.ZodType<Prisma.BandSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  players: z.union([z.boolean(),z.lazy(() => PlayerFindManyArgsSchema)]).optional(),
  gigs: z.union([z.boolean(),z.lazy(() => GigFindManyArgsSchema)]).optional(),
  voices: z.union([z.boolean(),z.lazy(() => VoiceFindManyArgsSchema)]).optional(),
  adminRoles: z.union([z.boolean(),z.lazy(() => AdminRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BandCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PLAYER
//------------------------------------------------------

export const PlayerIncludeSchema: z.ZodType<Prisma.PlayerInclude> = z.object({
  presences: z.union([z.boolean(),z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  bands: z.union([z.boolean(),z.lazy(() => BandFindManyArgsSchema)]).optional(),
  organizerRoles: z.union([z.boolean(),z.lazy(() => OrganizerRoleFindManyArgsSchema)]).optional(),
  adminRoles: z.union([z.boolean(),z.lazy(() => AdminRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PlayerCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PlayerArgsSchema: z.ZodType<Prisma.PlayerArgs> = z.object({
  select: z.lazy(() => PlayerSelectSchema).optional(),
  include: z.lazy(() => PlayerIncludeSchema).optional(),
}).strict();

export const PlayerCountOutputTypeArgsSchema: z.ZodType<Prisma.PlayerCountOutputTypeArgs> = z.object({
  select: z.lazy(() => PlayerCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PlayerCountOutputTypeSelectSchema: z.ZodType<Prisma.PlayerCountOutputTypeSelect> = z.object({
  presences: z.boolean().optional(),
  roles: z.boolean().optional(),
  bands: z.boolean().optional(),
  organizerRoles: z.boolean().optional(),
  adminRoles: z.boolean().optional(),
}).strict();

export const PlayerSelectSchema: z.ZodType<Prisma.PlayerSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  presences: z.union([z.boolean(),z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  bands: z.union([z.boolean(),z.lazy(() => BandFindManyArgsSchema)]).optional(),
  organizerRoles: z.union([z.boolean(),z.lazy(() => OrganizerRoleFindManyArgsSchema)]).optional(),
  adminRoles: z.union([z.boolean(),z.lazy(() => AdminRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PlayerCountOutputTypeArgsSchema)]).optional(),
}).strict()

// GIG
//------------------------------------------------------

export const GigIncludeSchema: z.ZodType<Prisma.GigInclude> = z.object({
  presences: z.union([z.boolean(),z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  organizerRoles: z.union([z.boolean(),z.lazy(() => OrganizerRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GigCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GigArgsSchema: z.ZodType<Prisma.GigArgs> = z.object({
  select: z.lazy(() => GigSelectSchema).optional(),
  include: z.lazy(() => GigIncludeSchema).optional(),
}).strict();

export const GigCountOutputTypeArgsSchema: z.ZodType<Prisma.GigCountOutputTypeArgs> = z.object({
  select: z.lazy(() => GigCountOutputTypeSelectSchema).nullish(),
}).strict();

export const GigCountOutputTypeSelectSchema: z.ZodType<Prisma.GigCountOutputTypeSelect> = z.object({
  presences: z.boolean().optional(),
  organizerRoles: z.boolean().optional(),
}).strict();

export const GigSelectSchema: z.ZodType<Prisma.GigSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  bandId: z.boolean().optional(),
  date: z.boolean().optional(),
  location: z.boolean().optional(),
  playable: z.boolean().optional(),
  presences: z.union([z.boolean(),z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  organizerRoles: z.union([z.boolean(),z.lazy(() => OrganizerRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GigCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRESENCE
//------------------------------------------------------

export const PresenceIncludeSchema: z.ZodType<Prisma.PresenceInclude> = z.object({
  gig: z.union([z.boolean(),z.lazy(() => GigArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

export const PresenceArgsSchema: z.ZodType<Prisma.PresenceArgs> = z.object({
  select: z.lazy(() => PresenceSelectSchema).optional(),
  include: z.lazy(() => PresenceIncludeSchema).optional(),
}).strict();

export const PresenceSelectSchema: z.ZodType<Prisma.PresenceSelect> = z.object({
  id: z.boolean().optional(),
  value: z.boolean().optional(),
  gigId: z.boolean().optional(),
  playerId: z.boolean().optional(),
  gig: z.union([z.boolean(),z.lazy(() => GigArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

// ROLE
//------------------------------------------------------

export const RoleIncludeSchema: z.ZodType<Prisma.RoleInclude> = z.object({
  instrument: z.union([z.boolean(),z.lazy(() => InstrumentArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

export const RoleArgsSchema: z.ZodType<Prisma.RoleArgs> = z.object({
  select: z.lazy(() => RoleSelectSchema).optional(),
  include: z.lazy(() => RoleIncludeSchema).optional(),
}).strict();

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  id: z.boolean().optional(),
  playable: z.boolean().optional(),
  instrumentId: z.boolean().optional(),
  playerId: z.boolean().optional(),
  instrument: z.union([z.boolean(),z.lazy(() => InstrumentArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

// INSTRUMENT
//------------------------------------------------------

export const InstrumentIncludeSchema: z.ZodType<Prisma.InstrumentInclude> = z.object({
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  voices: z.union([z.boolean(),z.lazy(() => VoiceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InstrumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const InstrumentArgsSchema: z.ZodType<Prisma.InstrumentArgs> = z.object({
  select: z.lazy(() => InstrumentSelectSchema).optional(),
  include: z.lazy(() => InstrumentIncludeSchema).optional(),
}).strict();

export const InstrumentCountOutputTypeArgsSchema: z.ZodType<Prisma.InstrumentCountOutputTypeArgs> = z.object({
  select: z.lazy(() => InstrumentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const InstrumentCountOutputTypeSelectSchema: z.ZodType<Prisma.InstrumentCountOutputTypeSelect> = z.object({
  roles: z.boolean().optional(),
  voices: z.boolean().optional(),
}).strict();

export const InstrumentSelectSchema: z.ZodType<Prisma.InstrumentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  voices: z.union([z.boolean(),z.lazy(() => VoiceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InstrumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// VOICE
//------------------------------------------------------

export const VoiceIncludeSchema: z.ZodType<Prisma.VoiceInclude> = z.object({
  instrument: z.union([z.boolean(),z.lazy(() => InstrumentArgsSchema)]).optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
}).strict()

export const VoiceArgsSchema: z.ZodType<Prisma.VoiceArgs> = z.object({
  select: z.lazy(() => VoiceSelectSchema).optional(),
  include: z.lazy(() => VoiceIncludeSchema).optional(),
}).strict();

export const VoiceSelectSchema: z.ZodType<Prisma.VoiceSelect> = z.object({
  id: z.boolean().optional(),
  instrumentId: z.boolean().optional(),
  bandId: z.boolean().optional(),
  instrument: z.union([z.boolean(),z.lazy(() => InstrumentArgsSchema)]).optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
}).strict()

// ORGANIZER ROLE
//------------------------------------------------------

export const OrganizerRoleIncludeSchema: z.ZodType<Prisma.OrganizerRoleInclude> = z.object({
  gig: z.union([z.boolean(),z.lazy(() => GigArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

export const OrganizerRoleArgsSchema: z.ZodType<Prisma.OrganizerRoleArgs> = z.object({
  select: z.lazy(() => OrganizerRoleSelectSchema).optional(),
  include: z.lazy(() => OrganizerRoleIncludeSchema).optional(),
}).strict();

export const OrganizerRoleSelectSchema: z.ZodType<Prisma.OrganizerRoleSelect> = z.object({
  id: z.boolean().optional(),
  gigId: z.boolean().optional(),
  playerId: z.boolean().optional(),
  gig: z.union([z.boolean(),z.lazy(() => GigArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

// ADMIN ROLE
//------------------------------------------------------

export const AdminRoleIncludeSchema: z.ZodType<Prisma.AdminRoleInclude> = z.object({
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

export const AdminRoleArgsSchema: z.ZodType<Prisma.AdminRoleArgs> = z.object({
  select: z.lazy(() => AdminRoleSelectSchema).optional(),
  include: z.lazy(() => AdminRoleIncludeSchema).optional(),
}).strict();

export const AdminRoleSelectSchema: z.ZodType<Prisma.AdminRoleSelect> = z.object({
  id: z.boolean().optional(),
  bandId: z.boolean().optional(),
  playerId: z.boolean().optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const BandWhereInputSchema: z.ZodType<Prisma.BandWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BandWhereInputSchema),z.lazy(() => BandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BandWhereInputSchema),z.lazy(() => BandWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  players: z.lazy(() => PlayerListRelationFilterSchema).optional(),
  gigs: z.lazy(() => GigListRelationFilterSchema).optional(),
  voices: z.lazy(() => VoiceListRelationFilterSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleListRelationFilterSchema).optional()
}).strict();

export const BandOrderByWithRelationInputSchema: z.ZodType<Prisma.BandOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  players: z.lazy(() => PlayerOrderByRelationAggregateInputSchema).optional(),
  gigs: z.lazy(() => GigOrderByRelationAggregateInputSchema).optional(),
  voices: z.lazy(() => VoiceOrderByRelationAggregateInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BandWhereUniqueInputSchema: z.ZodType<Prisma.BandWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32).optional()
}).strict();

export const BandOrderByWithAggregationInputSchema: z.ZodType<Prisma.BandOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BandCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BandAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BandMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BandMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BandSumOrderByAggregateInputSchema).optional()
}).strict();

export const BandScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BandScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BandScalarWhereWithAggregatesInputSchema),z.lazy(() => BandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BandScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BandScalarWhereWithAggregatesInputSchema),z.lazy(() => BandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PlayerWhereInputSchema: z.ZodType<Prisma.PlayerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlayerWhereInputSchema),z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerWhereInputSchema),z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  presences: z.lazy(() => PresenceListRelationFilterSchema).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  bands: z.lazy(() => BandListRelationFilterSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleListRelationFilterSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleListRelationFilterSchema).optional()
}).strict();

export const PlayerOrderByWithRelationInputSchema: z.ZodType<Prisma.PlayerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  presences: z.lazy(() => PresenceOrderByRelationAggregateInputSchema).optional(),
  roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  bands: z.lazy(() => BandOrderByRelationAggregateInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleOrderByRelationAggregateInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PlayerWhereUniqueInputSchema: z.ZodType<Prisma.PlayerWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const PlayerOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlayerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PlayerCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PlayerAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PlayerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PlayerMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PlayerSumOrderByAggregateInputSchema).optional()
}).strict();

export const PlayerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlayerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema),z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema),z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const GigWhereInputSchema: z.ZodType<Prisma.GigWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GigWhereInputSchema),z.lazy(() => GigWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GigWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GigWhereInputSchema),z.lazy(() => GigWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  playable: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  presences: z.lazy(() => PresenceListRelationFilterSchema).optional(),
  band: z.union([ z.lazy(() => BandRelationFilterSchema),z.lazy(() => BandWhereInputSchema) ]).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleListRelationFilterSchema).optional()
}).strict();

export const GigOrderByWithRelationInputSchema: z.ZodType<Prisma.GigOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional(),
  presences: z.lazy(() => PresenceOrderByRelationAggregateInputSchema).optional(),
  band: z.lazy(() => BandOrderByWithRelationInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleOrderByRelationAggregateInputSchema).optional()
}).strict();

export const GigWhereUniqueInputSchema: z.ZodType<Prisma.GigWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const GigOrderByWithAggregationInputSchema: z.ZodType<Prisma.GigOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GigCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GigAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GigMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GigMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GigSumOrderByAggregateInputSchema).optional()
}).strict();

export const GigScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GigScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GigScalarWhereWithAggregatesInputSchema),z.lazy(() => GigScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GigScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GigScalarWhereWithAggregatesInputSchema),z.lazy(() => GigScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bandId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  playable: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const PresenceWhereInputSchema: z.ZodType<Prisma.PresenceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PresenceWhereInputSchema),z.lazy(() => PresenceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PresenceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PresenceWhereInputSchema),z.lazy(() => PresenceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gig: z.union([ z.lazy(() => GigRelationFilterSchema),z.lazy(() => GigWhereInputSchema) ]).optional(),
  player: z.union([ z.lazy(() => PlayerRelationFilterSchema),z.lazy(() => PlayerWhereInputSchema) ]).optional(),
}).strict();

export const PresenceOrderByWithRelationInputSchema: z.ZodType<Prisma.PresenceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  gig: z.lazy(() => GigOrderByWithRelationInputSchema).optional(),
  player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional()
}).strict();

export const PresenceWhereUniqueInputSchema: z.ZodType<Prisma.PresenceWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  gigId_playerId: z.lazy(() => PresenceGigIdPlayerIdCompoundUniqueInputSchema).optional()
}).strict();

export const PresenceOrderByWithAggregationInputSchema: z.ZodType<Prisma.PresenceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PresenceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PresenceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PresenceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PresenceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PresenceSumOrderByAggregateInputSchema).optional()
}).strict();

export const PresenceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PresenceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema),z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema),z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  gigId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const RoleWhereInputSchema: z.ZodType<Prisma.RoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playable: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrument: z.union([ z.lazy(() => InstrumentRelationFilterSchema),z.lazy(() => InstrumentWhereInputSchema) ]).optional(),
  player: z.union([ z.lazy(() => PlayerRelationFilterSchema),z.lazy(() => PlayerWhereInputSchema) ]).optional(),
}).strict();

export const RoleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  instrument: z.lazy(() => InstrumentOrderByWithRelationInputSchema).optional(),
  player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional()
}).strict();

export const RoleWhereUniqueInputSchema: z.ZodType<Prisma.RoleWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  instrumentId_playerId: z.lazy(() => RoleInstrumentIdPlayerIdCompoundUniqueInputSchema).optional()
}).strict();

export const RoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RoleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RoleSumOrderByAggregateInputSchema).optional()
}).strict();

export const RoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  playable: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const InstrumentWhereInputSchema: z.ZodType<Prisma.InstrumentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InstrumentWhereInputSchema),z.lazy(() => InstrumentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstrumentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstrumentWhereInputSchema),z.lazy(() => InstrumentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  voices: z.lazy(() => VoiceListRelationFilterSchema).optional()
}).strict();

export const InstrumentOrderByWithRelationInputSchema: z.ZodType<Prisma.InstrumentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  voices: z.lazy(() => VoiceOrderByRelationAggregateInputSchema).optional()
}).strict();

export const InstrumentWhereUniqueInputSchema: z.ZodType<Prisma.InstrumentWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
}).strict();

export const InstrumentOrderByWithAggregationInputSchema: z.ZodType<Prisma.InstrumentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InstrumentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InstrumentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InstrumentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InstrumentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InstrumentSumOrderByAggregateInputSchema).optional()
}).strict();

export const InstrumentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InstrumentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema),z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema),z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const VoiceWhereInputSchema: z.ZodType<Prisma.VoiceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VoiceWhereInputSchema),z.lazy(() => VoiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoiceWhereInputSchema),z.lazy(() => VoiceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrument: z.union([ z.lazy(() => InstrumentRelationFilterSchema),z.lazy(() => InstrumentWhereInputSchema) ]).optional(),
  band: z.union([ z.lazy(() => BandRelationFilterSchema),z.lazy(() => BandWhereInputSchema) ]).optional(),
}).strict();

export const VoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.VoiceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  instrument: z.lazy(() => InstrumentOrderByWithRelationInputSchema).optional(),
  band: z.lazy(() => BandOrderByWithRelationInputSchema).optional()
}).strict();

export const VoiceWhereUniqueInputSchema: z.ZodType<Prisma.VoiceWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const VoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.VoiceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VoiceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VoiceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VoiceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VoiceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VoiceSumOrderByAggregateInputSchema).optional()
}).strict();

export const VoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VoiceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VoiceScalarWhereWithAggregatesInputSchema),z.lazy(() => VoiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoiceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoiceScalarWhereWithAggregatesInputSchema),z.lazy(() => VoiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const OrganizerRoleWhereInputSchema: z.ZodType<Prisma.OrganizerRoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrganizerRoleWhereInputSchema),z.lazy(() => OrganizerRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizerRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizerRoleWhereInputSchema),z.lazy(() => OrganizerRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gig: z.union([ z.lazy(() => GigRelationFilterSchema),z.lazy(() => GigWhereInputSchema) ]).optional(),
  player: z.union([ z.lazy(() => PlayerRelationFilterSchema),z.lazy(() => PlayerWhereInputSchema) ]).optional(),
}).strict();

export const OrganizerRoleOrderByWithRelationInputSchema: z.ZodType<Prisma.OrganizerRoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  gig: z.lazy(() => GigOrderByWithRelationInputSchema).optional(),
  player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional()
}).strict();

export const OrganizerRoleWhereUniqueInputSchema: z.ZodType<Prisma.OrganizerRoleWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  gigId_playerId: z.lazy(() => OrganizerRoleGigIdPlayerIdCompoundUniqueInputSchema).optional()
}).strict();

export const OrganizerRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrganizerRoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrganizerRoleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrganizerRoleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrganizerRoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrganizerRoleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrganizerRoleSumOrderByAggregateInputSchema).optional()
}).strict();

export const OrganizerRoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrganizerRoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrganizerRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganizerRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizerRoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizerRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => OrganizerRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const AdminRoleWhereInputSchema: z.ZodType<Prisma.AdminRoleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AdminRoleWhereInputSchema),z.lazy(() => AdminRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminRoleWhereInputSchema),z.lazy(() => AdminRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  band: z.union([ z.lazy(() => BandRelationFilterSchema),z.lazy(() => BandWhereInputSchema) ]).optional(),
  player: z.union([ z.lazy(() => PlayerRelationFilterSchema),z.lazy(() => PlayerWhereInputSchema) ]).optional(),
}).strict();

export const AdminRoleOrderByWithRelationInputSchema: z.ZodType<Prisma.AdminRoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  band: z.lazy(() => BandOrderByWithRelationInputSchema).optional(),
  player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional()
}).strict();

export const AdminRoleWhereUniqueInputSchema: z.ZodType<Prisma.AdminRoleWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  bandId_playerId: z.lazy(() => AdminRoleBandIdPlayerIdCompoundUniqueInputSchema).optional()
}).strict();

export const AdminRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.AdminRoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AdminRoleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AdminRoleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AdminRoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AdminRoleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AdminRoleSumOrderByAggregateInputSchema).optional()
}).strict();

export const AdminRoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AdminRoleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AdminRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => AdminRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminRoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminRoleScalarWhereWithAggregatesInputSchema),z.lazy(() => AdminRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const BandCreateInputSchema: z.ZodType<Prisma.BandCreateInput> = z.object({
  name: z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32),
  players: z.lazy(() => PlayerCreateNestedManyWithoutBandsInputSchema).optional(),
  gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
  voices: z.lazy(() => VoiceCreateNestedManyWithoutBandInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateInputSchema: z.ZodType<Prisma.BandUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32),
  players: z.lazy(() => PlayerUncheckedCreateNestedManyWithoutBandsInputSchema).optional(),
  gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUpdateInputSchema: z.ZodType<Prisma.BandUpdateInput> = z.object({
  name: z.union([ z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => PlayerUpdateManyWithoutBandsNestedInputSchema).optional(),
  gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUpdateManyWithoutBandNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateInputSchema: z.ZodType<Prisma.BandUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => PlayerUncheckedUpdateManyWithoutBandsNestedInputSchema).optional(),
  gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandCreateManyInputSchema: z.ZodType<Prisma.BandCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32)
}).strict();

export const BandUpdateManyMutationInputSchema: z.ZodType<Prisma.BandUpdateManyMutationInput> = z.object({
  name: z.union([ z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BandUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlayerCreateInputSchema: z.ZodType<Prisma.PlayerCreateInput> = z.object({
  name: z.string().min(1, { message: "J'ai pas compris." }).max(32),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandCreateNestedManyWithoutPlayersInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1, { message: "J'ai pas compris." }).max(32),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedCreateNestedManyWithoutPlayersInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUpdateInputSchema: z.ZodType<Prisma.PlayerUpdateInput> = z.object({
  name: z.union([ z.string().min(1, { message: "J'ai pas compris." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUpdateManyWithoutPlayersNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "J'ai pas compris." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedUpdateManyWithoutPlayersNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerCreateManyInputSchema: z.ZodType<Prisma.PlayerCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1, { message: "J'ai pas compris." }).max(32)
}).strict();

export const PlayerUpdateManyMutationInputSchema: z.ZodType<Prisma.PlayerUpdateManyMutationInput> = z.object({
  name: z.union([ z.string().min(1, { message: "J'ai pas compris." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlayerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "J'ai pas compris." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GigCreateInputSchema: z.ZodType<Prisma.GigCreateInput> = z.object({
  name: z.string().min(1, { message: "C\'est vide :(" }).max(32),
  date: z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),
  location: z.string().min(1, { message: "Dans ton c** ?" }).max(60),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema),
  organizerRoles: z.lazy(() => OrganizerRoleCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUncheckedCreateInputSchema: z.ZodType<Prisma.GigUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1, { message: "C\'est vide :(" }).max(32),
  bandId: z.number().int(),
  date: z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),
  location: z.string().min(1, { message: "Dans ton c** ?" }).max(60),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUpdateInputSchema: z.ZodType<Prisma.GigUpdateInput> = z.object({
  name: z.union([ z.string().min(1, { message: "C\'est vide :(" }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string().min(1, { message: "Dans ton c** ?" }).max(60),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
  band: z.lazy(() => BandUpdateOneRequiredWithoutGigsNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateInputSchema: z.ZodType<Prisma.GigUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "C\'est vide :(" }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string().min(1, { message: "Dans ton c** ?" }).max(60),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigCreateManyInputSchema: z.ZodType<Prisma.GigCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1, { message: "C\'est vide :(" }).max(32),
  bandId: z.number().int(),
  date: z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),
  location: z.string().min(1, { message: "Dans ton c** ?" }).max(60),
  playable: z.boolean().optional()
}).strict();

export const GigUpdateManyMutationInputSchema: z.ZodType<Prisma.GigUpdateManyMutationInput> = z.object({
  name: z.union([ z.string().min(1, { message: "C\'est vide :(" }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string().min(1, { message: "Dans ton c** ?" }).max(60),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GigUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GigUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "C\'est vide :(" }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string().min(1, { message: "Dans ton c** ?" }).max(60),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceCreateInputSchema: z.ZodType<Prisma.PresenceCreateInput> = z.object({
  value: z.boolean().optional(),
  gig: z.lazy(() => GigCreateNestedOneWithoutPresencesInputSchema),
  player: z.lazy(() => PlayerCreateNestedOneWithoutPresencesInputSchema)
}).strict();

export const PresenceUncheckedCreateInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  gigId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const PresenceUpdateInputSchema: z.ZodType<Prisma.PresenceUpdateInput> = z.object({
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gig: z.lazy(() => GigUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema).optional()
}).strict();

export const PresenceUncheckedUpdateInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceCreateManyInputSchema: z.ZodType<Prisma.PresenceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  gigId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const PresenceUpdateManyMutationInputSchema: z.ZodType<Prisma.PresenceUpdateManyMutationInput> = z.object({
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.object({
  playable: z.boolean().optional(),
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutRolesInputSchema),
  player: z.lazy(() => PlayerCreateNestedOneWithoutRolesInputSchema)
}).strict();

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  playable: z.boolean().optional(),
  instrumentId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const RoleUpdateInputSchema: z.ZodType<Prisma.RoleUpdateInput> = z.object({
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutRolesNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleCreateManyInputSchema: z.ZodType<Prisma.RoleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  playable: z.boolean().optional(),
  instrumentId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const RoleUpdateManyMutationInputSchema: z.ZodType<Prisma.RoleUpdateManyMutationInput> = z.object({
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstrumentCreateInputSchema: z.ZodType<Prisma.InstrumentCreateInput> = z.object({
  name: z.string(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutInstrumentInputSchema).optional(),
  voices: z.lazy(() => VoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUncheckedCreateInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUpdateInputSchema: z.ZodType<Prisma.InstrumentUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const InstrumentUncheckedUpdateInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const InstrumentCreateManyInputSchema: z.ZodType<Prisma.InstrumentCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const InstrumentUpdateManyMutationInputSchema: z.ZodType<Prisma.InstrumentUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InstrumentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoiceCreateInputSchema: z.ZodType<Prisma.VoiceCreateInput> = z.object({
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutVoicesInputSchema),
  band: z.lazy(() => BandCreateNestedOneWithoutVoicesInputSchema)
}).strict();

export const VoiceUncheckedCreateInputSchema: z.ZodType<Prisma.VoiceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int(),
  bandId: z.number().int()
}).strict();

export const VoiceUpdateInputSchema: z.ZodType<Prisma.VoiceUpdateInput> = z.object({
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutVoicesNestedInputSchema).optional(),
  band: z.lazy(() => BandUpdateOneRequiredWithoutVoicesNestedInputSchema).optional()
}).strict();

export const VoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.VoiceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoiceCreateManyInputSchema: z.ZodType<Prisma.VoiceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int(),
  bandId: z.number().int()
}).strict();

export const VoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.VoiceUpdateManyMutationInput> = z.object({
}).strict();

export const VoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VoiceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganizerRoleCreateInputSchema: z.ZodType<Prisma.OrganizerRoleCreateInput> = z.object({
  gig: z.lazy(() => GigCreateNestedOneWithoutOrganizerRolesInputSchema),
  player: z.lazy(() => PlayerCreateNestedOneWithoutOrganizerRolesInputSchema)
}).strict();

export const OrganizerRoleUncheckedCreateInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const OrganizerRoleUpdateInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateInput> = z.object({
  gig: z.lazy(() => GigUpdateOneRequiredWithoutOrganizerRolesNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutOrganizerRolesNestedInputSchema).optional()
}).strict();

export const OrganizerRoleUncheckedUpdateInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganizerRoleCreateManyInputSchema: z.ZodType<Prisma.OrganizerRoleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const OrganizerRoleUpdateManyMutationInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateManyMutationInput> = z.object({
}).strict();

export const OrganizerRoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminRoleCreateInputSchema: z.ZodType<Prisma.AdminRoleCreateInput> = z.object({
  band: z.lazy(() => BandCreateNestedOneWithoutAdminRolesInputSchema),
  player: z.lazy(() => PlayerCreateNestedOneWithoutAdminRolesInputSchema)
}).strict();

export const AdminRoleUncheckedCreateInputSchema: z.ZodType<Prisma.AdminRoleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  bandId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const AdminRoleUpdateInputSchema: z.ZodType<Prisma.AdminRoleUpdateInput> = z.object({
  band: z.lazy(() => BandUpdateOneRequiredWithoutAdminRolesNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutAdminRolesNestedInputSchema).optional()
}).strict();

export const AdminRoleUncheckedUpdateInputSchema: z.ZodType<Prisma.AdminRoleUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminRoleCreateManyInputSchema: z.ZodType<Prisma.AdminRoleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  bandId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const AdminRoleUpdateManyMutationInputSchema: z.ZodType<Prisma.AdminRoleUpdateManyMutationInput> = z.object({
}).strict();

export const AdminRoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AdminRoleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const PlayerListRelationFilterSchema: z.ZodType<Prisma.PlayerListRelationFilter> = z.object({
  every: z.lazy(() => PlayerWhereInputSchema).optional(),
  some: z.lazy(() => PlayerWhereInputSchema).optional(),
  none: z.lazy(() => PlayerWhereInputSchema).optional()
}).strict();

export const GigListRelationFilterSchema: z.ZodType<Prisma.GigListRelationFilter> = z.object({
  every: z.lazy(() => GigWhereInputSchema).optional(),
  some: z.lazy(() => GigWhereInputSchema).optional(),
  none: z.lazy(() => GigWhereInputSchema).optional()
}).strict();

export const VoiceListRelationFilterSchema: z.ZodType<Prisma.VoiceListRelationFilter> = z.object({
  every: z.lazy(() => VoiceWhereInputSchema).optional(),
  some: z.lazy(() => VoiceWhereInputSchema).optional(),
  none: z.lazy(() => VoiceWhereInputSchema).optional()
}).strict();

export const AdminRoleListRelationFilterSchema: z.ZodType<Prisma.AdminRoleListRelationFilter> = z.object({
  every: z.lazy(() => AdminRoleWhereInputSchema).optional(),
  some: z.lazy(() => AdminRoleWhereInputSchema).optional(),
  none: z.lazy(() => AdminRoleWhereInputSchema).optional()
}).strict();

export const PlayerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PlayerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GigOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VoiceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminRoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AdminRoleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandCountOrderByAggregateInputSchema: z.ZodType<Prisma.BandCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BandAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BandMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandMinOrderByAggregateInputSchema: z.ZodType<Prisma.BandMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandSumOrderByAggregateInputSchema: z.ZodType<Prisma.BandSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const PresenceListRelationFilterSchema: z.ZodType<Prisma.PresenceListRelationFilter> = z.object({
  every: z.lazy(() => PresenceWhereInputSchema).optional(),
  some: z.lazy(() => PresenceWhereInputSchema).optional(),
  none: z.lazy(() => PresenceWhereInputSchema).optional()
}).strict();

export const RoleListRelationFilterSchema: z.ZodType<Prisma.RoleListRelationFilter> = z.object({
  every: z.lazy(() => RoleWhereInputSchema).optional(),
  some: z.lazy(() => RoleWhereInputSchema).optional(),
  none: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export const BandListRelationFilterSchema: z.ZodType<Prisma.BandListRelationFilter> = z.object({
  every: z.lazy(() => BandWhereInputSchema).optional(),
  some: z.lazy(() => BandWhereInputSchema).optional(),
  none: z.lazy(() => BandWhereInputSchema).optional()
}).strict();

export const OrganizerRoleListRelationFilterSchema: z.ZodType<Prisma.OrganizerRoleListRelationFilter> = z.object({
  every: z.lazy(() => OrganizerRoleWhereInputSchema).optional(),
  some: z.lazy(() => OrganizerRoleWhereInputSchema).optional(),
  none: z.lazy(() => OrganizerRoleWhereInputSchema).optional()
}).strict();

export const PresenceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PresenceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BandOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizerRoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrganizerRoleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerSumOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const BandRelationFilterSchema: z.ZodType<Prisma.BandRelationFilter> = z.object({
  is: z.lazy(() => BandWhereInputSchema).optional(),
  isNot: z.lazy(() => BandWhereInputSchema).optional()
}).strict();

export const GigCountOrderByAggregateInputSchema: z.ZodType<Prisma.GigCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GigAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GigMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigMinOrderByAggregateInputSchema: z.ZodType<Prisma.GigMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigSumOrderByAggregateInputSchema: z.ZodType<Prisma.GigSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const GigRelationFilterSchema: z.ZodType<Prisma.GigRelationFilter> = z.object({
  is: z.lazy(() => GigWhereInputSchema).optional(),
  isNot: z.lazy(() => GigWhereInputSchema).optional()
}).strict();

export const PlayerRelationFilterSchema: z.ZodType<Prisma.PlayerRelationFilter> = z.object({
  is: z.lazy(() => PlayerWhereInputSchema).optional(),
  isNot: z.lazy(() => PlayerWhereInputSchema).optional()
}).strict();

export const PresenceGigIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.PresenceGigIdPlayerIdCompoundUniqueInput> = z.object({
  gigId: z.number(),
  playerId: z.number()
}).strict();

export const PresenceCountOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PresenceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PresenceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PresenceMinOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PresenceSumOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstrumentRelationFilterSchema: z.ZodType<Prisma.InstrumentRelationFilter> = z.object({
  is: z.lazy(() => InstrumentWhereInputSchema).optional(),
  isNot: z.lazy(() => InstrumentWhereInputSchema).optional()
}).strict();

export const RoleInstrumentIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.RoleInstrumentIdPlayerIdCompoundUniqueInput> = z.object({
  instrumentId: z.number(),
  playerId: z.number()
}).strict();

export const RoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstrumentCountOrderByAggregateInputSchema: z.ZodType<Prisma.InstrumentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstrumentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InstrumentAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstrumentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InstrumentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstrumentMinOrderByAggregateInputSchema: z.ZodType<Prisma.InstrumentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InstrumentSumOrderByAggregateInputSchema: z.ZodType<Prisma.InstrumentSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.VoiceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoiceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VoiceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VoiceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.VoiceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VoiceSumOrderByAggregateInputSchema: z.ZodType<Prisma.VoiceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizerRoleGigIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.OrganizerRoleGigIdPlayerIdCompoundUniqueInput> = z.object({
  gigId: z.number(),
  playerId: z.number()
}).strict();

export const OrganizerRoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizerRoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizerRoleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizerRoleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizerRoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizerRoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizerRoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizerRoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrganizerRoleSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizerRoleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminRoleBandIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.AdminRoleBandIdPlayerIdCompoundUniqueInput> = z.object({
  bandId: z.number(),
  playerId: z.number()
}).strict();

export const AdminRoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.AdminRoleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminRoleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AdminRoleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminRoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AdminRoleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminRoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.AdminRoleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminRoleSumOrderByAggregateInputSchema: z.ZodType<Prisma.AdminRoleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerCreateNestedManyWithoutBandsInputSchema: z.ZodType<Prisma.PlayerCreateNestedManyWithoutBandsInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutBandsInputSchema),z.lazy(() => PlayerCreateWithoutBandsInputSchema).array(),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlayerCreateOrConnectWithoutBandsInputSchema),z.lazy(() => PlayerCreateOrConnectWithoutBandsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GigCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.GigCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigCreateWithoutBandInputSchema).array(),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VoiceCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.VoiceCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => VoiceCreateWithoutBandInputSchema),z.lazy(() => VoiceCreateWithoutBandInputSchema).array(),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoiceCreateOrConnectWithoutBandInputSchema),z.lazy(() => VoiceCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoiceCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AdminRoleCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutBandInputSchema),z.lazy(() => AdminRoleCreateWithoutBandInputSchema).array(),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminRoleCreateOrConnectWithoutBandInputSchema),z.lazy(() => AdminRoleCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminRoleCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PlayerUncheckedCreateNestedManyWithoutBandsInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateNestedManyWithoutBandsInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutBandsInputSchema),z.lazy(() => PlayerCreateWithoutBandsInputSchema).array(),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlayerCreateOrConnectWithoutBandsInputSchema),z.lazy(() => PlayerCreateOrConnectWithoutBandsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GigUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigCreateWithoutBandInputSchema).array(),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VoiceUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.VoiceUncheckedCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => VoiceCreateWithoutBandInputSchema),z.lazy(() => VoiceCreateWithoutBandInputSchema).array(),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoiceCreateOrConnectWithoutBandInputSchema),z.lazy(() => VoiceCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoiceCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AdminRoleUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleUncheckedCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutBandInputSchema),z.lazy(() => AdminRoleCreateWithoutBandInputSchema).array(),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminRoleCreateOrConnectWithoutBandInputSchema),z.lazy(() => AdminRoleCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminRoleCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const PlayerUpdateManyWithoutBandsNestedInputSchema: z.ZodType<Prisma.PlayerUpdateManyWithoutBandsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutBandsInputSchema),z.lazy(() => PlayerCreateWithoutBandsInputSchema).array(),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlayerCreateOrConnectWithoutBandsInputSchema),z.lazy(() => PlayerCreateOrConnectWithoutBandsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlayerUpsertWithWhereUniqueWithoutBandsInputSchema),z.lazy(() => PlayerUpsertWithWhereUniqueWithoutBandsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithWhereUniqueWithoutBandsInputSchema),z.lazy(() => PlayerUpdateWithWhereUniqueWithoutBandsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlayerUpdateManyWithWhereWithoutBandsInputSchema),z.lazy(() => PlayerUpdateManyWithWhereWithoutBandsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlayerScalarWhereInputSchema),z.lazy(() => PlayerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GigUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.GigUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigCreateWithoutBandInputSchema).array(),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GigUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => GigUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GigUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => GigUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GigUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => GigUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GigScalarWhereInputSchema),z.lazy(() => GigScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VoiceUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.VoiceUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoiceCreateWithoutBandInputSchema),z.lazy(() => VoiceCreateWithoutBandInputSchema).array(),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoiceCreateOrConnectWithoutBandInputSchema),z.lazy(() => VoiceCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoiceUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => VoiceUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoiceCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoiceUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => VoiceUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoiceUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => VoiceUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoiceScalarWhereInputSchema),z.lazy(() => VoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AdminRoleUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.AdminRoleUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutBandInputSchema),z.lazy(() => AdminRoleCreateWithoutBandInputSchema).array(),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminRoleCreateOrConnectWithoutBandInputSchema),z.lazy(() => AdminRoleCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AdminRoleUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => AdminRoleUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminRoleCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AdminRoleUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => AdminRoleUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AdminRoleUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => AdminRoleUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AdminRoleScalarWhereInputSchema),z.lazy(() => AdminRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const PlayerUncheckedUpdateManyWithoutBandsNestedInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateManyWithoutBandsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutBandsInputSchema),z.lazy(() => PlayerCreateWithoutBandsInputSchema).array(),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PlayerCreateOrConnectWithoutBandsInputSchema),z.lazy(() => PlayerCreateOrConnectWithoutBandsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PlayerUpsertWithWhereUniqueWithoutBandsInputSchema),z.lazy(() => PlayerUpsertWithWhereUniqueWithoutBandsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PlayerWhereUniqueInputSchema),z.lazy(() => PlayerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithWhereUniqueWithoutBandsInputSchema),z.lazy(() => PlayerUpdateWithWhereUniqueWithoutBandsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PlayerUpdateManyWithWhereWithoutBandsInputSchema),z.lazy(() => PlayerUpdateManyWithWhereWithoutBandsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PlayerScalarWhereInputSchema),z.lazy(() => PlayerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GigUncheckedUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.GigUncheckedUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigCreateWithoutBandInputSchema).array(),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GigUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => GigUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GigUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => GigUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GigUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => GigUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GigScalarWhereInputSchema),z.lazy(() => GigScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VoiceUncheckedUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.VoiceUncheckedUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoiceCreateWithoutBandInputSchema),z.lazy(() => VoiceCreateWithoutBandInputSchema).array(),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoiceCreateOrConnectWithoutBandInputSchema),z.lazy(() => VoiceCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoiceUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => VoiceUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoiceCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoiceUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => VoiceUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoiceUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => VoiceUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoiceScalarWhereInputSchema),z.lazy(() => VoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AdminRoleUncheckedUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.AdminRoleUncheckedUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutBandInputSchema),z.lazy(() => AdminRoleCreateWithoutBandInputSchema).array(),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminRoleCreateOrConnectWithoutBandInputSchema),z.lazy(() => AdminRoleCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AdminRoleUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => AdminRoleUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminRoleCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AdminRoleUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => AdminRoleUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AdminRoleUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => AdminRoleUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AdminRoleScalarWhereInputSchema),z.lazy(() => AdminRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PresenceCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutPlayerInputSchema),z.lazy(() => PresenceCreateWithoutPlayerInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPlayerInputSchema),z.lazy(() => RoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BandCreateNestedManyWithoutPlayersInputSchema: z.ZodType<Prisma.BandCreateNestedManyWithoutPlayersInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutPlayersInputSchema),z.lazy(() => BandCreateWithoutPlayersInputSchema).array(),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandCreateOrConnectWithoutPlayersInputSchema),z.lazy(() => BandCreateOrConnectWithoutPlayersInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganizerRoleCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizerRoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizerRoleCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AdminRoleCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminRoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => AdminRoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminRoleCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutPlayerInputSchema),z.lazy(() => PresenceCreateWithoutPlayerInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPlayerInputSchema),z.lazy(() => RoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BandUncheckedCreateNestedManyWithoutPlayersInputSchema: z.ZodType<Prisma.BandUncheckedCreateNestedManyWithoutPlayersInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutPlayersInputSchema),z.lazy(() => BandCreateWithoutPlayersInputSchema).array(),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandCreateOrConnectWithoutPlayersInputSchema),z.lazy(() => BandCreateOrConnectWithoutPlayersInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganizerRoleUncheckedCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizerRoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizerRoleCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AdminRoleUncheckedCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleUncheckedCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminRoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => AdminRoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminRoleCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PresenceUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.PresenceUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutPlayerInputSchema),z.lazy(() => PresenceCreateWithoutPlayerInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PresenceUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => PresenceUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PresenceScalarWhereInputSchema),z.lazy(() => PresenceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPlayerInputSchema),z.lazy(() => RoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BandUpdateManyWithoutPlayersNestedInputSchema: z.ZodType<Prisma.BandUpdateManyWithoutPlayersNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutPlayersInputSchema),z.lazy(() => BandCreateWithoutPlayersInputSchema).array(),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandCreateOrConnectWithoutPlayersInputSchema),z.lazy(() => BandCreateOrConnectWithoutPlayersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BandUpsertWithWhereUniqueWithoutPlayersInputSchema),z.lazy(() => BandUpsertWithWhereUniqueWithoutPlayersInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BandUpdateWithWhereUniqueWithoutPlayersInputSchema),z.lazy(() => BandUpdateWithWhereUniqueWithoutPlayersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BandUpdateManyWithWhereWithoutPlayersInputSchema),z.lazy(() => BandUpdateManyWithWhereWithoutPlayersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BandScalarWhereInputSchema),z.lazy(() => BandScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganizerRoleUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizerRoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganizerRoleUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizerRoleCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganizerRoleUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganizerRoleUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganizerRoleScalarWhereInputSchema),z.lazy(() => OrganizerRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AdminRoleUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.AdminRoleUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminRoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => AdminRoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AdminRoleUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => AdminRoleUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminRoleCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AdminRoleUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => AdminRoleUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AdminRoleUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => AdminRoleUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AdminRoleScalarWhereInputSchema),z.lazy(() => AdminRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutPlayerInputSchema),z.lazy(() => PresenceCreateWithoutPlayerInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PresenceUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => PresenceUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PresenceScalarWhereInputSchema),z.lazy(() => PresenceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutPlayerInputSchema),z.lazy(() => RoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BandUncheckedUpdateManyWithoutPlayersNestedInputSchema: z.ZodType<Prisma.BandUncheckedUpdateManyWithoutPlayersNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutPlayersInputSchema),z.lazy(() => BandCreateWithoutPlayersInputSchema).array(),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandCreateOrConnectWithoutPlayersInputSchema),z.lazy(() => BandCreateOrConnectWithoutPlayersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BandUpsertWithWhereUniqueWithoutPlayersInputSchema),z.lazy(() => BandUpsertWithWhereUniqueWithoutPlayersInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BandWhereUniqueInputSchema),z.lazy(() => BandWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BandUpdateWithWhereUniqueWithoutPlayersInputSchema),z.lazy(() => BandUpdateWithWhereUniqueWithoutPlayersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BandUpdateManyWithWhereWithoutPlayersInputSchema),z.lazy(() => BandUpdateManyWithWhereWithoutPlayersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BandScalarWhereInputSchema),z.lazy(() => BandScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganizerRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizerRoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganizerRoleUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizerRoleCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganizerRoleUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganizerRoleUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganizerRoleScalarWhereInputSchema),z.lazy(() => OrganizerRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AdminRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.AdminRoleUncheckedUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema).array(),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminRoleCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => AdminRoleCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AdminRoleUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => AdminRoleUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminRoleCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AdminRoleWhereUniqueInputSchema),z.lazy(() => AdminRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AdminRoleUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => AdminRoleUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AdminRoleUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => AdminRoleUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AdminRoleScalarWhereInputSchema),z.lazy(() => AdminRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PresenceCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.PresenceCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutGigInputSchema),z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BandCreateNestedOneWithoutGigsInputSchema: z.ZodType<Prisma.BandCreateNestedOneWithoutGigsInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutGigsInputSchema),z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutGigsInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional()
}).strict();

export const OrganizerRoleCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema).array(),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizerRoleCreateOrConnectWithoutGigInputSchema),z.lazy(() => OrganizerRoleCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizerRoleCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PresenceUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutGigInputSchema),z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrganizerRoleUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema).array(),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizerRoleCreateOrConnectWithoutGigInputSchema),z.lazy(() => OrganizerRoleCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizerRoleCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const PresenceUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.PresenceUpdateManyWithoutGigNestedInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutGigInputSchema),z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PresenceUpsertWithWhereUniqueWithoutGigInputSchema),z.lazy(() => PresenceUpsertWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PresenceUpdateWithWhereUniqueWithoutGigInputSchema),z.lazy(() => PresenceUpdateWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PresenceUpdateManyWithWhereWithoutGigInputSchema),z.lazy(() => PresenceUpdateManyWithWhereWithoutGigInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PresenceScalarWhereInputSchema),z.lazy(() => PresenceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BandUpdateOneRequiredWithoutGigsNestedInputSchema: z.ZodType<Prisma.BandUpdateOneRequiredWithoutGigsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutGigsInputSchema),z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutGigsInputSchema).optional(),
  upsert: z.lazy(() => BandUpsertWithoutGigsInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BandUpdateWithoutGigsInputSchema),z.lazy(() => BandUncheckedUpdateWithoutGigsInputSchema) ]).optional(),
}).strict();

export const OrganizerRoleUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateManyWithoutGigNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema).array(),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizerRoleCreateOrConnectWithoutGigInputSchema),z.lazy(() => OrganizerRoleCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganizerRoleUpsertWithWhereUniqueWithoutGigInputSchema),z.lazy(() => OrganizerRoleUpsertWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizerRoleCreateManyGigInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganizerRoleUpdateWithWhereUniqueWithoutGigInputSchema),z.lazy(() => OrganizerRoleUpdateWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganizerRoleUpdateManyWithWhereWithoutGigInputSchema),z.lazy(() => OrganizerRoleUpdateManyWithWhereWithoutGigInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganizerRoleScalarWhereInputSchema),z.lazy(() => OrganizerRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PresenceUncheckedUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyWithoutGigNestedInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutGigInputSchema),z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PresenceUpsertWithWhereUniqueWithoutGigInputSchema),z.lazy(() => PresenceUpsertWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PresenceUpdateWithWhereUniqueWithoutGigInputSchema),z.lazy(() => PresenceUpdateWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PresenceUpdateManyWithWhereWithoutGigInputSchema),z.lazy(() => PresenceUpdateManyWithWhereWithoutGigInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PresenceScalarWhereInputSchema),z.lazy(() => PresenceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrganizerRoleUncheckedUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedUpdateManyWithoutGigNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema).array(),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizerRoleCreateOrConnectWithoutGigInputSchema),z.lazy(() => OrganizerRoleCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganizerRoleUpsertWithWhereUniqueWithoutGigInputSchema),z.lazy(() => OrganizerRoleUpsertWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizerRoleCreateManyGigInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganizerRoleWhereUniqueInputSchema),z.lazy(() => OrganizerRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganizerRoleUpdateWithWhereUniqueWithoutGigInputSchema),z.lazy(() => OrganizerRoleUpdateWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganizerRoleUpdateManyWithWhereWithoutGigInputSchema),z.lazy(() => OrganizerRoleUpdateManyWithWhereWithoutGigInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganizerRoleScalarWhereInputSchema),z.lazy(() => OrganizerRoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GigCreateNestedOneWithoutPresencesInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutPresencesInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutPresencesInputSchema),z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutPresencesInputSchema).optional(),
  connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
}).strict();

export const PlayerCreateNestedOneWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutPresencesInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutPresencesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutPresencesInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
}).strict();

export const GigUpdateOneRequiredWithoutPresencesNestedInputSchema: z.ZodType<Prisma.GigUpdateOneRequiredWithoutPresencesNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutPresencesInputSchema),z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutPresencesInputSchema).optional(),
  upsert: z.lazy(() => GigUpsertWithoutPresencesInputSchema).optional(),
  connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GigUpdateWithoutPresencesInputSchema),z.lazy(() => GigUncheckedUpdateWithoutPresencesInputSchema) ]).optional(),
}).strict();

export const PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutPresencesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutPresencesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutPresencesInputSchema).optional(),
  upsert: z.lazy(() => PlayerUpsertWithoutPresencesInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithoutPresencesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutPresencesInputSchema) ]).optional(),
}).strict();

export const InstrumentCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentCreateNestedOneWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => InstrumentCreateWithoutRolesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional()
}).strict();

export const PlayerCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
}).strict();

export const InstrumentUpdateOneRequiredWithoutRolesNestedInputSchema: z.ZodType<Prisma.InstrumentUpdateOneRequiredWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstrumentCreateWithoutRolesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutRolesInputSchema).optional(),
  upsert: z.lazy(() => InstrumentUpsertWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstrumentUpdateWithoutRolesInputSchema),z.lazy(() => InstrumentUncheckedUpdateWithoutRolesInputSchema) ]).optional(),
}).strict();

export const PlayerUpdateOneRequiredWithoutRolesNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutRolesInputSchema).optional(),
  upsert: z.lazy(() => PlayerUpsertWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithoutRolesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutRolesInputSchema) ]).optional(),
}).strict();

export const RoleCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutInstrumentInputSchema),z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VoiceCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => VoiceCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => VoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutInstrumentInputSchema),z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const VoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceUncheckedCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => VoiceCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => VoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutInstrumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutInstrumentInputSchema),z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutInstrumentInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutInstrumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VoiceUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.VoiceUpdateManyWithoutInstrumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoiceCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => VoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => VoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => VoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoiceUpdateManyWithWhereWithoutInstrumentInputSchema),z.lazy(() => VoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoiceScalarWhereInputSchema),z.lazy(() => VoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutInstrumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutInstrumentInputSchema),z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutInstrumentInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutInstrumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const VoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.VoiceUncheckedUpdateManyWithoutInstrumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => VoiceCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => VoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => VoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VoiceWhereUniqueInputSchema),z.lazy(() => VoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => VoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VoiceUpdateManyWithWhereWithoutInstrumentInputSchema),z.lazy(() => VoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VoiceScalarWhereInputSchema),z.lazy(() => VoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstrumentCreateNestedOneWithoutVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateNestedOneWithoutVoicesInput> = z.object({
  create: z.union([ z.lazy(() => InstrumentCreateWithoutVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutVoicesInputSchema).optional(),
  connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional()
}).strict();

export const BandCreateNestedOneWithoutVoicesInputSchema: z.ZodType<Prisma.BandCreateNestedOneWithoutVoicesInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutVoicesInputSchema),z.lazy(() => BandUncheckedCreateWithoutVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutVoicesInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional()
}).strict();

export const InstrumentUpdateOneRequiredWithoutVoicesNestedInputSchema: z.ZodType<Prisma.InstrumentUpdateOneRequiredWithoutVoicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstrumentCreateWithoutVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutVoicesInputSchema).optional(),
  upsert: z.lazy(() => InstrumentUpsertWithoutVoicesInputSchema).optional(),
  connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstrumentUpdateWithoutVoicesInputSchema),z.lazy(() => InstrumentUncheckedUpdateWithoutVoicesInputSchema) ]).optional(),
}).strict();

export const BandUpdateOneRequiredWithoutVoicesNestedInputSchema: z.ZodType<Prisma.BandUpdateOneRequiredWithoutVoicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutVoicesInputSchema),z.lazy(() => BandUncheckedCreateWithoutVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutVoicesInputSchema).optional(),
  upsert: z.lazy(() => BandUpsertWithoutVoicesInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BandUpdateWithoutVoicesInputSchema),z.lazy(() => BandUncheckedUpdateWithoutVoicesInputSchema) ]).optional(),
}).strict();

export const GigCreateNestedOneWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutOrganizerRolesInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutOrganizerRolesInputSchema),z.lazy(() => GigUncheckedCreateWithoutOrganizerRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutOrganizerRolesInputSchema).optional(),
  connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
}).strict();

export const PlayerCreateNestedOneWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutOrganizerRolesInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutOrganizerRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutOrganizerRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutOrganizerRolesInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
}).strict();

export const GigUpdateOneRequiredWithoutOrganizerRolesNestedInputSchema: z.ZodType<Prisma.GigUpdateOneRequiredWithoutOrganizerRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutOrganizerRolesInputSchema),z.lazy(() => GigUncheckedCreateWithoutOrganizerRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutOrganizerRolesInputSchema).optional(),
  upsert: z.lazy(() => GigUpsertWithoutOrganizerRolesInputSchema).optional(),
  connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GigUpdateWithoutOrganizerRolesInputSchema),z.lazy(() => GigUncheckedUpdateWithoutOrganizerRolesInputSchema) ]).optional(),
}).strict();

export const PlayerUpdateOneRequiredWithoutOrganizerRolesNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutOrganizerRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutOrganizerRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutOrganizerRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutOrganizerRolesInputSchema).optional(),
  upsert: z.lazy(() => PlayerUpsertWithoutOrganizerRolesInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithoutOrganizerRolesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutOrganizerRolesInputSchema) ]).optional(),
}).strict();

export const BandCreateNestedOneWithoutAdminRolesInputSchema: z.ZodType<Prisma.BandCreateNestedOneWithoutAdminRolesInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutAdminRolesInputSchema),z.lazy(() => BandUncheckedCreateWithoutAdminRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutAdminRolesInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional()
}).strict();

export const PlayerCreateNestedOneWithoutAdminRolesInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutAdminRolesInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutAdminRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutAdminRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutAdminRolesInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
}).strict();

export const BandUpdateOneRequiredWithoutAdminRolesNestedInputSchema: z.ZodType<Prisma.BandUpdateOneRequiredWithoutAdminRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutAdminRolesInputSchema),z.lazy(() => BandUncheckedCreateWithoutAdminRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutAdminRolesInputSchema).optional(),
  upsert: z.lazy(() => BandUpsertWithoutAdminRolesInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BandUpdateWithoutAdminRolesInputSchema),z.lazy(() => BandUncheckedUpdateWithoutAdminRolesInputSchema) ]).optional(),
}).strict();

export const PlayerUpdateOneRequiredWithoutAdminRolesNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutAdminRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutAdminRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutAdminRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutAdminRolesInputSchema).optional(),
  upsert: z.lazy(() => PlayerUpsertWithoutAdminRolesInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithoutAdminRolesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutAdminRolesInputSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const PlayerCreateWithoutBandsInputSchema: z.ZodType<Prisma.PlayerCreateWithoutBandsInput> = z.object({
  name: z.string(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutBandsInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutBandsInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerCreateOrConnectWithoutBandsInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutBandsInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlayerCreateWithoutBandsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema) ]),
}).strict();

export const GigCreateWithoutBandInputSchema: z.ZodType<Prisma.GigCreateWithoutBandInput> = z.object({
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutBandInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutBandInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const GigCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.GigCreateManyBandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GigCreateManyBandInputSchema),z.lazy(() => GigCreateManyBandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const VoiceCreateWithoutBandInputSchema: z.ZodType<Prisma.VoiceCreateWithoutBandInput> = z.object({
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutVoicesInputSchema)
}).strict();

export const VoiceUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.VoiceUncheckedCreateWithoutBandInput> = z.object({
  id: z.number().optional(),
  instrumentId: z.number()
}).strict();

export const VoiceCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.VoiceCreateOrConnectWithoutBandInput> = z.object({
  where: z.lazy(() => VoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VoiceCreateWithoutBandInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const VoiceCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.VoiceCreateManyBandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VoiceCreateManyBandInputSchema),z.lazy(() => VoiceCreateManyBandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AdminRoleCreateWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleCreateWithoutBandInput> = z.object({
  player: z.lazy(() => PlayerCreateNestedOneWithoutAdminRolesInputSchema)
}).strict();

export const AdminRoleUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleUncheckedCreateWithoutBandInput> = z.object({
  id: z.number().optional(),
  playerId: z.number()
}).strict();

export const AdminRoleCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleCreateOrConnectWithoutBandInput> = z.object({
  where: z.lazy(() => AdminRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutBandInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const AdminRoleCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.AdminRoleCreateManyBandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AdminRoleCreateManyBandInputSchema),z.lazy(() => AdminRoleCreateManyBandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PlayerUpsertWithWhereUniqueWithoutBandsInputSchema: z.ZodType<Prisma.PlayerUpsertWithWhereUniqueWithoutBandsInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PlayerUpdateWithoutBandsInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutBandsInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutBandsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutBandsInputSchema) ]),
}).strict();

export const PlayerUpdateWithWhereUniqueWithoutBandsInputSchema: z.ZodType<Prisma.PlayerUpdateWithWhereUniqueWithoutBandsInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PlayerUpdateWithoutBandsInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutBandsInputSchema) ]),
}).strict();

export const PlayerUpdateManyWithWhereWithoutBandsInputSchema: z.ZodType<Prisma.PlayerUpdateManyWithWhereWithoutBandsInput> = z.object({
  where: z.lazy(() => PlayerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PlayerUpdateManyMutationInputSchema),z.lazy(() => PlayerUncheckedUpdateManyWithoutPlayersInputSchema) ]),
}).strict();

export const PlayerScalarWhereInputSchema: z.ZodType<Prisma.PlayerScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlayerScalarWhereInputSchema),z.lazy(() => PlayerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerScalarWhereInputSchema),z.lazy(() => PlayerScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const GigUpsertWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.GigUpsertWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GigUpdateWithoutBandInputSchema),z.lazy(() => GigUncheckedUpdateWithoutBandInputSchema) ]),
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const GigUpdateWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.GigUpdateWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GigUpdateWithoutBandInputSchema),z.lazy(() => GigUncheckedUpdateWithoutBandInputSchema) ]),
}).strict();

export const GigUpdateManyWithWhereWithoutBandInputSchema: z.ZodType<Prisma.GigUpdateManyWithWhereWithoutBandInput> = z.object({
  where: z.lazy(() => GigScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GigUpdateManyMutationInputSchema),z.lazy(() => GigUncheckedUpdateManyWithoutGigsInputSchema) ]),
}).strict();

export const GigScalarWhereInputSchema: z.ZodType<Prisma.GigScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GigScalarWhereInputSchema),z.lazy(() => GigScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GigScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GigScalarWhereInputSchema),z.lazy(() => GigScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  playable: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const VoiceUpsertWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.VoiceUpsertWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => VoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VoiceUpdateWithoutBandInputSchema),z.lazy(() => VoiceUncheckedUpdateWithoutBandInputSchema) ]),
  create: z.union([ z.lazy(() => VoiceCreateWithoutBandInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const VoiceUpdateWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.VoiceUpdateWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => VoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VoiceUpdateWithoutBandInputSchema),z.lazy(() => VoiceUncheckedUpdateWithoutBandInputSchema) ]),
}).strict();

export const VoiceUpdateManyWithWhereWithoutBandInputSchema: z.ZodType<Prisma.VoiceUpdateManyWithWhereWithoutBandInput> = z.object({
  where: z.lazy(() => VoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VoiceUpdateManyMutationInputSchema),z.lazy(() => VoiceUncheckedUpdateManyWithoutVoicesInputSchema) ]),
}).strict();

export const VoiceScalarWhereInputSchema: z.ZodType<Prisma.VoiceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VoiceScalarWhereInputSchema),z.lazy(() => VoiceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VoiceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VoiceScalarWhereInputSchema),z.lazy(() => VoiceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const AdminRoleUpsertWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleUpsertWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => AdminRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AdminRoleUpdateWithoutBandInputSchema),z.lazy(() => AdminRoleUncheckedUpdateWithoutBandInputSchema) ]),
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutBandInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const AdminRoleUpdateWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleUpdateWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => AdminRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AdminRoleUpdateWithoutBandInputSchema),z.lazy(() => AdminRoleUncheckedUpdateWithoutBandInputSchema) ]),
}).strict();

export const AdminRoleUpdateManyWithWhereWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleUpdateManyWithWhereWithoutBandInput> = z.object({
  where: z.lazy(() => AdminRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AdminRoleUpdateManyMutationInputSchema),z.lazy(() => AdminRoleUncheckedUpdateManyWithoutAdminRolesInputSchema) ]),
}).strict();

export const AdminRoleScalarWhereInputSchema: z.ZodType<Prisma.AdminRoleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AdminRoleScalarWhereInputSchema),z.lazy(() => AdminRoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminRoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminRoleScalarWhereInputSchema),z.lazy(() => AdminRoleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const PresenceCreateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceCreateWithoutPlayerInput> = z.object({
  value: z.boolean().optional(),
  gig: z.lazy(() => GigCreateNestedOneWithoutPresencesInputSchema)
}).strict();

export const PresenceUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateWithoutPlayerInput> = z.object({
  id: z.number().optional(),
  value: z.boolean().optional(),
  gigId: z.number()
}).strict();

export const PresenceCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceCreateOrConnectWithoutPlayerInput> = z.object({
  where: z.lazy(() => PresenceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PresenceCreateWithoutPlayerInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const PresenceCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.PresenceCreateManyPlayerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PresenceCreateManyPlayerInputSchema),z.lazy(() => PresenceCreateManyPlayerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoleCreateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleCreateWithoutPlayerInput> = z.object({
  playable: z.boolean().optional(),
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutRolesInputSchema)
}).strict();

export const RoleUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutPlayerInput> = z.object({
  id: z.number().optional(),
  playable: z.boolean().optional(),
  instrumentId: z.number()
}).strict();

export const RoleCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutPlayerInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const RoleCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyPlayerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyPlayerInputSchema),z.lazy(() => RoleCreateManyPlayerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BandCreateWithoutPlayersInputSchema: z.ZodType<Prisma.BandCreateWithoutPlayersInput> = z.object({
  name: z.string(),
  gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
  voices: z.lazy(() => VoiceCreateNestedManyWithoutBandInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateWithoutPlayersInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutPlayersInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandCreateOrConnectWithoutPlayersInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutPlayersInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandCreateWithoutPlayersInputSchema),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema) ]),
}).strict();

export const OrganizerRoleCreateWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleCreateWithoutPlayerInput> = z.object({
  gig: z.lazy(() => GigCreateNestedOneWithoutOrganizerRolesInputSchema)
}).strict();

export const OrganizerRoleUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedCreateWithoutPlayerInput> = z.object({
  id: z.number().optional(),
  gigId: z.number()
}).strict();

export const OrganizerRoleCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleCreateOrConnectWithoutPlayerInput> = z.object({
  where: z.lazy(() => OrganizerRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const OrganizerRoleCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.OrganizerRoleCreateManyPlayerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrganizerRoleCreateManyPlayerInputSchema),z.lazy(() => OrganizerRoleCreateManyPlayerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AdminRoleCreateWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleCreateWithoutPlayerInput> = z.object({
  band: z.lazy(() => BandCreateNestedOneWithoutAdminRolesInputSchema)
}).strict();

export const AdminRoleUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleUncheckedCreateWithoutPlayerInput> = z.object({
  id: z.number().optional(),
  bandId: z.number()
}).strict();

export const AdminRoleCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleCreateOrConnectWithoutPlayerInput> = z.object({
  where: z.lazy(() => AdminRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const AdminRoleCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.AdminRoleCreateManyPlayerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AdminRoleCreateManyPlayerInputSchema),z.lazy(() => AdminRoleCreateManyPlayerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpsertWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => PresenceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PresenceUpdateWithoutPlayerInputSchema),z.lazy(() => PresenceUncheckedUpdateWithoutPlayerInputSchema) ]),
  create: z.union([ z.lazy(() => PresenceCreateWithoutPlayerInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpdateWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => PresenceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PresenceUpdateWithoutPlayerInputSchema),z.lazy(() => PresenceUncheckedUpdateWithoutPlayerInputSchema) ]),
}).strict();

export const PresenceUpdateManyWithWhereWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpdateManyWithWhereWithoutPlayerInput> = z.object({
  where: z.lazy(() => PresenceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PresenceUpdateManyMutationInputSchema),z.lazy(() => PresenceUncheckedUpdateManyWithoutPresencesInputSchema) ]),
}).strict();

export const PresenceScalarWhereInputSchema: z.ZodType<Prisma.PresenceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PresenceScalarWhereInputSchema),z.lazy(() => PresenceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PresenceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PresenceScalarWhereInputSchema),z.lazy(() => PresenceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const RoleUpsertWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutPlayerInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const RoleUpdateWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutPlayerInputSchema) ]),
}).strict();

export const RoleUpdateManyWithWhereWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutPlayerInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutRolesInputSchema) ]),
}).strict();

export const RoleScalarWhereInputSchema: z.ZodType<Prisma.RoleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playable: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const BandUpsertWithWhereUniqueWithoutPlayersInputSchema: z.ZodType<Prisma.BandUpsertWithWhereUniqueWithoutPlayersInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BandUpdateWithoutPlayersInputSchema),z.lazy(() => BandUncheckedUpdateWithoutPlayersInputSchema) ]),
  create: z.union([ z.lazy(() => BandCreateWithoutPlayersInputSchema),z.lazy(() => BandUncheckedCreateWithoutPlayersInputSchema) ]),
}).strict();

export const BandUpdateWithWhereUniqueWithoutPlayersInputSchema: z.ZodType<Prisma.BandUpdateWithWhereUniqueWithoutPlayersInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BandUpdateWithoutPlayersInputSchema),z.lazy(() => BandUncheckedUpdateWithoutPlayersInputSchema) ]),
}).strict();

export const BandUpdateManyWithWhereWithoutPlayersInputSchema: z.ZodType<Prisma.BandUpdateManyWithWhereWithoutPlayersInput> = z.object({
  where: z.lazy(() => BandScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BandUpdateManyMutationInputSchema),z.lazy(() => BandUncheckedUpdateManyWithoutBandsInputSchema) ]),
}).strict();

export const BandScalarWhereInputSchema: z.ZodType<Prisma.BandScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BandScalarWhereInputSchema),z.lazy(() => BandScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BandScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BandScalarWhereInputSchema),z.lazy(() => BandScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const OrganizerRoleUpsertWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleUpsertWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => OrganizerRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrganizerRoleUpdateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUncheckedUpdateWithoutPlayerInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const OrganizerRoleUpdateWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => OrganizerRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrganizerRoleUpdateWithoutPlayerInputSchema),z.lazy(() => OrganizerRoleUncheckedUpdateWithoutPlayerInputSchema) ]),
}).strict();

export const OrganizerRoleUpdateManyWithWhereWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateManyWithWhereWithoutPlayerInput> = z.object({
  where: z.lazy(() => OrganizerRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrganizerRoleUpdateManyMutationInputSchema),z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutOrganizerRolesInputSchema) ]),
}).strict();

export const OrganizerRoleScalarWhereInputSchema: z.ZodType<Prisma.OrganizerRoleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrganizerRoleScalarWhereInputSchema),z.lazy(() => OrganizerRoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizerRoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizerRoleScalarWhereInputSchema),z.lazy(() => OrganizerRoleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const AdminRoleUpsertWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleUpsertWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => AdminRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AdminRoleUpdateWithoutPlayerInputSchema),z.lazy(() => AdminRoleUncheckedUpdateWithoutPlayerInputSchema) ]),
  create: z.union([ z.lazy(() => AdminRoleCreateWithoutPlayerInputSchema),z.lazy(() => AdminRoleUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const AdminRoleUpdateWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleUpdateWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => AdminRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AdminRoleUpdateWithoutPlayerInputSchema),z.lazy(() => AdminRoleUncheckedUpdateWithoutPlayerInputSchema) ]),
}).strict();

export const AdminRoleUpdateManyWithWhereWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleUpdateManyWithWhereWithoutPlayerInput> = z.object({
  where: z.lazy(() => AdminRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AdminRoleUpdateManyMutationInputSchema),z.lazy(() => AdminRoleUncheckedUpdateManyWithoutAdminRolesInputSchema) ]),
}).strict();

export const PresenceCreateWithoutGigInputSchema: z.ZodType<Prisma.PresenceCreateWithoutGigInput> = z.object({
  value: z.boolean().optional(),
  player: z.lazy(() => PlayerCreateNestedOneWithoutPresencesInputSchema)
}).strict();

export const PresenceUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateWithoutGigInput> = z.object({
  id: z.number().optional(),
  value: z.boolean().optional(),
  playerId: z.number()
}).strict();

export const PresenceCreateOrConnectWithoutGigInputSchema: z.ZodType<Prisma.PresenceCreateOrConnectWithoutGigInput> = z.object({
  where: z.lazy(() => PresenceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PresenceCreateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema) ]),
}).strict();

export const PresenceCreateManyGigInputEnvelopeSchema: z.ZodType<Prisma.PresenceCreateManyGigInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PresenceCreateManyGigInputSchema),z.lazy(() => PresenceCreateManyGigInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BandCreateWithoutGigsInputSchema: z.ZodType<Prisma.BandCreateWithoutGigsInput> = z.object({
  name: z.string(),
  players: z.lazy(() => PlayerCreateNestedManyWithoutBandsInputSchema).optional(),
  voices: z.lazy(() => VoiceCreateNestedManyWithoutBandInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateWithoutGigsInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutGigsInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  players: z.lazy(() => PlayerUncheckedCreateNestedManyWithoutBandsInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandCreateOrConnectWithoutGigsInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutGigsInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandCreateWithoutGigsInputSchema),z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema) ]),
}).strict();

export const OrganizerRoleCreateWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleCreateWithoutGigInput> = z.object({
  player: z.lazy(() => PlayerCreateNestedOneWithoutOrganizerRolesInputSchema)
}).strict();

export const OrganizerRoleUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedCreateWithoutGigInput> = z.object({
  id: z.number().optional(),
  playerId: z.number()
}).strict();

export const OrganizerRoleCreateOrConnectWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleCreateOrConnectWithoutGigInput> = z.object({
  where: z.lazy(() => OrganizerRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema) ]),
}).strict();

export const OrganizerRoleCreateManyGigInputEnvelopeSchema: z.ZodType<Prisma.OrganizerRoleCreateManyGigInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrganizerRoleCreateManyGigInputSchema),z.lazy(() => OrganizerRoleCreateManyGigInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PresenceUpsertWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpsertWithWhereUniqueWithoutGigInput> = z.object({
  where: z.lazy(() => PresenceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PresenceUpdateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedUpdateWithoutGigInputSchema) ]),
  create: z.union([ z.lazy(() => PresenceCreateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema) ]),
}).strict();

export const PresenceUpdateWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpdateWithWhereUniqueWithoutGigInput> = z.object({
  where: z.lazy(() => PresenceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PresenceUpdateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedUpdateWithoutGigInputSchema) ]),
}).strict();

export const PresenceUpdateManyWithWhereWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpdateManyWithWhereWithoutGigInput> = z.object({
  where: z.lazy(() => PresenceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PresenceUpdateManyMutationInputSchema),z.lazy(() => PresenceUncheckedUpdateManyWithoutPresencesInputSchema) ]),
}).strict();

export const BandUpsertWithoutGigsInputSchema: z.ZodType<Prisma.BandUpsertWithoutGigsInput> = z.object({
  update: z.union([ z.lazy(() => BandUpdateWithoutGigsInputSchema),z.lazy(() => BandUncheckedUpdateWithoutGigsInputSchema) ]),
  create: z.union([ z.lazy(() => BandCreateWithoutGigsInputSchema),z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema) ]),
}).strict();

export const BandUpdateWithoutGigsInputSchema: z.ZodType<Prisma.BandUpdateWithoutGigsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => PlayerUpdateManyWithoutBandsNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUpdateManyWithoutBandNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateWithoutGigsInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutGigsInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => PlayerUncheckedUpdateManyWithoutBandsNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const OrganizerRoleUpsertWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleUpsertWithWhereUniqueWithoutGigInput> = z.object({
  where: z.lazy(() => OrganizerRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrganizerRoleUpdateWithoutGigInputSchema),z.lazy(() => OrganizerRoleUncheckedUpdateWithoutGigInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizerRoleCreateWithoutGigInputSchema),z.lazy(() => OrganizerRoleUncheckedCreateWithoutGigInputSchema) ]),
}).strict();

export const OrganizerRoleUpdateWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateWithWhereUniqueWithoutGigInput> = z.object({
  where: z.lazy(() => OrganizerRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrganizerRoleUpdateWithoutGigInputSchema),z.lazy(() => OrganizerRoleUncheckedUpdateWithoutGigInputSchema) ]),
}).strict();

export const OrganizerRoleUpdateManyWithWhereWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateManyWithWhereWithoutGigInput> = z.object({
  where: z.lazy(() => OrganizerRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrganizerRoleUpdateManyMutationInputSchema),z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutOrganizerRolesInputSchema) ]),
}).strict();

export const GigCreateWithoutPresencesInputSchema: z.ZodType<Prisma.GigCreateWithoutPresencesInput> = z.object({
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  playable: z.boolean().optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema),
  organizerRoles: z.lazy(() => OrganizerRoleCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUncheckedCreateWithoutPresencesInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutPresencesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  bandId: z.number(),
  date: z.coerce.date(),
  location: z.string(),
  playable: z.boolean().optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigCreateOrConnectWithoutPresencesInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutPresencesInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigCreateWithoutPresencesInputSchema),z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema) ]),
}).strict();

export const PlayerCreateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerCreateWithoutPresencesInput> = z.object({
  name: z.string(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandCreateNestedManyWithoutPlayersInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutPresencesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedCreateNestedManyWithoutPlayersInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerCreateOrConnectWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutPresencesInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlayerCreateWithoutPresencesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema) ]),
}).strict();

export const GigUpsertWithoutPresencesInputSchema: z.ZodType<Prisma.GigUpsertWithoutPresencesInput> = z.object({
  update: z.union([ z.lazy(() => GigUpdateWithoutPresencesInputSchema),z.lazy(() => GigUncheckedUpdateWithoutPresencesInputSchema) ]),
  create: z.union([ z.lazy(() => GigCreateWithoutPresencesInputSchema),z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema) ]),
}).strict();

export const GigUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.GigUpdateWithoutPresencesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  band: z.lazy(() => BandUpdateOneRequiredWithoutGigsNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutPresencesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const PlayerUpsertWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutPresencesInput> = z.object({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutPresencesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutPresencesInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutPresencesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema) ]),
}).strict();

export const PlayerUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutPresencesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUpdateManyWithoutPlayersNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutPresencesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedUpdateManyWithoutPlayersNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const InstrumentCreateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutRolesInput> = z.object({
  name: z.string(),
  voices: z.lazy(() => VoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutRolesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  voices: z.lazy(() => VoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => InstrumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutRolesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const PlayerCreateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerCreateWithoutRolesInput> = z.object({
  name: z.string(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandCreateNestedManyWithoutPlayersInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutRolesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedCreateNestedManyWithoutPlayersInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlayerCreateWithoutRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const InstrumentUpsertWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUpsertWithoutRolesInput> = z.object({
  update: z.union([ z.lazy(() => InstrumentUpdateWithoutRolesInputSchema),z.lazy(() => InstrumentUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutRolesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const InstrumentUpdateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUpdateWithoutRolesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  voices: z.lazy(() => VoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const InstrumentUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  voices: z.lazy(() => VoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const PlayerUpsertWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutRolesInput> = z.object({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutRolesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const PlayerUpdateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutRolesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUpdateManyWithoutPlayersNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedUpdateManyWithoutPlayersNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const RoleCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleCreateWithoutInstrumentInput> = z.object({
  playable: z.boolean().optional(),
  player: z.lazy(() => PlayerCreateNestedOneWithoutRolesInputSchema)
}).strict();

export const RoleUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutInstrumentInput> = z.object({
  id: z.number().optional(),
  playable: z.boolean().optional(),
  playerId: z.number()
}).strict();

export const RoleCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutInstrumentInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const RoleCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyInstrumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyInstrumentInputSchema),z.lazy(() => RoleCreateManyInstrumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const VoiceCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceCreateWithoutInstrumentInput> = z.object({
  band: z.lazy(() => BandCreateNestedOneWithoutVoicesInputSchema)
}).strict();

export const VoiceUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceUncheckedCreateWithoutInstrumentInput> = z.object({
  id: z.number().optional(),
  bandId: z.number()
}).strict();

export const VoiceCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceCreateOrConnectWithoutInstrumentInput> = z.object({
  where: z.lazy(() => VoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VoiceCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const VoiceCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.VoiceCreateManyInstrumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VoiceCreateManyInstrumentInputSchema),z.lazy(() => VoiceCreateManyInstrumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutInstrumentInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutInstrumentInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutInstrumentInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutInstrumentInputSchema) ]),
}).strict();

export const RoleUpdateManyWithWhereWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutInstrumentInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutRolesInputSchema) ]),
}).strict();

export const VoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceUpsertWithWhereUniqueWithoutInstrumentInput> = z.object({
  where: z.lazy(() => VoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VoiceUpdateWithoutInstrumentInputSchema),z.lazy(() => VoiceUncheckedUpdateWithoutInstrumentInputSchema) ]),
  create: z.union([ z.lazy(() => VoiceCreateWithoutInstrumentInputSchema),z.lazy(() => VoiceUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const VoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceUpdateWithWhereUniqueWithoutInstrumentInput> = z.object({
  where: z.lazy(() => VoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VoiceUpdateWithoutInstrumentInputSchema),z.lazy(() => VoiceUncheckedUpdateWithoutInstrumentInputSchema) ]),
}).strict();

export const VoiceUpdateManyWithWhereWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceUpdateManyWithWhereWithoutInstrumentInput> = z.object({
  where: z.lazy(() => VoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VoiceUpdateManyMutationInputSchema),z.lazy(() => VoiceUncheckedUpdateManyWithoutVoicesInputSchema) ]),
}).strict();

export const InstrumentCreateWithoutVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutVoicesInput> = z.object({
  name: z.string(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUncheckedCreateWithoutVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutVoicesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentCreateOrConnectWithoutVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutVoicesInput> = z.object({
  where: z.lazy(() => InstrumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutVoicesInputSchema) ]),
}).strict();

export const BandCreateWithoutVoicesInputSchema: z.ZodType<Prisma.BandCreateWithoutVoicesInput> = z.object({
  name: z.string(),
  players: z.lazy(() => PlayerCreateNestedManyWithoutBandsInputSchema).optional(),
  gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateWithoutVoicesInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutVoicesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  players: z.lazy(() => PlayerUncheckedCreateNestedManyWithoutBandsInputSchema).optional(),
  gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandCreateOrConnectWithoutVoicesInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutVoicesInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandCreateWithoutVoicesInputSchema),z.lazy(() => BandUncheckedCreateWithoutVoicesInputSchema) ]),
}).strict();

export const InstrumentUpsertWithoutVoicesInputSchema: z.ZodType<Prisma.InstrumentUpsertWithoutVoicesInput> = z.object({
  update: z.union([ z.lazy(() => InstrumentUpdateWithoutVoicesInputSchema),z.lazy(() => InstrumentUncheckedUpdateWithoutVoicesInputSchema) ]),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutVoicesInputSchema) ]),
}).strict();

export const InstrumentUpdateWithoutVoicesInputSchema: z.ZodType<Prisma.InstrumentUpdateWithoutVoicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const InstrumentUncheckedUpdateWithoutVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutVoicesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const BandUpsertWithoutVoicesInputSchema: z.ZodType<Prisma.BandUpsertWithoutVoicesInput> = z.object({
  update: z.union([ z.lazy(() => BandUpdateWithoutVoicesInputSchema),z.lazy(() => BandUncheckedUpdateWithoutVoicesInputSchema) ]),
  create: z.union([ z.lazy(() => BandCreateWithoutVoicesInputSchema),z.lazy(() => BandUncheckedCreateWithoutVoicesInputSchema) ]),
}).strict();

export const BandUpdateWithoutVoicesInputSchema: z.ZodType<Prisma.BandUpdateWithoutVoicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => PlayerUpdateManyWithoutBandsNestedInputSchema).optional(),
  gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateWithoutVoicesInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutVoicesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => PlayerUncheckedUpdateManyWithoutBandsNestedInputSchema).optional(),
  gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const GigCreateWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.GigCreateWithoutOrganizerRolesInput> = z.object({
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema)
}).strict();

export const GigUncheckedCreateWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutOrganizerRolesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  bandId: z.number(),
  date: z.coerce.date(),
  location: z.string(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigCreateOrConnectWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutOrganizerRolesInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigCreateWithoutOrganizerRolesInputSchema),z.lazy(() => GigUncheckedCreateWithoutOrganizerRolesInputSchema) ]),
}).strict();

export const PlayerCreateWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.PlayerCreateWithoutOrganizerRolesInput> = z.object({
  name: z.string(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandCreateNestedManyWithoutPlayersInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutOrganizerRolesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedCreateNestedManyWithoutPlayersInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerCreateOrConnectWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutOrganizerRolesInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlayerCreateWithoutOrganizerRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutOrganizerRolesInputSchema) ]),
}).strict();

export const GigUpsertWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.GigUpsertWithoutOrganizerRolesInput> = z.object({
  update: z.union([ z.lazy(() => GigUpdateWithoutOrganizerRolesInputSchema),z.lazy(() => GigUncheckedUpdateWithoutOrganizerRolesInputSchema) ]),
  create: z.union([ z.lazy(() => GigCreateWithoutOrganizerRolesInputSchema),z.lazy(() => GigUncheckedCreateWithoutOrganizerRolesInputSchema) ]),
}).strict();

export const GigUpdateWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.GigUpdateWithoutOrganizerRolesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
  band: z.lazy(() => BandUpdateOneRequiredWithoutGigsNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutOrganizerRolesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const PlayerUpsertWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutOrganizerRolesInput> = z.object({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutOrganizerRolesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutOrganizerRolesInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutOrganizerRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutOrganizerRolesInputSchema) ]),
}).strict();

export const PlayerUpdateWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutOrganizerRolesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUpdateManyWithoutPlayersNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutOrganizerRolesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedUpdateManyWithoutPlayersNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const BandCreateWithoutAdminRolesInputSchema: z.ZodType<Prisma.BandCreateWithoutAdminRolesInput> = z.object({
  name: z.string(),
  players: z.lazy(() => PlayerCreateNestedManyWithoutBandsInputSchema).optional(),
  gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
  voices: z.lazy(() => VoiceCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateWithoutAdminRolesInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutAdminRolesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  players: z.lazy(() => PlayerUncheckedCreateNestedManyWithoutBandsInputSchema).optional(),
  gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandCreateOrConnectWithoutAdminRolesInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutAdminRolesInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandCreateWithoutAdminRolesInputSchema),z.lazy(() => BandUncheckedCreateWithoutAdminRolesInputSchema) ]),
}).strict();

export const PlayerCreateWithoutAdminRolesInputSchema: z.ZodType<Prisma.PlayerCreateWithoutAdminRolesInput> = z.object({
  name: z.string(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandCreateNestedManyWithoutPlayersInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutAdminRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutAdminRolesInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedCreateNestedManyWithoutPlayersInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerCreateOrConnectWithoutAdminRolesInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutAdminRolesInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlayerCreateWithoutAdminRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutAdminRolesInputSchema) ]),
}).strict();

export const BandUpsertWithoutAdminRolesInputSchema: z.ZodType<Prisma.BandUpsertWithoutAdminRolesInput> = z.object({
  update: z.union([ z.lazy(() => BandUpdateWithoutAdminRolesInputSchema),z.lazy(() => BandUncheckedUpdateWithoutAdminRolesInputSchema) ]),
  create: z.union([ z.lazy(() => BandCreateWithoutAdminRolesInputSchema),z.lazy(() => BandUncheckedCreateWithoutAdminRolesInputSchema) ]),
}).strict();

export const BandUpdateWithoutAdminRolesInputSchema: z.ZodType<Prisma.BandUpdateWithoutAdminRolesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => PlayerUpdateManyWithoutBandsNestedInputSchema).optional(),
  gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateWithoutAdminRolesInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutAdminRolesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => PlayerUncheckedUpdateManyWithoutBandsNestedInputSchema).optional(),
  gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const PlayerUpsertWithoutAdminRolesInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutAdminRolesInput> = z.object({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutAdminRolesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutAdminRolesInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutAdminRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutAdminRolesInputSchema) ]),
}).strict();

export const PlayerUpdateWithoutAdminRolesInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutAdminRolesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUpdateManyWithoutPlayersNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutAdminRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutAdminRolesInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  bands: z.lazy(() => BandUncheckedUpdateManyWithoutPlayersNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const GigCreateManyBandInputSchema: z.ZodType<Prisma.GigCreateManyBandInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1, { message: "C\'est vide :(" }).max(32),
  date: z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),
  location: z.string().min(1, { message: "Dans ton c** ?" }).max(60),
  playable: z.boolean().optional()
}).strict();

export const VoiceCreateManyBandInputSchema: z.ZodType<Prisma.VoiceCreateManyBandInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int()
}).strict();

export const AdminRoleCreateManyBandInputSchema: z.ZodType<Prisma.AdminRoleCreateManyBandInput> = z.object({
  id: z.number().int().optional(),
  playerId: z.number().int()
}).strict();

export const PlayerUpdateWithoutBandsInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutBandsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutBandsInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutBandsInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateManyWithoutPlayersInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateManyWithoutPlayersInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "J'ai pas compris." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GigUpdateWithoutBandInputSchema: z.ZodType<Prisma.GigUpdateWithoutBandInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutBandInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  organizerRoles: z.lazy(() => OrganizerRoleUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateManyWithoutGigsInputSchema: z.ZodType<Prisma.GigUncheckedUpdateManyWithoutGigsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "C\'est vide :(" }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date().min(new Date(), { message: "Un peu trop tard !"}),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string().min(1, { message: "Dans ton c** ?" }).max(60),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoiceUpdateWithoutBandInputSchema: z.ZodType<Prisma.VoiceUpdateWithoutBandInput> = z.object({
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutVoicesNestedInputSchema).optional()
}).strict();

export const VoiceUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.VoiceUncheckedUpdateWithoutBandInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoiceUncheckedUpdateManyWithoutVoicesInputSchema: z.ZodType<Prisma.VoiceUncheckedUpdateManyWithoutVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminRoleUpdateWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleUpdateWithoutBandInput> = z.object({
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutAdminRolesNestedInputSchema).optional()
}).strict();

export const AdminRoleUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.AdminRoleUncheckedUpdateWithoutBandInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminRoleUncheckedUpdateManyWithoutAdminRolesInputSchema: z.ZodType<Prisma.AdminRoleUncheckedUpdateManyWithoutAdminRolesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceCreateManyPlayerInputSchema: z.ZodType<Prisma.PresenceCreateManyPlayerInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  gigId: z.number().int()
}).strict();

export const RoleCreateManyPlayerInputSchema: z.ZodType<Prisma.RoleCreateManyPlayerInput> = z.object({
  id: z.number().int().optional(),
  playable: z.boolean().optional(),
  instrumentId: z.number().int()
}).strict();

export const OrganizerRoleCreateManyPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleCreateManyPlayerInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int()
}).strict();

export const AdminRoleCreateManyPlayerInputSchema: z.ZodType<Prisma.AdminRoleCreateManyPlayerInput> = z.object({
  id: z.number().int().optional(),
  bandId: z.number().int()
}).strict();

export const PresenceUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpdateWithoutPlayerInput> = z.object({
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gig: z.lazy(() => GigUpdateOneRequiredWithoutPresencesNestedInputSchema).optional()
}).strict();

export const PresenceUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceUncheckedUpdateManyWithoutPresencesInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyWithoutPresencesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpdateWithoutPlayerInput> = z.object({
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutRolesInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutRolesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BandUpdateWithoutPlayersInputSchema: z.ZodType<Prisma.BandUpdateWithoutPlayersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUpdateManyWithoutBandNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateWithoutPlayersInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutPlayersInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  voices: z.lazy(() => VoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  adminRoles: z.lazy(() => AdminRoleUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateManyWithoutBandsInputSchema: z.ZodType<Prisma.BandUncheckedUpdateManyWithoutBandsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(1, { message: "Pas de nom, pas de fanfare." }).max(32),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganizerRoleUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateWithoutPlayerInput> = z.object({
  gig: z.lazy(() => GigUpdateOneRequiredWithoutOrganizerRolesNestedInputSchema).optional()
}).strict();

export const OrganizerRoleUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganizerRoleUncheckedUpdateManyWithoutOrganizerRolesInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedUpdateManyWithoutOrganizerRolesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminRoleUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleUpdateWithoutPlayerInput> = z.object({
  band: z.lazy(() => BandUpdateOneRequiredWithoutAdminRolesNestedInputSchema).optional()
}).strict();

export const AdminRoleUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.AdminRoleUncheckedUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceCreateManyGigInputSchema: z.ZodType<Prisma.PresenceCreateManyGigInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  playerId: z.number().int()
}).strict();

export const OrganizerRoleCreateManyGigInputSchema: z.ZodType<Prisma.OrganizerRoleCreateManyGigInput> = z.object({
  id: z.number().int().optional(),
  playerId: z.number().int()
}).strict();

export const PresenceUpdateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpdateWithoutGigInput> = z.object({
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema).optional()
}).strict();

export const PresenceUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateWithoutGigInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrganizerRoleUpdateWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleUpdateWithoutGigInput> = z.object({
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutOrganizerRolesNestedInputSchema).optional()
}).strict();

export const OrganizerRoleUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.OrganizerRoleUncheckedUpdateWithoutGigInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleCreateManyInstrumentInputSchema: z.ZodType<Prisma.RoleCreateManyInstrumentInput> = z.object({
  id: z.number().int().optional(),
  playable: z.boolean().optional(),
  playerId: z.number().int()
}).strict();

export const VoiceCreateManyInstrumentInputSchema: z.ZodType<Prisma.VoiceCreateManyInstrumentInput> = z.object({
  id: z.number().int().optional(),
  bandId: z.number().int()
}).strict();

export const RoleUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpdateWithoutInstrumentInput> = z.object({
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutInstrumentInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VoiceUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceUpdateWithoutInstrumentInput> = z.object({
  band: z.lazy(() => BandUpdateOneRequiredWithoutVoicesNestedInputSchema).optional()
}).strict();

export const VoiceUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.VoiceUncheckedUpdateWithoutInstrumentInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const BandFindFirstArgsSchema: z.ZodType<Prisma.BandFindFirstArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  where: BandWhereInputSchema.optional(),
  orderBy: z.union([ BandOrderByWithRelationInputSchema.array(),BandOrderByWithRelationInputSchema ]).optional(),
  cursor: BandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BandScalarFieldEnumSchema.array().optional(),
}).strict()

export const BandFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BandFindFirstOrThrowArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  where: BandWhereInputSchema.optional(),
  orderBy: z.union([ BandOrderByWithRelationInputSchema.array(),BandOrderByWithRelationInputSchema ]).optional(),
  cursor: BandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BandScalarFieldEnumSchema.array().optional(),
}).strict()

export const BandFindManyArgsSchema: z.ZodType<Prisma.BandFindManyArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  where: BandWhereInputSchema.optional(),
  orderBy: z.union([ BandOrderByWithRelationInputSchema.array(),BandOrderByWithRelationInputSchema ]).optional(),
  cursor: BandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BandScalarFieldEnumSchema.array().optional(),
}).strict()

export const BandAggregateArgsSchema: z.ZodType<Prisma.BandAggregateArgs> = z.object({
  where: BandWhereInputSchema.optional(),
  orderBy: z.union([ BandOrderByWithRelationInputSchema.array(),BandOrderByWithRelationInputSchema ]).optional(),
  cursor: BandWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BandGroupByArgsSchema: z.ZodType<Prisma.BandGroupByArgs> = z.object({
  where: BandWhereInputSchema.optional(),
  orderBy: z.union([ BandOrderByWithAggregationInputSchema.array(),BandOrderByWithAggregationInputSchema ]).optional(),
  by: BandScalarFieldEnumSchema.array(),
  having: BandScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BandFindUniqueArgsSchema: z.ZodType<Prisma.BandFindUniqueArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  where: BandWhereUniqueInputSchema,
}).strict()

export const BandFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BandFindUniqueOrThrowArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  where: BandWhereUniqueInputSchema,
}).strict()

export const PlayerFindFirstArgsSchema: z.ZodType<Prisma.PlayerFindFirstArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(),PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PlayerScalarFieldEnumSchema.array().optional(),
}).strict()

export const PlayerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindFirstOrThrowArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(),PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PlayerScalarFieldEnumSchema.array().optional(),
}).strict()

export const PlayerFindManyArgsSchema: z.ZodType<Prisma.PlayerFindManyArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(),PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PlayerScalarFieldEnumSchema.array().optional(),
}).strict()

export const PlayerAggregateArgsSchema: z.ZodType<Prisma.PlayerAggregateArgs> = z.object({
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(),PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PlayerGroupByArgsSchema: z.ZodType<Prisma.PlayerGroupByArgs> = z.object({
  where: PlayerWhereInputSchema.optional(),
  orderBy: z.union([ PlayerOrderByWithAggregationInputSchema.array(),PlayerOrderByWithAggregationInputSchema ]).optional(),
  by: PlayerScalarFieldEnumSchema.array(),
  having: PlayerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PlayerFindUniqueArgsSchema: z.ZodType<Prisma.PlayerFindUniqueArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereUniqueInputSchema,
}).strict()

export const PlayerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindUniqueOrThrowArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereUniqueInputSchema,
}).strict()

export const GigFindFirstArgsSchema: z.ZodType<Prisma.GigFindFirstArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  where: GigWhereInputSchema.optional(),
  orderBy: z.union([ GigOrderByWithRelationInputSchema.array(),GigOrderByWithRelationInputSchema ]).optional(),
  cursor: GigWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GigScalarFieldEnumSchema.array().optional(),
}).strict()

export const GigFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GigFindFirstOrThrowArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  where: GigWhereInputSchema.optional(),
  orderBy: z.union([ GigOrderByWithRelationInputSchema.array(),GigOrderByWithRelationInputSchema ]).optional(),
  cursor: GigWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GigScalarFieldEnumSchema.array().optional(),
}).strict()

export const GigFindManyArgsSchema: z.ZodType<Prisma.GigFindManyArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  where: GigWhereInputSchema.optional(),
  orderBy: z.union([ GigOrderByWithRelationInputSchema.array(),GigOrderByWithRelationInputSchema ]).optional(),
  cursor: GigWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GigScalarFieldEnumSchema.array().optional(),
}).strict()

export const GigAggregateArgsSchema: z.ZodType<Prisma.GigAggregateArgs> = z.object({
  where: GigWhereInputSchema.optional(),
  orderBy: z.union([ GigOrderByWithRelationInputSchema.array(),GigOrderByWithRelationInputSchema ]).optional(),
  cursor: GigWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const GigGroupByArgsSchema: z.ZodType<Prisma.GigGroupByArgs> = z.object({
  where: GigWhereInputSchema.optional(),
  orderBy: z.union([ GigOrderByWithAggregationInputSchema.array(),GigOrderByWithAggregationInputSchema ]).optional(),
  by: GigScalarFieldEnumSchema.array(),
  having: GigScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const GigFindUniqueArgsSchema: z.ZodType<Prisma.GigFindUniqueArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  where: GigWhereUniqueInputSchema,
}).strict()

export const GigFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GigFindUniqueOrThrowArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  where: GigWhereUniqueInputSchema,
}).strict()

export const PresenceFindFirstArgsSchema: z.ZodType<Prisma.PresenceFindFirstArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  where: PresenceWhereInputSchema.optional(),
  orderBy: z.union([ PresenceOrderByWithRelationInputSchema.array(),PresenceOrderByWithRelationInputSchema ]).optional(),
  cursor: PresenceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PresenceScalarFieldEnumSchema.array().optional(),
}).strict()

export const PresenceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PresenceFindFirstOrThrowArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  where: PresenceWhereInputSchema.optional(),
  orderBy: z.union([ PresenceOrderByWithRelationInputSchema.array(),PresenceOrderByWithRelationInputSchema ]).optional(),
  cursor: PresenceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PresenceScalarFieldEnumSchema.array().optional(),
}).strict()

export const PresenceFindManyArgsSchema: z.ZodType<Prisma.PresenceFindManyArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  where: PresenceWhereInputSchema.optional(),
  orderBy: z.union([ PresenceOrderByWithRelationInputSchema.array(),PresenceOrderByWithRelationInputSchema ]).optional(),
  cursor: PresenceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PresenceScalarFieldEnumSchema.array().optional(),
}).strict()

export const PresenceAggregateArgsSchema: z.ZodType<Prisma.PresenceAggregateArgs> = z.object({
  where: PresenceWhereInputSchema.optional(),
  orderBy: z.union([ PresenceOrderByWithRelationInputSchema.array(),PresenceOrderByWithRelationInputSchema ]).optional(),
  cursor: PresenceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PresenceGroupByArgsSchema: z.ZodType<Prisma.PresenceGroupByArgs> = z.object({
  where: PresenceWhereInputSchema.optional(),
  orderBy: z.union([ PresenceOrderByWithAggregationInputSchema.array(),PresenceOrderByWithAggregationInputSchema ]).optional(),
  by: PresenceScalarFieldEnumSchema.array(),
  having: PresenceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PresenceFindUniqueArgsSchema: z.ZodType<Prisma.PresenceFindUniqueArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  where: PresenceWhereUniqueInputSchema,
}).strict()

export const PresenceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PresenceFindUniqueOrThrowArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  where: PresenceWhereUniqueInputSchema,
}).strict()

export const RoleFindFirstArgsSchema: z.ZodType<Prisma.RoleFindFirstArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const RoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleFindFirstOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const RoleFindManyArgsSchema: z.ZodType<Prisma.RoleFindManyArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: RoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const RoleAggregateArgsSchema: z.ZodType<Prisma.RoleAggregateArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RoleGroupByArgsSchema: z.ZodType<Prisma.RoleGroupByArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithAggregationInputSchema.array(),RoleOrderByWithAggregationInputSchema ]).optional(),
  by: RoleScalarFieldEnumSchema.array(),
  having: RoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RoleFindUniqueArgsSchema: z.ZodType<Prisma.RoleFindUniqueArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict()

export const RoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoleFindUniqueOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict()

export const InstrumentFindFirstArgsSchema: z.ZodType<Prisma.InstrumentFindFirstArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  where: InstrumentWhereInputSchema.optional(),
  orderBy: z.union([ InstrumentOrderByWithRelationInputSchema.array(),InstrumentOrderByWithRelationInputSchema ]).optional(),
  cursor: InstrumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstrumentScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstrumentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InstrumentFindFirstOrThrowArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  where: InstrumentWhereInputSchema.optional(),
  orderBy: z.union([ InstrumentOrderByWithRelationInputSchema.array(),InstrumentOrderByWithRelationInputSchema ]).optional(),
  cursor: InstrumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstrumentScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstrumentFindManyArgsSchema: z.ZodType<Prisma.InstrumentFindManyArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  where: InstrumentWhereInputSchema.optional(),
  orderBy: z.union([ InstrumentOrderByWithRelationInputSchema.array(),InstrumentOrderByWithRelationInputSchema ]).optional(),
  cursor: InstrumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InstrumentScalarFieldEnumSchema.array().optional(),
}).strict()

export const InstrumentAggregateArgsSchema: z.ZodType<Prisma.InstrumentAggregateArgs> = z.object({
  where: InstrumentWhereInputSchema.optional(),
  orderBy: z.union([ InstrumentOrderByWithRelationInputSchema.array(),InstrumentOrderByWithRelationInputSchema ]).optional(),
  cursor: InstrumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InstrumentGroupByArgsSchema: z.ZodType<Prisma.InstrumentGroupByArgs> = z.object({
  where: InstrumentWhereInputSchema.optional(),
  orderBy: z.union([ InstrumentOrderByWithAggregationInputSchema.array(),InstrumentOrderByWithAggregationInputSchema ]).optional(),
  by: InstrumentScalarFieldEnumSchema.array(),
  having: InstrumentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InstrumentFindUniqueArgsSchema: z.ZodType<Prisma.InstrumentFindUniqueArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  where: InstrumentWhereUniqueInputSchema,
}).strict()

export const InstrumentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InstrumentFindUniqueOrThrowArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  where: InstrumentWhereUniqueInputSchema,
}).strict()

export const VoiceFindFirstArgsSchema: z.ZodType<Prisma.VoiceFindFirstArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  where: VoiceWhereInputSchema.optional(),
  orderBy: z.union([ VoiceOrderByWithRelationInputSchema.array(),VoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: VoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const VoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VoiceFindFirstOrThrowArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  where: VoiceWhereInputSchema.optional(),
  orderBy: z.union([ VoiceOrderByWithRelationInputSchema.array(),VoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: VoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const VoiceFindManyArgsSchema: z.ZodType<Prisma.VoiceFindManyArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  where: VoiceWhereInputSchema.optional(),
  orderBy: z.union([ VoiceOrderByWithRelationInputSchema.array(),VoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: VoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: VoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const VoiceAggregateArgsSchema: z.ZodType<Prisma.VoiceAggregateArgs> = z.object({
  where: VoiceWhereInputSchema.optional(),
  orderBy: z.union([ VoiceOrderByWithRelationInputSchema.array(),VoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: VoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VoiceGroupByArgsSchema: z.ZodType<Prisma.VoiceGroupByArgs> = z.object({
  where: VoiceWhereInputSchema.optional(),
  orderBy: z.union([ VoiceOrderByWithAggregationInputSchema.array(),VoiceOrderByWithAggregationInputSchema ]).optional(),
  by: VoiceScalarFieldEnumSchema.array(),
  having: VoiceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const VoiceFindUniqueArgsSchema: z.ZodType<Prisma.VoiceFindUniqueArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  where: VoiceWhereUniqueInputSchema,
}).strict()

export const VoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VoiceFindUniqueOrThrowArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  where: VoiceWhereUniqueInputSchema,
}).strict()

export const OrganizerRoleFindFirstArgsSchema: z.ZodType<Prisma.OrganizerRoleFindFirstArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  where: OrganizerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OrganizerRoleOrderByWithRelationInputSchema.array(),OrganizerRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizerRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganizerRoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganizerRoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrganizerRoleFindFirstOrThrowArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  where: OrganizerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OrganizerRoleOrderByWithRelationInputSchema.array(),OrganizerRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizerRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganizerRoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganizerRoleFindManyArgsSchema: z.ZodType<Prisma.OrganizerRoleFindManyArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  where: OrganizerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OrganizerRoleOrderByWithRelationInputSchema.array(),OrganizerRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizerRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrganizerRoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrganizerRoleAggregateArgsSchema: z.ZodType<Prisma.OrganizerRoleAggregateArgs> = z.object({
  where: OrganizerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OrganizerRoleOrderByWithRelationInputSchema.array(),OrganizerRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizerRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrganizerRoleGroupByArgsSchema: z.ZodType<Prisma.OrganizerRoleGroupByArgs> = z.object({
  where: OrganizerRoleWhereInputSchema.optional(),
  orderBy: z.union([ OrganizerRoleOrderByWithAggregationInputSchema.array(),OrganizerRoleOrderByWithAggregationInputSchema ]).optional(),
  by: OrganizerRoleScalarFieldEnumSchema.array(),
  having: OrganizerRoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrganizerRoleFindUniqueArgsSchema: z.ZodType<Prisma.OrganizerRoleFindUniqueArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  where: OrganizerRoleWhereUniqueInputSchema,
}).strict()

export const OrganizerRoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrganizerRoleFindUniqueOrThrowArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  where: OrganizerRoleWhereUniqueInputSchema,
}).strict()

export const AdminRoleFindFirstArgsSchema: z.ZodType<Prisma.AdminRoleFindFirstArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  where: AdminRoleWhereInputSchema.optional(),
  orderBy: z.union([ AdminRoleOrderByWithRelationInputSchema.array(),AdminRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AdminRoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const AdminRoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AdminRoleFindFirstOrThrowArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  where: AdminRoleWhereInputSchema.optional(),
  orderBy: z.union([ AdminRoleOrderByWithRelationInputSchema.array(),AdminRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AdminRoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const AdminRoleFindManyArgsSchema: z.ZodType<Prisma.AdminRoleFindManyArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  where: AdminRoleWhereInputSchema.optional(),
  orderBy: z.union([ AdminRoleOrderByWithRelationInputSchema.array(),AdminRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AdminRoleScalarFieldEnumSchema.array().optional(),
}).strict()

export const AdminRoleAggregateArgsSchema: z.ZodType<Prisma.AdminRoleAggregateArgs> = z.object({
  where: AdminRoleWhereInputSchema.optional(),
  orderBy: z.union([ AdminRoleOrderByWithRelationInputSchema.array(),AdminRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminRoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AdminRoleGroupByArgsSchema: z.ZodType<Prisma.AdminRoleGroupByArgs> = z.object({
  where: AdminRoleWhereInputSchema.optional(),
  orderBy: z.union([ AdminRoleOrderByWithAggregationInputSchema.array(),AdminRoleOrderByWithAggregationInputSchema ]).optional(),
  by: AdminRoleScalarFieldEnumSchema.array(),
  having: AdminRoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AdminRoleFindUniqueArgsSchema: z.ZodType<Prisma.AdminRoleFindUniqueArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  where: AdminRoleWhereUniqueInputSchema,
}).strict()

export const AdminRoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AdminRoleFindUniqueOrThrowArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  where: AdminRoleWhereUniqueInputSchema,
}).strict()

export const BandCreateArgsSchema: z.ZodType<Prisma.BandCreateArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  data: z.union([ BandCreateInputSchema,BandUncheckedCreateInputSchema ]),
}).strict()

export const BandUpsertArgsSchema: z.ZodType<Prisma.BandUpsertArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  where: BandWhereUniqueInputSchema,
  create: z.union([ BandCreateInputSchema,BandUncheckedCreateInputSchema ]),
  update: z.union([ BandUpdateInputSchema,BandUncheckedUpdateInputSchema ]),
}).strict()

export const BandCreateManyArgsSchema: z.ZodType<Prisma.BandCreateManyArgs> = z.object({
  data: z.union([ BandCreateManyInputSchema,BandCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const BandDeleteArgsSchema: z.ZodType<Prisma.BandDeleteArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  where: BandWhereUniqueInputSchema,
}).strict()

export const BandUpdateArgsSchema: z.ZodType<Prisma.BandUpdateArgs> = z.object({
  select: BandSelectSchema.optional(),
  include: BandIncludeSchema.optional(),
  data: z.union([ BandUpdateInputSchema,BandUncheckedUpdateInputSchema ]),
  where: BandWhereUniqueInputSchema,
}).strict()

export const BandUpdateManyArgsSchema: z.ZodType<Prisma.BandUpdateManyArgs> = z.object({
  data: z.union([ BandUpdateManyMutationInputSchema,BandUncheckedUpdateManyInputSchema ]),
  where: BandWhereInputSchema.optional(),
}).strict()

export const BandDeleteManyArgsSchema: z.ZodType<Prisma.BandDeleteManyArgs> = z.object({
  where: BandWhereInputSchema.optional(),
}).strict()

export const PlayerCreateArgsSchema: z.ZodType<Prisma.PlayerCreateArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  data: z.union([ PlayerCreateInputSchema,PlayerUncheckedCreateInputSchema ]),
}).strict()

export const PlayerUpsertArgsSchema: z.ZodType<Prisma.PlayerUpsertArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereUniqueInputSchema,
  create: z.union([ PlayerCreateInputSchema,PlayerUncheckedCreateInputSchema ]),
  update: z.union([ PlayerUpdateInputSchema,PlayerUncheckedUpdateInputSchema ]),
}).strict()

export const PlayerCreateManyArgsSchema: z.ZodType<Prisma.PlayerCreateManyArgs> = z.object({
  data: z.union([ PlayerCreateManyInputSchema,PlayerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PlayerDeleteArgsSchema: z.ZodType<Prisma.PlayerDeleteArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereUniqueInputSchema,
}).strict()

export const PlayerUpdateArgsSchema: z.ZodType<Prisma.PlayerUpdateArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  data: z.union([ PlayerUpdateInputSchema,PlayerUncheckedUpdateInputSchema ]),
  where: PlayerWhereUniqueInputSchema,
}).strict()

export const PlayerUpdateManyArgsSchema: z.ZodType<Prisma.PlayerUpdateManyArgs> = z.object({
  data: z.union([ PlayerUpdateManyMutationInputSchema,PlayerUncheckedUpdateManyInputSchema ]),
  where: PlayerWhereInputSchema.optional(),
}).strict()

export const PlayerDeleteManyArgsSchema: z.ZodType<Prisma.PlayerDeleteManyArgs> = z.object({
  where: PlayerWhereInputSchema.optional(),
}).strict()

export const GigCreateArgsSchema: z.ZodType<Prisma.GigCreateArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  data: z.union([ GigCreateInputSchema,GigUncheckedCreateInputSchema ]),
}).strict()

export const GigUpsertArgsSchema: z.ZodType<Prisma.GigUpsertArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  where: GigWhereUniqueInputSchema,
  create: z.union([ GigCreateInputSchema,GigUncheckedCreateInputSchema ]),
  update: z.union([ GigUpdateInputSchema,GigUncheckedUpdateInputSchema ]),
}).strict()

export const GigCreateManyArgsSchema: z.ZodType<Prisma.GigCreateManyArgs> = z.object({
  data: z.union([ GigCreateManyInputSchema,GigCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const GigDeleteArgsSchema: z.ZodType<Prisma.GigDeleteArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  where: GigWhereUniqueInputSchema,
}).strict()

export const GigUpdateArgsSchema: z.ZodType<Prisma.GigUpdateArgs> = z.object({
  select: GigSelectSchema.optional(),
  include: GigIncludeSchema.optional(),
  data: z.union([ GigUpdateInputSchema,GigUncheckedUpdateInputSchema ]),
  where: GigWhereUniqueInputSchema,
}).strict()

export const GigUpdateManyArgsSchema: z.ZodType<Prisma.GigUpdateManyArgs> = z.object({
  data: z.union([ GigUpdateManyMutationInputSchema,GigUncheckedUpdateManyInputSchema ]),
  where: GigWhereInputSchema.optional(),
}).strict()

export const GigDeleteManyArgsSchema: z.ZodType<Prisma.GigDeleteManyArgs> = z.object({
  where: GigWhereInputSchema.optional(),
}).strict()

export const PresenceCreateArgsSchema: z.ZodType<Prisma.PresenceCreateArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  data: z.union([ PresenceCreateInputSchema,PresenceUncheckedCreateInputSchema ]),
}).strict()

export const PresenceUpsertArgsSchema: z.ZodType<Prisma.PresenceUpsertArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  where: PresenceWhereUniqueInputSchema,
  create: z.union([ PresenceCreateInputSchema,PresenceUncheckedCreateInputSchema ]),
  update: z.union([ PresenceUpdateInputSchema,PresenceUncheckedUpdateInputSchema ]),
}).strict()

export const PresenceCreateManyArgsSchema: z.ZodType<Prisma.PresenceCreateManyArgs> = z.object({
  data: z.union([ PresenceCreateManyInputSchema,PresenceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PresenceDeleteArgsSchema: z.ZodType<Prisma.PresenceDeleteArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  where: PresenceWhereUniqueInputSchema,
}).strict()

export const PresenceUpdateArgsSchema: z.ZodType<Prisma.PresenceUpdateArgs> = z.object({
  select: PresenceSelectSchema.optional(),
  include: PresenceIncludeSchema.optional(),
  data: z.union([ PresenceUpdateInputSchema,PresenceUncheckedUpdateInputSchema ]),
  where: PresenceWhereUniqueInputSchema,
}).strict()

export const PresenceUpdateManyArgsSchema: z.ZodType<Prisma.PresenceUpdateManyArgs> = z.object({
  data: z.union([ PresenceUpdateManyMutationInputSchema,PresenceUncheckedUpdateManyInputSchema ]),
  where: PresenceWhereInputSchema.optional(),
}).strict()

export const PresenceDeleteManyArgsSchema: z.ZodType<Prisma.PresenceDeleteManyArgs> = z.object({
  where: PresenceWhereInputSchema.optional(),
}).strict()

export const RoleCreateArgsSchema: z.ZodType<Prisma.RoleCreateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
}).strict()

export const RoleUpsertArgsSchema: z.ZodType<Prisma.RoleUpsertArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
  create: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
  update: z.union([ RoleUpdateInputSchema,RoleUncheckedUpdateInputSchema ]),
}).strict()

export const RoleCreateManyArgsSchema: z.ZodType<Prisma.RoleCreateManyArgs> = z.object({
  data: z.union([ RoleCreateManyInputSchema,RoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const RoleDeleteArgsSchema: z.ZodType<Prisma.RoleDeleteArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict()

export const RoleUpdateArgsSchema: z.ZodType<Prisma.RoleUpdateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleUpdateInputSchema,RoleUncheckedUpdateInputSchema ]),
  where: RoleWhereUniqueInputSchema,
}).strict()

export const RoleUpdateManyArgsSchema: z.ZodType<Prisma.RoleUpdateManyArgs> = z.object({
  data: z.union([ RoleUpdateManyMutationInputSchema,RoleUncheckedUpdateManyInputSchema ]),
  where: RoleWhereInputSchema.optional(),
}).strict()

export const RoleDeleteManyArgsSchema: z.ZodType<Prisma.RoleDeleteManyArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
}).strict()

export const InstrumentCreateArgsSchema: z.ZodType<Prisma.InstrumentCreateArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  data: z.union([ InstrumentCreateInputSchema,InstrumentUncheckedCreateInputSchema ]),
}).strict()

export const InstrumentUpsertArgsSchema: z.ZodType<Prisma.InstrumentUpsertArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  where: InstrumentWhereUniqueInputSchema,
  create: z.union([ InstrumentCreateInputSchema,InstrumentUncheckedCreateInputSchema ]),
  update: z.union([ InstrumentUpdateInputSchema,InstrumentUncheckedUpdateInputSchema ]),
}).strict()

export const InstrumentCreateManyArgsSchema: z.ZodType<Prisma.InstrumentCreateManyArgs> = z.object({
  data: z.union([ InstrumentCreateManyInputSchema,InstrumentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const InstrumentDeleteArgsSchema: z.ZodType<Prisma.InstrumentDeleteArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  where: InstrumentWhereUniqueInputSchema,
}).strict()

export const InstrumentUpdateArgsSchema: z.ZodType<Prisma.InstrumentUpdateArgs> = z.object({
  select: InstrumentSelectSchema.optional(),
  include: InstrumentIncludeSchema.optional(),
  data: z.union([ InstrumentUpdateInputSchema,InstrumentUncheckedUpdateInputSchema ]),
  where: InstrumentWhereUniqueInputSchema,
}).strict()

export const InstrumentUpdateManyArgsSchema: z.ZodType<Prisma.InstrumentUpdateManyArgs> = z.object({
  data: z.union([ InstrumentUpdateManyMutationInputSchema,InstrumentUncheckedUpdateManyInputSchema ]),
  where: InstrumentWhereInputSchema.optional(),
}).strict()

export const InstrumentDeleteManyArgsSchema: z.ZodType<Prisma.InstrumentDeleteManyArgs> = z.object({
  where: InstrumentWhereInputSchema.optional(),
}).strict()

export const VoiceCreateArgsSchema: z.ZodType<Prisma.VoiceCreateArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  data: z.union([ VoiceCreateInputSchema,VoiceUncheckedCreateInputSchema ]),
}).strict()

export const VoiceUpsertArgsSchema: z.ZodType<Prisma.VoiceUpsertArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  where: VoiceWhereUniqueInputSchema,
  create: z.union([ VoiceCreateInputSchema,VoiceUncheckedCreateInputSchema ]),
  update: z.union([ VoiceUpdateInputSchema,VoiceUncheckedUpdateInputSchema ]),
}).strict()

export const VoiceCreateManyArgsSchema: z.ZodType<Prisma.VoiceCreateManyArgs> = z.object({
  data: z.union([ VoiceCreateManyInputSchema,VoiceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const VoiceDeleteArgsSchema: z.ZodType<Prisma.VoiceDeleteArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  where: VoiceWhereUniqueInputSchema,
}).strict()

export const VoiceUpdateArgsSchema: z.ZodType<Prisma.VoiceUpdateArgs> = z.object({
  select: VoiceSelectSchema.optional(),
  include: VoiceIncludeSchema.optional(),
  data: z.union([ VoiceUpdateInputSchema,VoiceUncheckedUpdateInputSchema ]),
  where: VoiceWhereUniqueInputSchema,
}).strict()

export const VoiceUpdateManyArgsSchema: z.ZodType<Prisma.VoiceUpdateManyArgs> = z.object({
  data: z.union([ VoiceUpdateManyMutationInputSchema,VoiceUncheckedUpdateManyInputSchema ]),
  where: VoiceWhereInputSchema.optional(),
}).strict()

export const VoiceDeleteManyArgsSchema: z.ZodType<Prisma.VoiceDeleteManyArgs> = z.object({
  where: VoiceWhereInputSchema.optional(),
}).strict()

export const OrganizerRoleCreateArgsSchema: z.ZodType<Prisma.OrganizerRoleCreateArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  data: z.union([ OrganizerRoleCreateInputSchema,OrganizerRoleUncheckedCreateInputSchema ]),
}).strict()

export const OrganizerRoleUpsertArgsSchema: z.ZodType<Prisma.OrganizerRoleUpsertArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  where: OrganizerRoleWhereUniqueInputSchema,
  create: z.union([ OrganizerRoleCreateInputSchema,OrganizerRoleUncheckedCreateInputSchema ]),
  update: z.union([ OrganizerRoleUpdateInputSchema,OrganizerRoleUncheckedUpdateInputSchema ]),
}).strict()

export const OrganizerRoleCreateManyArgsSchema: z.ZodType<Prisma.OrganizerRoleCreateManyArgs> = z.object({
  data: z.union([ OrganizerRoleCreateManyInputSchema,OrganizerRoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const OrganizerRoleDeleteArgsSchema: z.ZodType<Prisma.OrganizerRoleDeleteArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  where: OrganizerRoleWhereUniqueInputSchema,
}).strict()

export const OrganizerRoleUpdateArgsSchema: z.ZodType<Prisma.OrganizerRoleUpdateArgs> = z.object({
  select: OrganizerRoleSelectSchema.optional(),
  include: OrganizerRoleIncludeSchema.optional(),
  data: z.union([ OrganizerRoleUpdateInputSchema,OrganizerRoleUncheckedUpdateInputSchema ]),
  where: OrganizerRoleWhereUniqueInputSchema,
}).strict()

export const OrganizerRoleUpdateManyArgsSchema: z.ZodType<Prisma.OrganizerRoleUpdateManyArgs> = z.object({
  data: z.union([ OrganizerRoleUpdateManyMutationInputSchema,OrganizerRoleUncheckedUpdateManyInputSchema ]),
  where: OrganizerRoleWhereInputSchema.optional(),
}).strict()

export const OrganizerRoleDeleteManyArgsSchema: z.ZodType<Prisma.OrganizerRoleDeleteManyArgs> = z.object({
  where: OrganizerRoleWhereInputSchema.optional(),
}).strict()

export const AdminRoleCreateArgsSchema: z.ZodType<Prisma.AdminRoleCreateArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  data: z.union([ AdminRoleCreateInputSchema,AdminRoleUncheckedCreateInputSchema ]),
}).strict()

export const AdminRoleUpsertArgsSchema: z.ZodType<Prisma.AdminRoleUpsertArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  where: AdminRoleWhereUniqueInputSchema,
  create: z.union([ AdminRoleCreateInputSchema,AdminRoleUncheckedCreateInputSchema ]),
  update: z.union([ AdminRoleUpdateInputSchema,AdminRoleUncheckedUpdateInputSchema ]),
}).strict()

export const AdminRoleCreateManyArgsSchema: z.ZodType<Prisma.AdminRoleCreateManyArgs> = z.object({
  data: z.union([ AdminRoleCreateManyInputSchema,AdminRoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AdminRoleDeleteArgsSchema: z.ZodType<Prisma.AdminRoleDeleteArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  where: AdminRoleWhereUniqueInputSchema,
}).strict()

export const AdminRoleUpdateArgsSchema: z.ZodType<Prisma.AdminRoleUpdateArgs> = z.object({
  select: AdminRoleSelectSchema.optional(),
  include: AdminRoleIncludeSchema.optional(),
  data: z.union([ AdminRoleUpdateInputSchema,AdminRoleUncheckedUpdateInputSchema ]),
  where: AdminRoleWhereUniqueInputSchema,
}).strict()

export const AdminRoleUpdateManyArgsSchema: z.ZodType<Prisma.AdminRoleUpdateManyArgs> = z.object({
  data: z.union([ AdminRoleUpdateManyMutationInputSchema,AdminRoleUncheckedUpdateManyInputSchema ]),
  where: AdminRoleWhereInputSchema.optional(),
}).strict()

export const AdminRoleDeleteManyArgsSchema: z.ZodType<Prisma.AdminRoleDeleteManyArgs> = z.object({
  where: AdminRoleWhereInputSchema.optional(),
}).strict()