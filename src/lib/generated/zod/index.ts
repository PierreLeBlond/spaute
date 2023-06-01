import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AuthKeyScalarFieldEnumSchema = z.enum(['id','hashed_password','user_id','primary_key','expires']);

export const AuthSessionScalarFieldEnumSchema = z.enum(['id','user_id','active_expires','idle_expires']);

export const AuthUserScalarFieldEnumSchema = z.enum(['id','email','email_verified']);

export const BandScalarFieldEnumSchema = z.enum(['id','name']);

export const BandVoiceScalarFieldEnumSchema = z.enum(['id','instrumentId','bandId']);

export const DisabledVoiceScalarFieldEnumSchema = z.enum(['id','gigId','bandVoiceId']);

export const GigScalarFieldEnumSchema = z.enum(['id','name','bandId','date','location','description','playable']);

export const GigVoiceScalarFieldEnumSchema = z.enum(['id','instrumentId','gigId']);

export const InstrumentScalarFieldEnumSchema = z.enum(['id','name']);

export const MembershipScalarFieldEnumSchema = z.enum(['id','isAdmin','bandId','playerId']);

export const PlayerScalarFieldEnumSchema = z.enum(['id','userId','name']);

export const PresenceScalarFieldEnumSchema = z.enum(['id','value','isOrganizer','gigId','playerId']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const RoleScalarFieldEnumSchema = z.enum(['id','playable','instrumentId','playerId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// AUTH KEY SCHEMA
/////////////////////////////////////////

export const AuthKeySchema = z.object({
  id: z.string(),
  hashed_password: z.string().nullable(),
  user_id: z.string(),
  primary_key: z.boolean(),
  expires: z.bigint().nullable(),
})

export type AuthKey = z.infer<typeof AuthKeySchema>

/////////////////////////////////////////
// AUTH SESSION SCHEMA
/////////////////////////////////////////

export const AuthSessionSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint(),
})

export type AuthSession = z.infer<typeof AuthSessionSchema>

/////////////////////////////////////////
// AUTH USER SCHEMA
/////////////////////////////////////////

export const AuthUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean(),
})

export type AuthUser = z.infer<typeof AuthUserSchema>

/////////////////////////////////////////
// BAND SCHEMA
/////////////////////////////////////////

export const BandSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type Band = z.infer<typeof BandSchema>

/////////////////////////////////////////
// PLAYER SCHEMA
/////////////////////////////////////////

export const PlayerSchema = z.object({
  id: z.number().int(),
  userId: z.string(),
  name: z.string(),
})

export type Player = z.infer<typeof PlayerSchema>

/////////////////////////////////////////
// MEMBERSHIP SCHEMA
/////////////////////////////////////////

export const MembershipSchema = z.object({
  id: z.number().int(),
  isAdmin: z.boolean(),
  bandId: z.number().int(),
  playerId: z.number().int(),
})

export type Membership = z.infer<typeof MembershipSchema>

/////////////////////////////////////////
// GIG SCHEMA
/////////////////////////////////////////

export const GigSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  bandId: z.number().int().nullable(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().nullable(),
  playable: z.boolean(),
})

export type Gig = z.infer<typeof GigSchema>

/////////////////////////////////////////
// PRESENCE SCHEMA
/////////////////////////////////////////

export const PresenceSchema = z.object({
  id: z.number().int(),
  value: z.boolean(),
  isOrganizer: z.boolean(),
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
  name: z.string(),
})

export type Instrument = z.infer<typeof InstrumentSchema>

/////////////////////////////////////////
// GIG VOICE SCHEMA
/////////////////////////////////////////

export const GigVoiceSchema = z.object({
  id: z.number().int(),
  instrumentId: z.number().int(),
  gigId: z.number().int(),
})

export type GigVoice = z.infer<typeof GigVoiceSchema>

/////////////////////////////////////////
// BAND VOICE SCHEMA
/////////////////////////////////////////

export const BandVoiceSchema = z.object({
  id: z.number().int(),
  instrumentId: z.number().int(),
  bandId: z.number().int(),
})

export type BandVoice = z.infer<typeof BandVoiceSchema>

/////////////////////////////////////////
// DISABLED VOICE SCHEMA
/////////////////////////////////////////

export const DisabledVoiceSchema = z.object({
  id: z.number().int(),
  gigId: z.number().int(),
  bandVoiceId: z.number().int(),
})

export type DisabledVoice = z.infer<typeof DisabledVoiceSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// AUTH KEY
//------------------------------------------------------

export const AuthKeyIncludeSchema: z.ZodType<Prisma.AuthKeyInclude> = z.object({
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export const AuthKeyArgsSchema: z.ZodType<Prisma.AuthKeyArgs> = z.object({
  select: z.lazy(() => AuthKeySelectSchema).optional(),
  include: z.lazy(() => AuthKeyIncludeSchema).optional(),
}).strict();

export const AuthKeySelectSchema: z.ZodType<Prisma.AuthKeySelect> = z.object({
  id: z.boolean().optional(),
  hashed_password: z.boolean().optional(),
  user_id: z.boolean().optional(),
  primary_key: z.boolean().optional(),
  expires: z.boolean().optional(),
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

// AUTH SESSION
//------------------------------------------------------

export const AuthSessionIncludeSchema: z.ZodType<Prisma.AuthSessionInclude> = z.object({
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export const AuthSessionArgsSchema: z.ZodType<Prisma.AuthSessionArgs> = z.object({
  select: z.lazy(() => AuthSessionSelectSchema).optional(),
  include: z.lazy(() => AuthSessionIncludeSchema).optional(),
}).strict();

export const AuthSessionSelectSchema: z.ZodType<Prisma.AuthSessionSelect> = z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  active_expires: z.boolean().optional(),
  idle_expires: z.boolean().optional(),
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

// AUTH USER
//------------------------------------------------------

export const AuthUserIncludeSchema: z.ZodType<Prisma.AuthUserInclude> = z.object({
  auth_session: z.union([z.boolean(),z.lazy(() => AuthSessionFindManyArgsSchema)]).optional(),
  auth_key: z.union([z.boolean(),z.lazy(() => AuthKeyFindManyArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AuthUserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AuthUserArgsSchema: z.ZodType<Prisma.AuthUserArgs> = z.object({
  select: z.lazy(() => AuthUserSelectSchema).optional(),
  include: z.lazy(() => AuthUserIncludeSchema).optional(),
}).strict();

export const AuthUserCountOutputTypeArgsSchema: z.ZodType<Prisma.AuthUserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => AuthUserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AuthUserCountOutputTypeSelectSchema: z.ZodType<Prisma.AuthUserCountOutputTypeSelect> = z.object({
  auth_session: z.boolean().optional(),
  auth_key: z.boolean().optional(),
}).strict();

export const AuthUserSelectSchema: z.ZodType<Prisma.AuthUserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  email_verified: z.boolean().optional(),
  auth_session: z.union([z.boolean(),z.lazy(() => AuthSessionFindManyArgsSchema)]).optional(),
  auth_key: z.union([z.boolean(),z.lazy(() => AuthKeyFindManyArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AuthUserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BAND
//------------------------------------------------------

export const BandIncludeSchema: z.ZodType<Prisma.BandInclude> = z.object({
  gigs: z.union([z.boolean(),z.lazy(() => GigFindManyArgsSchema)]).optional(),
  bandVoices: z.union([z.boolean(),z.lazy(() => BandVoiceFindManyArgsSchema)]).optional(),
  memberships: z.union([z.boolean(),z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
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
  gigs: z.boolean().optional(),
  bandVoices: z.boolean().optional(),
  memberships: z.boolean().optional(),
}).strict();

export const BandSelectSchema: z.ZodType<Prisma.BandSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  gigs: z.union([z.boolean(),z.lazy(() => GigFindManyArgsSchema)]).optional(),
  bandVoices: z.union([z.boolean(),z.lazy(() => BandVoiceFindManyArgsSchema)]).optional(),
  memberships: z.union([z.boolean(),z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BandCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PLAYER
//------------------------------------------------------

export const PlayerIncludeSchema: z.ZodType<Prisma.PlayerInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
  presences: z.union([z.boolean(),z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  memberShips: z.union([z.boolean(),z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
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
  memberShips: z.boolean().optional(),
}).strict();

export const PlayerSelectSchema: z.ZodType<Prisma.PlayerSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  name: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
  presences: z.union([z.boolean(),z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  memberShips: z.union([z.boolean(),z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PlayerCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MEMBERSHIP
//------------------------------------------------------

export const MembershipIncludeSchema: z.ZodType<Prisma.MembershipInclude> = z.object({
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

export const MembershipArgsSchema: z.ZodType<Prisma.MembershipArgs> = z.object({
  select: z.lazy(() => MembershipSelectSchema).optional(),
  include: z.lazy(() => MembershipIncludeSchema).optional(),
}).strict();

export const MembershipSelectSchema: z.ZodType<Prisma.MembershipSelect> = z.object({
  id: z.boolean().optional(),
  isAdmin: z.boolean().optional(),
  bandId: z.boolean().optional(),
  playerId: z.boolean().optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  player: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
}).strict()

// GIG
//------------------------------------------------------

export const GigIncludeSchema: z.ZodType<Prisma.GigInclude> = z.object({
  presences: z.union([z.boolean(),z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  gigVoices: z.union([z.boolean(),z.lazy(() => GigVoiceFindManyArgsSchema)]).optional(),
  disabledVoices: z.union([z.boolean(),z.lazy(() => DisabledVoiceFindManyArgsSchema)]).optional(),
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
  gigVoices: z.boolean().optional(),
  disabledVoices: z.boolean().optional(),
}).strict();

export const GigSelectSchema: z.ZodType<Prisma.GigSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  bandId: z.boolean().optional(),
  date: z.boolean().optional(),
  location: z.boolean().optional(),
  description: z.boolean().optional(),
  playable: z.boolean().optional(),
  presences: z.union([z.boolean(),z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  gigVoices: z.union([z.boolean(),z.lazy(() => GigVoiceFindManyArgsSchema)]).optional(),
  disabledVoices: z.union([z.boolean(),z.lazy(() => DisabledVoiceFindManyArgsSchema)]).optional(),
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
  isOrganizer: z.boolean().optional(),
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
  bandVoices: z.union([z.boolean(),z.lazy(() => BandVoiceFindManyArgsSchema)]).optional(),
  gigVoices: z.union([z.boolean(),z.lazy(() => GigVoiceFindManyArgsSchema)]).optional(),
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
  bandVoices: z.boolean().optional(),
  gigVoices: z.boolean().optional(),
}).strict();

export const InstrumentSelectSchema: z.ZodType<Prisma.InstrumentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  roles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  bandVoices: z.union([z.boolean(),z.lazy(() => BandVoiceFindManyArgsSchema)]).optional(),
  gigVoices: z.union([z.boolean(),z.lazy(() => GigVoiceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InstrumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// GIG VOICE
//------------------------------------------------------

export const GigVoiceIncludeSchema: z.ZodType<Prisma.GigVoiceInclude> = z.object({
  instrument: z.union([z.boolean(),z.lazy(() => InstrumentArgsSchema)]).optional(),
  gig: z.union([z.boolean(),z.lazy(() => GigArgsSchema)]).optional(),
}).strict()

export const GigVoiceArgsSchema: z.ZodType<Prisma.GigVoiceArgs> = z.object({
  select: z.lazy(() => GigVoiceSelectSchema).optional(),
  include: z.lazy(() => GigVoiceIncludeSchema).optional(),
}).strict();

export const GigVoiceSelectSchema: z.ZodType<Prisma.GigVoiceSelect> = z.object({
  id: z.boolean().optional(),
  instrumentId: z.boolean().optional(),
  gigId: z.boolean().optional(),
  instrument: z.union([z.boolean(),z.lazy(() => InstrumentArgsSchema)]).optional(),
  gig: z.union([z.boolean(),z.lazy(() => GigArgsSchema)]).optional(),
}).strict()

// BAND VOICE
//------------------------------------------------------

export const BandVoiceIncludeSchema: z.ZodType<Prisma.BandVoiceInclude> = z.object({
  instrument: z.union([z.boolean(),z.lazy(() => InstrumentArgsSchema)]).optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  disabledVoices: z.union([z.boolean(),z.lazy(() => DisabledVoiceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BandVoiceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BandVoiceArgsSchema: z.ZodType<Prisma.BandVoiceArgs> = z.object({
  select: z.lazy(() => BandVoiceSelectSchema).optional(),
  include: z.lazy(() => BandVoiceIncludeSchema).optional(),
}).strict();

export const BandVoiceCountOutputTypeArgsSchema: z.ZodType<Prisma.BandVoiceCountOutputTypeArgs> = z.object({
  select: z.lazy(() => BandVoiceCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BandVoiceCountOutputTypeSelectSchema: z.ZodType<Prisma.BandVoiceCountOutputTypeSelect> = z.object({
  disabledVoices: z.boolean().optional(),
}).strict();

export const BandVoiceSelectSchema: z.ZodType<Prisma.BandVoiceSelect> = z.object({
  id: z.boolean().optional(),
  instrumentId: z.boolean().optional(),
  bandId: z.boolean().optional(),
  instrument: z.union([z.boolean(),z.lazy(() => InstrumentArgsSchema)]).optional(),
  band: z.union([z.boolean(),z.lazy(() => BandArgsSchema)]).optional(),
  disabledVoices: z.union([z.boolean(),z.lazy(() => DisabledVoiceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BandVoiceCountOutputTypeArgsSchema)]).optional(),
}).strict()

// DISABLED VOICE
//------------------------------------------------------

export const DisabledVoiceIncludeSchema: z.ZodType<Prisma.DisabledVoiceInclude> = z.object({
  gig: z.union([z.boolean(),z.lazy(() => GigArgsSchema)]).optional(),
  bandVoice: z.union([z.boolean(),z.lazy(() => BandVoiceArgsSchema)]).optional(),
}).strict()

export const DisabledVoiceArgsSchema: z.ZodType<Prisma.DisabledVoiceArgs> = z.object({
  select: z.lazy(() => DisabledVoiceSelectSchema).optional(),
  include: z.lazy(() => DisabledVoiceIncludeSchema).optional(),
}).strict();

export const DisabledVoiceSelectSchema: z.ZodType<Prisma.DisabledVoiceSelect> = z.object({
  id: z.boolean().optional(),
  gigId: z.boolean().optional(),
  bandVoiceId: z.boolean().optional(),
  gig: z.union([z.boolean(),z.lazy(() => GigArgsSchema)]).optional(),
  bandVoice: z.union([z.boolean(),z.lazy(() => BandVoiceArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AuthKeyWhereInputSchema: z.ZodType<Prisma.AuthKeyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthKeyWhereInputSchema),z.lazy(() => AuthKeyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthKeyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthKeyWhereInputSchema),z.lazy(() => AuthKeyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hashed_password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  primary_key: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  expires: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  auth_user: z.union([ z.lazy(() => AuthUserRelationFilterSchema),z.lazy(() => AuthUserWhereInputSchema) ]).optional(),
}).strict();

export const AuthKeyOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthKeyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  primary_key: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  auth_user: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional()
}).strict();

export const AuthKeyWhereUniqueInputSchema: z.ZodType<Prisma.AuthKeyWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const AuthKeyOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthKeyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  primary_key: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AuthKeyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AuthKeyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuthKeyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuthKeyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AuthKeySumOrderByAggregateInputSchema).optional()
}).strict();

export const AuthKeyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthKeyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hashed_password: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  primary_key: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  expires: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
}).strict();

export const AuthSessionWhereInputSchema: z.ZodType<Prisma.AuthSessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthSessionWhereInputSchema),z.lazy(() => AuthSessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthSessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthSessionWhereInputSchema),z.lazy(() => AuthSessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  idle_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  auth_user: z.union([ z.lazy(() => AuthUserRelationFilterSchema),z.lazy(() => AuthUserWhereInputSchema) ]).optional(),
}).strict();

export const AuthSessionOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthSessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional(),
  auth_user: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional()
}).strict();

export const AuthSessionWhereUniqueInputSchema: z.ZodType<Prisma.AuthSessionWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const AuthSessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthSessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AuthSessionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AuthSessionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuthSessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuthSessionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AuthSessionSumOrderByAggregateInputSchema).optional()
}).strict();

export const AuthSessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthSessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  active_expires: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  idle_expires: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
}).strict();

export const AuthUserWhereInputSchema: z.ZodType<Prisma.AuthUserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthUserWhereInputSchema),z.lazy(() => AuthUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthUserWhereInputSchema),z.lazy(() => AuthUserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email_verified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  auth_session: z.lazy(() => AuthSessionListRelationFilterSchema).optional(),
  auth_key: z.lazy(() => AuthKeyListRelationFilterSchema).optional(),
  player: z.union([ z.lazy(() => PlayerRelationFilterSchema),z.lazy(() => PlayerWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AuthUserOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthUserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional(),
  auth_session: z.lazy(() => AuthSessionOrderByRelationAggregateInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyOrderByRelationAggregateInputSchema).optional(),
  player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional()
}).strict();

export const AuthUserWhereUniqueInputSchema: z.ZodType<Prisma.AuthUserWhereUniqueInput> = z.object({
  id: z.string().optional(),
  email: z.string().optional()
}).strict();

export const AuthUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthUserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AuthUserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuthUserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuthUserMinOrderByAggregateInputSchema).optional()
}).strict();

export const AuthUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthUserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email_verified: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const BandWhereInputSchema: z.ZodType<Prisma.BandWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BandWhereInputSchema),z.lazy(() => BandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BandWhereInputSchema),z.lazy(() => BandWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gigs: z.lazy(() => GigListRelationFilterSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceListRelationFilterSchema).optional(),
  memberships: z.lazy(() => MembershipListRelationFilterSchema).optional()
}).strict();

export const BandOrderByWithRelationInputSchema: z.ZodType<Prisma.BandOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  gigs: z.lazy(() => GigOrderByRelationAggregateInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceOrderByRelationAggregateInputSchema).optional(),
  memberships: z.lazy(() => MembershipOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BandWhereUniqueInputSchema: z.ZodType<Prisma.BandWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
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
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => AuthUserRelationFilterSchema),z.lazy(() => AuthUserWhereInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceListRelationFilterSchema).optional(),
  roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  memberShips: z.lazy(() => MembershipListRelationFilterSchema).optional()
}).strict();

export const PlayerOrderByWithRelationInputSchema: z.ZodType<Prisma.PlayerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional(),
  presences: z.lazy(() => PresenceOrderByRelationAggregateInputSchema).optional(),
  roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  memberShips: z.lazy(() => MembershipOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PlayerWhereUniqueInputSchema: z.ZodType<Prisma.PlayerWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string().optional(),
  name: z.string().optional()
}).strict();

export const PlayerOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlayerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
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
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const MembershipWhereInputSchema: z.ZodType<Prisma.MembershipWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MembershipWhereInputSchema),z.lazy(() => MembershipWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MembershipWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MembershipWhereInputSchema),z.lazy(() => MembershipWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  isAdmin: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  band: z.union([ z.lazy(() => BandRelationFilterSchema),z.lazy(() => BandWhereInputSchema) ]).optional(),
  player: z.union([ z.lazy(() => PlayerRelationFilterSchema),z.lazy(() => PlayerWhereInputSchema) ]).optional(),
}).strict();

export const MembershipOrderByWithRelationInputSchema: z.ZodType<Prisma.MembershipOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isAdmin: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  band: z.lazy(() => BandOrderByWithRelationInputSchema).optional(),
  player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional()
}).strict();

export const MembershipWhereUniqueInputSchema: z.ZodType<Prisma.MembershipWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  bandId_playerId: z.lazy(() => MembershipBandIdPlayerIdCompoundUniqueInputSchema).optional()
}).strict();

export const MembershipOrderByWithAggregationInputSchema: z.ZodType<Prisma.MembershipOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isAdmin: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MembershipCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MembershipAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MembershipMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MembershipMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MembershipSumOrderByAggregateInputSchema).optional()
}).strict();

export const MembershipScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MembershipScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema),z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema),z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  isAdmin: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  bandId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const GigWhereInputSchema: z.ZodType<Prisma.GigWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GigWhereInputSchema),z.lazy(() => GigWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GigWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GigWhereInputSchema),z.lazy(() => GigWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bandId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  playable: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  presences: z.lazy(() => PresenceListRelationFilterSchema).optional(),
  band: z.union([ z.lazy(() => BandRelationFilterSchema),z.lazy(() => BandWhereInputSchema) ]).optional().nullable(),
  gigVoices: z.lazy(() => GigVoiceListRelationFilterSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceListRelationFilterSchema).optional()
}).strict();

export const GigOrderByWithRelationInputSchema: z.ZodType<Prisma.GigOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional(),
  presences: z.lazy(() => PresenceOrderByRelationAggregateInputSchema).optional(),
  band: z.lazy(() => BandOrderByWithRelationInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceOrderByRelationAggregateInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceOrderByRelationAggregateInputSchema).optional()
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
  description: z.lazy(() => SortOrderSchema).optional(),
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
  bandId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  playable: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const PresenceWhereInputSchema: z.ZodType<Prisma.PresenceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PresenceWhereInputSchema),z.lazy(() => PresenceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PresenceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PresenceWhereInputSchema),z.lazy(() => PresenceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  value: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isOrganizer: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gig: z.union([ z.lazy(() => GigRelationFilterSchema),z.lazy(() => GigWhereInputSchema) ]).optional(),
  player: z.union([ z.lazy(() => PlayerRelationFilterSchema),z.lazy(() => PlayerWhereInputSchema) ]).optional(),
}).strict();

export const PresenceOrderByWithRelationInputSchema: z.ZodType<Prisma.PresenceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  isOrganizer: z.lazy(() => SortOrderSchema).optional(),
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
  isOrganizer: z.lazy(() => SortOrderSchema).optional(),
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
  isOrganizer: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
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
  bandVoices: z.lazy(() => BandVoiceListRelationFilterSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceListRelationFilterSchema).optional()
}).strict();

export const InstrumentOrderByWithRelationInputSchema: z.ZodType<Prisma.InstrumentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceOrderByRelationAggregateInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceOrderByRelationAggregateInputSchema).optional()
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

export const GigVoiceWhereInputSchema: z.ZodType<Prisma.GigVoiceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GigVoiceWhereInputSchema),z.lazy(() => GigVoiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GigVoiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GigVoiceWhereInputSchema),z.lazy(() => GigVoiceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrument: z.union([ z.lazy(() => InstrumentRelationFilterSchema),z.lazy(() => InstrumentWhereInputSchema) ]).optional(),
  gig: z.union([ z.lazy(() => GigRelationFilterSchema),z.lazy(() => GigWhereInputSchema) ]).optional(),
}).strict();

export const GigVoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.GigVoiceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  instrument: z.lazy(() => InstrumentOrderByWithRelationInputSchema).optional(),
  gig: z.lazy(() => GigOrderByWithRelationInputSchema).optional()
}).strict();

export const GigVoiceWhereUniqueInputSchema: z.ZodType<Prisma.GigVoiceWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  id_gigId: z.lazy(() => GigVoiceIdGigIdCompoundUniqueInputSchema).optional()
}).strict();

export const GigVoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.GigVoiceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GigVoiceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GigVoiceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GigVoiceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GigVoiceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GigVoiceSumOrderByAggregateInputSchema).optional()
}).strict();

export const GigVoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GigVoiceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema),z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema),z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const BandVoiceWhereInputSchema: z.ZodType<Prisma.BandVoiceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BandVoiceWhereInputSchema),z.lazy(() => BandVoiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BandVoiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BandVoiceWhereInputSchema),z.lazy(() => BandVoiceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrument: z.union([ z.lazy(() => InstrumentRelationFilterSchema),z.lazy(() => InstrumentWhereInputSchema) ]).optional(),
  band: z.union([ z.lazy(() => BandRelationFilterSchema),z.lazy(() => BandWhereInputSchema) ]).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceListRelationFilterSchema).optional()
}).strict();

export const BandVoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.BandVoiceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  instrument: z.lazy(() => InstrumentOrderByWithRelationInputSchema).optional(),
  band: z.lazy(() => BandOrderByWithRelationInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BandVoiceWhereUniqueInputSchema: z.ZodType<Prisma.BandVoiceWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  id_bandId: z.lazy(() => BandVoiceIdBandIdCompoundUniqueInputSchema).optional()
}).strict();

export const BandVoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.BandVoiceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BandVoiceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BandVoiceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BandVoiceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BandVoiceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BandVoiceSumOrderByAggregateInputSchema).optional()
}).strict();

export const BandVoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BandVoiceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema),z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema),z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const DisabledVoiceWhereInputSchema: z.ZodType<Prisma.DisabledVoiceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DisabledVoiceWhereInputSchema),z.lazy(() => DisabledVoiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisabledVoiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisabledVoiceWhereInputSchema),z.lazy(() => DisabledVoiceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bandVoiceId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gig: z.union([ z.lazy(() => GigRelationFilterSchema),z.lazy(() => GigWhereInputSchema) ]).optional(),
  bandVoice: z.union([ z.lazy(() => BandVoiceRelationFilterSchema),z.lazy(() => BandVoiceWhereInputSchema) ]).optional(),
}).strict();

export const DisabledVoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.DisabledVoiceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  bandVoiceId: z.lazy(() => SortOrderSchema).optional(),
  gig: z.lazy(() => GigOrderByWithRelationInputSchema).optional(),
  bandVoice: z.lazy(() => BandVoiceOrderByWithRelationInputSchema).optional()
}).strict();

export const DisabledVoiceWhereUniqueInputSchema: z.ZodType<Prisma.DisabledVoiceWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  gigId_bandVoiceId: z.lazy(() => DisabledVoiceGigIdBandVoiceIdCompoundUniqueInputSchema).optional()
}).strict();

export const DisabledVoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.DisabledVoiceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  bandVoiceId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DisabledVoiceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DisabledVoiceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DisabledVoiceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DisabledVoiceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DisabledVoiceSumOrderByAggregateInputSchema).optional()
}).strict();

export const DisabledVoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DisabledVoiceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema),z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema),z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  bandVoiceId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const AuthKeyCreateInputSchema: z.ZodType<Prisma.AuthKeyCreateInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  primary_key: z.boolean(),
  expires: z.bigint().optional().nullable(),
  auth_user: z.lazy(() => AuthUserCreateNestedOneWithoutAuth_keyInputSchema)
}).strict();

export const AuthKeyUncheckedCreateInputSchema: z.ZodType<Prisma.AuthKeyUncheckedCreateInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  user_id: z.string(),
  primary_key: z.boolean(),
  expires: z.bigint().optional().nullable()
}).strict();

export const AuthKeyUpdateInputSchema: z.ZodType<Prisma.AuthKeyUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_key: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_user: z.lazy(() => AuthUserUpdateOneRequiredWithoutAuth_keyNestedInputSchema).optional()
}).strict();

export const AuthKeyUncheckedUpdateInputSchema: z.ZodType<Prisma.AuthKeyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primary_key: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthKeyCreateManyInputSchema: z.ZodType<Prisma.AuthKeyCreateManyInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  user_id: z.string(),
  primary_key: z.boolean(),
  expires: z.bigint().optional().nullable()
}).strict();

export const AuthKeyUpdateManyMutationInputSchema: z.ZodType<Prisma.AuthKeyUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_key: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthKeyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AuthKeyUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  primary_key: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthSessionCreateInputSchema: z.ZodType<Prisma.AuthSessionCreateInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint(),
  auth_user: z.lazy(() => AuthUserCreateNestedOneWithoutAuth_sessionInputSchema)
}).strict();

export const AuthSessionUncheckedCreateInputSchema: z.ZodType<Prisma.AuthSessionUncheckedCreateInput> = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const AuthSessionUpdateInputSchema: z.ZodType<Prisma.AuthSessionUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  auth_user: z.lazy(() => AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema).optional()
}).strict();

export const AuthSessionUncheckedUpdateInputSchema: z.ZodType<Prisma.AuthSessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthSessionCreateManyInputSchema: z.ZodType<Prisma.AuthSessionCreateManyInput> = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const AuthSessionUpdateManyMutationInputSchema: z.ZodType<Prisma.AuthSessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthSessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AuthSessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthUserCreateInputSchema: z.ZodType<Prisma.AuthUserCreateInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional(),
  auth_session: z.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputSchema).optional(),
  player: z.lazy(() => PlayerCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const AuthUserUncheckedCreateInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  player: z.lazy(() => PlayerUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const AuthUserUpdateInputSchema: z.ZodType<Prisma.AuthUserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const AuthUserUncheckedUpdateInputSchema: z.ZodType<Prisma.AuthUserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const AuthUserCreateManyInputSchema: z.ZodType<Prisma.AuthUserCreateManyInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional()
}).strict();

export const AuthUserUpdateManyMutationInputSchema: z.ZodType<Prisma.AuthUserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthUserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AuthUserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BandCreateInputSchema: z.ZodType<Prisma.BandCreateInput> = z.object({
  name: z.string(),
  gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutBandInputSchema).optional(),
  memberships: z.lazy(() => MembershipCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateInputSchema: z.ZodType<Prisma.BandUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUpdateInputSchema: z.ZodType<Prisma.BandUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutBandNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateInputSchema: z.ZodType<Prisma.BandUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandCreateManyInputSchema: z.ZodType<Prisma.BandCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const BandUpdateManyMutationInputSchema: z.ZodType<Prisma.BandUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BandUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlayerCreateInputSchema: z.ZodType<Prisma.PlayerCreateInput> = z.object({
  name: z.string(),
  user: z.lazy(() => AuthUserCreateNestedOneWithoutPlayerInputSchema),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  memberShips: z.lazy(() => MembershipCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  name: z.string(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUpdateInputSchema: z.ZodType<Prisma.PlayerUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => AuthUserUpdateOneRequiredWithoutPlayerNestedInputSchema).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerCreateManyInputSchema: z.ZodType<Prisma.PlayerCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  name: z.string()
}).strict();

export const PlayerUpdateManyMutationInputSchema: z.ZodType<Prisma.PlayerUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlayerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipCreateInputSchema: z.ZodType<Prisma.MembershipCreateInput> = z.object({
  isAdmin: z.boolean().optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutMembershipsInputSchema),
  player: z.lazy(() => PlayerCreateNestedOneWithoutMemberShipsInputSchema)
}).strict();

export const MembershipUncheckedCreateInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  isAdmin: z.boolean().optional(),
  bandId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const MembershipUpdateInputSchema: z.ZodType<Prisma.MembershipUpdateInput> = z.object({
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  band: z.lazy(() => BandUpdateOneRequiredWithoutMembershipsNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutMemberShipsNestedInputSchema).optional()
}).strict();

export const MembershipUncheckedUpdateInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipCreateManyInputSchema: z.ZodType<Prisma.MembershipCreateManyInput> = z.object({
  id: z.number().int().optional(),
  isAdmin: z.boolean().optional(),
  bandId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const MembershipUpdateManyMutationInputSchema: z.ZodType<Prisma.MembershipUpdateManyMutationInput> = z.object({
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GigCreateInputSchema: z.ZodType<Prisma.GigCreateInput> = z.object({
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUncheckedCreateInputSchema: z.ZodType<Prisma.GigUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bandId: z.number().int().optional().nullable(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUpdateInputSchema: z.ZodType<Prisma.GigUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
  band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateInputSchema: z.ZodType<Prisma.GigUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigCreateManyInputSchema: z.ZodType<Prisma.GigCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bandId: z.number().int().optional().nullable(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional()
}).strict();

export const GigUpdateManyMutationInputSchema: z.ZodType<Prisma.GigUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GigUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GigUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceCreateInputSchema: z.ZodType<Prisma.PresenceCreateInput> = z.object({
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  gig: z.lazy(() => GigCreateNestedOneWithoutPresencesInputSchema),
  player: z.lazy(() => PlayerCreateNestedOneWithoutPresencesInputSchema)
}).strict();

export const PresenceUncheckedCreateInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  gigId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const PresenceUpdateInputSchema: z.ZodType<Prisma.PresenceUpdateInput> = z.object({
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gig: z.lazy(() => GigUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema).optional()
}).strict();

export const PresenceUncheckedUpdateInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceCreateManyInputSchema: z.ZodType<Prisma.PresenceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  gigId: z.number().int(),
  playerId: z.number().int()
}).strict();

export const PresenceUpdateManyMutationInputSchema: z.ZodType<Prisma.PresenceUpdateManyMutationInput> = z.object({
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
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
  bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUncheckedCreateInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUpdateInputSchema: z.ZodType<Prisma.InstrumentUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const InstrumentUncheckedUpdateInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
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

export const GigVoiceCreateInputSchema: z.ZodType<Prisma.GigVoiceCreateInput> = z.object({
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutGigVoicesInputSchema),
  gig: z.lazy(() => GigCreateNestedOneWithoutGigVoicesInputSchema)
}).strict();

export const GigVoiceUncheckedCreateInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int(),
  gigId: z.number().int()
}).strict();

export const GigVoiceUpdateInputSchema: z.ZodType<Prisma.GigVoiceUpdateInput> = z.object({
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutGigVoicesNestedInputSchema).optional(),
  gig: z.lazy(() => GigUpdateOneRequiredWithoutGigVoicesNestedInputSchema).optional()
}).strict();

export const GigVoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GigVoiceCreateManyInputSchema: z.ZodType<Prisma.GigVoiceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int(),
  gigId: z.number().int()
}).strict();

export const GigVoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyMutationInput> = z.object({
}).strict();

export const GigVoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BandVoiceCreateInputSchema: z.ZodType<Prisma.BandVoiceCreateInput> = z.object({
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutBandVoicesInputSchema),
  band: z.lazy(() => BandCreateNestedOneWithoutBandVoicesInputSchema),
  disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutBandVoiceInputSchema).optional()
}).strict();

export const BandVoiceUncheckedCreateInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int(),
  bandId: z.number().int(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInputSchema).optional()
}).strict();

export const BandVoiceUpdateInputSchema: z.ZodType<Prisma.BandVoiceUpdateInput> = z.object({
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
  band: z.lazy(() => BandUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutBandVoiceNestedInputSchema).optional()
}).strict();

export const BandVoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInputSchema).optional()
}).strict();

export const BandVoiceCreateManyInputSchema: z.ZodType<Prisma.BandVoiceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int(),
  bandId: z.number().int()
}).strict();

export const BandVoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyMutationInput> = z.object({
}).strict();

export const BandVoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DisabledVoiceCreateInputSchema: z.ZodType<Prisma.DisabledVoiceCreateInput> = z.object({
  gig: z.lazy(() => GigCreateNestedOneWithoutDisabledVoicesInputSchema),
  bandVoice: z.lazy(() => BandVoiceCreateNestedOneWithoutDisabledVoicesInputSchema)
}).strict();

export const DisabledVoiceUncheckedCreateInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int(),
  bandVoiceId: z.number().int()
}).strict();

export const DisabledVoiceUpdateInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateInput> = z.object({
  gig: z.lazy(() => GigUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema).optional(),
  bandVoice: z.lazy(() => BandVoiceUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema).optional()
}).strict();

export const DisabledVoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandVoiceId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DisabledVoiceCreateManyInputSchema: z.ZodType<Prisma.DisabledVoiceCreateManyInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int(),
  bandVoiceId: z.number().int()
}).strict();

export const DisabledVoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyMutationInput> = z.object({
}).strict();

export const DisabledVoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandVoiceId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
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

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const BigIntNullableFilterSchema: z.ZodType<Prisma.BigIntNullableFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional().nullable(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AuthUserRelationFilterSchema: z.ZodType<Prisma.AuthUserRelationFilter> = z.object({
  is: z.lazy(() => AuthUserWhereInputSchema).optional(),
  isNot: z.lazy(() => AuthUserWhereInputSchema).optional()
}).strict();

export const AuthKeyCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuthKeyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  primary_key: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthKeyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuthKeyAvgOrderByAggregateInput> = z.object({
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthKeyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuthKeyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  primary_key: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthKeyMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuthKeyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  primary_key: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthKeySumOrderByAggregateInputSchema: z.ZodType<Prisma.AuthKeySumOrderByAggregateInput> = z.object({
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
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

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const BigIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntNullableWithAggregatesFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional().nullable(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntNullableFilterSchema).optional()
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const AuthSessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuthSessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthSessionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuthSessionAvgOrderByAggregateInput> = z.object({
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthSessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuthSessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthSessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuthSessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthSessionSumOrderByAggregateInputSchema: z.ZodType<Prisma.AuthSessionSumOrderByAggregateInput> = z.object({
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const AuthSessionListRelationFilterSchema: z.ZodType<Prisma.AuthSessionListRelationFilter> = z.object({
  every: z.lazy(() => AuthSessionWhereInputSchema).optional(),
  some: z.lazy(() => AuthSessionWhereInputSchema).optional(),
  none: z.lazy(() => AuthSessionWhereInputSchema).optional()
}).strict();

export const AuthKeyListRelationFilterSchema: z.ZodType<Prisma.AuthKeyListRelationFilter> = z.object({
  every: z.lazy(() => AuthKeyWhereInputSchema).optional(),
  some: z.lazy(() => AuthKeyWhereInputSchema).optional(),
  none: z.lazy(() => AuthKeyWhereInputSchema).optional()
}).strict();

export const PlayerRelationFilterSchema: z.ZodType<Prisma.PlayerRelationFilter> = z.object({
  is: z.lazy(() => PlayerWhereInputSchema).optional(),
  isNot: z.lazy(() => PlayerWhereInputSchema).optional()
}).strict();

export const AuthSessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AuthSessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthKeyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AuthKeyOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthUserCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuthUserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthUserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuthUserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthUserMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuthUserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const GigListRelationFilterSchema: z.ZodType<Prisma.GigListRelationFilter> = z.object({
  every: z.lazy(() => GigWhereInputSchema).optional(),
  some: z.lazy(() => GigWhereInputSchema).optional(),
  none: z.lazy(() => GigWhereInputSchema).optional()
}).strict();

export const BandVoiceListRelationFilterSchema: z.ZodType<Prisma.BandVoiceListRelationFilter> = z.object({
  every: z.lazy(() => BandVoiceWhereInputSchema).optional(),
  some: z.lazy(() => BandVoiceWhereInputSchema).optional(),
  none: z.lazy(() => BandVoiceWhereInputSchema).optional()
}).strict();

export const MembershipListRelationFilterSchema: z.ZodType<Prisma.MembershipListRelationFilter> = z.object({
  every: z.lazy(() => MembershipWhereInputSchema).optional(),
  some: z.lazy(() => MembershipWhereInputSchema).optional(),
  none: z.lazy(() => MembershipWhereInputSchema).optional()
}).strict();

export const GigOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GigOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandVoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BandVoiceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MembershipOrderByRelationAggregateInput> = z.object({
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
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
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

export const PresenceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PresenceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlayerSumOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandRelationFilterSchema: z.ZodType<Prisma.BandRelationFilter> = z.object({
  is: z.lazy(() => BandWhereInputSchema).optional(),
  isNot: z.lazy(() => BandWhereInputSchema).optional()
}).strict();

export const MembershipBandIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.MembershipBandIdPlayerIdCompoundUniqueInput> = z.object({
  bandId: z.number(),
  playerId: z.number()
}).strict();

export const MembershipCountOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isAdmin: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isAdmin: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipMinOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isAdmin: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MembershipSumOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const GigVoiceListRelationFilterSchema: z.ZodType<Prisma.GigVoiceListRelationFilter> = z.object({
  every: z.lazy(() => GigVoiceWhereInputSchema).optional(),
  some: z.lazy(() => GigVoiceWhereInputSchema).optional(),
  none: z.lazy(() => GigVoiceWhereInputSchema).optional()
}).strict();

export const DisabledVoiceListRelationFilterSchema: z.ZodType<Prisma.DisabledVoiceListRelationFilter> = z.object({
  every: z.lazy(() => DisabledVoiceWhereInputSchema).optional(),
  some: z.lazy(() => DisabledVoiceWhereInputSchema).optional(),
  none: z.lazy(() => DisabledVoiceWhereInputSchema).optional()
}).strict();

export const GigVoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GigVoiceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisabledVoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigCountOrderByAggregateInputSchema: z.ZodType<Prisma.GigCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
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
  description: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigMinOrderByAggregateInputSchema: z.ZodType<Prisma.GigMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  playable: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigSumOrderByAggregateInputSchema: z.ZodType<Prisma.GigSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const GigRelationFilterSchema: z.ZodType<Prisma.GigRelationFilter> = z.object({
  is: z.lazy(() => GigWhereInputSchema).optional(),
  isNot: z.lazy(() => GigWhereInputSchema).optional()
}).strict();

export const PresenceGigIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.PresenceGigIdPlayerIdCompoundUniqueInput> = z.object({
  gigId: z.number(),
  playerId: z.number()
}).strict();

export const PresenceCountOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  isOrganizer: z.lazy(() => SortOrderSchema).optional(),
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
  isOrganizer: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  playerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PresenceMinOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  isOrganizer: z.lazy(() => SortOrderSchema).optional(),
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

export const GigVoiceIdGigIdCompoundUniqueInputSchema: z.ZodType<Prisma.GigVoiceIdGigIdCompoundUniqueInput> = z.object({
  id: z.number(),
  gigId: z.number()
}).strict();

export const GigVoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.GigVoiceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigVoiceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GigVoiceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigVoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GigVoiceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigVoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.GigVoiceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GigVoiceSumOrderByAggregateInputSchema: z.ZodType<Prisma.GigVoiceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandVoiceIdBandIdCompoundUniqueInputSchema: z.ZodType<Prisma.BandVoiceIdBandIdCompoundUniqueInput> = z.object({
  id: z.number(),
  bandId: z.number()
}).strict();

export const BandVoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.BandVoiceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandVoiceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BandVoiceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandVoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BandVoiceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandVoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.BandVoiceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandVoiceSumOrderByAggregateInputSchema: z.ZodType<Prisma.BandVoiceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  instrumentId: z.lazy(() => SortOrderSchema).optional(),
  bandId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BandVoiceRelationFilterSchema: z.ZodType<Prisma.BandVoiceRelationFilter> = z.object({
  is: z.lazy(() => BandVoiceWhereInputSchema).optional(),
  isNot: z.lazy(() => BandVoiceWhereInputSchema).optional()
}).strict();

export const DisabledVoiceGigIdBandVoiceIdCompoundUniqueInputSchema: z.ZodType<Prisma.DisabledVoiceGigIdBandVoiceIdCompoundUniqueInput> = z.object({
  gigId: z.number(),
  bandVoiceId: z.number()
}).strict();

export const DisabledVoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  bandVoiceId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisabledVoiceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  bandVoiceId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisabledVoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  bandVoiceId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisabledVoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  bandVoiceId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisabledVoiceSumOrderByAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gigId: z.lazy(() => SortOrderSchema).optional(),
  bandVoiceId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthUserCreateNestedOneWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutAuth_keyInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_keyInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutAuth_keyInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const NullableBigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional().nullable(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const AuthUserUpdateOneRequiredWithoutAuth_keyNestedInputSchema: z.ZodType<Prisma.AuthUserUpdateOneRequiredWithoutAuth_keyNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_keyInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutAuth_keyInputSchema).optional(),
  upsert: z.lazy(() => AuthUserUpsertWithoutAuth_keyInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutAuth_keyInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_keyInputSchema) ]).optional(),
}).strict();

export const AuthUserCreateNestedOneWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutAuth_sessionInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutAuth_sessionInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema: z.ZodType<Prisma.AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutAuth_sessionInputSchema).optional(),
  upsert: z.lazy(() => AuthUserUpsertWithoutAuth_sessionInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema) ]).optional(),
}).strict();

export const AuthSessionCreateNestedManyWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionCreateNestedManyWithoutAuth_userInput> = z.object({
  create: z.union([ z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthSessionCreateManyAuth_userInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AuthKeyCreateNestedManyWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyCreateNestedManyWithoutAuth_userInput> = z.object({
  create: z.union([ z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthKeyCreateManyAuth_userInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PlayerCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
}).strict();

export const AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUncheckedCreateNestedManyWithoutAuth_userInput> = z.object({
  create: z.union([ z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthSessionCreateManyAuth_userInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUncheckedCreateNestedManyWithoutAuth_userInput> = z.object({
  create: z.union([ z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthKeyCreateManyAuth_userInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PlayerUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
}).strict();

export const AuthSessionUpdateManyWithoutAuth_userNestedInputSchema: z.ZodType<Prisma.AuthSessionUpdateManyWithoutAuth_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthSessionCreateManyAuth_userInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthSessionScalarWhereInputSchema),z.lazy(() => AuthSessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AuthKeyUpdateManyWithoutAuth_userNestedInputSchema: z.ZodType<Prisma.AuthKeyUpdateManyWithoutAuth_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthKeyCreateManyAuth_userInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthKeyScalarWhereInputSchema),z.lazy(() => AuthKeyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PlayerUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => PlayerUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema: z.ZodType<Prisma.AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthSessionCreateManyAuth_userInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthSessionScalarWhereInputSchema),z.lazy(() => AuthSessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema: z.ZodType<Prisma.AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthKeyCreateManyAuth_userInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthKeyScalarWhereInputSchema),z.lazy(() => AuthKeyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PlayerUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => PlayerUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const GigCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.GigCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigCreateWithoutBandInputSchema).array(),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BandVoiceCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutBandInputSchema),z.lazy(() => BandVoiceCreateWithoutBandInputSchema).array(),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema),z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BandVoiceCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MembershipCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.MembershipCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutBandInputSchema),z.lazy(() => MembershipCreateWithoutBandInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GigUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigCreateWithoutBandInputSchema).array(),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GigWhereUniqueInputSchema),z.lazy(() => GigWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BandVoiceUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutBandInputSchema),z.lazy(() => BandVoiceCreateWithoutBandInputSchema).array(),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema),z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BandVoiceCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MembershipUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateNestedManyWithoutBandInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutBandInputSchema),z.lazy(() => MembershipCreateWithoutBandInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyBandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
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

export const BandVoiceUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutBandInputSchema),z.lazy(() => BandVoiceCreateWithoutBandInputSchema).array(),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema),z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BandVoiceCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BandVoiceUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => BandVoiceUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BandVoiceScalarWhereInputSchema),z.lazy(() => BandVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MembershipUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutBandInputSchema),z.lazy(() => MembershipCreateWithoutBandInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MembershipUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => MembershipUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MembershipUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => MembershipUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MembershipUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => MembershipUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
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

export const BandVoiceUncheckedUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutBandInputSchema),z.lazy(() => BandVoiceCreateWithoutBandInputSchema).array(),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema),z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BandVoiceCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BandVoiceUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => BandVoiceUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BandVoiceScalarWhereInputSchema),z.lazy(() => BandVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MembershipUncheckedUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutBandNestedInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutBandInputSchema),z.lazy(() => MembershipCreateWithoutBandInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MembershipUpsertWithWhereUniqueWithoutBandInputSchema),z.lazy(() => MembershipUpsertWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyBandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MembershipUpdateWithWhereUniqueWithoutBandInputSchema),z.lazy(() => MembershipUpdateWithWhereUniqueWithoutBandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MembershipUpdateManyWithWhereWithoutBandInputSchema),z.lazy(() => MembershipUpdateManyWithWhereWithoutBandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AuthUserCreateNestedOneWithoutPlayerInputSchema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutPlayerInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutPlayerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutPlayerInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional()
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

export const MembershipCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutPlayerInputSchema),z.lazy(() => MembershipCreateWithoutPlayerInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
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

export const MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateNestedManyWithoutPlayerInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutPlayerInputSchema),z.lazy(() => MembershipCreateWithoutPlayerInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyPlayerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AuthUserUpdateOneRequiredWithoutPlayerNestedInputSchema: z.ZodType<Prisma.AuthUserUpdateOneRequiredWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutPlayerInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutPlayerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutPlayerInputSchema).optional(),
  upsert: z.lazy(() => AuthUserUpsertWithoutPlayerInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutPlayerInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutPlayerInputSchema) ]).optional(),
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

export const MembershipUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutPlayerInputSchema),z.lazy(() => MembershipCreateWithoutPlayerInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MembershipUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => MembershipUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
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

export const MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutPlayerNestedInput> = z.object({
  create: z.union([ z.lazy(() => MembershipCreateWithoutPlayerInputSchema),z.lazy(() => MembershipCreateWithoutPlayerInputSchema).array(),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema),z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MembershipCreateManyPlayerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MembershipWhereUniqueInputSchema),z.lazy(() => MembershipWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema),z.lazy(() => MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MembershipUpdateManyWithWhereWithoutPlayerInputSchema),z.lazy(() => MembershipUpdateManyWithWhereWithoutPlayerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BandCreateNestedOneWithoutMembershipsInputSchema: z.ZodType<Prisma.BandCreateNestedOneWithoutMembershipsInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutMembershipsInputSchema),z.lazy(() => BandUncheckedCreateWithoutMembershipsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutMembershipsInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional()
}).strict();

export const PlayerCreateNestedOneWithoutMemberShipsInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutMemberShipsInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutMemberShipsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutMemberShipsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutMemberShipsInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
}).strict();

export const BandUpdateOneRequiredWithoutMembershipsNestedInputSchema: z.ZodType<Prisma.BandUpdateOneRequiredWithoutMembershipsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutMembershipsInputSchema),z.lazy(() => BandUncheckedCreateWithoutMembershipsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutMembershipsInputSchema).optional(),
  upsert: z.lazy(() => BandUpsertWithoutMembershipsInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BandUpdateWithoutMembershipsInputSchema),z.lazy(() => BandUncheckedUpdateWithoutMembershipsInputSchema) ]).optional(),
}).strict();

export const PlayerUpdateOneRequiredWithoutMemberShipsNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutMemberShipsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PlayerCreateWithoutMemberShipsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutMemberShipsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutMemberShipsInputSchema).optional(),
  upsert: z.lazy(() => PlayerUpsertWithoutMemberShipsInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateWithoutMemberShipsInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutMemberShipsInputSchema) ]).optional(),
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

export const GigVoiceCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutGigInputSchema),z.lazy(() => GigVoiceCreateWithoutGigInputSchema).array(),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema),z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigVoiceCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DisabledVoiceCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema).array(),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema),z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisabledVoiceCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PresenceUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => PresenceCreateWithoutGigInputSchema),z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PresenceWhereUniqueInputSchema),z.lazy(() => PresenceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutGigInputSchema),z.lazy(() => GigVoiceCreateWithoutGigInputSchema).array(),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema),z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigVoiceCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateNestedManyWithoutGigInput> = z.object({
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema).array(),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema),z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisabledVoiceCreateManyGigInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
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

export const BandUpdateOneWithoutGigsNestedInputSchema: z.ZodType<Prisma.BandUpdateOneWithoutGigsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutGigsInputSchema),z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutGigsInputSchema).optional(),
  upsert: z.lazy(() => BandUpsertWithoutGigsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BandUpdateWithoutGigsInputSchema),z.lazy(() => BandUncheckedUpdateWithoutGigsInputSchema) ]).optional(),
}).strict();

export const GigVoiceUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyWithoutGigNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutGigInputSchema),z.lazy(() => GigVoiceCreateWithoutGigInputSchema).array(),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema),z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema),z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigVoiceCreateManyGigInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema),z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GigVoiceUpdateManyWithWhereWithoutGigInputSchema),z.lazy(() => GigVoiceUpdateManyWithWhereWithoutGigInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GigVoiceScalarWhereInputSchema),z.lazy(() => GigVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DisabledVoiceUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyWithoutGigNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema).array(),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema),z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema),z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisabledVoiceCreateManyGigInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema),z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema),z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DisabledVoiceScalarWhereInputSchema),z.lazy(() => DisabledVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
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

export const GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateManyWithoutGigNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutGigInputSchema),z.lazy(() => GigVoiceCreateWithoutGigInputSchema).array(),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema),z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema),z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigVoiceCreateManyGigInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema),z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GigVoiceUpdateManyWithWhereWithoutGigInputSchema),z.lazy(() => GigVoiceUpdateManyWithWhereWithoutGigInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GigVoiceScalarWhereInputSchema),z.lazy(() => GigVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateManyWithoutGigNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema).array(),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema),z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema),z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisabledVoiceCreateManyGigInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema),z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema),z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DisabledVoiceScalarWhereInputSchema),z.lazy(() => DisabledVoiceScalarWhereInputSchema).array() ]).optional(),
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

export const BandVoiceCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BandVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GigVoiceCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutInstrumentInputSchema),z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BandVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateNestedManyWithoutInstrumentInput> = z.object({
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
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

export const BandVoiceUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyWithoutInstrumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BandVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BandVoiceScalarWhereInputSchema),z.lazy(() => BandVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GigVoiceUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyWithoutInstrumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GigVoiceScalarWhereInputSchema),z.lazy(() => GigVoiceScalarWhereInputSchema).array() ]).optional(),
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

export const BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BandVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BandVoiceWhereUniqueInputSchema),z.lazy(() => BandVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BandVoiceScalarWhereInputSchema),z.lazy(() => BandVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema).array(),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema),z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GigVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GigVoiceWhereUniqueInputSchema),z.lazy(() => GigVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GigVoiceScalarWhereInputSchema),z.lazy(() => GigVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InstrumentCreateNestedOneWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateNestedOneWithoutGigVoicesInput> = z.object({
  create: z.union([ z.lazy(() => InstrumentCreateWithoutGigVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutGigVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutGigVoicesInputSchema).optional(),
  connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional()
}).strict();

export const GigCreateNestedOneWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutGigVoicesInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutGigVoicesInputSchema),z.lazy(() => GigUncheckedCreateWithoutGigVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutGigVoicesInputSchema).optional(),
  connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
}).strict();

export const InstrumentUpdateOneRequiredWithoutGigVoicesNestedInputSchema: z.ZodType<Prisma.InstrumentUpdateOneRequiredWithoutGigVoicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstrumentCreateWithoutGigVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutGigVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutGigVoicesInputSchema).optional(),
  upsert: z.lazy(() => InstrumentUpsertWithoutGigVoicesInputSchema).optional(),
  connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstrumentUpdateWithoutGigVoicesInputSchema),z.lazy(() => InstrumentUncheckedUpdateWithoutGigVoicesInputSchema) ]).optional(),
}).strict();

export const GigUpdateOneRequiredWithoutGigVoicesNestedInputSchema: z.ZodType<Prisma.GigUpdateOneRequiredWithoutGigVoicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutGigVoicesInputSchema),z.lazy(() => GigUncheckedCreateWithoutGigVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutGigVoicesInputSchema).optional(),
  upsert: z.lazy(() => GigUpsertWithoutGigVoicesInputSchema).optional(),
  connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GigUpdateWithoutGigVoicesInputSchema),z.lazy(() => GigUncheckedUpdateWithoutGigVoicesInputSchema) ]).optional(),
}).strict();

export const InstrumentCreateNestedOneWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateNestedOneWithoutBandVoicesInput> = z.object({
  create: z.union([ z.lazy(() => InstrumentCreateWithoutBandVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutBandVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutBandVoicesInputSchema).optional(),
  connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional()
}).strict();

export const BandCreateNestedOneWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandCreateNestedOneWithoutBandVoicesInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutBandVoicesInputSchema),z.lazy(() => BandUncheckedCreateWithoutBandVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutBandVoicesInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional()
}).strict();

export const DisabledVoiceCreateNestedManyWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceCreateNestedManyWithoutBandVoiceInput> = z.object({
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema).array(),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInput> = z.object({
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema).array(),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InstrumentUpdateOneRequiredWithoutBandVoicesNestedInputSchema: z.ZodType<Prisma.InstrumentUpdateOneRequiredWithoutBandVoicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => InstrumentCreateWithoutBandVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutBandVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutBandVoicesInputSchema).optional(),
  upsert: z.lazy(() => InstrumentUpsertWithoutBandVoicesInputSchema).optional(),
  connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InstrumentUpdateWithoutBandVoicesInputSchema),z.lazy(() => InstrumentUncheckedUpdateWithoutBandVoicesInputSchema) ]).optional(),
}).strict();

export const BandUpdateOneRequiredWithoutBandVoicesNestedInputSchema: z.ZodType<Prisma.BandUpdateOneRequiredWithoutBandVoicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandCreateWithoutBandVoicesInputSchema),z.lazy(() => BandUncheckedCreateWithoutBandVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutBandVoicesInputSchema).optional(),
  upsert: z.lazy(() => BandUpsertWithoutBandVoicesInputSchema).optional(),
  connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BandUpdateWithoutBandVoicesInputSchema),z.lazy(() => BandUncheckedUpdateWithoutBandVoicesInputSchema) ]).optional(),
}).strict();

export const DisabledVoiceUpdateManyWithoutBandVoiceNestedInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyWithoutBandVoiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema).array(),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DisabledVoiceScalarWhereInputSchema),z.lazy(() => DisabledVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema).array(),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DisabledVoiceWhereUniqueInputSchema),z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DisabledVoiceScalarWhereInputSchema),z.lazy(() => DisabledVoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GigCreateNestedOneWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutDisabledVoicesInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutDisabledVoicesInputSchema),z.lazy(() => GigUncheckedCreateWithoutDisabledVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutDisabledVoicesInputSchema).optional(),
  connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
}).strict();

export const BandVoiceCreateNestedOneWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceCreateNestedOneWithoutDisabledVoicesInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutDisabledVoicesInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandVoiceCreateOrConnectWithoutDisabledVoicesInputSchema).optional(),
  connect: z.lazy(() => BandVoiceWhereUniqueInputSchema).optional()
}).strict();

export const GigUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema: z.ZodType<Prisma.GigUpdateOneRequiredWithoutDisabledVoicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => GigCreateWithoutDisabledVoicesInputSchema),z.lazy(() => GigUncheckedCreateWithoutDisabledVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutDisabledVoicesInputSchema).optional(),
  upsert: z.lazy(() => GigUpsertWithoutDisabledVoicesInputSchema).optional(),
  connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GigUpdateWithoutDisabledVoicesInputSchema),z.lazy(() => GigUncheckedUpdateWithoutDisabledVoicesInputSchema) ]).optional(),
}).strict();

export const BandVoiceUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema: z.ZodType<Prisma.BandVoiceUpdateOneRequiredWithoutDisabledVoicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutDisabledVoicesInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BandVoiceCreateOrConnectWithoutDisabledVoicesInputSchema).optional(),
  upsert: z.lazy(() => BandVoiceUpsertWithoutDisabledVoicesInputSchema).optional(),
  connect: z.lazy(() => BandVoiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BandVoiceUpdateWithoutDisabledVoicesInputSchema),z.lazy(() => BandVoiceUncheckedUpdateWithoutDisabledVoicesInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntNullableFilterSchema: z.ZodType<Prisma.NestedBigIntNullableFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional().nullable(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.union([ z.string().array(),z.string() ]).optional(),
  notIn: z.union([ z.string().array(),z.string() ]).optional(),
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

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  notIn: z.union([ z.string().array(),z.string() ]).optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedBigIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntNullableWithAggregatesFilter> = z.object({
  equals: z.bigint().optional().nullable(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional().nullable(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional().nullable(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.union([ z.number().array(),z.number() ]).optional(),
  notIn: z.union([ z.number().array(),z.number() ]).optional(),
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

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  notIn: z.union([ z.number().array(),z.number() ]).optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  notIn: z.union([ z.coerce.date().array(),z.coerce.date() ]).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const AuthUserCreateWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_keyInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional(),
  auth_session: z.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputSchema).optional(),
  player: z.lazy(() => PlayerCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const AuthUserUncheckedCreateWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_keyInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  player: z.lazy(() => PlayerUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const AuthUserCreateOrConnectWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutAuth_keyInput> = z.object({
  where: z.lazy(() => AuthUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_keyInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputSchema) ]),
}).strict();

export const AuthUserUpsertWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserUpsertWithoutAuth_keyInput> = z.object({
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutAuth_keyInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_keyInputSchema) ]),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_keyInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputSchema) ]),
}).strict();

export const AuthUserUpdateWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserUpdateWithoutAuth_keyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const AuthUserUncheckedUpdateWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserUncheckedUpdateWithoutAuth_keyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const AuthUserCreateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_sessionInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional(),
  auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputSchema).optional(),
  player: z.lazy(() => PlayerCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const AuthUserUncheckedCreateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_sessionInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  player: z.lazy(() => PlayerUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const AuthUserCreateOrConnectWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutAuth_sessionInput> = z.object({
  where: z.lazy(() => AuthUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputSchema) ]),
}).strict();

export const AuthUserUpsertWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserUpsertWithoutAuth_sessionInput> = z.object({
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema) ]),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputSchema) ]),
}).strict();

export const AuthUserUpdateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserUpdateWithoutAuth_sessionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserUncheckedUpdateWithoutAuth_sessionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  player: z.lazy(() => PlayerUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const AuthSessionCreateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionCreateWithoutAuth_userInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const AuthSessionUncheckedCreateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUncheckedCreateWithoutAuth_userInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const AuthSessionCreateOrConnectWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionCreateOrConnectWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthSessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema) ]),
}).strict();

export const AuthSessionCreateManyAuth_userInputEnvelopeSchema: z.ZodType<Prisma.AuthSessionCreateManyAuth_userInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuthSessionCreateManyAuth_userInputSchema),z.lazy(() => AuthSessionCreateManyAuth_userInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AuthKeyCreateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyCreateWithoutAuth_userInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  primary_key: z.boolean(),
  expires: z.bigint().optional().nullable()
}).strict();

export const AuthKeyUncheckedCreateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUncheckedCreateWithoutAuth_userInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  primary_key: z.boolean(),
  expires: z.bigint().optional().nullable()
}).strict();

export const AuthKeyCreateOrConnectWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyCreateOrConnectWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthKeyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema) ]),
}).strict();

export const AuthKeyCreateManyAuth_userInputEnvelopeSchema: z.ZodType<Prisma.AuthKeyCreateManyAuth_userInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuthKeyCreateManyAuth_userInputSchema),z.lazy(() => AuthKeyCreateManyAuth_userInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PlayerCreateWithoutUserInputSchema: z.ZodType<Prisma.PlayerCreateWithoutUserInput> = z.object({
  name: z.string(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  memberShips: z.lazy(() => MembershipCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlayerCreateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUpsertWithWhereUniqueWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthSessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuthSessionUpdateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedUpdateWithoutAuth_userInputSchema) ]),
  create: z.union([ z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema) ]),
}).strict();

export const AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUpdateWithWhereUniqueWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthSessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuthSessionUpdateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedUpdateWithoutAuth_userInputSchema) ]),
}).strict();

export const AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUpdateManyWithWhereWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthSessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuthSessionUpdateManyMutationInputSchema),z.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_sessionInputSchema) ]),
}).strict();

export const AuthSessionScalarWhereInputSchema: z.ZodType<Prisma.AuthSessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthSessionScalarWhereInputSchema),z.lazy(() => AuthSessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthSessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthSessionScalarWhereInputSchema),z.lazy(() => AuthSessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  idle_expires: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
}).strict();

export const AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUpsertWithWhereUniqueWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthKeyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuthKeyUpdateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedUpdateWithoutAuth_userInputSchema) ]),
  create: z.union([ z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema) ]),
}).strict();

export const AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUpdateWithWhereUniqueWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthKeyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuthKeyUpdateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedUpdateWithoutAuth_userInputSchema) ]),
}).strict();

export const AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUpdateManyWithWhereWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthKeyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuthKeyUpdateManyMutationInputSchema),z.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_keyInputSchema) ]),
}).strict();

export const AuthKeyScalarWhereInputSchema: z.ZodType<Prisma.AuthKeyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthKeyScalarWhereInputSchema),z.lazy(() => AuthKeyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthKeyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthKeyScalarWhereInputSchema),z.lazy(() => AuthKeyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hashed_password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  primary_key: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  expires: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
}).strict();

export const PlayerUpsertWithoutUserInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutUserInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const PlayerUpdateWithoutUserInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutUserInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const GigCreateWithoutBandInputSchema: z.ZodType<Prisma.GigCreateWithoutBandInput> = z.object({
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutBandInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutBandInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigCreateWithoutBandInputSchema),z.lazy(() => GigUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const GigCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.GigCreateManyBandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GigCreateManyBandInputSchema),z.lazy(() => GigCreateManyBandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BandVoiceCreateWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceCreateWithoutBandInput> = z.object({
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutBandVoicesInputSchema),
  disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutBandVoiceInputSchema).optional()
}).strict();

export const BandVoiceUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateWithoutBandInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInputSchema).optional()
}).strict();

export const BandVoiceCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceCreateOrConnectWithoutBandInput> = z.object({
  where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutBandInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const BandVoiceCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.BandVoiceCreateManyBandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BandVoiceCreateManyBandInputSchema),z.lazy(() => BandVoiceCreateManyBandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MembershipCreateWithoutBandInputSchema: z.ZodType<Prisma.MembershipCreateWithoutBandInput> = z.object({
  isAdmin: z.boolean().optional(),
  player: z.lazy(() => PlayerCreateNestedOneWithoutMemberShipsInputSchema)
}).strict();

export const MembershipUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateWithoutBandInput> = z.object({
  id: z.number().int().optional(),
  isAdmin: z.boolean().optional(),
  playerId: z.number().int()
}).strict();

export const MembershipCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.MembershipCreateOrConnectWithoutBandInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MembershipCreateWithoutBandInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const MembershipCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.MembershipCreateManyBandInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MembershipCreateManyBandInputSchema),z.lazy(() => MembershipCreateManyBandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
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
  bandId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  playable: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUpsertWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BandVoiceUpdateWithoutBandInputSchema),z.lazy(() => BandVoiceUncheckedUpdateWithoutBandInputSchema) ]),
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutBandInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BandVoiceUpdateWithoutBandInputSchema),z.lazy(() => BandVoiceUncheckedUpdateWithoutBandInputSchema) ]),
}).strict();

export const BandVoiceUpdateManyWithWhereWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyWithWhereWithoutBandInput> = z.object({
  where: z.lazy(() => BandVoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BandVoiceUpdateManyMutationInputSchema),z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandVoicesInputSchema) ]),
}).strict();

export const BandVoiceScalarWhereInputSchema: z.ZodType<Prisma.BandVoiceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BandVoiceScalarWhereInputSchema),z.lazy(() => BandVoiceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BandVoiceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BandVoiceScalarWhereInputSchema),z.lazy(() => BandVoiceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const MembershipUpsertWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.MembershipUpsertWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MembershipUpdateWithoutBandInputSchema),z.lazy(() => MembershipUncheckedUpdateWithoutBandInputSchema) ]),
  create: z.union([ z.lazy(() => MembershipCreateWithoutBandInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema) ]),
}).strict();

export const MembershipUpdateWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.MembershipUpdateWithWhereUniqueWithoutBandInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MembershipUpdateWithoutBandInputSchema),z.lazy(() => MembershipUncheckedUpdateWithoutBandInputSchema) ]),
}).strict();

export const MembershipUpdateManyWithWhereWithoutBandInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithWhereWithoutBandInput> = z.object({
  where: z.lazy(() => MembershipScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MembershipUpdateManyMutationInputSchema),z.lazy(() => MembershipUncheckedUpdateManyWithoutMembershipsInputSchema) ]),
}).strict();

export const MembershipScalarWhereInputSchema: z.ZodType<Prisma.MembershipScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MembershipScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MembershipScalarWhereInputSchema),z.lazy(() => MembershipScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  isAdmin: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  bandId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  playerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const AuthUserCreateWithoutPlayerInputSchema: z.ZodType<Prisma.AuthUserCreateWithoutPlayerInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional(),
  auth_session: z.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputSchema).optional()
}).strict();

export const AuthUserUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutPlayerInput> = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean().optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional()
}).strict();

export const AuthUserCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutPlayerInput> = z.object({
  where: z.lazy(() => AuthUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutPlayerInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const PresenceCreateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceCreateWithoutPlayerInput> = z.object({
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  gig: z.lazy(() => GigCreateNestedOneWithoutPresencesInputSchema)
}).strict();

export const PresenceUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateWithoutPlayerInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  gigId: z.number().int()
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
  id: z.number().int().optional(),
  playable: z.boolean().optional(),
  instrumentId: z.number().int()
}).strict();

export const RoleCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutPlayerInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutPlayerInputSchema),z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const RoleCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyPlayerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyPlayerInputSchema),z.lazy(() => RoleCreateManyPlayerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MembershipCreateWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipCreateWithoutPlayerInput> = z.object({
  isAdmin: z.boolean().optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutMembershipsInputSchema)
}).strict();

export const MembershipUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateWithoutPlayerInput> = z.object({
  id: z.number().int().optional(),
  isAdmin: z.boolean().optional(),
  bandId: z.number().int()
}).strict();

export const MembershipCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipCreateOrConnectWithoutPlayerInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MembershipCreateWithoutPlayerInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const MembershipCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.MembershipCreateManyPlayerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MembershipCreateManyPlayerInputSchema),z.lazy(() => MembershipCreateManyPlayerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AuthUserUpsertWithoutPlayerInputSchema: z.ZodType<Prisma.AuthUserUpsertWithoutPlayerInput> = z.object({
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutPlayerInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutPlayerInputSchema) ]),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutPlayerInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const AuthUserUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.AuthUserUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputSchema).optional()
}).strict();

export const AuthUserUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.AuthUserUncheckedUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email_verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional()
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
  isOrganizer: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
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

export const MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUpsertWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MembershipUpdateWithoutPlayerInputSchema),z.lazy(() => MembershipUncheckedUpdateWithoutPlayerInputSchema) ]),
  create: z.union([ z.lazy(() => MembershipCreateWithoutPlayerInputSchema),z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema) ]),
}).strict();

export const MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUpdateWithWhereUniqueWithoutPlayerInput> = z.object({
  where: z.lazy(() => MembershipWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MembershipUpdateWithoutPlayerInputSchema),z.lazy(() => MembershipUncheckedUpdateWithoutPlayerInputSchema) ]),
}).strict();

export const MembershipUpdateManyWithWhereWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithWhereWithoutPlayerInput> = z.object({
  where: z.lazy(() => MembershipScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MembershipUpdateManyMutationInputSchema),z.lazy(() => MembershipUncheckedUpdateManyWithoutMemberShipsInputSchema) ]),
}).strict();

export const BandCreateWithoutMembershipsInputSchema: z.ZodType<Prisma.BandCreateWithoutMembershipsInput> = z.object({
  name: z.string(),
  gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateWithoutMembershipsInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutMembershipsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandCreateOrConnectWithoutMembershipsInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutMembershipsInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandCreateWithoutMembershipsInputSchema),z.lazy(() => BandUncheckedCreateWithoutMembershipsInputSchema) ]),
}).strict();

export const PlayerCreateWithoutMemberShipsInputSchema: z.ZodType<Prisma.PlayerCreateWithoutMemberShipsInput> = z.object({
  name: z.string(),
  user: z.lazy(() => AuthUserCreateNestedOneWithoutPlayerInputSchema),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutMemberShipsInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutMemberShipsInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  name: z.string(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerCreateOrConnectWithoutMemberShipsInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutMemberShipsInput> = z.object({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlayerCreateWithoutMemberShipsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutMemberShipsInputSchema) ]),
}).strict();

export const BandUpsertWithoutMembershipsInputSchema: z.ZodType<Prisma.BandUpsertWithoutMembershipsInput> = z.object({
  update: z.union([ z.lazy(() => BandUpdateWithoutMembershipsInputSchema),z.lazy(() => BandUncheckedUpdateWithoutMembershipsInputSchema) ]),
  create: z.union([ z.lazy(() => BandCreateWithoutMembershipsInputSchema),z.lazy(() => BandUncheckedCreateWithoutMembershipsInputSchema) ]),
}).strict();

export const BandUpdateWithoutMembershipsInputSchema: z.ZodType<Prisma.BandUpdateWithoutMembershipsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateWithoutMembershipsInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutMembershipsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const PlayerUpsertWithoutMemberShipsInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutMemberShipsInput> = z.object({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutMemberShipsInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutMemberShipsInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutMemberShipsInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutMemberShipsInputSchema) ]),
}).strict();

export const PlayerUpdateWithoutMemberShipsInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutMemberShipsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => AuthUserUpdateOneRequiredWithoutPlayerNestedInputSchema).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutMemberShipsInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutMemberShipsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PresenceCreateWithoutGigInputSchema: z.ZodType<Prisma.PresenceCreateWithoutGigInput> = z.object({
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  player: z.lazy(() => PlayerCreateNestedOneWithoutPresencesInputSchema)
}).strict();

export const PresenceUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateWithoutGigInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  playerId: z.number().int()
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
  bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutBandInputSchema).optional(),
  memberships: z.lazy(() => MembershipCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateWithoutGigsInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutGigsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandCreateOrConnectWithoutGigsInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutGigsInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandCreateWithoutGigsInputSchema),z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema) ]),
}).strict();

export const GigVoiceCreateWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceCreateWithoutGigInput> = z.object({
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutGigVoicesInputSchema)
}).strict();

export const GigVoiceUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateWithoutGigInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int()
}).strict();

export const GigVoiceCreateOrConnectWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceCreateOrConnectWithoutGigInput> = z.object({
  where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutGigInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema) ]),
}).strict();

export const GigVoiceCreateManyGigInputEnvelopeSchema: z.ZodType<Prisma.GigVoiceCreateManyGigInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GigVoiceCreateManyGigInputSchema),z.lazy(() => GigVoiceCreateManyGigInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const DisabledVoiceCreateWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceCreateWithoutGigInput> = z.object({
  bandVoice: z.lazy(() => BandVoiceCreateNestedOneWithoutDisabledVoicesInputSchema)
}).strict();

export const DisabledVoiceUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateWithoutGigInput> = z.object({
  id: z.number().int().optional(),
  bandVoiceId: z.number().int()
}).strict();

export const DisabledVoiceCreateOrConnectWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceCreateOrConnectWithoutGigInput> = z.object({
  where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema) ]),
}).strict();

export const DisabledVoiceCreateManyGigInputEnvelopeSchema: z.ZodType<Prisma.DisabledVoiceCreateManyGigInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DisabledVoiceCreateManyGigInputSchema),z.lazy(() => DisabledVoiceCreateManyGigInputSchema).array() ]),
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
  bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutBandNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateWithoutGigsInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutGigsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUpsertWithWhereUniqueWithoutGigInput> = z.object({
  where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GigVoiceUpdateWithoutGigInputSchema),z.lazy(() => GigVoiceUncheckedUpdateWithoutGigInputSchema) ]),
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutGigInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema) ]),
}).strict();

export const GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUpdateWithWhereUniqueWithoutGigInput> = z.object({
  where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GigVoiceUpdateWithoutGigInputSchema),z.lazy(() => GigVoiceUncheckedUpdateWithoutGigInputSchema) ]),
}).strict();

export const GigVoiceUpdateManyWithWhereWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyWithWhereWithoutGigInput> = z.object({
  where: z.lazy(() => GigVoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GigVoiceUpdateManyMutationInputSchema),z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigVoicesInputSchema) ]),
}).strict();

export const GigVoiceScalarWhereInputSchema: z.ZodType<Prisma.GigVoiceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GigVoiceScalarWhereInputSchema),z.lazy(() => GigVoiceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GigVoiceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GigVoiceScalarWhereInputSchema),z.lazy(() => GigVoiceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  instrumentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUpsertWithWhereUniqueWithoutGigInput> = z.object({
  where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DisabledVoiceUpdateWithoutGigInputSchema),z.lazy(() => DisabledVoiceUncheckedUpdateWithoutGigInputSchema) ]),
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema) ]),
}).strict();

export const DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateWithWhereUniqueWithoutGigInput> = z.object({
  where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DisabledVoiceUpdateWithoutGigInputSchema),z.lazy(() => DisabledVoiceUncheckedUpdateWithoutGigInputSchema) ]),
}).strict();

export const DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyWithWhereWithoutGigInput> = z.object({
  where: z.lazy(() => DisabledVoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DisabledVoiceUpdateManyMutationInputSchema),z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutDisabledVoicesInputSchema) ]),
}).strict();

export const DisabledVoiceScalarWhereInputSchema: z.ZodType<Prisma.DisabledVoiceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DisabledVoiceScalarWhereInputSchema),z.lazy(() => DisabledVoiceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisabledVoiceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisabledVoiceScalarWhereInputSchema),z.lazy(() => DisabledVoiceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gigId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  bandVoiceId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const GigCreateWithoutPresencesInputSchema: z.ZodType<Prisma.GigCreateWithoutPresencesInput> = z.object({
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUncheckedCreateWithoutPresencesInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutPresencesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bandId: z.number().int().optional().nullable(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigCreateOrConnectWithoutPresencesInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutPresencesInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigCreateWithoutPresencesInputSchema),z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema) ]),
}).strict();

export const PlayerCreateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerCreateWithoutPresencesInput> = z.object({
  name: z.string(),
  user: z.lazy(() => AuthUserCreateNestedOneWithoutPlayerInputSchema),
  roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
  memberShips: z.lazy(() => MembershipCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutPresencesInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  name: z.string(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
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
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutPresencesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const PlayerUpsertWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutPresencesInput> = z.object({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutPresencesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutPresencesInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutPresencesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema) ]),
}).strict();

export const PlayerUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutPresencesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => AuthUserUpdateOneRequiredWithoutPlayerNestedInputSchema).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutPresencesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const InstrumentCreateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutRolesInput> = z.object({
  name: z.string(),
  bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutRolesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutRolesInput> = z.object({
  where: z.lazy(() => InstrumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutRolesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const PlayerCreateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerCreateWithoutRolesInput> = z.object({
  name: z.string(),
  user: z.lazy(() => AuthUserCreateNestedOneWithoutPlayerInputSchema),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
  memberShips: z.lazy(() => MembershipCreateNestedManyWithoutPlayerInputSchema).optional()
}).strict();

export const PlayerUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutRolesInput> = z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  name: z.string(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
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
  bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const InstrumentUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const PlayerUpsertWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutRolesInput> = z.object({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutRolesInputSchema),z.lazy(() => PlayerUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutRolesInputSchema),z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema) ]),
}).strict();

export const PlayerUpdateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutRolesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => AuthUserUpdateOneRequiredWithoutPlayerNestedInputSchema).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const PlayerUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutRolesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
  memberShips: z.lazy(() => MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
}).strict();

export const RoleCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleCreateWithoutInstrumentInput> = z.object({
  playable: z.boolean().optional(),
  player: z.lazy(() => PlayerCreateNestedOneWithoutRolesInputSchema)
}).strict();

export const RoleUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutInstrumentInput> = z.object({
  id: z.number().int().optional(),
  playable: z.boolean().optional(),
  playerId: z.number().int()
}).strict();

export const RoleCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutInstrumentInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutInstrumentInputSchema),z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const RoleCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyInstrumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyInstrumentInputSchema),z.lazy(() => RoleCreateManyInstrumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BandVoiceCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceCreateWithoutInstrumentInput> = z.object({
  band: z.lazy(() => BandCreateNestedOneWithoutBandVoicesInputSchema),
  disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutBandVoiceInputSchema).optional()
}).strict();

export const BandVoiceUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateWithoutInstrumentInput> = z.object({
  id: z.number().int().optional(),
  bandId: z.number().int(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInputSchema).optional()
}).strict();

export const BandVoiceCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceCreateOrConnectWithoutInstrumentInput> = z.object({
  where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const BandVoiceCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.BandVoiceCreateManyInstrumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BandVoiceCreateManyInstrumentInputSchema),z.lazy(() => BandVoiceCreateManyInstrumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const GigVoiceCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceCreateWithoutInstrumentInput> = z.object({
  gig: z.lazy(() => GigCreateNestedOneWithoutGigVoicesInputSchema)
}).strict();

export const GigVoiceUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateWithoutInstrumentInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int()
}).strict();

export const GigVoiceCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceCreateOrConnectWithoutInstrumentInput> = z.object({
  where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const GigVoiceCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.GigVoiceCreateManyInstrumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GigVoiceCreateManyInstrumentInputSchema),z.lazy(() => GigVoiceCreateManyInstrumentInputSchema).array() ]),
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

export const BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUpsertWithWhereUniqueWithoutInstrumentInput> = z.object({
  where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BandVoiceUpdateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUncheckedUpdateWithoutInstrumentInputSchema) ]),
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithWhereUniqueWithoutInstrumentInput> = z.object({
  where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BandVoiceUpdateWithoutInstrumentInputSchema),z.lazy(() => BandVoiceUncheckedUpdateWithoutInstrumentInputSchema) ]),
}).strict();

export const BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyWithWhereWithoutInstrumentInput> = z.object({
  where: z.lazy(() => BandVoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BandVoiceUpdateManyMutationInputSchema),z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandVoicesInputSchema) ]),
}).strict();

export const GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUpsertWithWhereUniqueWithoutInstrumentInput> = z.object({
  where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GigVoiceUpdateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUncheckedUpdateWithoutInstrumentInputSchema) ]),
  create: z.union([ z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema) ]),
}).strict();

export const GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUpdateWithWhereUniqueWithoutInstrumentInput> = z.object({
  where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GigVoiceUpdateWithoutInstrumentInputSchema),z.lazy(() => GigVoiceUncheckedUpdateWithoutInstrumentInputSchema) ]),
}).strict();

export const GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyWithWhereWithoutInstrumentInput> = z.object({
  where: z.lazy(() => GigVoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GigVoiceUpdateManyMutationInputSchema),z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigVoicesInputSchema) ]),
}).strict();

export const InstrumentCreateWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutGigVoicesInput> = z.object({
  name: z.string(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutInstrumentInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUncheckedCreateWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutGigVoicesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentCreateOrConnectWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutGigVoicesInput> = z.object({
  where: z.lazy(() => InstrumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutGigVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutGigVoicesInputSchema) ]),
}).strict();

export const GigCreateWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigCreateWithoutGigVoicesInput> = z.object({
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUncheckedCreateWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutGigVoicesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bandId: z.number().int().optional().nullable(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigCreateOrConnectWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutGigVoicesInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigCreateWithoutGigVoicesInputSchema),z.lazy(() => GigUncheckedCreateWithoutGigVoicesInputSchema) ]),
}).strict();

export const InstrumentUpsertWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentUpsertWithoutGigVoicesInput> = z.object({
  update: z.union([ z.lazy(() => InstrumentUpdateWithoutGigVoicesInputSchema),z.lazy(() => InstrumentUncheckedUpdateWithoutGigVoicesInputSchema) ]),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutGigVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutGigVoicesInputSchema) ]),
}).strict();

export const InstrumentUpdateWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentUpdateWithoutGigVoicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const InstrumentUncheckedUpdateWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutGigVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const GigUpsertWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigUpsertWithoutGigVoicesInput> = z.object({
  update: z.union([ z.lazy(() => GigUpdateWithoutGigVoicesInputSchema),z.lazy(() => GigUncheckedUpdateWithoutGigVoicesInputSchema) ]),
  create: z.union([ z.lazy(() => GigCreateWithoutGigVoicesInputSchema),z.lazy(() => GigUncheckedCreateWithoutGigVoicesInputSchema) ]),
}).strict();

export const GigUpdateWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigUpdateWithoutGigVoicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
  band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutGigVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const InstrumentCreateWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutBandVoicesInput> = z.object({
  name: z.string(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutInstrumentInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentUncheckedCreateWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutBandVoicesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
}).strict();

export const InstrumentCreateOrConnectWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutBandVoicesInput> = z.object({
  where: z.lazy(() => InstrumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutBandVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutBandVoicesInputSchema) ]),
}).strict();

export const BandCreateWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandCreateWithoutBandVoicesInput> = z.object({
  name: z.string(),
  gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
  memberships: z.lazy(() => MembershipCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandUncheckedCreateWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutBandVoicesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
  memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutBandInputSchema).optional()
}).strict();

export const BandCreateOrConnectWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutBandVoicesInput> = z.object({
  where: z.lazy(() => BandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandCreateWithoutBandVoicesInputSchema),z.lazy(() => BandUncheckedCreateWithoutBandVoicesInputSchema) ]),
}).strict();

export const DisabledVoiceCreateWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceCreateWithoutBandVoiceInput> = z.object({
  gig: z.lazy(() => GigCreateNestedOneWithoutDisabledVoicesInputSchema)
}).strict();

export const DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateWithoutBandVoiceInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int()
}).strict();

export const DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceCreateOrConnectWithoutBandVoiceInput> = z.object({
  where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema) ]),
}).strict();

export const DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema: z.ZodType<Prisma.DisabledVoiceCreateManyBandVoiceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DisabledVoiceCreateManyBandVoiceInputSchema),z.lazy(() => DisabledVoiceCreateManyBandVoiceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InstrumentUpsertWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentUpsertWithoutBandVoicesInput> = z.object({
  update: z.union([ z.lazy(() => InstrumentUpdateWithoutBandVoicesInputSchema),z.lazy(() => InstrumentUncheckedUpdateWithoutBandVoicesInputSchema) ]),
  create: z.union([ z.lazy(() => InstrumentCreateWithoutBandVoicesInputSchema),z.lazy(() => InstrumentUncheckedCreateWithoutBandVoicesInputSchema) ]),
}).strict();

export const InstrumentUpdateWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentUpdateWithoutBandVoicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const InstrumentUncheckedUpdateWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutBandVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
}).strict();

export const BandUpsertWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandUpsertWithoutBandVoicesInput> = z.object({
  update: z.union([ z.lazy(() => BandUpdateWithoutBandVoicesInputSchema),z.lazy(() => BandUncheckedUpdateWithoutBandVoicesInputSchema) ]),
  create: z.union([ z.lazy(() => BandCreateWithoutBandVoicesInputSchema),z.lazy(() => BandUncheckedCreateWithoutBandVoicesInputSchema) ]),
}).strict();

export const BandUpdateWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandUpdateWithoutBandVoicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const BandUncheckedUpdateWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutBandVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
  memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
}).strict();

export const DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInput> = z.object({
  where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DisabledVoiceUpdateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUncheckedUpdateWithoutBandVoiceInputSchema) ]),
  create: z.union([ z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema) ]),
}).strict();

export const DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInput> = z.object({
  where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DisabledVoiceUpdateWithoutBandVoiceInputSchema),z.lazy(() => DisabledVoiceUncheckedUpdateWithoutBandVoiceInputSchema) ]),
}).strict();

export const DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInput> = z.object({
  where: z.lazy(() => DisabledVoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DisabledVoiceUpdateManyMutationInputSchema),z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutDisabledVoicesInputSchema) ]),
}).strict();

export const GigCreateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigCreateWithoutDisabledVoicesInput> = z.object({
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
  band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigUncheckedCreateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutDisabledVoicesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  bandId: z.number().int().optional().nullable(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional(),
  presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional()
}).strict();

export const GigCreateOrConnectWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutDisabledVoicesInput> = z.object({
  where: z.lazy(() => GigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GigCreateWithoutDisabledVoicesInputSchema),z.lazy(() => GigUncheckedCreateWithoutDisabledVoicesInputSchema) ]),
}).strict();

export const BandVoiceCreateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceCreateWithoutDisabledVoicesInput> = z.object({
  instrument: z.lazy(() => InstrumentCreateNestedOneWithoutBandVoicesInputSchema),
  band: z.lazy(() => BandCreateNestedOneWithoutBandVoicesInputSchema)
}).strict();

export const BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateWithoutDisabledVoicesInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int(),
  bandId: z.number().int()
}).strict();

export const BandVoiceCreateOrConnectWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceCreateOrConnectWithoutDisabledVoicesInput> = z.object({
  where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutDisabledVoicesInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema) ]),
}).strict();

export const GigUpsertWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigUpsertWithoutDisabledVoicesInput> = z.object({
  update: z.union([ z.lazy(() => GigUpdateWithoutDisabledVoicesInputSchema),z.lazy(() => GigUncheckedUpdateWithoutDisabledVoicesInputSchema) ]),
  create: z.union([ z.lazy(() => GigCreateWithoutDisabledVoicesInputSchema),z.lazy(() => GigUncheckedCreateWithoutDisabledVoicesInputSchema) ]),
}).strict();

export const GigUpdateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigUpdateWithoutDisabledVoicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
  band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutDisabledVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const BandVoiceUpsertWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceUpsertWithoutDisabledVoicesInput> = z.object({
  update: z.union([ z.lazy(() => BandVoiceUpdateWithoutDisabledVoicesInputSchema),z.lazy(() => BandVoiceUncheckedUpdateWithoutDisabledVoicesInputSchema) ]),
  create: z.union([ z.lazy(() => BandVoiceCreateWithoutDisabledVoicesInputSchema),z.lazy(() => BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema) ]),
}).strict();

export const BandVoiceUpdateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithoutDisabledVoicesInput> = z.object({
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
  band: z.lazy(() => BandUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional()
}).strict();

export const BandVoiceUncheckedUpdateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateWithoutDisabledVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthSessionCreateManyAuth_userInputSchema: z.ZodType<Prisma.AuthSessionCreateManyAuth_userInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export const AuthKeyCreateManyAuth_userInputSchema: z.ZodType<Prisma.AuthKeyCreateManyAuth_userInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  primary_key: z.boolean(),
  expires: z.bigint().optional().nullable()
}).strict();

export const AuthSessionUpdateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUpdateWithoutAuth_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthSessionUncheckedUpdateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUncheckedUpdateWithoutAuth_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthSessionUncheckedUpdateManyWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthSessionUncheckedUpdateManyWithoutAuth_sessionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthKeyUpdateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUpdateWithoutAuth_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_key: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthKeyUncheckedUpdateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUncheckedUpdateWithoutAuth_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_key: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthKeyUncheckedUpdateManyWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthKeyUncheckedUpdateManyWithoutAuth_keyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_key: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GigCreateManyBandInputSchema: z.ZodType<Prisma.GigCreateManyBandInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().optional().nullable(),
  playable: z.boolean().optional()
}).strict();

export const BandVoiceCreateManyBandInputSchema: z.ZodType<Prisma.BandVoiceCreateManyBandInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int()
}).strict();

export const MembershipCreateManyBandInputSchema: z.ZodType<Prisma.MembershipCreateManyBandInput> = z.object({
  id: z.number().int().optional(),
  isAdmin: z.boolean().optional(),
  playerId: z.number().int()
}).strict();

export const GigUpdateWithoutBandInputSchema: z.ZodType<Prisma.GigUpdateWithoutBandInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutBandInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
}).strict();

export const GigUncheckedUpdateManyWithoutGigsInputSchema: z.ZodType<Prisma.GigUncheckedUpdateManyWithoutGigsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BandVoiceUpdateWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithoutBandInput> = z.object({
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutBandVoiceNestedInputSchema).optional()
}).strict();

export const BandVoiceUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateWithoutBandInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInputSchema).optional()
}).strict();

export const BandVoiceUncheckedUpdateManyWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateManyWithoutBandVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipUpdateWithoutBandInputSchema: z.ZodType<Prisma.MembershipUpdateWithoutBandInput> = z.object({
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutMemberShipsNestedInputSchema).optional()
}).strict();

export const MembershipUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateWithoutBandInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipUncheckedUpdateManyWithoutMembershipsInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutMembershipsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceCreateManyPlayerInputSchema: z.ZodType<Prisma.PresenceCreateManyPlayerInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  gigId: z.number().int()
}).strict();

export const RoleCreateManyPlayerInputSchema: z.ZodType<Prisma.RoleCreateManyPlayerInput> = z.object({
  id: z.number().int().optional(),
  playable: z.boolean().optional(),
  instrumentId: z.number().int()
}).strict();

export const MembershipCreateManyPlayerInputSchema: z.ZodType<Prisma.MembershipCreateManyPlayerInput> = z.object({
  id: z.number().int().optional(),
  isAdmin: z.boolean().optional(),
  bandId: z.number().int()
}).strict();

export const PresenceUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpdateWithoutPlayerInput> = z.object({
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gig: z.lazy(() => GigUpdateOneRequiredWithoutPresencesNestedInputSchema).optional()
}).strict();

export const PresenceUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceUncheckedUpdateManyWithoutPresencesInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyWithoutPresencesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpdateWithoutPlayerInput> = z.object({
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleUncheckedUpdateManyWithoutRolesInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutRolesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUpdateWithoutPlayerInput> = z.object({
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  band: z.lazy(() => BandUpdateOneRequiredWithoutMembershipsNestedInputSchema).optional()
}).strict();

export const MembershipUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateWithoutPlayerInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MembershipUncheckedUpdateManyWithoutMemberShipsInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutMemberShipsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  isAdmin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PresenceCreateManyGigInputSchema: z.ZodType<Prisma.PresenceCreateManyGigInput> = z.object({
  id: z.number().int().optional(),
  value: z.boolean().optional(),
  isOrganizer: z.boolean().optional(),
  playerId: z.number().int()
}).strict();

export const GigVoiceCreateManyGigInputSchema: z.ZodType<Prisma.GigVoiceCreateManyGigInput> = z.object({
  id: z.number().int().optional(),
  instrumentId: z.number().int()
}).strict();

export const DisabledVoiceCreateManyGigInputSchema: z.ZodType<Prisma.DisabledVoiceCreateManyGigInput> = z.object({
  id: z.number().int().optional(),
  bandVoiceId: z.number().int()
}).strict();

export const PresenceUpdateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpdateWithoutGigInput> = z.object({
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema).optional()
}).strict();

export const PresenceUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateWithoutGigInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isOrganizer: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GigVoiceUpdateWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUpdateWithoutGigInput> = z.object({
  instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutGigVoicesNestedInputSchema).optional()
}).strict();

export const GigVoiceUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateWithoutGigInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GigVoiceUncheckedUpdateManyWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateManyWithoutGigVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  instrumentId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DisabledVoiceUpdateWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateWithoutGigInput> = z.object({
  bandVoice: z.lazy(() => BandVoiceUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema).optional()
}).strict();

export const DisabledVoiceUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateWithoutGigInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandVoiceId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DisabledVoiceUncheckedUpdateManyWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateManyWithoutDisabledVoicesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandVoiceId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoleCreateManyInstrumentInputSchema: z.ZodType<Prisma.RoleCreateManyInstrumentInput> = z.object({
  id: z.number().int().optional(),
  playable: z.boolean().optional(),
  playerId: z.number().int()
}).strict();

export const BandVoiceCreateManyInstrumentInputSchema: z.ZodType<Prisma.BandVoiceCreateManyInstrumentInput> = z.object({
  id: z.number().int().optional(),
  bandId: z.number().int()
}).strict();

export const GigVoiceCreateManyInstrumentInputSchema: z.ZodType<Prisma.GigVoiceCreateManyInstrumentInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int()
}).strict();

export const RoleUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpdateWithoutInstrumentInput> = z.object({
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  player: z.lazy(() => PlayerUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
}).strict();

export const RoleUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutInstrumentInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  playable: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  playerId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BandVoiceUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithoutInstrumentInput> = z.object({
  band: z.lazy(() => BandUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutBandVoiceNestedInputSchema).optional()
}).strict();

export const BandVoiceUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateWithoutInstrumentInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bandId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInputSchema).optional()
}).strict();

export const GigVoiceUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUpdateWithoutInstrumentInput> = z.object({
  gig: z.lazy(() => GigUpdateOneRequiredWithoutGigVoicesNestedInputSchema).optional()
}).strict();

export const GigVoiceUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateWithoutInstrumentInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DisabledVoiceCreateManyBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceCreateManyBandVoiceInput> = z.object({
  id: z.number().int().optional(),
  gigId: z.number().int()
}).strict();

export const DisabledVoiceUpdateWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateWithoutBandVoiceInput> = z.object({
  gig: z.lazy(() => GigUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema).optional()
}).strict();

export const DisabledVoiceUncheckedUpdateWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateWithoutBandVoiceInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  gigId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AuthKeyFindFirstArgsSchema: z.ZodType<Prisma.AuthKeyFindFirstArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  where: AuthKeyWhereInputSchema.optional(),
  orderBy: z.union([ AuthKeyOrderByWithRelationInputSchema.array(),AuthKeyOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthKeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthKeyScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthKeyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthKeyFindFirstOrThrowArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  where: AuthKeyWhereInputSchema.optional(),
  orderBy: z.union([ AuthKeyOrderByWithRelationInputSchema.array(),AuthKeyOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthKeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthKeyScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthKeyFindManyArgsSchema: z.ZodType<Prisma.AuthKeyFindManyArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  where: AuthKeyWhereInputSchema.optional(),
  orderBy: z.union([ AuthKeyOrderByWithRelationInputSchema.array(),AuthKeyOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthKeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthKeyScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthKeyAggregateArgsSchema: z.ZodType<Prisma.AuthKeyAggregateArgs> = z.object({
  where: AuthKeyWhereInputSchema.optional(),
  orderBy: z.union([ AuthKeyOrderByWithRelationInputSchema.array(),AuthKeyOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthKeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthKeyGroupByArgsSchema: z.ZodType<Prisma.AuthKeyGroupByArgs> = z.object({
  where: AuthKeyWhereInputSchema.optional(),
  orderBy: z.union([ AuthKeyOrderByWithAggregationInputSchema.array(),AuthKeyOrderByWithAggregationInputSchema ]).optional(),
  by: AuthKeyScalarFieldEnumSchema.array(),
  having: AuthKeyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthKeyFindUniqueArgsSchema: z.ZodType<Prisma.AuthKeyFindUniqueArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  where: AuthKeyWhereUniqueInputSchema,
}).strict()

export const AuthKeyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuthKeyFindUniqueOrThrowArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  where: AuthKeyWhereUniqueInputSchema,
}).strict()

export const AuthSessionFindFirstArgsSchema: z.ZodType<Prisma.AuthSessionFindFirstArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  where: AuthSessionWhereInputSchema.optional(),
  orderBy: z.union([ AuthSessionOrderByWithRelationInputSchema.array(),AuthSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthSessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthSessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthSessionFindFirstOrThrowArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  where: AuthSessionWhereInputSchema.optional(),
  orderBy: z.union([ AuthSessionOrderByWithRelationInputSchema.array(),AuthSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthSessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthSessionFindManyArgsSchema: z.ZodType<Prisma.AuthSessionFindManyArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  where: AuthSessionWhereInputSchema.optional(),
  orderBy: z.union([ AuthSessionOrderByWithRelationInputSchema.array(),AuthSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthSessionScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthSessionAggregateArgsSchema: z.ZodType<Prisma.AuthSessionAggregateArgs> = z.object({
  where: AuthSessionWhereInputSchema.optional(),
  orderBy: z.union([ AuthSessionOrderByWithRelationInputSchema.array(),AuthSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthSessionGroupByArgsSchema: z.ZodType<Prisma.AuthSessionGroupByArgs> = z.object({
  where: AuthSessionWhereInputSchema.optional(),
  orderBy: z.union([ AuthSessionOrderByWithAggregationInputSchema.array(),AuthSessionOrderByWithAggregationInputSchema ]).optional(),
  by: AuthSessionScalarFieldEnumSchema.array(),
  having: AuthSessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthSessionFindUniqueArgsSchema: z.ZodType<Prisma.AuthSessionFindUniqueArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  where: AuthSessionWhereUniqueInputSchema,
}).strict()

export const AuthSessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuthSessionFindUniqueOrThrowArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  where: AuthSessionWhereUniqueInputSchema,
}).strict()

export const AuthUserFindFirstArgsSchema: z.ZodType<Prisma.AuthUserFindFirstArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  where: AuthUserWhereInputSchema.optional(),
  orderBy: z.union([ AuthUserOrderByWithRelationInputSchema.array(),AuthUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthUserScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthUserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthUserFindFirstOrThrowArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  where: AuthUserWhereInputSchema.optional(),
  orderBy: z.union([ AuthUserOrderByWithRelationInputSchema.array(),AuthUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthUserScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthUserFindManyArgsSchema: z.ZodType<Prisma.AuthUserFindManyArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  where: AuthUserWhereInputSchema.optional(),
  orderBy: z.union([ AuthUserOrderByWithRelationInputSchema.array(),AuthUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AuthUserScalarFieldEnumSchema.array().optional(),
}).strict()

export const AuthUserAggregateArgsSchema: z.ZodType<Prisma.AuthUserAggregateArgs> = z.object({
  where: AuthUserWhereInputSchema.optional(),
  orderBy: z.union([ AuthUserOrderByWithRelationInputSchema.array(),AuthUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthUserGroupByArgsSchema: z.ZodType<Prisma.AuthUserGroupByArgs> = z.object({
  where: AuthUserWhereInputSchema.optional(),
  orderBy: z.union([ AuthUserOrderByWithAggregationInputSchema.array(),AuthUserOrderByWithAggregationInputSchema ]).optional(),
  by: AuthUserScalarFieldEnumSchema.array(),
  having: AuthUserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AuthUserFindUniqueArgsSchema: z.ZodType<Prisma.AuthUserFindUniqueArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  where: AuthUserWhereUniqueInputSchema,
}).strict()

export const AuthUserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuthUserFindUniqueOrThrowArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  where: AuthUserWhereUniqueInputSchema,
}).strict()

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

export const MembershipFindFirstArgsSchema: z.ZodType<Prisma.MembershipFindFirstArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithRelationInputSchema.array(),MembershipOrderByWithRelationInputSchema ]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional(),
}).strict()

export const MembershipFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MembershipFindFirstOrThrowArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithRelationInputSchema.array(),MembershipOrderByWithRelationInputSchema ]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional(),
}).strict()

export const MembershipFindManyArgsSchema: z.ZodType<Prisma.MembershipFindManyArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithRelationInputSchema.array(),MembershipOrderByWithRelationInputSchema ]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MembershipScalarFieldEnumSchema.array().optional(),
}).strict()

export const MembershipAggregateArgsSchema: z.ZodType<Prisma.MembershipAggregateArgs> = z.object({
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithRelationInputSchema.array(),MembershipOrderByWithRelationInputSchema ]).optional(),
  cursor: MembershipWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MembershipGroupByArgsSchema: z.ZodType<Prisma.MembershipGroupByArgs> = z.object({
  where: MembershipWhereInputSchema.optional(),
  orderBy: z.union([ MembershipOrderByWithAggregationInputSchema.array(),MembershipOrderByWithAggregationInputSchema ]).optional(),
  by: MembershipScalarFieldEnumSchema.array(),
  having: MembershipScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MembershipFindUniqueArgsSchema: z.ZodType<Prisma.MembershipFindUniqueArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
}).strict()

export const MembershipFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MembershipFindUniqueOrThrowArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
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

export const GigVoiceFindFirstArgsSchema: z.ZodType<Prisma.GigVoiceFindFirstArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  where: GigVoiceWhereInputSchema.optional(),
  orderBy: z.union([ GigVoiceOrderByWithRelationInputSchema.array(),GigVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: GigVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GigVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const GigVoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GigVoiceFindFirstOrThrowArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  where: GigVoiceWhereInputSchema.optional(),
  orderBy: z.union([ GigVoiceOrderByWithRelationInputSchema.array(),GigVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: GigVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GigVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const GigVoiceFindManyArgsSchema: z.ZodType<Prisma.GigVoiceFindManyArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  where: GigVoiceWhereInputSchema.optional(),
  orderBy: z.union([ GigVoiceOrderByWithRelationInputSchema.array(),GigVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: GigVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: GigVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const GigVoiceAggregateArgsSchema: z.ZodType<Prisma.GigVoiceAggregateArgs> = z.object({
  where: GigVoiceWhereInputSchema.optional(),
  orderBy: z.union([ GigVoiceOrderByWithRelationInputSchema.array(),GigVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: GigVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const GigVoiceGroupByArgsSchema: z.ZodType<Prisma.GigVoiceGroupByArgs> = z.object({
  where: GigVoiceWhereInputSchema.optional(),
  orderBy: z.union([ GigVoiceOrderByWithAggregationInputSchema.array(),GigVoiceOrderByWithAggregationInputSchema ]).optional(),
  by: GigVoiceScalarFieldEnumSchema.array(),
  having: GigVoiceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const GigVoiceFindUniqueArgsSchema: z.ZodType<Prisma.GigVoiceFindUniqueArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  where: GigVoiceWhereUniqueInputSchema,
}).strict()

export const GigVoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GigVoiceFindUniqueOrThrowArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  where: GigVoiceWhereUniqueInputSchema,
}).strict()

export const BandVoiceFindFirstArgsSchema: z.ZodType<Prisma.BandVoiceFindFirstArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  where: BandVoiceWhereInputSchema.optional(),
  orderBy: z.union([ BandVoiceOrderByWithRelationInputSchema.array(),BandVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: BandVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BandVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const BandVoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BandVoiceFindFirstOrThrowArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  where: BandVoiceWhereInputSchema.optional(),
  orderBy: z.union([ BandVoiceOrderByWithRelationInputSchema.array(),BandVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: BandVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BandVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const BandVoiceFindManyArgsSchema: z.ZodType<Prisma.BandVoiceFindManyArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  where: BandVoiceWhereInputSchema.optional(),
  orderBy: z.union([ BandVoiceOrderByWithRelationInputSchema.array(),BandVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: BandVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BandVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const BandVoiceAggregateArgsSchema: z.ZodType<Prisma.BandVoiceAggregateArgs> = z.object({
  where: BandVoiceWhereInputSchema.optional(),
  orderBy: z.union([ BandVoiceOrderByWithRelationInputSchema.array(),BandVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: BandVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BandVoiceGroupByArgsSchema: z.ZodType<Prisma.BandVoiceGroupByArgs> = z.object({
  where: BandVoiceWhereInputSchema.optional(),
  orderBy: z.union([ BandVoiceOrderByWithAggregationInputSchema.array(),BandVoiceOrderByWithAggregationInputSchema ]).optional(),
  by: BandVoiceScalarFieldEnumSchema.array(),
  having: BandVoiceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BandVoiceFindUniqueArgsSchema: z.ZodType<Prisma.BandVoiceFindUniqueArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  where: BandVoiceWhereUniqueInputSchema,
}).strict()

export const BandVoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BandVoiceFindUniqueOrThrowArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  where: BandVoiceWhereUniqueInputSchema,
}).strict()

export const DisabledVoiceFindFirstArgsSchema: z.ZodType<Prisma.DisabledVoiceFindFirstArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  where: DisabledVoiceWhereInputSchema.optional(),
  orderBy: z.union([ DisabledVoiceOrderByWithRelationInputSchema.array(),DisabledVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: DisabledVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DisabledVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const DisabledVoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DisabledVoiceFindFirstOrThrowArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  where: DisabledVoiceWhereInputSchema.optional(),
  orderBy: z.union([ DisabledVoiceOrderByWithRelationInputSchema.array(),DisabledVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: DisabledVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DisabledVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const DisabledVoiceFindManyArgsSchema: z.ZodType<Prisma.DisabledVoiceFindManyArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  where: DisabledVoiceWhereInputSchema.optional(),
  orderBy: z.union([ DisabledVoiceOrderByWithRelationInputSchema.array(),DisabledVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: DisabledVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: DisabledVoiceScalarFieldEnumSchema.array().optional(),
}).strict()

export const DisabledVoiceAggregateArgsSchema: z.ZodType<Prisma.DisabledVoiceAggregateArgs> = z.object({
  where: DisabledVoiceWhereInputSchema.optional(),
  orderBy: z.union([ DisabledVoiceOrderByWithRelationInputSchema.array(),DisabledVoiceOrderByWithRelationInputSchema ]).optional(),
  cursor: DisabledVoiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const DisabledVoiceGroupByArgsSchema: z.ZodType<Prisma.DisabledVoiceGroupByArgs> = z.object({
  where: DisabledVoiceWhereInputSchema.optional(),
  orderBy: z.union([ DisabledVoiceOrderByWithAggregationInputSchema.array(),DisabledVoiceOrderByWithAggregationInputSchema ]).optional(),
  by: DisabledVoiceScalarFieldEnumSchema.array(),
  having: DisabledVoiceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const DisabledVoiceFindUniqueArgsSchema: z.ZodType<Prisma.DisabledVoiceFindUniqueArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  where: DisabledVoiceWhereUniqueInputSchema,
}).strict()

export const DisabledVoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DisabledVoiceFindUniqueOrThrowArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  where: DisabledVoiceWhereUniqueInputSchema,
}).strict()

export const AuthKeyCreateArgsSchema: z.ZodType<Prisma.AuthKeyCreateArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  data: z.union([ AuthKeyCreateInputSchema,AuthKeyUncheckedCreateInputSchema ]),
}).strict()

export const AuthKeyUpsertArgsSchema: z.ZodType<Prisma.AuthKeyUpsertArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  where: AuthKeyWhereUniqueInputSchema,
  create: z.union([ AuthKeyCreateInputSchema,AuthKeyUncheckedCreateInputSchema ]),
  update: z.union([ AuthKeyUpdateInputSchema,AuthKeyUncheckedUpdateInputSchema ]),
}).strict()

export const AuthKeyCreateManyArgsSchema: z.ZodType<Prisma.AuthKeyCreateManyArgs> = z.object({
  data: z.union([ AuthKeyCreateManyInputSchema,AuthKeyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AuthKeyDeleteArgsSchema: z.ZodType<Prisma.AuthKeyDeleteArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  where: AuthKeyWhereUniqueInputSchema,
}).strict()

export const AuthKeyUpdateArgsSchema: z.ZodType<Prisma.AuthKeyUpdateArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  data: z.union([ AuthKeyUpdateInputSchema,AuthKeyUncheckedUpdateInputSchema ]),
  where: AuthKeyWhereUniqueInputSchema,
}).strict()

export const AuthKeyUpdateManyArgsSchema: z.ZodType<Prisma.AuthKeyUpdateManyArgs> = z.object({
  data: z.union([ AuthKeyUpdateManyMutationInputSchema,AuthKeyUncheckedUpdateManyInputSchema ]),
  where: AuthKeyWhereInputSchema.optional(),
}).strict()

export const AuthKeyDeleteManyArgsSchema: z.ZodType<Prisma.AuthKeyDeleteManyArgs> = z.object({
  where: AuthKeyWhereInputSchema.optional(),
}).strict()

export const AuthSessionCreateArgsSchema: z.ZodType<Prisma.AuthSessionCreateArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  data: z.union([ AuthSessionCreateInputSchema,AuthSessionUncheckedCreateInputSchema ]),
}).strict()

export const AuthSessionUpsertArgsSchema: z.ZodType<Prisma.AuthSessionUpsertArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  where: AuthSessionWhereUniqueInputSchema,
  create: z.union([ AuthSessionCreateInputSchema,AuthSessionUncheckedCreateInputSchema ]),
  update: z.union([ AuthSessionUpdateInputSchema,AuthSessionUncheckedUpdateInputSchema ]),
}).strict()

export const AuthSessionCreateManyArgsSchema: z.ZodType<Prisma.AuthSessionCreateManyArgs> = z.object({
  data: z.union([ AuthSessionCreateManyInputSchema,AuthSessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AuthSessionDeleteArgsSchema: z.ZodType<Prisma.AuthSessionDeleteArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  where: AuthSessionWhereUniqueInputSchema,
}).strict()

export const AuthSessionUpdateArgsSchema: z.ZodType<Prisma.AuthSessionUpdateArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  data: z.union([ AuthSessionUpdateInputSchema,AuthSessionUncheckedUpdateInputSchema ]),
  where: AuthSessionWhereUniqueInputSchema,
}).strict()

export const AuthSessionUpdateManyArgsSchema: z.ZodType<Prisma.AuthSessionUpdateManyArgs> = z.object({
  data: z.union([ AuthSessionUpdateManyMutationInputSchema,AuthSessionUncheckedUpdateManyInputSchema ]),
  where: AuthSessionWhereInputSchema.optional(),
}).strict()

export const AuthSessionDeleteManyArgsSchema: z.ZodType<Prisma.AuthSessionDeleteManyArgs> = z.object({
  where: AuthSessionWhereInputSchema.optional(),
}).strict()

export const AuthUserCreateArgsSchema: z.ZodType<Prisma.AuthUserCreateArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  data: z.union([ AuthUserCreateInputSchema,AuthUserUncheckedCreateInputSchema ]),
}).strict()

export const AuthUserUpsertArgsSchema: z.ZodType<Prisma.AuthUserUpsertArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  where: AuthUserWhereUniqueInputSchema,
  create: z.union([ AuthUserCreateInputSchema,AuthUserUncheckedCreateInputSchema ]),
  update: z.union([ AuthUserUpdateInputSchema,AuthUserUncheckedUpdateInputSchema ]),
}).strict()

export const AuthUserCreateManyArgsSchema: z.ZodType<Prisma.AuthUserCreateManyArgs> = z.object({
  data: z.union([ AuthUserCreateManyInputSchema,AuthUserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AuthUserDeleteArgsSchema: z.ZodType<Prisma.AuthUserDeleteArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  where: AuthUserWhereUniqueInputSchema,
}).strict()

export const AuthUserUpdateArgsSchema: z.ZodType<Prisma.AuthUserUpdateArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  data: z.union([ AuthUserUpdateInputSchema,AuthUserUncheckedUpdateInputSchema ]),
  where: AuthUserWhereUniqueInputSchema,
}).strict()

export const AuthUserUpdateManyArgsSchema: z.ZodType<Prisma.AuthUserUpdateManyArgs> = z.object({
  data: z.union([ AuthUserUpdateManyMutationInputSchema,AuthUserUncheckedUpdateManyInputSchema ]),
  where: AuthUserWhereInputSchema.optional(),
}).strict()

export const AuthUserDeleteManyArgsSchema: z.ZodType<Prisma.AuthUserDeleteManyArgs> = z.object({
  where: AuthUserWhereInputSchema.optional(),
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

export const MembershipCreateArgsSchema: z.ZodType<Prisma.MembershipCreateArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  data: z.union([ MembershipCreateInputSchema,MembershipUncheckedCreateInputSchema ]),
}).strict()

export const MembershipUpsertArgsSchema: z.ZodType<Prisma.MembershipUpsertArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
  create: z.union([ MembershipCreateInputSchema,MembershipUncheckedCreateInputSchema ]),
  update: z.union([ MembershipUpdateInputSchema,MembershipUncheckedUpdateInputSchema ]),
}).strict()

export const MembershipCreateManyArgsSchema: z.ZodType<Prisma.MembershipCreateManyArgs> = z.object({
  data: z.union([ MembershipCreateManyInputSchema,MembershipCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MembershipDeleteArgsSchema: z.ZodType<Prisma.MembershipDeleteArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  where: MembershipWhereUniqueInputSchema,
}).strict()

export const MembershipUpdateArgsSchema: z.ZodType<Prisma.MembershipUpdateArgs> = z.object({
  select: MembershipSelectSchema.optional(),
  include: MembershipIncludeSchema.optional(),
  data: z.union([ MembershipUpdateInputSchema,MembershipUncheckedUpdateInputSchema ]),
  where: MembershipWhereUniqueInputSchema,
}).strict()

export const MembershipUpdateManyArgsSchema: z.ZodType<Prisma.MembershipUpdateManyArgs> = z.object({
  data: z.union([ MembershipUpdateManyMutationInputSchema,MembershipUncheckedUpdateManyInputSchema ]),
  where: MembershipWhereInputSchema.optional(),
}).strict()

export const MembershipDeleteManyArgsSchema: z.ZodType<Prisma.MembershipDeleteManyArgs> = z.object({
  where: MembershipWhereInputSchema.optional(),
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

export const GigVoiceCreateArgsSchema: z.ZodType<Prisma.GigVoiceCreateArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  data: z.union([ GigVoiceCreateInputSchema,GigVoiceUncheckedCreateInputSchema ]),
}).strict()

export const GigVoiceUpsertArgsSchema: z.ZodType<Prisma.GigVoiceUpsertArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  where: GigVoiceWhereUniqueInputSchema,
  create: z.union([ GigVoiceCreateInputSchema,GigVoiceUncheckedCreateInputSchema ]),
  update: z.union([ GigVoiceUpdateInputSchema,GigVoiceUncheckedUpdateInputSchema ]),
}).strict()

export const GigVoiceCreateManyArgsSchema: z.ZodType<Prisma.GigVoiceCreateManyArgs> = z.object({
  data: z.union([ GigVoiceCreateManyInputSchema,GigVoiceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const GigVoiceDeleteArgsSchema: z.ZodType<Prisma.GigVoiceDeleteArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  where: GigVoiceWhereUniqueInputSchema,
}).strict()

export const GigVoiceUpdateArgsSchema: z.ZodType<Prisma.GigVoiceUpdateArgs> = z.object({
  select: GigVoiceSelectSchema.optional(),
  include: GigVoiceIncludeSchema.optional(),
  data: z.union([ GigVoiceUpdateInputSchema,GigVoiceUncheckedUpdateInputSchema ]),
  where: GigVoiceWhereUniqueInputSchema,
}).strict()

export const GigVoiceUpdateManyArgsSchema: z.ZodType<Prisma.GigVoiceUpdateManyArgs> = z.object({
  data: z.union([ GigVoiceUpdateManyMutationInputSchema,GigVoiceUncheckedUpdateManyInputSchema ]),
  where: GigVoiceWhereInputSchema.optional(),
}).strict()

export const GigVoiceDeleteManyArgsSchema: z.ZodType<Prisma.GigVoiceDeleteManyArgs> = z.object({
  where: GigVoiceWhereInputSchema.optional(),
}).strict()

export const BandVoiceCreateArgsSchema: z.ZodType<Prisma.BandVoiceCreateArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  data: z.union([ BandVoiceCreateInputSchema,BandVoiceUncheckedCreateInputSchema ]),
}).strict()

export const BandVoiceUpsertArgsSchema: z.ZodType<Prisma.BandVoiceUpsertArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  where: BandVoiceWhereUniqueInputSchema,
  create: z.union([ BandVoiceCreateInputSchema,BandVoiceUncheckedCreateInputSchema ]),
  update: z.union([ BandVoiceUpdateInputSchema,BandVoiceUncheckedUpdateInputSchema ]),
}).strict()

export const BandVoiceCreateManyArgsSchema: z.ZodType<Prisma.BandVoiceCreateManyArgs> = z.object({
  data: z.union([ BandVoiceCreateManyInputSchema,BandVoiceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const BandVoiceDeleteArgsSchema: z.ZodType<Prisma.BandVoiceDeleteArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  where: BandVoiceWhereUniqueInputSchema,
}).strict()

export const BandVoiceUpdateArgsSchema: z.ZodType<Prisma.BandVoiceUpdateArgs> = z.object({
  select: BandVoiceSelectSchema.optional(),
  include: BandVoiceIncludeSchema.optional(),
  data: z.union([ BandVoiceUpdateInputSchema,BandVoiceUncheckedUpdateInputSchema ]),
  where: BandVoiceWhereUniqueInputSchema,
}).strict()

export const BandVoiceUpdateManyArgsSchema: z.ZodType<Prisma.BandVoiceUpdateManyArgs> = z.object({
  data: z.union([ BandVoiceUpdateManyMutationInputSchema,BandVoiceUncheckedUpdateManyInputSchema ]),
  where: BandVoiceWhereInputSchema.optional(),
}).strict()

export const BandVoiceDeleteManyArgsSchema: z.ZodType<Prisma.BandVoiceDeleteManyArgs> = z.object({
  where: BandVoiceWhereInputSchema.optional(),
}).strict()

export const DisabledVoiceCreateArgsSchema: z.ZodType<Prisma.DisabledVoiceCreateArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  data: z.union([ DisabledVoiceCreateInputSchema,DisabledVoiceUncheckedCreateInputSchema ]),
}).strict()

export const DisabledVoiceUpsertArgsSchema: z.ZodType<Prisma.DisabledVoiceUpsertArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  where: DisabledVoiceWhereUniqueInputSchema,
  create: z.union([ DisabledVoiceCreateInputSchema,DisabledVoiceUncheckedCreateInputSchema ]),
  update: z.union([ DisabledVoiceUpdateInputSchema,DisabledVoiceUncheckedUpdateInputSchema ]),
}).strict()

export const DisabledVoiceCreateManyArgsSchema: z.ZodType<Prisma.DisabledVoiceCreateManyArgs> = z.object({
  data: z.union([ DisabledVoiceCreateManyInputSchema,DisabledVoiceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const DisabledVoiceDeleteArgsSchema: z.ZodType<Prisma.DisabledVoiceDeleteArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  where: DisabledVoiceWhereUniqueInputSchema,
}).strict()

export const DisabledVoiceUpdateArgsSchema: z.ZodType<Prisma.DisabledVoiceUpdateArgs> = z.object({
  select: DisabledVoiceSelectSchema.optional(),
  include: DisabledVoiceIncludeSchema.optional(),
  data: z.union([ DisabledVoiceUpdateInputSchema,DisabledVoiceUncheckedUpdateInputSchema ]),
  where: DisabledVoiceWhereUniqueInputSchema,
}).strict()

export const DisabledVoiceUpdateManyArgsSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyArgs> = z.object({
  data: z.union([ DisabledVoiceUpdateManyMutationInputSchema,DisabledVoiceUncheckedUpdateManyInputSchema ]),
  where: DisabledVoiceWhereInputSchema.optional(),
}).strict()

export const DisabledVoiceDeleteManyArgsSchema: z.ZodType<Prisma.DisabledVoiceDeleteManyArgs> = z.object({
  where: DisabledVoiceWhereInputSchema.optional(),
}).strict()