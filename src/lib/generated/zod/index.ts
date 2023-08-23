import type { Prisma } from '@prisma/client';
import { z } from 'zod';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable'
]);

export const OneTimePasswordScalarFieldEnumSchema = z.enum(['password', 'email', 'expires']);

export const TokenScalarFieldEnumSchema = z.enum(['id', 'user_id', 'expires']);

export const KeyScalarFieldEnumSchema = z.enum(['id', 'hashed_password', 'user_id']);

export const SessionScalarFieldEnumSchema = z.enum(['id', 'user_id', 'active_expires', 'idle_expires']);

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'email_verified', 'has_password']);

export const BandScalarFieldEnumSchema = z.enum(['id', 'name']);

export const PlayerScalarFieldEnumSchema = z.enum(['id', 'userId', 'name']);

export const MembershipScalarFieldEnumSchema = z.enum(['id', 'isAdmin', 'bandId', 'playerId']);

export const GigScalarFieldEnumSchema = z.enum(['id', 'name', 'bandId', 'date', 'location', 'description', 'playable']);

export const PresenceScalarFieldEnumSchema = z.enum(['id', 'value', 'isOrganizer', 'gigId', 'playerId']);

export const RoleScalarFieldEnumSchema = z.enum(['id', 'playable', 'instrumentId', 'playerId']);

export const InstrumentScalarFieldEnumSchema = z.enum(['id', 'name']);

export const GigVoiceScalarFieldEnumSchema = z.enum(['id', 'instrumentId', 'gigId']);

export const BandVoiceScalarFieldEnumSchema = z.enum(['id', 'instrumentId', 'bandId']);

export const DisabledVoiceScalarFieldEnumSchema = z.enum(['id', 'gigId', 'bandVoiceId']);

export const FormationVoiceScalarFieldEnumSchema = z.enum(['id', 'formationId', 'instrumentId']);

export const FormationUndefinedVoicePresenceScalarFieldEnumSchema = z.enum(['id', 'formationId', 'presenceId']);

export const FormationVoicePresenceScalarFieldEnumSchema = z.enum(['id', 'formationVoiceId', 'presenceId']);

export const FormationScalarFieldEnumSchema = z.enum(['id', 'gigId', 'gigCurrentFromId']);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);

export const NullsOrderSchema = z.enum(['first', 'last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ONE TIME PASSWORD SCHEMA
/////////////////////////////////////////

export const OneTimePasswordSchema = z.object({
  password: z.string(),
  email: z.string(),
  expires: z.bigint()
});

export type OneTimePassword = z.infer<typeof OneTimePasswordSchema>;

/////////////////////////////////////////
// TOKEN SCHEMA
/////////////////////////////////////////

export const TokenSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  expires: z.bigint()
});

export type Token = z.infer<typeof TokenSchema>;

/////////////////////////////////////////
// KEY SCHEMA
/////////////////////////////////////////

export const KeySchema = z.object({
  id: z.string(),
  hashed_password: z.string().nullable(),
  user_id: z.string()
});

export type Key = z.infer<typeof KeySchema>;

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
});

export type Session = z.infer<typeof SessionSchema>;

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean(),
  has_password: z.boolean()
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// BAND SCHEMA
/////////////////////////////////////////

export const BandSchema = z.object({
  id: z.string().uuid(),
  name: z.string()
});

export type Band = z.infer<typeof BandSchema>;

/////////////////////////////////////////
// PLAYER SCHEMA
/////////////////////////////////////////

export const PlayerSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  name: z.string()
});

export type Player = z.infer<typeof PlayerSchema>;

/////////////////////////////////////////
// MEMBERSHIP SCHEMA
/////////////////////////////////////////

export const MembershipSchema = z.object({
  id: z.string().uuid(),
  isAdmin: z.boolean(),
  bandId: z.string(),
  playerId: z.string()
});

export type Membership = z.infer<typeof MembershipSchema>;

/////////////////////////////////////////
// GIG SCHEMA
/////////////////////////////////////////

export const GigSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  bandId: z.string().nullable(),
  date: z.coerce.date(),
  location: z.string(),
  description: z.string().nullable(),
  playable: z.boolean()
});

export type Gig = z.infer<typeof GigSchema>;

/////////////////////////////////////////
// PRESENCE SCHEMA
/////////////////////////////////////////

export const PresenceSchema = z.object({
  id: z.string().uuid(),
  value: z.boolean(),
  isOrganizer: z.boolean(),
  gigId: z.string(),
  playerId: z.string()
});

export type Presence = z.infer<typeof PresenceSchema>;

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  id: z.string().uuid(),
  playable: z.boolean(),
  instrumentId: z.string(),
  playerId: z.string()
});

export type Role = z.infer<typeof RoleSchema>;

/////////////////////////////////////////
// INSTRUMENT SCHEMA
/////////////////////////////////////////

export const InstrumentSchema = z.object({
  id: z.string().uuid(),
  name: z.string()
});

export type Instrument = z.infer<typeof InstrumentSchema>;

/////////////////////////////////////////
// GIG VOICE SCHEMA
/////////////////////////////////////////

export const GigVoiceSchema = z.object({
  id: z.string().uuid(),
  instrumentId: z.string(),
  gigId: z.string()
});

export type GigVoice = z.infer<typeof GigVoiceSchema>;

/////////////////////////////////////////
// BAND VOICE SCHEMA
/////////////////////////////////////////

export const BandVoiceSchema = z.object({
  id: z.string().uuid(),
  instrumentId: z.string(),
  bandId: z.string()
});

export type BandVoice = z.infer<typeof BandVoiceSchema>;

/////////////////////////////////////////
// DISABLED VOICE SCHEMA
/////////////////////////////////////////

export const DisabledVoiceSchema = z.object({
  id: z.string().uuid(),
  gigId: z.string(),
  bandVoiceId: z.string()
});

export type DisabledVoice = z.infer<typeof DisabledVoiceSchema>;

/////////////////////////////////////////
// FORMATION VOICE SCHEMA
/////////////////////////////////////////

export const FormationVoiceSchema = z.object({
  id: z.string().uuid(),
  formationId: z.string(),
  instrumentId: z.string()
});

export type FormationVoice = z.infer<typeof FormationVoiceSchema>;

/////////////////////////////////////////
// FORMATION UNDEFINED VOICE PRESENCE SCHEMA
/////////////////////////////////////////

export const FormationUndefinedVoicePresenceSchema = z.object({
  id: z.string().uuid(),
  formationId: z.string(),
  presenceId: z.string()
});

export type FormationUndefinedVoicePresence = z.infer<typeof FormationUndefinedVoicePresenceSchema>;

/////////////////////////////////////////
// FORMATION VOICE PRESENCE SCHEMA
/////////////////////////////////////////

export const FormationVoicePresenceSchema = z.object({
  id: z.string().uuid(),
  formationVoiceId: z.string(),
  presenceId: z.string()
});

export type FormationVoicePresence = z.infer<typeof FormationVoicePresenceSchema>;

/////////////////////////////////////////
// FORMATION SCHEMA
/////////////////////////////////////////

export const FormationSchema = z.object({
  id: z.string().uuid(),
  gigId: z.string().nullable(),
  gigCurrentFromId: z.string().nullable()
});

export type Formation = z.infer<typeof FormationSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ONE TIME PASSWORD
//------------------------------------------------------

export const OneTimePasswordSelectSchema: z.ZodType<Prisma.OneTimePasswordSelect> = z
  .object({
    password: z.boolean().optional(),
    email: z.boolean().optional(),
    expires: z.boolean().optional()
  })
  .strict();

// TOKEN
//------------------------------------------------------

export const TokenIncludeSchema: z.ZodType<Prisma.TokenInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
  })
  .strict();

export const TokenArgsSchema: z.ZodType<Prisma.TokenArgs> = z
  .object({
    select: z.lazy(() => TokenSelectSchema).optional(),
    include: z.lazy(() => TokenIncludeSchema).optional()
  })
  .strict();

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z
  .object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    expires: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
  })
  .strict();

// KEY
//------------------------------------------------------

export const KeyIncludeSchema: z.ZodType<Prisma.KeyInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
  })
  .strict();

export const KeyArgsSchema: z.ZodType<Prisma.KeyArgs> = z
  .object({
    select: z.lazy(() => KeySelectSchema).optional(),
    include: z.lazy(() => KeyIncludeSchema).optional()
  })
  .strict();

export const KeySelectSchema: z.ZodType<Prisma.KeySelect> = z
  .object({
    id: z.boolean().optional(),
    hashed_password: z.boolean().optional(),
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
  })
  .strict();

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
  })
  .strict();

export const SessionArgsSchema: z.ZodType<Prisma.SessionArgs> = z
  .object({
    select: z.lazy(() => SessionSelectSchema).optional(),
    include: z.lazy(() => SessionIncludeSchema).optional()
  })
  .strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z
  .object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    active_expires: z.boolean().optional(),
    idle_expires: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
  })
  .strict();

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
  .object({
    auth_session: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
    key: z.union([z.boolean(), z.lazy(() => KeyFindManyArgsSchema)]).optional(),
    player: z.union([z.boolean(), z.lazy(() => PlayerArgsSchema)]).optional(),
    otp: z.union([z.boolean(), z.lazy(() => TokenArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z
  .object({
    select: z.lazy(() => UserSelectSchema).optional(),
    include: z.lazy(() => UserIncludeSchema).optional()
  })
  .strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
  .object({
    auth_session: z.boolean().optional(),
    key: z.boolean().optional()
  })
  .strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
    key: z.union([z.boolean(), z.lazy(() => KeyFindManyArgsSchema)]).optional(),
    player: z.union([z.boolean(), z.lazy(() => PlayerArgsSchema)]).optional(),
    otp: z.union([z.boolean(), z.lazy(() => TokenArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

// BAND
//------------------------------------------------------

export const BandIncludeSchema: z.ZodType<Prisma.BandInclude> = z
  .object({
    gigs: z.union([z.boolean(), z.lazy(() => GigFindManyArgsSchema)]).optional(),
    bandVoices: z.union([z.boolean(), z.lazy(() => BandVoiceFindManyArgsSchema)]).optional(),
    memberships: z.union([z.boolean(), z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BandCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const BandArgsSchema: z.ZodType<Prisma.BandArgs> = z
  .object({
    select: z.lazy(() => BandSelectSchema).optional(),
    include: z.lazy(() => BandIncludeSchema).optional()
  })
  .strict();

export const BandCountOutputTypeArgsSchema: z.ZodType<Prisma.BandCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => BandCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const BandCountOutputTypeSelectSchema: z.ZodType<Prisma.BandCountOutputTypeSelect> = z
  .object({
    gigs: z.boolean().optional(),
    bandVoices: z.boolean().optional(),
    memberships: z.boolean().optional()
  })
  .strict();

export const BandSelectSchema: z.ZodType<Prisma.BandSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    gigs: z.union([z.boolean(), z.lazy(() => GigFindManyArgsSchema)]).optional(),
    bandVoices: z.union([z.boolean(), z.lazy(() => BandVoiceFindManyArgsSchema)]).optional(),
    memberships: z.union([z.boolean(), z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BandCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

// PLAYER
//------------------------------------------------------

export const PlayerIncludeSchema: z.ZodType<Prisma.PlayerInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    presences: z.union([z.boolean(), z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
    roles: z.union([z.boolean(), z.lazy(() => RoleFindManyArgsSchema)]).optional(),
    memberships: z.union([z.boolean(), z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PlayerCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const PlayerArgsSchema: z.ZodType<Prisma.PlayerArgs> = z
  .object({
    select: z.lazy(() => PlayerSelectSchema).optional(),
    include: z.lazy(() => PlayerIncludeSchema).optional()
  })
  .strict();

export const PlayerCountOutputTypeArgsSchema: z.ZodType<Prisma.PlayerCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => PlayerCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const PlayerCountOutputTypeSelectSchema: z.ZodType<Prisma.PlayerCountOutputTypeSelect> = z
  .object({
    presences: z.boolean().optional(),
    roles: z.boolean().optional(),
    memberships: z.boolean().optional()
  })
  .strict();

export const PlayerSelectSchema: z.ZodType<Prisma.PlayerSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    name: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    presences: z.union([z.boolean(), z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
    roles: z.union([z.boolean(), z.lazy(() => RoleFindManyArgsSchema)]).optional(),
    memberships: z.union([z.boolean(), z.lazy(() => MembershipFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PlayerCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

// MEMBERSHIP
//------------------------------------------------------

export const MembershipIncludeSchema: z.ZodType<Prisma.MembershipInclude> = z
  .object({
    band: z.union([z.boolean(), z.lazy(() => BandArgsSchema)]).optional(),
    player: z.union([z.boolean(), z.lazy(() => PlayerArgsSchema)]).optional()
  })
  .strict();

export const MembershipArgsSchema: z.ZodType<Prisma.MembershipArgs> = z
  .object({
    select: z.lazy(() => MembershipSelectSchema).optional(),
    include: z.lazy(() => MembershipIncludeSchema).optional()
  })
  .strict();

export const MembershipSelectSchema: z.ZodType<Prisma.MembershipSelect> = z
  .object({
    id: z.boolean().optional(),
    isAdmin: z.boolean().optional(),
    bandId: z.boolean().optional(),
    playerId: z.boolean().optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsSchema)]).optional(),
    player: z.union([z.boolean(), z.lazy(() => PlayerArgsSchema)]).optional()
  })
  .strict();

// GIG
//------------------------------------------------------

export const GigIncludeSchema: z.ZodType<Prisma.GigInclude> = z
  .object({
    presences: z.union([z.boolean(), z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsSchema)]).optional(),
    gigVoices: z.union([z.boolean(), z.lazy(() => GigVoiceFindManyArgsSchema)]).optional(),
    disabledVoices: z.union([z.boolean(), z.lazy(() => DisabledVoiceFindManyArgsSchema)]).optional(),
    formations: z.union([z.boolean(), z.lazy(() => FormationFindManyArgsSchema)]).optional(),
    currentFormation: z.union([z.boolean(), z.lazy(() => FormationArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => GigCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const GigArgsSchema: z.ZodType<Prisma.GigArgs> = z
  .object({
    select: z.lazy(() => GigSelectSchema).optional(),
    include: z.lazy(() => GigIncludeSchema).optional()
  })
  .strict();

export const GigCountOutputTypeArgsSchema: z.ZodType<Prisma.GigCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => GigCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const GigCountOutputTypeSelectSchema: z.ZodType<Prisma.GigCountOutputTypeSelect> = z
  .object({
    presences: z.boolean().optional(),
    gigVoices: z.boolean().optional(),
    disabledVoices: z.boolean().optional(),
    formations: z.boolean().optional()
  })
  .strict();

export const GigSelectSchema: z.ZodType<Prisma.GigSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    bandId: z.boolean().optional(),
    date: z.boolean().optional(),
    location: z.boolean().optional(),
    description: z.boolean().optional(),
    playable: z.boolean().optional(),
    presences: z.union([z.boolean(), z.lazy(() => PresenceFindManyArgsSchema)]).optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsSchema)]).optional(),
    gigVoices: z.union([z.boolean(), z.lazy(() => GigVoiceFindManyArgsSchema)]).optional(),
    disabledVoices: z.union([z.boolean(), z.lazy(() => DisabledVoiceFindManyArgsSchema)]).optional(),
    formations: z.union([z.boolean(), z.lazy(() => FormationFindManyArgsSchema)]).optional(),
    currentFormation: z.union([z.boolean(), z.lazy(() => FormationArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => GigCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

// PRESENCE
//------------------------------------------------------

export const PresenceIncludeSchema: z.ZodType<Prisma.PresenceInclude> = z
  .object({
    gig: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional(),
    player: z.union([z.boolean(), z.lazy(() => PlayerArgsSchema)]).optional(),
    formationVoicePresences: z.union([z.boolean(), z.lazy(() => FormationVoicePresenceFindManyArgsSchema)]).optional(),
    formationUndefinedVoicePresence: z
      .union([z.boolean(), z.lazy(() => FormationUndefinedVoicePresenceFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => PresenceCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const PresenceArgsSchema: z.ZodType<Prisma.PresenceArgs> = z
  .object({
    select: z.lazy(() => PresenceSelectSchema).optional(),
    include: z.lazy(() => PresenceIncludeSchema).optional()
  })
  .strict();

export const PresenceCountOutputTypeArgsSchema: z.ZodType<Prisma.PresenceCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => PresenceCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const PresenceCountOutputTypeSelectSchema: z.ZodType<Prisma.PresenceCountOutputTypeSelect> = z
  .object({
    formationVoicePresences: z.boolean().optional(),
    formationUndefinedVoicePresence: z.boolean().optional()
  })
  .strict();

export const PresenceSelectSchema: z.ZodType<Prisma.PresenceSelect> = z
  .object({
    id: z.boolean().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    gigId: z.boolean().optional(),
    playerId: z.boolean().optional(),
    gig: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional(),
    player: z.union([z.boolean(), z.lazy(() => PlayerArgsSchema)]).optional(),
    formationVoicePresences: z.union([z.boolean(), z.lazy(() => FormationVoicePresenceFindManyArgsSchema)]).optional(),
    formationUndefinedVoicePresence: z
      .union([z.boolean(), z.lazy(() => FormationUndefinedVoicePresenceFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => PresenceCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

// ROLE
//------------------------------------------------------

export const RoleIncludeSchema: z.ZodType<Prisma.RoleInclude> = z
  .object({
    instrument: z.union([z.boolean(), z.lazy(() => InstrumentArgsSchema)]).optional(),
    player: z.union([z.boolean(), z.lazy(() => PlayerArgsSchema)]).optional()
  })
  .strict();

export const RoleArgsSchema: z.ZodType<Prisma.RoleArgs> = z
  .object({
    select: z.lazy(() => RoleSelectSchema).optional(),
    include: z.lazy(() => RoleIncludeSchema).optional()
  })
  .strict();

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z
  .object({
    id: z.boolean().optional(),
    playable: z.boolean().optional(),
    instrumentId: z.boolean().optional(),
    playerId: z.boolean().optional(),
    instrument: z.union([z.boolean(), z.lazy(() => InstrumentArgsSchema)]).optional(),
    player: z.union([z.boolean(), z.lazy(() => PlayerArgsSchema)]).optional()
  })
  .strict();

// INSTRUMENT
//------------------------------------------------------

export const InstrumentIncludeSchema: z.ZodType<Prisma.InstrumentInclude> = z
  .object({
    roles: z.union([z.boolean(), z.lazy(() => RoleFindManyArgsSchema)]).optional(),
    bandVoices: z.union([z.boolean(), z.lazy(() => BandVoiceFindManyArgsSchema)]).optional(),
    gigVoices: z.union([z.boolean(), z.lazy(() => GigVoiceFindManyArgsSchema)]).optional(),
    formationVoices: z.union([z.boolean(), z.lazy(() => FormationVoiceFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => InstrumentCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const InstrumentArgsSchema: z.ZodType<Prisma.InstrumentArgs> = z
  .object({
    select: z.lazy(() => InstrumentSelectSchema).optional(),
    include: z.lazy(() => InstrumentIncludeSchema).optional()
  })
  .strict();

export const InstrumentCountOutputTypeArgsSchema: z.ZodType<Prisma.InstrumentCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => InstrumentCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const InstrumentCountOutputTypeSelectSchema: z.ZodType<Prisma.InstrumentCountOutputTypeSelect> = z
  .object({
    roles: z.boolean().optional(),
    bandVoices: z.boolean().optional(),
    gigVoices: z.boolean().optional(),
    formationVoices: z.boolean().optional()
  })
  .strict();

export const InstrumentSelectSchema: z.ZodType<Prisma.InstrumentSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    roles: z.union([z.boolean(), z.lazy(() => RoleFindManyArgsSchema)]).optional(),
    bandVoices: z.union([z.boolean(), z.lazy(() => BandVoiceFindManyArgsSchema)]).optional(),
    gigVoices: z.union([z.boolean(), z.lazy(() => GigVoiceFindManyArgsSchema)]).optional(),
    formationVoices: z.union([z.boolean(), z.lazy(() => FormationVoiceFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => InstrumentCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

// GIG VOICE
//------------------------------------------------------

export const GigVoiceIncludeSchema: z.ZodType<Prisma.GigVoiceInclude> = z
  .object({
    instrument: z.union([z.boolean(), z.lazy(() => InstrumentArgsSchema)]).optional(),
    gig: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional()
  })
  .strict();

export const GigVoiceArgsSchema: z.ZodType<Prisma.GigVoiceArgs> = z
  .object({
    select: z.lazy(() => GigVoiceSelectSchema).optional(),
    include: z.lazy(() => GigVoiceIncludeSchema).optional()
  })
  .strict();

export const GigVoiceSelectSchema: z.ZodType<Prisma.GigVoiceSelect> = z
  .object({
    id: z.boolean().optional(),
    instrumentId: z.boolean().optional(),
    gigId: z.boolean().optional(),
    instrument: z.union([z.boolean(), z.lazy(() => InstrumentArgsSchema)]).optional(),
    gig: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional()
  })
  .strict();

// BAND VOICE
//------------------------------------------------------

export const BandVoiceIncludeSchema: z.ZodType<Prisma.BandVoiceInclude> = z
  .object({
    instrument: z.union([z.boolean(), z.lazy(() => InstrumentArgsSchema)]).optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsSchema)]).optional(),
    disabledVoices: z.union([z.boolean(), z.lazy(() => DisabledVoiceFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BandVoiceCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const BandVoiceArgsSchema: z.ZodType<Prisma.BandVoiceArgs> = z
  .object({
    select: z.lazy(() => BandVoiceSelectSchema).optional(),
    include: z.lazy(() => BandVoiceIncludeSchema).optional()
  })
  .strict();

export const BandVoiceCountOutputTypeArgsSchema: z.ZodType<Prisma.BandVoiceCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => BandVoiceCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const BandVoiceCountOutputTypeSelectSchema: z.ZodType<Prisma.BandVoiceCountOutputTypeSelect> = z
  .object({
    disabledVoices: z.boolean().optional()
  })
  .strict();

export const BandVoiceSelectSchema: z.ZodType<Prisma.BandVoiceSelect> = z
  .object({
    id: z.boolean().optional(),
    instrumentId: z.boolean().optional(),
    bandId: z.boolean().optional(),
    instrument: z.union([z.boolean(), z.lazy(() => InstrumentArgsSchema)]).optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsSchema)]).optional(),
    disabledVoices: z.union([z.boolean(), z.lazy(() => DisabledVoiceFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => BandVoiceCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

// DISABLED VOICE
//------------------------------------------------------

export const DisabledVoiceIncludeSchema: z.ZodType<Prisma.DisabledVoiceInclude> = z
  .object({
    gig: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional(),
    bandVoice: z.union([z.boolean(), z.lazy(() => BandVoiceArgsSchema)]).optional()
  })
  .strict();

export const DisabledVoiceArgsSchema: z.ZodType<Prisma.DisabledVoiceArgs> = z
  .object({
    select: z.lazy(() => DisabledVoiceSelectSchema).optional(),
    include: z.lazy(() => DisabledVoiceIncludeSchema).optional()
  })
  .strict();

export const DisabledVoiceSelectSchema: z.ZodType<Prisma.DisabledVoiceSelect> = z
  .object({
    id: z.boolean().optional(),
    gigId: z.boolean().optional(),
    bandVoiceId: z.boolean().optional(),
    gig: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional(),
    bandVoice: z.union([z.boolean(), z.lazy(() => BandVoiceArgsSchema)]).optional()
  })
  .strict();

// FORMATION VOICE
//------------------------------------------------------

export const FormationVoiceIncludeSchema: z.ZodType<Prisma.FormationVoiceInclude> = z
  .object({
    formation: z.union([z.boolean(), z.lazy(() => FormationArgsSchema)]).optional(),
    instrument: z.union([z.boolean(), z.lazy(() => InstrumentArgsSchema)]).optional(),
    formationVoicePresences: z.union([z.boolean(), z.lazy(() => FormationVoicePresenceFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => FormationVoiceCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const FormationVoiceArgsSchema: z.ZodType<Prisma.FormationVoiceArgs> = z
  .object({
    select: z.lazy(() => FormationVoiceSelectSchema).optional(),
    include: z.lazy(() => FormationVoiceIncludeSchema).optional()
  })
  .strict();

export const FormationVoiceCountOutputTypeArgsSchema: z.ZodType<Prisma.FormationVoiceCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => FormationVoiceCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const FormationVoiceCountOutputTypeSelectSchema: z.ZodType<Prisma.FormationVoiceCountOutputTypeSelect> = z
  .object({
    formationVoicePresences: z.boolean().optional()
  })
  .strict();

export const FormationVoiceSelectSchema: z.ZodType<Prisma.FormationVoiceSelect> = z
  .object({
    id: z.boolean().optional(),
    formationId: z.boolean().optional(),
    instrumentId: z.boolean().optional(),
    formation: z.union([z.boolean(), z.lazy(() => FormationArgsSchema)]).optional(),
    instrument: z.union([z.boolean(), z.lazy(() => InstrumentArgsSchema)]).optional(),
    formationVoicePresences: z.union([z.boolean(), z.lazy(() => FormationVoicePresenceFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => FormationVoiceCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

// FORMATION UNDEFINED VOICE PRESENCE
//------------------------------------------------------

export const FormationUndefinedVoicePresenceIncludeSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceInclude> = z
  .object({
    formation: z.union([z.boolean(), z.lazy(() => FormationArgsSchema)]).optional(),
    presence: z.union([z.boolean(), z.lazy(() => PresenceArgsSchema)]).optional()
  })
  .strict();

export const FormationUndefinedVoicePresenceArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceArgs> = z
  .object({
    select: z.lazy(() => FormationUndefinedVoicePresenceSelectSchema).optional(),
    include: z.lazy(() => FormationUndefinedVoicePresenceIncludeSchema).optional()
  })
  .strict();

export const FormationUndefinedVoicePresenceSelectSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceSelect> = z
  .object({
    id: z.boolean().optional(),
    formationId: z.boolean().optional(),
    presenceId: z.boolean().optional(),
    formation: z.union([z.boolean(), z.lazy(() => FormationArgsSchema)]).optional(),
    presence: z.union([z.boolean(), z.lazy(() => PresenceArgsSchema)]).optional()
  })
  .strict();

// FORMATION VOICE PRESENCE
//------------------------------------------------------

export const FormationVoicePresenceIncludeSchema: z.ZodType<Prisma.FormationVoicePresenceInclude> = z
  .object({
    formationVoice: z.union([z.boolean(), z.lazy(() => FormationVoiceArgsSchema)]).optional(),
    presence: z.union([z.boolean(), z.lazy(() => PresenceArgsSchema)]).optional()
  })
  .strict();

export const FormationVoicePresenceArgsSchema: z.ZodType<Prisma.FormationVoicePresenceArgs> = z
  .object({
    select: z.lazy(() => FormationVoicePresenceSelectSchema).optional(),
    include: z.lazy(() => FormationVoicePresenceIncludeSchema).optional()
  })
  .strict();

export const FormationVoicePresenceSelectSchema: z.ZodType<Prisma.FormationVoicePresenceSelect> = z
  .object({
    id: z.boolean().optional(),
    formationVoiceId: z.boolean().optional(),
    presenceId: z.boolean().optional(),
    formationVoice: z.union([z.boolean(), z.lazy(() => FormationVoiceArgsSchema)]).optional(),
    presence: z.union([z.boolean(), z.lazy(() => PresenceArgsSchema)]).optional()
  })
  .strict();

// FORMATION
//------------------------------------------------------

export const FormationIncludeSchema: z.ZodType<Prisma.FormationInclude> = z
  .object({
    formationVoices: z.union([z.boolean(), z.lazy(() => FormationVoiceFindManyArgsSchema)]).optional(),
    formationUndefinedVoicePresences: z
      .union([z.boolean(), z.lazy(() => FormationUndefinedVoicePresenceFindManyArgsSchema)])
      .optional(),
    gig: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional(),
    gigCurrentFrom: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => FormationCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const FormationArgsSchema: z.ZodType<Prisma.FormationArgs> = z
  .object({
    select: z.lazy(() => FormationSelectSchema).optional(),
    include: z.lazy(() => FormationIncludeSchema).optional()
  })
  .strict();

export const FormationCountOutputTypeArgsSchema: z.ZodType<Prisma.FormationCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => FormationCountOutputTypeSelectSchema).nullish()
  })
  .strict();

export const FormationCountOutputTypeSelectSchema: z.ZodType<Prisma.FormationCountOutputTypeSelect> = z
  .object({
    formationVoices: z.boolean().optional(),
    formationUndefinedVoicePresences: z.boolean().optional()
  })
  .strict();

export const FormationSelectSchema: z.ZodType<Prisma.FormationSelect> = z
  .object({
    id: z.boolean().optional(),
    gigId: z.boolean().optional(),
    gigCurrentFromId: z.boolean().optional(),
    formationVoices: z.union([z.boolean(), z.lazy(() => FormationVoiceFindManyArgsSchema)]).optional(),
    formationUndefinedVoicePresences: z
      .union([z.boolean(), z.lazy(() => FormationUndefinedVoicePresenceFindManyArgsSchema)])
      .optional(),
    gig: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional(),
    gigCurrentFrom: z.union([z.boolean(), z.lazy(() => GigArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => FormationCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const OneTimePasswordWhereInputSchema: z.ZodType<Prisma.OneTimePasswordWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => OneTimePasswordWhereInputSchema), z.lazy(() => OneTimePasswordWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => OneTimePasswordWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => OneTimePasswordWhereInputSchema), z.lazy(() => OneTimePasswordWhereInputSchema).array()])
      .optional(),
    password: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional()
  })
  .strict();

export const OneTimePasswordOrderByWithRelationInputSchema: z.ZodType<Prisma.OneTimePasswordOrderByWithRelationInput> =
  z
    .object({
      password: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const OneTimePasswordWhereUniqueInputSchema: z.ZodType<Prisma.OneTimePasswordWhereUniqueInput> = z
  .object({
    password: z.string().optional(),
    email: z.string().optional(),
    password_email: z.lazy(() => OneTimePasswordPasswordEmailCompoundUniqueInputSchema).optional()
  })
  .strict();

export const OneTimePasswordOrderByWithAggregationInputSchema: z.ZodType<Prisma.OneTimePasswordOrderByWithAggregationInput> =
  z
    .object({
      password: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => OneTimePasswordCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => OneTimePasswordAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => OneTimePasswordMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => OneTimePasswordMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => OneTimePasswordSumOrderByAggregateInputSchema).optional()
    })
    .strict();

export const OneTimePasswordScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OneTimePasswordScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => OneTimePasswordScalarWhereWithAggregatesInputSchema),
          z.lazy(() => OneTimePasswordScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => OneTimePasswordScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => OneTimePasswordScalarWhereWithAggregatesInputSchema),
          z.lazy(() => OneTimePasswordScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      password: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      expires: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional()
    })
    .strict();

export const TokenWhereInputSchema: z.ZodType<Prisma.TokenWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => TokenWhereInputSchema), z.lazy(() => TokenWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => TokenWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => TokenWhereInputSchema), z.lazy(() => TokenWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
    user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional()
  })
  .strict();

export const TokenOrderByWithRelationInputSchema: z.ZodType<Prisma.TokenOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const TokenWhereUniqueInputSchema: z.ZodType<Prisma.TokenWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string().optional()
  })
  .strict();

export const TokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.TokenOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => TokenCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => TokenAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => TokenMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => TokenMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => TokenSumOrderByAggregateInputSchema).optional()
  })
  .strict();

export const TokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TokenScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TokenScalarWhereWithAggregatesInputSchema),
        z.lazy(() => TokenScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => TokenScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TokenScalarWhereWithAggregatesInputSchema),
        z.lazy(() => TokenScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    expires: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional()
  })
  .strict();

export const KeyWhereInputSchema: z.ZodType<Prisma.KeyWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => KeyWhereInputSchema), z.lazy(() => KeyWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => KeyWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => KeyWhereInputSchema), z.lazy(() => KeyWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    hashed_password: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional()
  })
  .strict();

export const KeyOrderByWithRelationInputSchema: z.ZodType<Prisma.KeyOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    hashed_password: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const KeyWhereUniqueInputSchema: z.ZodType<Prisma.KeyWhereUniqueInput> = z
  .object({
    id: z.string().optional()
  })
  .strict();

export const KeyOrderByWithAggregationInputSchema: z.ZodType<Prisma.KeyOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    hashed_password: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => KeyCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => KeyMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => KeyMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const KeyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.KeyScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => KeyScalarWhereWithAggregatesInputSchema),
        z.lazy(() => KeyScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => KeyScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => KeyScalarWhereWithAggregatesInputSchema),
        z.lazy(() => KeyScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    hashed_password: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
      .optional()
      .nullable(),
    user_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
  })
  .strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => SessionWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    active_expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
    idle_expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
    user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional()
  })
  .strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    active_expires: z.lazy(() => SortOrderSchema).optional(),
    idle_expires: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z
  .object({
    id: z.string().optional()
  })
  .strict();

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    active_expires: z.lazy(() => SortOrderSchema).optional(),
    idle_expires: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => SessionAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => SessionSumOrderByAggregateInputSchema).optional()
  })
  .strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
        z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => SessionScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
        z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    active_expires: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional(),
    idle_expires: z.union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()]).optional()
  })
  .strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email_verified: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    has_password: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    auth_session: z.lazy(() => SessionListRelationFilterSchema).optional(),
    key: z.lazy(() => KeyListRelationFilterSchema).optional(),
    player: z
      .union([z.lazy(() => PlayerRelationFilterSchema), z.lazy(() => PlayerWhereInputSchema)])
      .optional()
      .nullable(),
    otp: z
      .union([z.lazy(() => TokenRelationFilterSchema), z.lazy(() => TokenWhereInputSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    email_verified: z.lazy(() => SortOrderSchema).optional(),
    has_password: z.lazy(() => SortOrderSchema).optional(),
    auth_session: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
    key: z.lazy(() => KeyOrderByRelationAggregateInputSchema).optional(),
    player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional(),
    otp: z.lazy(() => TokenOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional()
  })
  .strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    email_verified: z.lazy(() => SortOrderSchema).optional(),
    has_password: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => UserScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    email_verified: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
    has_password: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional()
  })
  .strict();

export const BandWhereInputSchema: z.ZodType<Prisma.BandWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => BandWhereInputSchema), z.lazy(() => BandWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => BandWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => BandWhereInputSchema), z.lazy(() => BandWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gigs: z.lazy(() => GigListRelationFilterSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceListRelationFilterSchema).optional(),
    memberships: z.lazy(() => MembershipListRelationFilterSchema).optional()
  })
  .strict();

export const BandOrderByWithRelationInputSchema: z.ZodType<Prisma.BandOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    gigs: z.lazy(() => GigOrderByRelationAggregateInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceOrderByRelationAggregateInputSchema).optional(),
    memberships: z.lazy(() => MembershipOrderByRelationAggregateInputSchema).optional()
  })
  .strict();

export const BandWhereUniqueInputSchema: z.ZodType<Prisma.BandWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string().optional()
  })
  .strict();

export const BandOrderByWithAggregationInputSchema: z.ZodType<Prisma.BandOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => BandCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => BandMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => BandMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const BandScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BandScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BandScalarWhereWithAggregatesInputSchema),
        z.lazy(() => BandScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => BandScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BandScalarWhereWithAggregatesInputSchema),
        z.lazy(() => BandScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
  })
  .strict();

export const PlayerWhereInputSchema: z.ZodType<Prisma.PlayerWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => PlayerWhereInputSchema), z.lazy(() => PlayerWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => PlayerWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => PlayerWhereInputSchema), z.lazy(() => PlayerWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
    presences: z.lazy(() => PresenceListRelationFilterSchema).optional(),
    roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
    memberships: z.lazy(() => MembershipListRelationFilterSchema).optional()
  })
  .strict();

export const PlayerOrderByWithRelationInputSchema: z.ZodType<Prisma.PlayerOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    presences: z.lazy(() => PresenceOrderByRelationAggregateInputSchema).optional(),
    roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
    memberships: z.lazy(() => MembershipOrderByRelationAggregateInputSchema).optional()
  })
  .strict();

export const PlayerWhereUniqueInputSchema: z.ZodType<Prisma.PlayerWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    userId: z.string().optional(),
    name: z.string().optional()
  })
  .strict();

export const PlayerOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlayerOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PlayerCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => PlayerMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => PlayerMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const PlayerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlayerScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema),
        z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => PlayerScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema),
        z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
  })
  .strict();

export const MembershipWhereInputSchema: z.ZodType<Prisma.MembershipWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => MembershipWhereInputSchema), z.lazy(() => MembershipWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => MembershipWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => MembershipWhereInputSchema), z.lazy(() => MembershipWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    isAdmin: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    bandId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    playerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    band: z.union([z.lazy(() => BandRelationFilterSchema), z.lazy(() => BandWhereInputSchema)]).optional(),
    player: z.union([z.lazy(() => PlayerRelationFilterSchema), z.lazy(() => PlayerWhereInputSchema)]).optional()
  })
  .strict();

export const MembershipOrderByWithRelationInputSchema: z.ZodType<Prisma.MembershipOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    isAdmin: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional(),
    band: z.lazy(() => BandOrderByWithRelationInputSchema).optional(),
    player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const MembershipWhereUniqueInputSchema: z.ZodType<Prisma.MembershipWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    bandId_playerId: z.lazy(() => MembershipBandIdPlayerIdCompoundUniqueInputSchema).optional()
  })
  .strict();

export const MembershipOrderByWithAggregationInputSchema: z.ZodType<Prisma.MembershipOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    isAdmin: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => MembershipCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => MembershipMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => MembershipMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const MembershipScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MembershipScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema),
          z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => MembershipScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema),
          z.lazy(() => MembershipScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      isAdmin: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
      bandId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      playerId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict();

export const GigWhereInputSchema: z.ZodType<Prisma.GigWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => GigWhereInputSchema), z.lazy(() => GigWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => GigWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => GigWhereInputSchema), z.lazy(() => GigWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    bandId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    location: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    playable: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    presences: z.lazy(() => PresenceListRelationFilterSchema).optional(),
    band: z
      .union([z.lazy(() => BandRelationFilterSchema), z.lazy(() => BandWhereInputSchema)])
      .optional()
      .nullable(),
    gigVoices: z.lazy(() => GigVoiceListRelationFilterSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceListRelationFilterSchema).optional(),
    formations: z.lazy(() => FormationListRelationFilterSchema).optional(),
    currentFormation: z
      .union([z.lazy(() => FormationRelationFilterSchema), z.lazy(() => FormationWhereInputSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const GigOrderByWithRelationInputSchema: z.ZodType<Prisma.GigOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    playable: z.lazy(() => SortOrderSchema).optional(),
    presences: z.lazy(() => PresenceOrderByRelationAggregateInputSchema).optional(),
    band: z.lazy(() => BandOrderByWithRelationInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceOrderByRelationAggregateInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceOrderByRelationAggregateInputSchema).optional(),
    formations: z.lazy(() => FormationOrderByRelationAggregateInputSchema).optional(),
    currentFormation: z.lazy(() => FormationOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const GigWhereUniqueInputSchema: z.ZodType<Prisma.GigWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional()
  })
  .strict();

export const GigOrderByWithAggregationInputSchema: z.ZodType<Prisma.GigOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    playable: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => GigCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => GigMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => GigMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const GigScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GigScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GigScalarWhereWithAggregatesInputSchema),
        z.lazy(() => GigScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => GigScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GigScalarWhereWithAggregatesInputSchema),
        z.lazy(() => GigScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    bandId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
      .optional()
      .nullable(),
    date: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
    location: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
      .optional()
      .nullable(),
    playable: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional()
  })
  .strict();

export const PresenceWhereInputSchema: z.ZodType<Prisma.PresenceWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => PresenceWhereInputSchema), z.lazy(() => PresenceWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => PresenceWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => PresenceWhereInputSchema), z.lazy(() => PresenceWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    value: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    isOrganizer: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    gigId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    playerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gig: z.union([z.lazy(() => GigRelationFilterSchema), z.lazy(() => GigWhereInputSchema)]).optional(),
    player: z.union([z.lazy(() => PlayerRelationFilterSchema), z.lazy(() => PlayerWhereInputSchema)]).optional(),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceListRelationFilterSchema).optional(),
    formationUndefinedVoicePresence: z.lazy(() => FormationUndefinedVoicePresenceListRelationFilterSchema).optional()
  })
  .strict();

export const PresenceOrderByWithRelationInputSchema: z.ZodType<Prisma.PresenceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    isOrganizer: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional(),
    gig: z.lazy(() => GigOrderByWithRelationInputSchema).optional(),
    player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional(),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceOrderByRelationAggregateInputSchema).optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceOrderByRelationAggregateInputSchema)
      .optional()
  })
  .strict();

export const PresenceWhereUniqueInputSchema: z.ZodType<Prisma.PresenceWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigId_playerId: z.lazy(() => PresenceGigIdPlayerIdCompoundUniqueInputSchema).optional()
  })
  .strict();

export const PresenceOrderByWithAggregationInputSchema: z.ZodType<Prisma.PresenceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    isOrganizer: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PresenceCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => PresenceMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => PresenceMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const PresenceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PresenceScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema),
        z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => PresenceScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema),
        z.lazy(() => PresenceScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    value: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
    isOrganizer: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
    gigId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    playerId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
  })
  .strict();

export const RoleWhereInputSchema: z.ZodType<Prisma.RoleWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => RoleWhereInputSchema), z.lazy(() => RoleWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => RoleWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => RoleWhereInputSchema), z.lazy(() => RoleWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    playable: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    instrumentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    playerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrument: z
      .union([z.lazy(() => InstrumentRelationFilterSchema), z.lazy(() => InstrumentWhereInputSchema)])
      .optional(),
    player: z.union([z.lazy(() => PlayerRelationFilterSchema), z.lazy(() => PlayerWhereInputSchema)]).optional()
  })
  .strict();

export const RoleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    playable: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional(),
    instrument: z.lazy(() => InstrumentOrderByWithRelationInputSchema).optional(),
    player: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const RoleWhereUniqueInputSchema: z.ZodType<Prisma.RoleWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId_playerId: z.lazy(() => RoleInstrumentIdPlayerIdCompoundUniqueInputSchema).optional()
  })
  .strict();

export const RoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    playable: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RoleCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RoleMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RoleMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const RoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoleScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => RoleScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    playable: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
    instrumentId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    playerId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
  })
  .strict();

export const InstrumentWhereInputSchema: z.ZodType<Prisma.InstrumentWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => InstrumentWhereInputSchema), z.lazy(() => InstrumentWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => InstrumentWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => InstrumentWhereInputSchema), z.lazy(() => InstrumentWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    roles: z.lazy(() => RoleListRelationFilterSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceListRelationFilterSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceListRelationFilterSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceListRelationFilterSchema).optional()
  })
  .strict();

export const InstrumentOrderByWithRelationInputSchema: z.ZodType<Prisma.InstrumentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    roles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceOrderByRelationAggregateInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceOrderByRelationAggregateInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceOrderByRelationAggregateInputSchema).optional()
  })
  .strict();

export const InstrumentWhereUniqueInputSchema: z.ZodType<Prisma.InstrumentWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string().optional()
  })
  .strict();

export const InstrumentOrderByWithAggregationInputSchema: z.ZodType<Prisma.InstrumentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => InstrumentCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => InstrumentMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => InstrumentMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const InstrumentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InstrumentScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => InstrumentScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => InstrumentScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict();

export const GigVoiceWhereInputSchema: z.ZodType<Prisma.GigVoiceWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => GigVoiceWhereInputSchema), z.lazy(() => GigVoiceWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => GigVoiceWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => GigVoiceWhereInputSchema), z.lazy(() => GigVoiceWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrumentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gigId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrument: z
      .union([z.lazy(() => InstrumentRelationFilterSchema), z.lazy(() => InstrumentWhereInputSchema)])
      .optional(),
    gig: z.union([z.lazy(() => GigRelationFilterSchema), z.lazy(() => GigWhereInputSchema)]).optional()
  })
  .strict();

export const GigVoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.GigVoiceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    instrument: z.lazy(() => InstrumentOrderByWithRelationInputSchema).optional(),
    gig: z.lazy(() => GigOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const GigVoiceWhereUniqueInputSchema: z.ZodType<Prisma.GigVoiceWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    id_gigId: z.lazy(() => GigVoiceIdGigIdCompoundUniqueInputSchema).optional()
  })
  .strict();

export const GigVoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.GigVoiceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => GigVoiceCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => GigVoiceMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => GigVoiceMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const GigVoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GigVoiceScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema),
        z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema),
        z.lazy(() => GigVoiceScalarWhereWithAggregatesInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    instrumentId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    gigId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
  })
  .strict();

export const BandVoiceWhereInputSchema: z.ZodType<Prisma.BandVoiceWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => BandVoiceWhereInputSchema), z.lazy(() => BandVoiceWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => BandVoiceWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => BandVoiceWhereInputSchema), z.lazy(() => BandVoiceWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrumentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    bandId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrument: z
      .union([z.lazy(() => InstrumentRelationFilterSchema), z.lazy(() => InstrumentWhereInputSchema)])
      .optional(),
    band: z.union([z.lazy(() => BandRelationFilterSchema), z.lazy(() => BandWhereInputSchema)]).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceListRelationFilterSchema).optional()
  })
  .strict();

export const BandVoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.BandVoiceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    instrument: z.lazy(() => InstrumentOrderByWithRelationInputSchema).optional(),
    band: z.lazy(() => BandOrderByWithRelationInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceOrderByRelationAggregateInputSchema).optional()
  })
  .strict();

export const BandVoiceWhereUniqueInputSchema: z.ZodType<Prisma.BandVoiceWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    id_bandId: z.lazy(() => BandVoiceIdBandIdCompoundUniqueInputSchema).optional()
  })
  .strict();

export const BandVoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.BandVoiceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => BandVoiceCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => BandVoiceMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => BandVoiceMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const BandVoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BandVoiceScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => BandVoiceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      instrumentId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      bandId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict();

export const DisabledVoiceWhereInputSchema: z.ZodType<Prisma.DisabledVoiceWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => DisabledVoiceWhereInputSchema), z.lazy(() => DisabledVoiceWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => DisabledVoiceWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => DisabledVoiceWhereInputSchema), z.lazy(() => DisabledVoiceWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gigId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    bandVoiceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gig: z.union([z.lazy(() => GigRelationFilterSchema), z.lazy(() => GigWhereInputSchema)]).optional(),
    bandVoice: z
      .union([z.lazy(() => BandVoiceRelationFilterSchema), z.lazy(() => BandVoiceWhereInputSchema)])
      .optional()
  })
  .strict();

export const DisabledVoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.DisabledVoiceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    bandVoiceId: z.lazy(() => SortOrderSchema).optional(),
    gig: z.lazy(() => GigOrderByWithRelationInputSchema).optional(),
    bandVoice: z.lazy(() => BandVoiceOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const DisabledVoiceWhereUniqueInputSchema: z.ZodType<Prisma.DisabledVoiceWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigId_bandVoiceId: z.lazy(() => DisabledVoiceGigIdBandVoiceIdCompoundUniqueInputSchema).optional()
  })
  .strict();

export const DisabledVoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.DisabledVoiceOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      gigId: z.lazy(() => SortOrderSchema).optional(),
      bandVoiceId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => DisabledVoiceCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => DisabledVoiceMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => DisabledVoiceMinOrderByAggregateInputSchema).optional()
    })
    .strict();

export const DisabledVoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DisabledVoiceScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => DisabledVoiceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      gigId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      bandVoiceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict();

export const FormationVoiceWhereInputSchema: z.ZodType<Prisma.FormationVoiceWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => FormationVoiceWhereInputSchema), z.lazy(() => FormationVoiceWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => FormationVoiceWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => FormationVoiceWhereInputSchema), z.lazy(() => FormationVoiceWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    formationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrumentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    formation: z
      .union([z.lazy(() => FormationRelationFilterSchema), z.lazy(() => FormationWhereInputSchema)])
      .optional(),
    instrument: z
      .union([z.lazy(() => InstrumentRelationFilterSchema), z.lazy(() => InstrumentWhereInputSchema)])
      .optional(),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceListRelationFilterSchema).optional()
  })
  .strict();

export const FormationVoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.FormationVoiceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    formationId: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    formation: z.lazy(() => FormationOrderByWithRelationInputSchema).optional(),
    instrument: z.lazy(() => InstrumentOrderByWithRelationInputSchema).optional(),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceOrderByRelationAggregateInputSchema).optional()
  })
  .strict();

export const FormationVoiceWhereUniqueInputSchema: z.ZodType<Prisma.FormationVoiceWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    formationId_instrumentId: z.lazy(() => FormationVoiceFormationIdInstrumentIdCompoundUniqueInputSchema).optional()
  })
  .strict();

export const FormationVoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.FormationVoiceOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationId: z.lazy(() => SortOrderSchema).optional(),
      instrumentId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => FormationVoiceCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => FormationVoiceMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => FormationVoiceMinOrderByAggregateInputSchema).optional()
    })
    .strict();

export const FormationVoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FormationVoiceScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FormationVoiceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FormationVoiceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => FormationVoiceScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FormationVoiceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FormationVoiceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      formationId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      instrumentId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceWhereInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => FormationUndefinedVoicePresenceWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      formationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      presenceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      formation: z
        .union([z.lazy(() => FormationRelationFilterSchema), z.lazy(() => FormationWhereInputSchema)])
        .optional(),
      presence: z.union([z.lazy(() => PresenceRelationFilterSchema), z.lazy(() => PresenceWhereInputSchema)]).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceOrderByWithRelationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional(),
      formation: z.lazy(() => FormationOrderByWithRelationInputSchema).optional(),
      presence: z.lazy(() => PresenceOrderByWithRelationInputSchema).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceWhereUniqueInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid().optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceOrderByWithAggregationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => FormationUndefinedVoicePresenceCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => FormationUndefinedVoicePresenceMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => FormationUndefinedVoicePresenceMinOrderByAggregateInputSchema).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => FormationUndefinedVoicePresenceScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      formationId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      presenceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict();

export const FormationVoicePresenceWhereInputSchema: z.ZodType<Prisma.FormationVoicePresenceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FormationVoicePresenceWhereInputSchema),
        z.lazy(() => FormationVoicePresenceWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => FormationVoicePresenceWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FormationVoicePresenceWhereInputSchema),
        z.lazy(() => FormationVoicePresenceWhereInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    formationVoiceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    presenceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    formationVoice: z
      .union([z.lazy(() => FormationVoiceRelationFilterSchema), z.lazy(() => FormationVoiceWhereInputSchema)])
      .optional(),
    presence: z.union([z.lazy(() => PresenceRelationFilterSchema), z.lazy(() => PresenceWhereInputSchema)]).optional()
  })
  .strict();

export const FormationVoicePresenceOrderByWithRelationInputSchema: z.ZodType<Prisma.FormationVoicePresenceOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationVoiceId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional(),
      formationVoice: z.lazy(() => FormationVoiceOrderByWithRelationInputSchema).optional(),
      presence: z.lazy(() => PresenceOrderByWithRelationInputSchema).optional()
    })
    .strict();

export const FormationVoicePresenceWhereUniqueInputSchema: z.ZodType<Prisma.FormationVoicePresenceWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional()
  })
  .strict();

export const FormationVoicePresenceOrderByWithAggregationInputSchema: z.ZodType<Prisma.FormationVoicePresenceOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationVoiceId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => FormationVoicePresenceCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => FormationVoicePresenceMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => FormationVoicePresenceMinOrderByAggregateInputSchema).optional()
    })
    .strict();

export const FormationVoicePresenceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FormationVoicePresenceScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FormationVoicePresenceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FormationVoicePresenceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => FormationVoicePresenceScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FormationVoicePresenceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FormationVoicePresenceScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      formationVoiceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      presenceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict();

export const FormationWhereInputSchema: z.ZodType<Prisma.FormationWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => FormationWhereInputSchema), z.lazy(() => FormationWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => FormationWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => FormationWhereInputSchema), z.lazy(() => FormationWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gigId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    gigCurrentFromId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    formationVoices: z.lazy(() => FormationVoiceListRelationFilterSchema).optional(),
    formationUndefinedVoicePresences: z.lazy(() => FormationUndefinedVoicePresenceListRelationFilterSchema).optional(),
    gig: z
      .union([z.lazy(() => GigRelationFilterSchema), z.lazy(() => GigWhereInputSchema)])
      .optional()
      .nullable(),
    gigCurrentFrom: z
      .union([z.lazy(() => GigRelationFilterSchema), z.lazy(() => GigWhereInputSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const FormationOrderByWithRelationInputSchema: z.ZodType<Prisma.FormationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    gigCurrentFromId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    formationVoices: z.lazy(() => FormationVoiceOrderByRelationAggregateInputSchema).optional(),
    formationUndefinedVoicePresences: z
      .lazy(() => FormationUndefinedVoicePresenceOrderByRelationAggregateInputSchema)
      .optional(),
    gig: z.lazy(() => GigOrderByWithRelationInputSchema).optional(),
    gigCurrentFrom: z.lazy(() => GigOrderByWithRelationInputSchema).optional()
  })
  .strict();

export const FormationWhereUniqueInputSchema: z.ZodType<Prisma.FormationWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigCurrentFromId: z.string().optional()
  })
  .strict();

export const FormationOrderByWithAggregationInputSchema: z.ZodType<Prisma.FormationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    gigCurrentFromId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    _count: z.lazy(() => FormationCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => FormationMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => FormationMinOrderByAggregateInputSchema).optional()
  })
  .strict();

export const FormationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FormationScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FormationScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FormationScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => FormationScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FormationScalarWhereWithAggregatesInputSchema),
          z.lazy(() => FormationScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      gigId: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      gigCurrentFromId: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable()
    })
    .strict();

export const OneTimePasswordCreateInputSchema: z.ZodType<Prisma.OneTimePasswordCreateInput> = z
  .object({
    password: z.string(),
    email: z.string(),
    expires: z.bigint()
  })
  .strict();

export const OneTimePasswordUncheckedCreateInputSchema: z.ZodType<Prisma.OneTimePasswordUncheckedCreateInput> = z
  .object({
    password: z.string(),
    email: z.string(),
    expires: z.bigint()
  })
  .strict();

export const OneTimePasswordUpdateInputSchema: z.ZodType<Prisma.OneTimePasswordUpdateInput> = z
  .object({
    password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const OneTimePasswordUncheckedUpdateInputSchema: z.ZodType<Prisma.OneTimePasswordUncheckedUpdateInput> = z
  .object({
    password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const OneTimePasswordCreateManyInputSchema: z.ZodType<Prisma.OneTimePasswordCreateManyInput> = z
  .object({
    password: z.string(),
    email: z.string(),
    expires: z.bigint()
  })
  .strict();

export const OneTimePasswordUpdateManyMutationInputSchema: z.ZodType<Prisma.OneTimePasswordUpdateManyMutationInput> = z
  .object({
    password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const OneTimePasswordUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OneTimePasswordUncheckedUpdateManyInput> =
  z
    .object({
      password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const TokenCreateInputSchema: z.ZodType<Prisma.TokenCreateInput> = z
  .object({
    id: z.string(),
    expires: z.bigint(),
    user: z.lazy(() => UserCreateNestedOneWithoutOtpInputSchema)
  })
  .strict();

export const TokenUncheckedCreateInputSchema: z.ZodType<Prisma.TokenUncheckedCreateInput> = z
  .object({
    id: z.string(),
    user_id: z.string(),
    expires: z.bigint()
  })
  .strict();

export const TokenUpdateInputSchema: z.ZodType<Prisma.TokenUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutOtpNestedInputSchema).optional()
  })
  .strict();

export const TokenUncheckedUpdateInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const TokenCreateManyInputSchema: z.ZodType<Prisma.TokenCreateManyInput> = z
  .object({
    id: z.string(),
    user_id: z.string(),
    expires: z.bigint()
  })
  .strict();

export const TokenUpdateManyMutationInputSchema: z.ZodType<Prisma.TokenUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const TokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const KeyCreateInputSchema: z.ZodType<Prisma.KeyCreateInput> = z
  .object({
    id: z.string(),
    hashed_password: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutKeyInputSchema)
  })
  .strict();

export const KeyUncheckedCreateInputSchema: z.ZodType<Prisma.KeyUncheckedCreateInput> = z
  .object({
    id: z.string(),
    hashed_password: z.string().optional().nullable(),
    user_id: z.string()
  })
  .strict();

export const KeyUpdateInputSchema: z.ZodType<Prisma.KeyUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    hashed_password: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutKeyNestedInputSchema).optional()
  })
  .strict();

export const KeyUncheckedUpdateInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    hashed_password: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const KeyCreateManyInputSchema: z.ZodType<Prisma.KeyCreateManyInput> = z
  .object({
    id: z.string(),
    hashed_password: z.string().optional().nullable(),
    user_id: z.string()
  })
  .strict();

export const KeyUpdateManyMutationInputSchema: z.ZodType<Prisma.KeyUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    hashed_password: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const KeyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    hashed_password: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string(),
    active_expires: z.bigint(),
    idle_expires: z.bigint(),
    user: z.lazy(() => UserCreateNestedOneWithoutAuth_sessionInputSchema)
  })
  .strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z
  .object({
    id: z.string(),
    user_id: z.string(),
    active_expires: z.bigint(),
    idle_expires: z.bigint()
  })
  .strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    active_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
    idle_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema).optional()
  })
  .strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    active_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
    idle_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z
  .object({
    id: z.string(),
    user_id: z.string(),
    active_expires: z.bigint(),
    idle_expires: z.bigint()
  })
  .strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    active_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
    idle_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    active_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
    idle_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
    key: z.lazy(() => KeyCreateNestedManyWithoutUserInputSchema).optional(),
    player: z.lazy(() => PlayerCreateNestedOneWithoutUserInputSchema).optional(),
    otp: z.lazy(() => TokenCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    key: z.lazy(() => KeyUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    player: z.lazy(() => PlayerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
    otp: z.lazy(() => TokenUncheckedCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    auth_session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
    key: z.lazy(() => KeyUpdateManyWithoutUserNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUpdateOneWithoutUserNestedInputSchema).optional(),
    otp: z.lazy(() => TokenUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    auth_session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    key: z.lazy(() => KeyUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
    otp: z.lazy(() => TokenUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional()
  })
  .strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const BandCreateInputSchema: z.ZodType<Prisma.BandCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutBandInputSchema).optional(),
    memberships: z.lazy(() => MembershipCreateNestedManyWithoutBandInputSchema).optional()
  })
  .strict();

export const BandUncheckedCreateInputSchema: z.ZodType<Prisma.BandUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutBandInputSchema).optional()
  })
  .strict();

export const BandUpdateInputSchema: z.ZodType<Prisma.BandUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutBandNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUpdateManyWithoutBandNestedInputSchema).optional()
  })
  .strict();

export const BandUncheckedUpdateInputSchema: z.ZodType<Prisma.BandUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
  })
  .strict();

export const BandCreateManyInputSchema: z.ZodType<Prisma.BandCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string()
  })
  .strict();

export const BandUpdateManyMutationInputSchema: z.ZodType<Prisma.BandUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const BandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BandUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const PlayerCreateInputSchema: z.ZodType<Prisma.PlayerCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutPlayerInputSchema),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
    roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
    memberships: z.lazy(() => MembershipCreateNestedManyWithoutPlayerInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedCreateInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    userId: z.string(),
    name: z.string(),
    presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
    roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
  })
  .strict();

export const PlayerUpdateInputSchema: z.ZodType<Prisma.PlayerUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutPlayerNestedInputSchema).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
    roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUpdateManyWithoutPlayerNestedInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedUpdateInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
    roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
  })
  .strict();

export const PlayerCreateManyInputSchema: z.ZodType<Prisma.PlayerCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    userId: z.string(),
    name: z.string()
  })
  .strict();

export const PlayerUpdateManyMutationInputSchema: z.ZodType<Prisma.PlayerUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const PlayerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const MembershipCreateInputSchema: z.ZodType<Prisma.MembershipCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    isAdmin: z.boolean().optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutMembershipsInputSchema),
    player: z.lazy(() => PlayerCreateNestedOneWithoutMembershipsInputSchema)
  })
  .strict();

export const MembershipUncheckedCreateInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    isAdmin: z.boolean().optional(),
    bandId: z.string(),
    playerId: z.string()
  })
  .strict();

export const MembershipUpdateInputSchema: z.ZodType<Prisma.MembershipUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    band: z.lazy(() => BandUpdateOneRequiredWithoutMembershipsNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUpdateOneRequiredWithoutMembershipsNestedInputSchema).optional()
  })
  .strict();

export const MembershipUncheckedUpdateInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    bandId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const MembershipCreateManyInputSchema: z.ZodType<Prisma.MembershipCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    isAdmin: z.boolean().optional(),
    bandId: z.string(),
    playerId: z.string()
  })
  .strict();

export const MembershipUpdateManyMutationInputSchema: z.ZodType<Prisma.MembershipUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const MembershipUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    bandId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const GigCreateInputSchema: z.ZodType<Prisma.GigCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    formations: z.lazy(() => FormationCreateNestedManyWithoutGigInputSchema).optional(),
    currentFormation: z.lazy(() => FormationCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
  })
  .strict();

export const GigUncheckedCreateInputSchema: z.ZodType<Prisma.GigUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    bandId: z.string().optional().nullable(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
    formations: z.lazy(() => FormationUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUncheckedCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
  })
  .strict();

export const GigUpdateInputSchema: z.ZodType<Prisma.GigUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
    band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    formations: z.lazy(() => FormationUpdateManyWithoutGigNestedInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
  })
  .strict();

export const GigUncheckedUpdateInputSchema: z.ZodType<Prisma.GigUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
    formations: z.lazy(() => FormationUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUncheckedUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
  })
  .strict();

export const GigCreateManyInputSchema: z.ZodType<Prisma.GigCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    bandId: z.string().optional().nullable(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional()
  })
  .strict();

export const GigUpdateManyMutationInputSchema: z.ZodType<Prisma.GigUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const GigUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GigUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const PresenceCreateInputSchema: z.ZodType<Prisma.PresenceCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    gig: z.lazy(() => GigCreateNestedOneWithoutPresencesInputSchema),
    player: z.lazy(() => PlayerCreateNestedOneWithoutPresencesInputSchema),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceCreateNestedManyWithoutPresenceInputSchema).optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceCreateNestedManyWithoutPresenceInputSchema)
      .optional()
  })
  .strict();

export const PresenceUncheckedCreateInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    gigId: z.string(),
    playerId: z.string(),
    formationVoicePresences: z
      .lazy(() => FormationVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema)
      .optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema)
      .optional()
  })
  .strict();

export const PresenceUpdateInputSchema: z.ZodType<Prisma.PresenceUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    gig: z.lazy(() => GigUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceUpdateManyWithoutPresenceNestedInputSchema).optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceUpdateManyWithoutPresenceNestedInputSchema)
      .optional()
  })
  .strict();

export const PresenceUncheckedUpdateInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formationVoicePresences: z
      .lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema)
      .optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema)
      .optional()
  })
  .strict();

export const PresenceCreateManyInputSchema: z.ZodType<Prisma.PresenceCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    gigId: z.string(),
    playerId: z.string()
  })
  .strict();

export const PresenceUpdateManyMutationInputSchema: z.ZodType<Prisma.PresenceUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const PresenceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    playable: z.boolean().optional(),
    instrument: z.lazy(() => InstrumentCreateNestedOneWithoutRolesInputSchema),
    player: z.lazy(() => PlayerCreateNestedOneWithoutRolesInputSchema)
  })
  .strict();

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    playable: z.boolean().optional(),
    instrumentId: z.string(),
    playerId: z.string()
  })
  .strict();

export const RoleUpdateInputSchema: z.ZodType<Prisma.RoleUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutRolesNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
  })
  .strict();

export const RoleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const RoleCreateManyInputSchema: z.ZodType<Prisma.RoleCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    playable: z.boolean().optional(),
    instrumentId: z.string(),
    playerId: z.string()
  })
  .strict();

export const RoleUpdateManyMutationInputSchema: z.ZodType<Prisma.RoleUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const RoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const InstrumentCreateInputSchema: z.ZodType<Prisma.InstrumentCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    roles: z.lazy(() => RoleCreateNestedManyWithoutInstrumentInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
  })
  .strict();

export const InstrumentUncheckedCreateInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
  })
  .strict();

export const InstrumentUpdateInputSchema: z.ZodType<Prisma.InstrumentUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
  })
  .strict();

export const InstrumentUncheckedUpdateInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
  })
  .strict();

export const InstrumentCreateManyInputSchema: z.ZodType<Prisma.InstrumentCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string()
  })
  .strict();

export const InstrumentUpdateManyMutationInputSchema: z.ZodType<Prisma.InstrumentUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const InstrumentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const GigVoiceCreateInputSchema: z.ZodType<Prisma.GigVoiceCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrument: z.lazy(() => InstrumentCreateNestedOneWithoutGigVoicesInputSchema),
    gig: z.lazy(() => GigCreateNestedOneWithoutGigVoicesInputSchema)
  })
  .strict();

export const GigVoiceUncheckedCreateInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId: z.string(),
    gigId: z.string()
  })
  .strict();

export const GigVoiceUpdateInputSchema: z.ZodType<Prisma.GigVoiceUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutGigVoicesNestedInputSchema).optional(),
    gig: z.lazy(() => GigUpdateOneRequiredWithoutGigVoicesNestedInputSchema).optional()
  })
  .strict();

export const GigVoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const GigVoiceCreateManyInputSchema: z.ZodType<Prisma.GigVoiceCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId: z.string(),
    gigId: z.string()
  })
  .strict();

export const GigVoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const GigVoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const BandVoiceCreateInputSchema: z.ZodType<Prisma.BandVoiceCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrument: z.lazy(() => InstrumentCreateNestedOneWithoutBandVoicesInputSchema),
    band: z.lazy(() => BandCreateNestedOneWithoutBandVoicesInputSchema),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutBandVoiceInputSchema).optional()
  })
  .strict();

export const BandVoiceUncheckedCreateInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId: z.string(),
    bandId: z.string(),
    disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInputSchema).optional()
  })
  .strict();

export const BandVoiceUpdateInputSchema: z.ZodType<Prisma.BandVoiceUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
    band: z.lazy(() => BandUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutBandVoiceNestedInputSchema).optional()
  })
  .strict();

export const BandVoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInputSchema).optional()
  })
  .strict();

export const BandVoiceCreateManyInputSchema: z.ZodType<Prisma.BandVoiceCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId: z.string(),
    bandId: z.string()
  })
  .strict();

export const BandVoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const BandVoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const DisabledVoiceCreateInputSchema: z.ZodType<Prisma.DisabledVoiceCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    gig: z.lazy(() => GigCreateNestedOneWithoutDisabledVoicesInputSchema),
    bandVoice: z.lazy(() => BandVoiceCreateNestedOneWithoutDisabledVoicesInputSchema)
  })
  .strict();

export const DisabledVoiceUncheckedCreateInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigId: z.string(),
    bandVoiceId: z.string()
  })
  .strict();

export const DisabledVoiceUpdateInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gig: z.lazy(() => GigUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema).optional(),
    bandVoice: z.lazy(() => BandVoiceUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema).optional()
  })
  .strict();

export const DisabledVoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandVoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const DisabledVoiceCreateManyInputSchema: z.ZodType<Prisma.DisabledVoiceCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigId: z.string(),
    bandVoiceId: z.string()
  })
  .strict();

export const DisabledVoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const DisabledVoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandVoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const FormationVoiceCreateInputSchema: z.ZodType<Prisma.FormationVoiceCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    formation: z.lazy(() => FormationCreateNestedOneWithoutFormationVoicesInputSchema),
    instrument: z.lazy(() => InstrumentCreateNestedOneWithoutFormationVoicesInputSchema),
    formationVoicePresences: z
      .lazy(() => FormationVoicePresenceCreateNestedManyWithoutFormationVoiceInputSchema)
      .optional()
  })
  .strict();

export const FormationVoiceUncheckedCreateInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    formationId: z.string(),
    instrumentId: z.string(),
    formationVoicePresences: z
      .lazy(() => FormationVoicePresenceUncheckedCreateNestedManyWithoutFormationVoiceInputSchema)
      .optional()
  })
  .strict();

export const FormationVoiceUpdateInputSchema: z.ZodType<Prisma.FormationVoiceUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formation: z.lazy(() => FormationUpdateOneRequiredWithoutFormationVoicesNestedInputSchema).optional(),
    instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutFormationVoicesNestedInputSchema).optional(),
    formationVoicePresences: z
      .lazy(() => FormationVoicePresenceUpdateManyWithoutFormationVoiceNestedInputSchema)
      .optional()
  })
  .strict();

export const FormationVoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formationVoicePresences: z
      .lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoiceNestedInputSchema)
      .optional()
  })
  .strict();

export const FormationVoiceCreateManyInputSchema: z.ZodType<Prisma.FormationVoiceCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    formationId: z.string(),
    instrumentId: z.string()
  })
  .strict();

export const FormationVoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.FormationVoiceUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const FormationVoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const FormationUndefinedVoicePresenceCreateInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formation: z.lazy(() => FormationCreateNestedOneWithoutFormationUndefinedVoicePresencesInputSchema),
      presence: z.lazy(() => PresenceCreateNestedOneWithoutFormationUndefinedVoicePresenceInputSchema)
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedCreateInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationId: z.string(),
      presenceId: z.string()
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formation: z
        .lazy(() => FormationUpdateOneRequiredWithoutFormationUndefinedVoicePresencesNestedInputSchema)
        .optional(),
      presence: z
        .lazy(() => PresenceUpdateOneRequiredWithoutFormationUndefinedVoicePresenceNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedUpdateInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedUpdateInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presenceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateManyInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationId: z.string(),
      presenceId: z.string()
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateManyMutationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateManyMutationInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedUpdateManyInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presenceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationVoicePresenceCreateInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    formationVoice: z.lazy(() => FormationVoiceCreateNestedOneWithoutFormationVoicePresencesInputSchema),
    presence: z.lazy(() => PresenceCreateNestedOneWithoutFormationVoicePresencesInputSchema)
  })
  .strict();

export const FormationVoicePresenceUncheckedCreateInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationVoiceId: z.string(),
      presenceId: z.string()
    })
    .strict();

export const FormationVoicePresenceUpdateInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formationVoice: z
      .lazy(() => FormationVoiceUpdateOneRequiredWithoutFormationVoicePresencesNestedInputSchema)
      .optional(),
    presence: z.lazy(() => PresenceUpdateOneRequiredWithoutFormationVoicePresencesNestedInputSchema).optional()
  })
  .strict();

export const FormationVoicePresenceUncheckedUpdateInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedUpdateInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presenceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationVoicePresenceCreateManyInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    formationVoiceId: z.string(),
    presenceId: z.string()
  })
  .strict();

export const FormationVoicePresenceUpdateManyMutationInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateManyMutationInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationVoicePresenceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedUpdateManyInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presenceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationCreateInputSchema: z.ZodType<Prisma.FormationCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    formationVoices: z.lazy(() => FormationVoiceCreateNestedManyWithoutFormationInputSchema).optional(),
    formationUndefinedVoicePresences: z
      .lazy(() => FormationUndefinedVoicePresenceCreateNestedManyWithoutFormationInputSchema)
      .optional(),
    gig: z.lazy(() => GigCreateNestedOneWithoutFormationsInputSchema).optional(),
    gigCurrentFrom: z.lazy(() => GigCreateNestedOneWithoutCurrentFormationInputSchema).optional()
  })
  .strict();

export const FormationUncheckedCreateInputSchema: z.ZodType<Prisma.FormationUncheckedCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigId: z.string().optional().nullable(),
    gigCurrentFromId: z.string().optional().nullable(),
    formationVoices: z.lazy(() => FormationVoiceUncheckedCreateNestedManyWithoutFormationInputSchema).optional(),
    formationUndefinedVoicePresences: z
      .lazy(() => FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutFormationInputSchema)
      .optional()
  })
  .strict();

export const FormationUpdateInputSchema: z.ZodType<Prisma.FormationUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formationVoices: z.lazy(() => FormationVoiceUpdateManyWithoutFormationNestedInputSchema).optional(),
    formationUndefinedVoicePresences: z
      .lazy(() => FormationUndefinedVoicePresenceUpdateManyWithoutFormationNestedInputSchema)
      .optional(),
    gig: z.lazy(() => GigUpdateOneWithoutFormationsNestedInputSchema).optional(),
    gigCurrentFrom: z.lazy(() => GigUpdateOneWithoutCurrentFormationNestedInputSchema).optional()
  })
  .strict();

export const FormationUncheckedUpdateInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    gigCurrentFromId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    formationVoices: z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutFormationNestedInputSchema).optional(),
    formationUndefinedVoicePresences: z
      .lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationNestedInputSchema)
      .optional()
  })
  .strict();

export const FormationCreateManyInputSchema: z.ZodType<Prisma.FormationCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigId: z.string().optional().nullable(),
    gigCurrentFromId: z.string().optional().nullable()
  })
  .strict();

export const FormationUpdateManyMutationInputSchema: z.ZodType<Prisma.FormationUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const FormationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    gigCurrentFromId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional()
  })
  .strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z
  .object({
    equals: z.bigint().optional(),
    in: z.union([z.bigint().array(), z.bigint()]).optional(),
    notIn: z.union([z.bigint().array(), z.bigint()]).optional(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z.union([z.bigint(), z.lazy(() => NestedBigIntFilterSchema)]).optional()
  })
  .strict();

export const OneTimePasswordPasswordEmailCompoundUniqueInputSchema: z.ZodType<Prisma.OneTimePasswordPasswordEmailCompoundUniqueInput> =
  z
    .object({
      password: z.string(),
      email: z.string()
    })
    .strict();

export const OneTimePasswordCountOrderByAggregateInputSchema: z.ZodType<Prisma.OneTimePasswordCountOrderByAggregateInput> =
  z
    .object({
      password: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const OneTimePasswordAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OneTimePasswordAvgOrderByAggregateInput> =
  z
    .object({
      expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const OneTimePasswordMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OneTimePasswordMaxOrderByAggregateInput> =
  z
    .object({
      password: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const OneTimePasswordMinOrderByAggregateInputSchema: z.ZodType<Prisma.OneTimePasswordMinOrderByAggregateInput> =
  z
    .object({
      password: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const OneTimePasswordSumOrderByAggregateInputSchema: z.ZodType<Prisma.OneTimePasswordSumOrderByAggregateInput> =
  z
    .object({
      expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
  })
  .strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z
  .object({
    equals: z.bigint().optional(),
    in: z.union([z.bigint().array(), z.bigint()]).optional(),
    notIn: z.union([z.bigint().array(), z.bigint()]).optional(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z.union([z.bigint(), z.lazy(() => NestedBigIntWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
    _max: z.lazy(() => NestedBigIntFilterSchema).optional()
  })
  .strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z
  .object({
    is: z
      .lazy(() => UserWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UserWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const TokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.TokenCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const TokenAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TokenAvgOrderByAggregateInput> = z
  .object({
    expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const TokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TokenMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const TokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.TokenMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const TokenSumOrderByAggregateInputSchema: z.ZodType<Prisma.TokenSumOrderByAggregateInput> = z
  .object({
    expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.union([z.string().array(), z.string()]).optional().nullable(),
    notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z
  .object({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional()
  })
  .strict();

export const KeyCountOrderByAggregateInputSchema: z.ZodType<Prisma.KeyCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    hashed_password: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const KeyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.KeyMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    hashed_password: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const KeyMinOrderByAggregateInputSchema: z.ZodType<Prisma.KeyMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    hashed_password: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.union([z.string().array(), z.string()]).optional().nullable(),
    notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
  })
  .strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    active_expires: z.lazy(() => SortOrderSchema).optional(),
    idle_expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const SessionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SessionAvgOrderByAggregateInput> = z
  .object({
    active_expires: z.lazy(() => SortOrderSchema).optional(),
    idle_expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    active_expires: z.lazy(() => SortOrderSchema).optional(),
    idle_expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    active_expires: z.lazy(() => SortOrderSchema).optional(),
    idle_expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const SessionSumOrderByAggregateInputSchema: z.ZodType<Prisma.SessionSumOrderByAggregateInput> = z
  .object({
    active_expires: z.lazy(() => SortOrderSchema).optional(),
    idle_expires: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional()
  })
  .strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z
  .object({
    every: z.lazy(() => SessionWhereInputSchema).optional(),
    some: z.lazy(() => SessionWhereInputSchema).optional(),
    none: z.lazy(() => SessionWhereInputSchema).optional()
  })
  .strict();

export const KeyListRelationFilterSchema: z.ZodType<Prisma.KeyListRelationFilter> = z
  .object({
    every: z.lazy(() => KeyWhereInputSchema).optional(),
    some: z.lazy(() => KeyWhereInputSchema).optional(),
    none: z.lazy(() => KeyWhereInputSchema).optional()
  })
  .strict();

export const PlayerRelationFilterSchema: z.ZodType<Prisma.PlayerRelationFilter> = z
  .object({
    is: z
      .lazy(() => PlayerWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PlayerWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const TokenRelationFilterSchema: z.ZodType<Prisma.TokenRelationFilter> = z
  .object({
    is: z
      .lazy(() => TokenWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TokenWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const KeyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.KeyOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    email_verified: z.lazy(() => SortOrderSchema).optional(),
    has_password: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    email_verified: z.lazy(() => SortOrderSchema).optional(),
    has_password: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    email_verified: z.lazy(() => SortOrderSchema).optional(),
    has_password: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterSchema).optional()
  })
  .strict();

export const GigListRelationFilterSchema: z.ZodType<Prisma.GigListRelationFilter> = z
  .object({
    every: z.lazy(() => GigWhereInputSchema).optional(),
    some: z.lazy(() => GigWhereInputSchema).optional(),
    none: z.lazy(() => GigWhereInputSchema).optional()
  })
  .strict();

export const BandVoiceListRelationFilterSchema: z.ZodType<Prisma.BandVoiceListRelationFilter> = z
  .object({
    every: z.lazy(() => BandVoiceWhereInputSchema).optional(),
    some: z.lazy(() => BandVoiceWhereInputSchema).optional(),
    none: z.lazy(() => BandVoiceWhereInputSchema).optional()
  })
  .strict();

export const MembershipListRelationFilterSchema: z.ZodType<Prisma.MembershipListRelationFilter> = z
  .object({
    every: z.lazy(() => MembershipWhereInputSchema).optional(),
    some: z.lazy(() => MembershipWhereInputSchema).optional(),
    none: z.lazy(() => MembershipWhereInputSchema).optional()
  })
  .strict();

export const GigOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GigOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BandVoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BandVoiceOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const MembershipOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MembershipOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const BandCountOrderByAggregateInputSchema: z.ZodType<Prisma.BandCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BandMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BandMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BandMinOrderByAggregateInputSchema: z.ZodType<Prisma.BandMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const PresenceListRelationFilterSchema: z.ZodType<Prisma.PresenceListRelationFilter> = z
  .object({
    every: z.lazy(() => PresenceWhereInputSchema).optional(),
    some: z.lazy(() => PresenceWhereInputSchema).optional(),
    none: z.lazy(() => PresenceWhereInputSchema).optional()
  })
  .strict();

export const RoleListRelationFilterSchema: z.ZodType<Prisma.RoleListRelationFilter> = z
  .object({
    every: z.lazy(() => RoleWhereInputSchema).optional(),
    some: z.lazy(() => RoleWhereInputSchema).optional(),
    none: z.lazy(() => RoleWhereInputSchema).optional()
  })
  .strict();

export const PresenceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PresenceOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const RoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoleOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const PlayerCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const PlayerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const PlayerMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BandRelationFilterSchema: z.ZodType<Prisma.BandRelationFilter> = z
  .object({
    is: z
      .lazy(() => BandWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BandWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const MembershipBandIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.MembershipBandIdPlayerIdCompoundUniqueInput> =
  z
    .object({
      bandId: z.string(),
      playerId: z.string()
    })
    .strict();

export const MembershipCountOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    isAdmin: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const MembershipMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    isAdmin: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const MembershipMinOrderByAggregateInputSchema: z.ZodType<Prisma.MembershipMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    isAdmin: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional()
  })
  .strict();

export const GigVoiceListRelationFilterSchema: z.ZodType<Prisma.GigVoiceListRelationFilter> = z
  .object({
    every: z.lazy(() => GigVoiceWhereInputSchema).optional(),
    some: z.lazy(() => GigVoiceWhereInputSchema).optional(),
    none: z.lazy(() => GigVoiceWhereInputSchema).optional()
  })
  .strict();

export const DisabledVoiceListRelationFilterSchema: z.ZodType<Prisma.DisabledVoiceListRelationFilter> = z
  .object({
    every: z.lazy(() => DisabledVoiceWhereInputSchema).optional(),
    some: z.lazy(() => DisabledVoiceWhereInputSchema).optional(),
    none: z.lazy(() => DisabledVoiceWhereInputSchema).optional()
  })
  .strict();

export const FormationListRelationFilterSchema: z.ZodType<Prisma.FormationListRelationFilter> = z
  .object({
    every: z.lazy(() => FormationWhereInputSchema).optional(),
    some: z.lazy(() => FormationWhereInputSchema).optional(),
    none: z.lazy(() => FormationWhereInputSchema).optional()
  })
  .strict();

export const FormationRelationFilterSchema: z.ZodType<Prisma.FormationRelationFilter> = z
  .object({
    is: z
      .lazy(() => FormationWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FormationWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const GigVoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GigVoiceOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const DisabledVoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FormationOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const GigCountOrderByAggregateInputSchema: z.ZodType<Prisma.GigCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    playable: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const GigMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GigMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    playable: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const GigMinOrderByAggregateInputSchema: z.ZodType<Prisma.GigMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    playable: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
  })
  .strict();

export const GigRelationFilterSchema: z.ZodType<Prisma.GigRelationFilter> = z
  .object({
    is: z
      .lazy(() => GigWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => GigWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const FormationVoicePresenceListRelationFilterSchema: z.ZodType<Prisma.FormationVoicePresenceListRelationFilter> =
  z
    .object({
      every: z.lazy(() => FormationVoicePresenceWhereInputSchema).optional(),
      some: z.lazy(() => FormationVoicePresenceWhereInputSchema).optional(),
      none: z.lazy(() => FormationVoicePresenceWhereInputSchema).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceListRelationFilterSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceListRelationFilter> =
  z
    .object({
      every: z.lazy(() => FormationUndefinedVoicePresenceWhereInputSchema).optional(),
      some: z.lazy(() => FormationUndefinedVoicePresenceWhereInputSchema).optional(),
      none: z.lazy(() => FormationUndefinedVoicePresenceWhereInputSchema).optional()
    })
    .strict();

export const FormationVoicePresenceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FormationVoicePresenceOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const PresenceGigIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.PresenceGigIdPlayerIdCompoundUniqueInput> =
  z
    .object({
      gigId: z.string(),
      playerId: z.string()
    })
    .strict();

export const PresenceCountOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    isOrganizer: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const PresenceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    isOrganizer: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const PresenceMinOrderByAggregateInputSchema: z.ZodType<Prisma.PresenceMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    isOrganizer: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const InstrumentRelationFilterSchema: z.ZodType<Prisma.InstrumentRelationFilter> = z
  .object({
    is: z
      .lazy(() => InstrumentWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => InstrumentWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const RoleInstrumentIdPlayerIdCompoundUniqueInputSchema: z.ZodType<Prisma.RoleInstrumentIdPlayerIdCompoundUniqueInput> =
  z
    .object({
      instrumentId: z.string(),
      playerId: z.string()
    })
    .strict();

export const RoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    playable: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const RoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    playable: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const RoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    playable: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    playerId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const FormationVoiceListRelationFilterSchema: z.ZodType<Prisma.FormationVoiceListRelationFilter> = z
  .object({
    every: z.lazy(() => FormationVoiceWhereInputSchema).optional(),
    some: z.lazy(() => FormationVoiceWhereInputSchema).optional(),
    none: z.lazy(() => FormationVoiceWhereInputSchema).optional()
  })
  .strict();

export const FormationVoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FormationVoiceOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const InstrumentCountOrderByAggregateInputSchema: z.ZodType<Prisma.InstrumentCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const InstrumentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InstrumentMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const InstrumentMinOrderByAggregateInputSchema: z.ZodType<Prisma.InstrumentMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const GigVoiceIdGigIdCompoundUniqueInputSchema: z.ZodType<Prisma.GigVoiceIdGigIdCompoundUniqueInput> = z
  .object({
    id: z.string(),
    gigId: z.string()
  })
  .strict();

export const GigVoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.GigVoiceCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const GigVoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GigVoiceMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const GigVoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.GigVoiceMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BandVoiceIdBandIdCompoundUniqueInputSchema: z.ZodType<Prisma.BandVoiceIdBandIdCompoundUniqueInput> = z
  .object({
    id: z.string(),
    bandId: z.string()
  })
  .strict();

export const BandVoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.BandVoiceCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BandVoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BandVoiceMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BandVoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.BandVoiceMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const BandVoiceRelationFilterSchema: z.ZodType<Prisma.BandVoiceRelationFilter> = z
  .object({
    is: z
      .lazy(() => BandVoiceWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BandVoiceWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const DisabledVoiceGigIdBandVoiceIdCompoundUniqueInputSchema: z.ZodType<Prisma.DisabledVoiceGigIdBandVoiceIdCompoundUniqueInput> =
  z
    .object({
      gigId: z.string(),
      bandVoiceId: z.string()
    })
    .strict();

export const DisabledVoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      gigId: z.lazy(() => SortOrderSchema).optional(),
      bandVoiceId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const DisabledVoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    bandVoiceId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const DisabledVoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.DisabledVoiceMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    bandVoiceId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const FormationVoiceFormationIdInstrumentIdCompoundUniqueInputSchema: z.ZodType<Prisma.FormationVoiceFormationIdInstrumentIdCompoundUniqueInput> =
  z
    .object({
      formationId: z.string(),
      instrumentId: z.string()
    })
    .strict();

export const FormationVoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.FormationVoiceCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationId: z.lazy(() => SortOrderSchema).optional(),
      instrumentId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationVoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FormationVoiceMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    formationId: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const FormationVoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.FormationVoiceMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    formationId: z.lazy(() => SortOrderSchema).optional(),
    instrumentId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const PresenceRelationFilterSchema: z.ZodType<Prisma.PresenceRelationFilter> = z
  .object({
    is: z
      .lazy(() => PresenceWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PresenceWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const FormationUndefinedVoicePresenceCountOrderByAggregateInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceMinOrderByAggregateInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationVoiceRelationFilterSchema: z.ZodType<Prisma.FormationVoiceRelationFilter> = z
  .object({
    is: z
      .lazy(() => FormationVoiceWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FormationVoiceWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export const FormationVoicePresenceCountOrderByAggregateInputSchema: z.ZodType<Prisma.FormationVoicePresenceCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationVoiceId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationVoicePresenceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FormationVoicePresenceMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationVoiceId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationVoicePresenceMinOrderByAggregateInputSchema: z.ZodType<Prisma.FormationVoicePresenceMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      formationVoiceId: z.lazy(() => SortOrderSchema).optional(),
      presenceId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export const FormationCountOrderByAggregateInputSchema: z.ZodType<Prisma.FormationCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    gigCurrentFromId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const FormationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FormationMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    gigCurrentFromId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const FormationMinOrderByAggregateInputSchema: z.ZodType<Prisma.FormationMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gigId: z.lazy(() => SortOrderSchema).optional(),
    gigCurrentFromId: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z
  .object({
    set: z.string().optional()
  })
  .strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z
  .object({
    set: z.bigint().optional(),
    increment: z.bigint().optional(),
    decrement: z.bigint().optional(),
    multiply: z.bigint().optional(),
    divide: z.bigint().optional()
  })
  .strict();

export const UserCreateNestedOneWithoutOtpInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOtpInput> = z
  .object({
    create: z
      .union([z.lazy(() => UserCreateWithoutOtpInputSchema), z.lazy(() => UserUncheckedCreateWithoutOtpInputSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOtpInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
  })
  .strict();

export const UserUpdateOneRequiredWithoutOtpNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOtpNestedInput> =
  z
    .object({
      create: z
        .union([z.lazy(() => UserCreateWithoutOtpInputSchema), z.lazy(() => UserUncheckedCreateWithoutOtpInputSchema)])
        .optional(),
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOtpInputSchema).optional(),
      upsert: z.lazy(() => UserUpsertWithoutOtpInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([z.lazy(() => UserUpdateWithoutOtpInputSchema), z.lazy(() => UserUncheckedUpdateWithoutOtpInputSchema)])
        .optional()
    })
    .strict();

export const UserCreateNestedOneWithoutKeyInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutKeyInput> = z
  .object({
    create: z
      .union([z.lazy(() => UserCreateWithoutKeyInputSchema), z.lazy(() => UserUncheckedCreateWithoutKeyInputSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutKeyInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
  })
  .strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable()
    })
    .strict();

export const UserUpdateOneRequiredWithoutKeyNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutKeyNestedInput> =
  z
    .object({
      create: z
        .union([z.lazy(() => UserCreateWithoutKeyInputSchema), z.lazy(() => UserUncheckedCreateWithoutKeyInputSchema)])
        .optional(),
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutKeyInputSchema).optional(),
      upsert: z.lazy(() => UserUpsertWithoutKeyInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([z.lazy(() => UserUpdateWithoutKeyInputSchema), z.lazy(() => UserUncheckedUpdateWithoutKeyInputSchema)])
        .optional()
    })
    .strict();

export const UserCreateNestedOneWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuth_sessionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAuth_sessionInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutAuth_sessionInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuth_sessionInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
    })
    .strict();

export const UserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAuth_sessionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAuth_sessionInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutAuth_sessionInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuth_sessionInputSchema).optional(),
      upsert: z.lazy(() => UserUpsertWithoutAuth_sessionInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAuth_sessionInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAuth_sessionInputSchema)
        ])
        .optional()
    })
    .strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const KeyCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.KeyCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => KeyCreateWithoutUserInputSchema),
        z.lazy(() => KeyCreateWithoutUserInputSchema).array(),
        z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema).array()
      ])
      .optional(),
    createMany: z.lazy(() => KeyCreateManyUserInputEnvelopeSchema).optional(),
    connect: z
      .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
      .optional()
  })
  .strict();

export const PlayerCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PlayerCreateWithoutUserInputSchema),
        z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutUserInputSchema).optional(),
    connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
  })
  .strict();

export const TokenCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.TokenCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TokenCreateWithoutUserInputSchema),
        z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).optional(),
    connect: z.lazy(() => TokenWhereUniqueInputSchema).optional()
  })
  .strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const KeyUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.KeyUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => KeyCreateWithoutUserInputSchema),
          z.lazy(() => KeyCreateWithoutUserInputSchema).array(),
          z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => KeyCreateManyUserInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const PlayerUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateNestedOneWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlayerCreateWithoutUserInputSchema),
          z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutUserInputSchema).optional(),
      connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
    })
    .strict();

export const TokenUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedCreateNestedOneWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TokenCreateWithoutUserInputSchema),
          z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).optional(),
      connect: z.lazy(() => TokenWhereUniqueInputSchema).optional()
    })
    .strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z
  .object({
    set: z.boolean().optional()
  })
  .strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const KeyUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.KeyUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => KeyCreateWithoutUserInputSchema),
        z.lazy(() => KeyCreateWithoutUserInputSchema).array(),
        z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema),
        z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema),
        z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema).array()
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => KeyUpsertWithWhereUniqueWithoutUserInputSchema),
        z.lazy(() => KeyUpsertWithWhereUniqueWithoutUserInputSchema).array()
      ])
      .optional(),
    createMany: z.lazy(() => KeyCreateManyUserInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()]).optional(),
    disconnect: z
      .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => KeyUpdateWithWhereUniqueWithoutUserInputSchema),
        z.lazy(() => KeyUpdateWithWhereUniqueWithoutUserInputSchema).array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => KeyUpdateManyWithWhereWithoutUserInputSchema),
        z.lazy(() => KeyUpdateManyWithWhereWithoutUserInputSchema).array()
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => KeyScalarWhereInputSchema), z.lazy(() => KeyScalarWhereInputSchema).array()])
      .optional()
  })
  .strict();

export const PlayerUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PlayerCreateWithoutUserInputSchema),
        z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutUserInputSchema).optional(),
    upsert: z.lazy(() => PlayerUpsertWithoutUserInputSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => PlayerUpdateWithoutUserInputSchema),
        z.lazy(() => PlayerUncheckedUpdateWithoutUserInputSchema)
      ])
      .optional()
  })
  .strict();

export const TokenUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.TokenUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TokenCreateWithoutUserInputSchema),
        z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).optional(),
    upsert: z.lazy(() => TokenUpsertWithoutUserInputSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => TokenWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => TokenUpdateWithoutUserInputSchema),
        z.lazy(() => TokenUncheckedUpdateWithoutUserInputSchema)
      ])
      .optional()
  })
  .strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const KeyUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => KeyCreateWithoutUserInputSchema),
          z.lazy(() => KeyCreateWithoutUserInputSchema).array(),
          z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => KeyCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => KeyUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => KeyUpsertWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => KeyCreateManyUserInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => KeyWhereUniqueInputSchema), z.lazy(() => KeyWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => KeyUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => KeyUpdateWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => KeyUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => KeyUpdateManyWithWhereWithoutUserInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => KeyScalarWhereInputSchema), z.lazy(() => KeyScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const PlayerUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateOneWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlayerCreateWithoutUserInputSchema),
          z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutUserInputSchema).optional(),
      upsert: z.lazy(() => PlayerUpsertWithoutUserInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PlayerUpdateWithoutUserInputSchema),
          z.lazy(() => PlayerUncheckedUpdateWithoutUserInputSchema)
        ])
        .optional()
    })
    .strict();

export const TokenUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateOneWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TokenCreateWithoutUserInputSchema),
          z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).optional(),
      upsert: z.lazy(() => TokenUpsertWithoutUserInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => TokenWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => TokenUpdateWithoutUserInputSchema),
          z.lazy(() => TokenUncheckedUpdateWithoutUserInputSchema)
        ])
        .optional()
    })
    .strict();

export const GigCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.GigCreateNestedManyWithoutBandInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GigCreateWithoutBandInputSchema),
        z.lazy(() => GigCreateWithoutBandInputSchema).array(),
        z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),
        z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),
        z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array()
      ])
      .optional(),
    createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
    connect: z
      .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
      .optional()
  })
  .strict();

export const BandVoiceCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceCreateNestedManyWithoutBandInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutBandInputSchema),
          z.lazy(() => BandVoiceCreateWithoutBandInputSchema).array(),
          z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => BandVoiceCreateManyBandInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const MembershipCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.MembershipCreateNestedManyWithoutBandInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MembershipCreateWithoutBandInputSchema),
          z.lazy(() => MembershipCreateWithoutBandInputSchema).array(),
          z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => MembershipCreateManyBandInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const GigUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedCreateNestedManyWithoutBandInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutBandInputSchema),
          z.lazy(() => GigCreateWithoutBandInputSchema).array(),
          z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const BandVoiceUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateNestedManyWithoutBandInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutBandInputSchema),
          z.lazy(() => BandVoiceCreateWithoutBandInputSchema).array(),
          z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => BandVoiceCreateManyBandInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const MembershipUncheckedCreateNestedManyWithoutBandInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateNestedManyWithoutBandInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MembershipCreateWithoutBandInputSchema),
          z.lazy(() => MembershipCreateWithoutBandInputSchema).array(),
          z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => MembershipCreateManyBandInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const GigUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.GigUpdateManyWithoutBandNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GigCreateWithoutBandInputSchema),
        z.lazy(() => GigCreateWithoutBandInputSchema).array(),
        z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),
        z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),
        z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array()
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => GigUpsertWithWhereUniqueWithoutBandInputSchema),
        z.lazy(() => GigUpsertWithWhereUniqueWithoutBandInputSchema).array()
      ])
      .optional(),
    createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()]).optional(),
    disconnect: z
      .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => GigUpdateWithWhereUniqueWithoutBandInputSchema),
        z.lazy(() => GigUpdateWithWhereUniqueWithoutBandInputSchema).array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => GigUpdateManyWithWhereWithoutBandInputSchema),
        z.lazy(() => GigUpdateManyWithWhereWithoutBandInputSchema).array()
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => GigScalarWhereInputSchema), z.lazy(() => GigScalarWhereInputSchema).array()])
      .optional()
  })
  .strict();

export const BandVoiceUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyWithoutBandNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutBandInputSchema),
          z.lazy(() => BandVoiceCreateWithoutBandInputSchema).array(),
          z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => BandVoiceCreateManyBandInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => BandVoiceUpdateManyWithWhereWithoutBandInputSchema),
          z.lazy(() => BandVoiceUpdateManyWithWhereWithoutBandInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => BandVoiceScalarWhereInputSchema), z.lazy(() => BandVoiceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const MembershipUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithoutBandNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MembershipCreateWithoutBandInputSchema),
          z.lazy(() => MembershipCreateWithoutBandInputSchema).array(),
          z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => MembershipUpsertWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => MembershipUpsertWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => MembershipCreateManyBandInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => MembershipUpdateWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => MembershipUpdateWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MembershipUpdateManyWithWhereWithoutBandInputSchema),
          z.lazy(() => MembershipUpdateManyWithWhereWithoutBandInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const GigUncheckedUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.GigUncheckedUpdateManyWithoutBandNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutBandInputSchema),
          z.lazy(() => GigCreateWithoutBandInputSchema).array(),
          z.lazy(() => GigUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => GigCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => GigUpsertWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => GigUpsertWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigCreateManyBandInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => GigWhereUniqueInputSchema), z.lazy(() => GigWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => GigUpdateWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => GigUpdateWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => GigUpdateManyWithWhereWithoutBandInputSchema),
          z.lazy(() => GigUpdateManyWithWhereWithoutBandInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => GigScalarWhereInputSchema), z.lazy(() => GigScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const BandVoiceUncheckedUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateManyWithoutBandNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutBandInputSchema),
          z.lazy(() => BandVoiceCreateWithoutBandInputSchema).array(),
          z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => BandVoiceCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => BandVoiceCreateManyBandInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => BandVoiceUpdateManyWithWhereWithoutBandInputSchema),
          z.lazy(() => BandVoiceUpdateManyWithWhereWithoutBandInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => BandVoiceScalarWhereInputSchema), z.lazy(() => BandVoiceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const MembershipUncheckedUpdateManyWithoutBandNestedInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutBandNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MembershipCreateWithoutBandInputSchema),
          z.lazy(() => MembershipCreateWithoutBandInputSchema).array(),
          z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema),
          z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema),
          z.lazy(() => MembershipCreateOrConnectWithoutBandInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => MembershipUpsertWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => MembershipUpsertWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => MembershipCreateManyBandInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => MembershipUpdateWithWhereUniqueWithoutBandInputSchema),
          z.lazy(() => MembershipUpdateWithWhereUniqueWithoutBandInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MembershipUpdateManyWithWhereWithoutBandInputSchema),
          z.lazy(() => MembershipUpdateManyWithWhereWithoutBandInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const UserCreateNestedOneWithoutPlayerInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPlayerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutPlayerInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutPlayerInputSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPlayerInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
  })
  .strict();

export const PresenceCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceCreateNestedManyWithoutPlayerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutPlayerInputSchema),
          z.lazy(() => PresenceCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => PresenceCreateManyPlayerInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const RoleCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutPlayerInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutPlayerInputSchema),
        z.lazy(() => RoleCreateWithoutPlayerInputSchema).array(),
        z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema),
        z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema),
        z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema).array()
      ])
      .optional(),
    createMany: z.lazy(() => RoleCreateManyPlayerInputEnvelopeSchema).optional(),
    connect: z
      .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
      .optional()
  })
  .strict();

export const MembershipCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipCreateNestedManyWithoutPlayerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MembershipCreateWithoutPlayerInputSchema),
          z.lazy(() => MembershipCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => MembershipCreateManyPlayerInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateNestedManyWithoutPlayerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutPlayerInputSchema),
          z.lazy(() => PresenceCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => PresenceCreateManyPlayerInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const RoleUncheckedCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutPlayerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutPlayerInputSchema),
          z.lazy(() => RoleCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => RoleCreateManyPlayerInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateNestedManyWithoutPlayerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MembershipCreateWithoutPlayerInputSchema),
          z.lazy(() => MembershipCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => MembershipCreateManyPlayerInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const UserUpdateOneRequiredWithoutPlayerNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPlayerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPlayerInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutPlayerInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPlayerInputSchema).optional(),
      upsert: z.lazy(() => UserUpsertWithoutPlayerInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPlayerInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPlayerInputSchema)
        ])
        .optional()
    })
    .strict();

export const PresenceUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.PresenceUpdateManyWithoutPlayerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutPlayerInputSchema),
          z.lazy(() => PresenceCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => PresenceCreateManyPlayerInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PresenceUpdateManyWithWhereWithoutPlayerInputSchema),
          z.lazy(() => PresenceUpdateManyWithWhereWithoutPlayerInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => PresenceScalarWhereInputSchema), z.lazy(() => PresenceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const RoleUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutPlayerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutPlayerInputSchema),
        z.lazy(() => RoleCreateWithoutPlayerInputSchema).array(),
        z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema),
        z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema),
        z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema).array()
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => RoleUpsertWithWhereUniqueWithoutPlayerInputSchema),
        z.lazy(() => RoleUpsertWithWhereUniqueWithoutPlayerInputSchema).array()
      ])
      .optional(),
    createMany: z.lazy(() => RoleCreateManyPlayerInputEnvelopeSchema).optional(),
    set: z
      .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => RoleUpdateWithWhereUniqueWithoutPlayerInputSchema),
        z.lazy(() => RoleUpdateWithWhereUniqueWithoutPlayerInputSchema).array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RoleUpdateManyWithWhereWithoutPlayerInputSchema),
        z.lazy(() => RoleUpdateManyWithWhereWithoutPlayerInputSchema).array()
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => RoleScalarWhereInputSchema), z.lazy(() => RoleScalarWhereInputSchema).array()])
      .optional()
  })
  .strict();

export const MembershipUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithoutPlayerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MembershipCreateWithoutPlayerInputSchema),
          z.lazy(() => MembershipCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => MembershipCreateManyPlayerInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MembershipUpdateManyWithWhereWithoutPlayerInputSchema),
          z.lazy(() => MembershipUpdateManyWithWhereWithoutPlayerInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyWithoutPlayerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutPlayerInputSchema),
          z.lazy(() => PresenceCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => PresenceCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => PresenceCreateManyPlayerInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PresenceUpdateManyWithWhereWithoutPlayerInputSchema),
          z.lazy(() => PresenceUpdateManyWithWhereWithoutPlayerInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => PresenceScalarWhereInputSchema), z.lazy(() => PresenceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutPlayerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutPlayerInputSchema),
          z.lazy(() => RoleCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => RoleCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => RoleUpsertWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => RoleUpsertWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => RoleCreateManyPlayerInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => RoleUpdateWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => RoleUpdateWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RoleUpdateManyWithWhereWithoutPlayerInputSchema),
          z.lazy(() => RoleUpdateManyWithWhereWithoutPlayerInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => RoleScalarWhereInputSchema), z.lazy(() => RoleScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutPlayerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MembershipCreateWithoutPlayerInputSchema),
          z.lazy(() => MembershipCreateWithoutPlayerInputSchema).array(),
          z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema),
          z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema),
          z.lazy(() => MembershipCreateOrConnectWithoutPlayerInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => MembershipCreateManyPlayerInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => MembershipWhereUniqueInputSchema), z.lazy(() => MembershipWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema),
          z.lazy(() => MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MembershipUpdateManyWithWhereWithoutPlayerInputSchema),
          z.lazy(() => MembershipUpdateManyWithWhereWithoutPlayerInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const BandCreateNestedOneWithoutMembershipsInputSchema: z.ZodType<Prisma.BandCreateNestedOneWithoutMembershipsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandCreateWithoutMembershipsInputSchema),
          z.lazy(() => BandUncheckedCreateWithoutMembershipsInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutMembershipsInputSchema).optional(),
      connect: z.lazy(() => BandWhereUniqueInputSchema).optional()
    })
    .strict();

export const PlayerCreateNestedOneWithoutMembershipsInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutMembershipsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlayerCreateWithoutMembershipsInputSchema),
          z.lazy(() => PlayerUncheckedCreateWithoutMembershipsInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutMembershipsInputSchema).optional(),
      connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
    })
    .strict();

export const BandUpdateOneRequiredWithoutMembershipsNestedInputSchema: z.ZodType<Prisma.BandUpdateOneRequiredWithoutMembershipsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandCreateWithoutMembershipsInputSchema),
          z.lazy(() => BandUncheckedCreateWithoutMembershipsInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutMembershipsInputSchema).optional(),
      upsert: z.lazy(() => BandUpsertWithoutMembershipsInputSchema).optional(),
      connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => BandUpdateWithoutMembershipsInputSchema),
          z.lazy(() => BandUncheckedUpdateWithoutMembershipsInputSchema)
        ])
        .optional()
    })
    .strict();

export const PlayerUpdateOneRequiredWithoutMembershipsNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutMembershipsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlayerCreateWithoutMembershipsInputSchema),
          z.lazy(() => PlayerUncheckedCreateWithoutMembershipsInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutMembershipsInputSchema).optional(),
      upsert: z.lazy(() => PlayerUpsertWithoutMembershipsInputSchema).optional(),
      connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PlayerUpdateWithoutMembershipsInputSchema),
          z.lazy(() => PlayerUncheckedUpdateWithoutMembershipsInputSchema)
        ])
        .optional()
    })
    .strict();

export const PresenceCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.PresenceCreateNestedManyWithoutGigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutGigInputSchema),
          z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),
          z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const BandCreateNestedOneWithoutGigsInputSchema: z.ZodType<Prisma.BandCreateNestedOneWithoutGigsInput> = z
  .object({
    create: z
      .union([z.lazy(() => BandCreateWithoutGigsInputSchema), z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutGigsInputSchema).optional(),
    connect: z.lazy(() => BandWhereUniqueInputSchema).optional()
  })
  .strict();

export const GigVoiceCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceCreateNestedManyWithoutGigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigVoiceCreateWithoutGigInputSchema),
          z.lazy(() => GigVoiceCreateWithoutGigInputSchema).array(),
          z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigVoiceCreateManyGigInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const DisabledVoiceCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceCreateNestedManyWithoutGigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema).array(),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DisabledVoiceCreateManyGigInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.FormationCreateNestedManyWithoutGigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutGigInputSchema),
          z.lazy(() => FormationCreateWithoutGigInputSchema).array(),
          z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => FormationCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationCreateManyGigInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const FormationCreateNestedOneWithoutGigCurrentFromInputSchema: z.ZodType<Prisma.FormationCreateNestedOneWithoutGigCurrentFromInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutGigCurrentFromInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutGigCurrentFromInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => FormationCreateOrConnectWithoutGigCurrentFromInputSchema).optional(),
      connect: z.lazy(() => FormationWhereUniqueInputSchema).optional()
    })
    .strict();

export const PresenceUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateNestedManyWithoutGigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutGigInputSchema),
          z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),
          z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateNestedManyWithoutGigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigVoiceCreateWithoutGigInputSchema),
          z.lazy(() => GigVoiceCreateWithoutGigInputSchema).array(),
          z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigVoiceCreateManyGigInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateNestedManyWithoutGigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema).array(),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DisabledVoiceCreateManyGigInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUncheckedCreateNestedManyWithoutGigInputSchema: z.ZodType<Prisma.FormationUncheckedCreateNestedManyWithoutGigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutGigInputSchema),
          z.lazy(() => FormationCreateWithoutGigInputSchema).array(),
          z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => FormationCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationCreateManyGigInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const FormationUncheckedCreateNestedOneWithoutGigCurrentFromInputSchema: z.ZodType<Prisma.FormationUncheckedCreateNestedOneWithoutGigCurrentFromInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutGigCurrentFromInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutGigCurrentFromInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => FormationCreateOrConnectWithoutGigCurrentFromInputSchema).optional(),
      connect: z.lazy(() => FormationWhereUniqueInputSchema).optional()
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z
  .object({
    set: z.coerce.date().optional()
  })
  .strict();

export const PresenceUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.PresenceUpdateManyWithoutGigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutGigInputSchema),
          z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),
          z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PresenceUpsertWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => PresenceUpsertWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => PresenceUpdateWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => PresenceUpdateWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PresenceUpdateManyWithWhereWithoutGigInputSchema),
          z.lazy(() => PresenceUpdateManyWithWhereWithoutGigInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => PresenceScalarWhereInputSchema), z.lazy(() => PresenceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const BandUpdateOneWithoutGigsNestedInputSchema: z.ZodType<Prisma.BandUpdateOneWithoutGigsNestedInput> = z
  .object({
    create: z
      .union([z.lazy(() => BandCreateWithoutGigsInputSchema), z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutGigsInputSchema).optional(),
    upsert: z.lazy(() => BandUpsertWithoutGigsInputSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
    update: z
      .union([z.lazy(() => BandUpdateWithoutGigsInputSchema), z.lazy(() => BandUncheckedUpdateWithoutGigsInputSchema)])
      .optional()
  })
  .strict();

export const GigVoiceUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyWithoutGigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigVoiceCreateWithoutGigInputSchema),
          z.lazy(() => GigVoiceCreateWithoutGigInputSchema).array(),
          z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigVoiceCreateManyGigInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => GigVoiceUpdateManyWithWhereWithoutGigInputSchema),
          z.lazy(() => GigVoiceUpdateManyWithWhereWithoutGigInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => GigVoiceScalarWhereInputSchema), z.lazy(() => GigVoiceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const DisabledVoiceUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyWithoutGigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema).array(),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DisabledVoiceCreateManyGigInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DisabledVoiceScalarWhereInputSchema),
          z.lazy(() => DisabledVoiceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.FormationUpdateManyWithoutGigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutGigInputSchema),
          z.lazy(() => FormationCreateWithoutGigInputSchema).array(),
          z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => FormationCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationUpsertWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => FormationUpsertWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationCreateManyGigInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationUpdateWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => FormationUpdateWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationUpdateManyWithWhereWithoutGigInputSchema),
          z.lazy(() => FormationUpdateManyWithWhereWithoutGigInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => FormationScalarWhereInputSchema), z.lazy(() => FormationScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const FormationUpdateOneWithoutGigCurrentFromNestedInputSchema: z.ZodType<Prisma.FormationUpdateOneWithoutGigCurrentFromNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutGigCurrentFromInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutGigCurrentFromInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => FormationCreateOrConnectWithoutGigCurrentFromInputSchema).optional(),
      upsert: z.lazy(() => FormationUpsertWithoutGigCurrentFromInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => FormationWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => FormationUpdateWithoutGigCurrentFromInputSchema),
          z.lazy(() => FormationUncheckedUpdateWithoutGigCurrentFromInputSchema)
        ])
        .optional()
    })
    .strict();

export const PresenceUncheckedUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyWithoutGigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutGigInputSchema),
          z.lazy(() => PresenceCreateWithoutGigInputSchema).array(),
          z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => PresenceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PresenceUpsertWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => PresenceUpsertWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => PresenceCreateManyGigInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => PresenceWhereUniqueInputSchema), z.lazy(() => PresenceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => PresenceUpdateWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => PresenceUpdateWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PresenceUpdateManyWithWhereWithoutGigInputSchema),
          z.lazy(() => PresenceUpdateManyWithWhereWithoutGigInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => PresenceScalarWhereInputSchema), z.lazy(() => PresenceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateManyWithoutGigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigVoiceCreateWithoutGigInputSchema),
          z.lazy(() => GigVoiceCreateWithoutGigInputSchema).array(),
          z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => GigVoiceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigVoiceCreateManyGigInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => GigVoiceUpdateManyWithWhereWithoutGigInputSchema),
          z.lazy(() => GigVoiceUpdateManyWithWhereWithoutGigInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => GigVoiceScalarWhereInputSchema), z.lazy(() => GigVoiceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateManyWithoutGigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema).array(),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DisabledVoiceCreateManyGigInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema),
          z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DisabledVoiceScalarWhereInputSchema),
          z.lazy(() => DisabledVoiceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUncheckedUpdateManyWithoutGigNestedInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateManyWithoutGigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutGigInputSchema),
          z.lazy(() => FormationCreateWithoutGigInputSchema).array(),
          z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationCreateOrConnectWithoutGigInputSchema),
          z.lazy(() => FormationCreateOrConnectWithoutGigInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationUpsertWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => FormationUpsertWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationCreateManyGigInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => FormationWhereUniqueInputSchema), z.lazy(() => FormationWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationUpdateWithWhereUniqueWithoutGigInputSchema),
          z.lazy(() => FormationUpdateWithWhereUniqueWithoutGigInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationUpdateManyWithWhereWithoutGigInputSchema),
          z.lazy(() => FormationUpdateManyWithWhereWithoutGigInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => FormationScalarWhereInputSchema), z.lazy(() => FormationScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const FormationUncheckedUpdateOneWithoutGigCurrentFromNestedInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateOneWithoutGigCurrentFromNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutGigCurrentFromInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutGigCurrentFromInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => FormationCreateOrConnectWithoutGigCurrentFromInputSchema).optional(),
      upsert: z.lazy(() => FormationUpsertWithoutGigCurrentFromInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => FormationWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => FormationUpdateWithoutGigCurrentFromInputSchema),
          z.lazy(() => FormationUncheckedUpdateWithoutGigCurrentFromInputSchema)
        ])
        .optional()
    })
    .strict();

export const GigCreateNestedOneWithoutPresencesInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutPresencesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutPresencesInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutPresencesInputSchema).optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
    })
    .strict();

export const PlayerCreateNestedOneWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutPresencesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlayerCreateWithoutPresencesInputSchema),
          z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutPresencesInputSchema).optional(),
      connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
    })
    .strict();

export const FormationVoicePresenceCreateNestedManyWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateNestedManyWithoutPresenceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema).array(),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoicePresenceCreateManyPresenceInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateNestedManyWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateNestedManyWithoutPresenceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema).array(),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationUndefinedVoicePresenceCreateManyPresenceInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedCreateNestedManyWithoutPresenceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema).array(),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoicePresenceCreateManyPresenceInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutPresenceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema).array(),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationUndefinedVoicePresenceCreateManyPresenceInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const GigUpdateOneRequiredWithoutPresencesNestedInputSchema: z.ZodType<Prisma.GigUpdateOneRequiredWithoutPresencesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutPresencesInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutPresencesInputSchema).optional(),
      upsert: z.lazy(() => GigUpsertWithoutPresencesInputSchema).optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => GigUpdateWithoutPresencesInputSchema),
          z.lazy(() => GigUncheckedUpdateWithoutPresencesInputSchema)
        ])
        .optional()
    })
    .strict();

export const PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutPresencesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlayerCreateWithoutPresencesInputSchema),
          z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutPresencesInputSchema).optional(),
      upsert: z.lazy(() => PlayerUpsertWithoutPresencesInputSchema).optional(),
      connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PlayerUpdateWithoutPresencesInputSchema),
          z.lazy(() => PlayerUncheckedUpdateWithoutPresencesInputSchema)
        ])
        .optional()
    })
    .strict();

export const FormationVoicePresenceUpdateManyWithoutPresenceNestedInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateManyWithoutPresenceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema).array(),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoicePresenceCreateManyPresenceInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateManyWithoutPresenceNestedInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateManyWithoutPresenceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema).array(),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationUndefinedVoicePresenceCreateManyPresenceInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema).array(),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoicePresenceCreateManyPresenceInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema),
          z.lazy(() => FormationVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema).array(),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationUndefinedVoicePresenceCreateManyPresenceInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const InstrumentCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentCreateNestedOneWithoutRolesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstrumentCreateWithoutRolesInputSchema),
          z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutRolesInputSchema).optional(),
      connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional()
    })
    .strict();

export const PlayerCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutRolesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PlayerCreateWithoutRolesInputSchema),
        z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutRolesInputSchema).optional(),
    connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional()
  })
  .strict();

export const InstrumentUpdateOneRequiredWithoutRolesNestedInputSchema: z.ZodType<Prisma.InstrumentUpdateOneRequiredWithoutRolesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstrumentCreateWithoutRolesInputSchema),
          z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutRolesInputSchema).optional(),
      upsert: z.lazy(() => InstrumentUpsertWithoutRolesInputSchema).optional(),
      connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => InstrumentUpdateWithoutRolesInputSchema),
          z.lazy(() => InstrumentUncheckedUpdateWithoutRolesInputSchema)
        ])
        .optional()
    })
    .strict();

export const PlayerUpdateOneRequiredWithoutRolesNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutRolesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PlayerCreateWithoutRolesInputSchema),
          z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutRolesInputSchema).optional(),
      upsert: z.lazy(() => PlayerUpsertWithoutRolesInputSchema).optional(),
      connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PlayerUpdateWithoutRolesInputSchema),
          z.lazy(() => PlayerUncheckedUpdateWithoutRolesInputSchema)
        ])
        .optional()
    })
    .strict();

export const RoleCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutInstrumentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutInstrumentInputSchema),
          z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const BandVoiceCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceCreateNestedManyWithoutInstrumentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => BandVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const GigVoiceCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceCreateNestedManyWithoutInstrumentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const FormationVoiceCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceCreateNestedManyWithoutInstrumentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutInstrumentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutInstrumentInputSchema),
          z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateNestedManyWithoutInstrumentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => BandVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateNestedManyWithoutInstrumentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      connect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional()
    })
    .strict();

export const FormationVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedCreateNestedManyWithoutInstrumentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const RoleUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutInstrumentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutInstrumentInputSchema),
          z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RoleUpdateManyWithWhereWithoutInstrumentInputSchema),
          z.lazy(() => RoleUpdateManyWithWhereWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => RoleScalarWhereInputSchema), z.lazy(() => RoleScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const BandVoiceUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyWithoutInstrumentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => BandVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => BandVoiceScalarWhereInputSchema), z.lazy(() => BandVoiceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const GigVoiceUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyWithoutInstrumentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => GigVoiceScalarWhereInputSchema), z.lazy(() => GigVoiceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const FormationVoiceUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.FormationVoiceUpdateManyWithoutInstrumentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationVoiceScalarWhereInputSchema),
          z.lazy(() => FormationVoiceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutInstrumentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutInstrumentInputSchema),
          z.lazy(() => RoleCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => RoleCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => RoleCreateManyInstrumentInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => RoleWhereUniqueInputSchema), z.lazy(() => RoleWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RoleUpdateManyWithWhereWithoutInstrumentInputSchema),
          z.lazy(() => RoleUpdateManyWithWhereWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => RoleScalarWhereInputSchema), z.lazy(() => RoleScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => BandVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => BandVoiceWhereUniqueInputSchema), z.lazy(() => BandVoiceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),
          z.lazy(() => BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => BandVoiceScalarWhereInputSchema), z.lazy(() => BandVoiceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => GigVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      set: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      disconnect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      delete: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      connect: z
        .union([z.lazy(() => GigVoiceWhereUniqueInputSchema), z.lazy(() => GigVoiceWhereUniqueInputSchema).array()])
        .optional(),
      update: z
        .union([
          z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),
          z.lazy(() => GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([z.lazy(() => GigVoiceScalarWhereInputSchema), z.lazy(() => GigVoiceScalarWhereInputSchema).array()])
        .optional()
    })
    .strict();

export const FormationVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedUpdateManyWithoutInstrumentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema).array(),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoiceCreateOrConnectWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceCreateOrConnectWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoiceCreateManyInstrumentInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationVoiceUpdateManyWithWhereWithoutInstrumentInputSchema),
          z.lazy(() => FormationVoiceUpdateManyWithWhereWithoutInstrumentInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationVoiceScalarWhereInputSchema),
          z.lazy(() => FormationVoiceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const InstrumentCreateNestedOneWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateNestedOneWithoutGigVoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstrumentCreateWithoutGigVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedCreateWithoutGigVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutGigVoicesInputSchema).optional(),
      connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional()
    })
    .strict();

export const GigCreateNestedOneWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutGigVoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutGigVoicesInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutGigVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutGigVoicesInputSchema).optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
    })
    .strict();

export const InstrumentUpdateOneRequiredWithoutGigVoicesNestedInputSchema: z.ZodType<Prisma.InstrumentUpdateOneRequiredWithoutGigVoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstrumentCreateWithoutGigVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedCreateWithoutGigVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutGigVoicesInputSchema).optional(),
      upsert: z.lazy(() => InstrumentUpsertWithoutGigVoicesInputSchema).optional(),
      connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => InstrumentUpdateWithoutGigVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedUpdateWithoutGigVoicesInputSchema)
        ])
        .optional()
    })
    .strict();

export const GigUpdateOneRequiredWithoutGigVoicesNestedInputSchema: z.ZodType<Prisma.GigUpdateOneRequiredWithoutGigVoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutGigVoicesInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutGigVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutGigVoicesInputSchema).optional(),
      upsert: z.lazy(() => GigUpsertWithoutGigVoicesInputSchema).optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => GigUpdateWithoutGigVoicesInputSchema),
          z.lazy(() => GigUncheckedUpdateWithoutGigVoicesInputSchema)
        ])
        .optional()
    })
    .strict();

export const InstrumentCreateNestedOneWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateNestedOneWithoutBandVoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstrumentCreateWithoutBandVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedCreateWithoutBandVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutBandVoicesInputSchema).optional(),
      connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional()
    })
    .strict();

export const BandCreateNestedOneWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandCreateNestedOneWithoutBandVoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandCreateWithoutBandVoicesInputSchema),
          z.lazy(() => BandUncheckedCreateWithoutBandVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutBandVoicesInputSchema).optional(),
      connect: z.lazy(() => BandWhereUniqueInputSchema).optional()
    })
    .strict();

export const DisabledVoiceCreateNestedManyWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceCreateNestedManyWithoutBandVoiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema).array(),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema).array(),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const InstrumentUpdateOneRequiredWithoutBandVoicesNestedInputSchema: z.ZodType<Prisma.InstrumentUpdateOneRequiredWithoutBandVoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstrumentCreateWithoutBandVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedCreateWithoutBandVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutBandVoicesInputSchema).optional(),
      upsert: z.lazy(() => InstrumentUpsertWithoutBandVoicesInputSchema).optional(),
      connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => InstrumentUpdateWithoutBandVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedUpdateWithoutBandVoicesInputSchema)
        ])
        .optional()
    })
    .strict();

export const BandUpdateOneRequiredWithoutBandVoicesNestedInputSchema: z.ZodType<Prisma.BandUpdateOneRequiredWithoutBandVoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandCreateWithoutBandVoicesInputSchema),
          z.lazy(() => BandUncheckedCreateWithoutBandVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => BandCreateOrConnectWithoutBandVoicesInputSchema).optional(),
      upsert: z.lazy(() => BandUpsertWithoutBandVoicesInputSchema).optional(),
      connect: z.lazy(() => BandWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => BandUpdateWithoutBandVoicesInputSchema),
          z.lazy(() => BandUncheckedUpdateWithoutBandVoicesInputSchema)
        ])
        .optional()
    })
    .strict();

export const DisabledVoiceUpdateManyWithoutBandVoiceNestedInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyWithoutBandVoiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema).array(),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DisabledVoiceScalarWhereInputSchema),
          z.lazy(() => DisabledVoiceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema).array(),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
          z.lazy(() => DisabledVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema),
          z.lazy(() => DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DisabledVoiceScalarWhereInputSchema),
          z.lazy(() => DisabledVoiceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const GigCreateNestedOneWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutDisabledVoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutDisabledVoicesInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutDisabledVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutDisabledVoicesInputSchema).optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
    })
    .strict();

export const BandVoiceCreateNestedOneWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceCreateNestedOneWithoutDisabledVoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutDisabledVoicesInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => BandVoiceCreateOrConnectWithoutDisabledVoicesInputSchema).optional(),
      connect: z.lazy(() => BandVoiceWhereUniqueInputSchema).optional()
    })
    .strict();

export const GigUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema: z.ZodType<Prisma.GigUpdateOneRequiredWithoutDisabledVoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutDisabledVoicesInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutDisabledVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutDisabledVoicesInputSchema).optional(),
      upsert: z.lazy(() => GigUpsertWithoutDisabledVoicesInputSchema).optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => GigUpdateWithoutDisabledVoicesInputSchema),
          z.lazy(() => GigUncheckedUpdateWithoutDisabledVoicesInputSchema)
        ])
        .optional()
    })
    .strict();

export const BandVoiceUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema: z.ZodType<Prisma.BandVoiceUpdateOneRequiredWithoutDisabledVoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BandVoiceCreateWithoutDisabledVoicesInputSchema),
          z.lazy(() => BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => BandVoiceCreateOrConnectWithoutDisabledVoicesInputSchema).optional(),
      upsert: z.lazy(() => BandVoiceUpsertWithoutDisabledVoicesInputSchema).optional(),
      connect: z.lazy(() => BandVoiceWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => BandVoiceUpdateWithoutDisabledVoicesInputSchema),
          z.lazy(() => BandVoiceUncheckedUpdateWithoutDisabledVoicesInputSchema)
        ])
        .optional()
    })
    .strict();

export const FormationCreateNestedOneWithoutFormationVoicesInputSchema: z.ZodType<Prisma.FormationCreateNestedOneWithoutFormationVoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutFormationVoicesInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutFormationVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => FormationCreateOrConnectWithoutFormationVoicesInputSchema).optional(),
      connect: z.lazy(() => FormationWhereUniqueInputSchema).optional()
    })
    .strict();

export const InstrumentCreateNestedOneWithoutFormationVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateNestedOneWithoutFormationVoicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstrumentCreateWithoutFormationVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedCreateWithoutFormationVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutFormationVoicesInputSchema).optional(),
      connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional()
    })
    .strict();

export const FormationVoicePresenceCreateNestedManyWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateNestedManyWithoutFormationVoiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema).array(),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoicePresenceCreateManyFormationVoiceInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationVoicePresenceUncheckedCreateNestedManyWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedCreateNestedManyWithoutFormationVoiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema).array(),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoicePresenceCreateManyFormationVoiceInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUpdateOneRequiredWithoutFormationVoicesNestedInputSchema: z.ZodType<Prisma.FormationUpdateOneRequiredWithoutFormationVoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutFormationVoicesInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutFormationVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => FormationCreateOrConnectWithoutFormationVoicesInputSchema).optional(),
      upsert: z.lazy(() => FormationUpsertWithoutFormationVoicesInputSchema).optional(),
      connect: z.lazy(() => FormationWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => FormationUpdateWithoutFormationVoicesInputSchema),
          z.lazy(() => FormationUncheckedUpdateWithoutFormationVoicesInputSchema)
        ])
        .optional()
    })
    .strict();

export const InstrumentUpdateOneRequiredWithoutFormationVoicesNestedInputSchema: z.ZodType<Prisma.InstrumentUpdateOneRequiredWithoutFormationVoicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstrumentCreateWithoutFormationVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedCreateWithoutFormationVoicesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => InstrumentCreateOrConnectWithoutFormationVoicesInputSchema).optional(),
      upsert: z.lazy(() => InstrumentUpsertWithoutFormationVoicesInputSchema).optional(),
      connect: z.lazy(() => InstrumentWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => InstrumentUpdateWithoutFormationVoicesInputSchema),
          z.lazy(() => InstrumentUncheckedUpdateWithoutFormationVoicesInputSchema)
        ])
        .optional()
    })
    .strict();

export const FormationVoicePresenceUpdateManyWithoutFormationVoiceNestedInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateManyWithoutFormationVoiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema).array(),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationVoicePresenceUpsertWithWhereUniqueWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUpsertWithWhereUniqueWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoicePresenceCreateManyFormationVoiceInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationVoicePresenceUpdateWithWhereUniqueWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUpdateWithWhereUniqueWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationVoicePresenceUpdateManyWithWhereWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUpdateManyWithWhereWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoiceNestedInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema).array(),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationVoicePresenceUpsertWithWhereUniqueWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUpsertWithWhereUniqueWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoicePresenceCreateManyFormationVoiceInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationVoicePresenceUpdateWithWhereUniqueWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUpdateWithWhereUniqueWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationVoicePresenceUpdateManyWithWhereWithoutFormationVoiceInputSchema),
          z.lazy(() => FormationVoicePresenceUpdateManyWithWhereWithoutFormationVoiceInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationCreateNestedOneWithoutFormationUndefinedVoicePresencesInputSchema: z.ZodType<Prisma.FormationCreateNestedOneWithoutFormationUndefinedVoicePresencesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutFormationUndefinedVoicePresencesInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutFormationUndefinedVoicePresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => FormationCreateOrConnectWithoutFormationUndefinedVoicePresencesInputSchema)
        .optional(),
      connect: z.lazy(() => FormationWhereUniqueInputSchema).optional()
    })
    .strict();

export const PresenceCreateNestedOneWithoutFormationUndefinedVoicePresenceInputSchema: z.ZodType<Prisma.PresenceCreateNestedOneWithoutFormationUndefinedVoicePresenceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutFormationUndefinedVoicePresenceInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutFormationUndefinedVoicePresenceInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PresenceCreateOrConnectWithoutFormationUndefinedVoicePresenceInputSchema)
        .optional(),
      connect: z.lazy(() => PresenceWhereUniqueInputSchema).optional()
    })
    .strict();

export const FormationUpdateOneRequiredWithoutFormationUndefinedVoicePresencesNestedInputSchema: z.ZodType<Prisma.FormationUpdateOneRequiredWithoutFormationUndefinedVoicePresencesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationCreateWithoutFormationUndefinedVoicePresencesInputSchema),
          z.lazy(() => FormationUncheckedCreateWithoutFormationUndefinedVoicePresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => FormationCreateOrConnectWithoutFormationUndefinedVoicePresencesInputSchema)
        .optional(),
      upsert: z.lazy(() => FormationUpsertWithoutFormationUndefinedVoicePresencesInputSchema).optional(),
      connect: z.lazy(() => FormationWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => FormationUpdateWithoutFormationUndefinedVoicePresencesInputSchema),
          z.lazy(() => FormationUncheckedUpdateWithoutFormationUndefinedVoicePresencesInputSchema)
        ])
        .optional()
    })
    .strict();

export const PresenceUpdateOneRequiredWithoutFormationUndefinedVoicePresenceNestedInputSchema: z.ZodType<Prisma.PresenceUpdateOneRequiredWithoutFormationUndefinedVoicePresenceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutFormationUndefinedVoicePresenceInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutFormationUndefinedVoicePresenceInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PresenceCreateOrConnectWithoutFormationUndefinedVoicePresenceInputSchema)
        .optional(),
      upsert: z.lazy(() => PresenceUpsertWithoutFormationUndefinedVoicePresenceInputSchema).optional(),
      connect: z.lazy(() => PresenceWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PresenceUpdateWithoutFormationUndefinedVoicePresenceInputSchema),
          z.lazy(() => PresenceUncheckedUpdateWithoutFormationUndefinedVoicePresenceInputSchema)
        ])
        .optional()
    })
    .strict();

export const FormationVoiceCreateNestedOneWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.FormationVoiceCreateNestedOneWithoutFormationVoicePresencesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutFormationVoicePresencesInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationVoicePresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationVoicePresencesInputSchema).optional(),
      connect: z.lazy(() => FormationVoiceWhereUniqueInputSchema).optional()
    })
    .strict();

export const PresenceCreateNestedOneWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.PresenceCreateNestedOneWithoutFormationVoicePresencesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutFormationVoicePresencesInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutFormationVoicePresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PresenceCreateOrConnectWithoutFormationVoicePresencesInputSchema).optional(),
      connect: z.lazy(() => PresenceWhereUniqueInputSchema).optional()
    })
    .strict();

export const FormationVoiceUpdateOneRequiredWithoutFormationVoicePresencesNestedInputSchema: z.ZodType<Prisma.FormationVoiceUpdateOneRequiredWithoutFormationVoicePresencesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutFormationVoicePresencesInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationVoicePresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationVoicePresencesInputSchema).optional(),
      upsert: z.lazy(() => FormationVoiceUpsertWithoutFormationVoicePresencesInputSchema).optional(),
      connect: z.lazy(() => FormationVoiceWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => FormationVoiceUpdateWithoutFormationVoicePresencesInputSchema),
          z.lazy(() => FormationVoiceUncheckedUpdateWithoutFormationVoicePresencesInputSchema)
        ])
        .optional()
    })
    .strict();

export const PresenceUpdateOneRequiredWithoutFormationVoicePresencesNestedInputSchema: z.ZodType<Prisma.PresenceUpdateOneRequiredWithoutFormationVoicePresencesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PresenceCreateWithoutFormationVoicePresencesInputSchema),
          z.lazy(() => PresenceUncheckedCreateWithoutFormationVoicePresencesInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PresenceCreateOrConnectWithoutFormationVoicePresencesInputSchema).optional(),
      upsert: z.lazy(() => PresenceUpsertWithoutFormationVoicePresencesInputSchema).optional(),
      connect: z.lazy(() => PresenceWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PresenceUpdateWithoutFormationVoicePresencesInputSchema),
          z.lazy(() => PresenceUncheckedUpdateWithoutFormationVoicePresencesInputSchema)
        ])
        .optional()
    })
    .strict();

export const FormationVoiceCreateNestedManyWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceCreateNestedManyWithoutFormationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema).array(),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoiceCreateManyFormationInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateNestedManyWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateNestedManyWithoutFormationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema).array(),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationUndefinedVoicePresenceCreateManyFormationInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const GigCreateNestedOneWithoutFormationsInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutFormationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutFormationsInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutFormationsInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutFormationsInputSchema).optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
    })
    .strict();

export const GigCreateNestedOneWithoutCurrentFormationInputSchema: z.ZodType<Prisma.GigCreateNestedOneWithoutCurrentFormationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutCurrentFormationInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutCurrentFormationInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutCurrentFormationInputSchema).optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional()
    })
    .strict();

export const FormationVoiceUncheckedCreateNestedManyWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedCreateNestedManyWithoutFormationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema).array(),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoiceCreateManyFormationInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutFormationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema).array(),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationUndefinedVoicePresenceCreateManyFormationInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationVoiceUpdateManyWithoutFormationNestedInputSchema: z.ZodType<Prisma.FormationVoiceUpdateManyWithoutFormationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema).array(),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationVoiceUpsertWithWhereUniqueWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUpsertWithWhereUniqueWithoutFormationInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoiceCreateManyFormationInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationVoiceUpdateWithWhereUniqueWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUpdateWithWhereUniqueWithoutFormationInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationVoiceUpdateManyWithWhereWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUpdateManyWithWhereWithoutFormationInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationVoiceScalarWhereInputSchema),
          z.lazy(() => FormationVoiceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateManyWithoutFormationNestedInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateManyWithoutFormationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema).array(),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutFormationInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationUndefinedVoicePresenceCreateManyFormationInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutFormationInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutFormationInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const GigUpdateOneWithoutFormationsNestedInputSchema: z.ZodType<Prisma.GigUpdateOneWithoutFormationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutFormationsInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutFormationsInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutFormationsInputSchema).optional(),
      upsert: z.lazy(() => GigUpsertWithoutFormationsInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => GigUpdateWithoutFormationsInputSchema),
          z.lazy(() => GigUncheckedUpdateWithoutFormationsInputSchema)
        ])
        .optional()
    })
    .strict();

export const GigUpdateOneWithoutCurrentFormationNestedInputSchema: z.ZodType<Prisma.GigUpdateOneWithoutCurrentFormationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GigCreateWithoutCurrentFormationInputSchema),
          z.lazy(() => GigUncheckedCreateWithoutCurrentFormationInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => GigCreateOrConnectWithoutCurrentFormationInputSchema).optional(),
      upsert: z.lazy(() => GigUpsertWithoutCurrentFormationInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => GigWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => GigUpdateWithoutCurrentFormationInputSchema),
          z.lazy(() => GigUncheckedUpdateWithoutCurrentFormationInputSchema)
        ])
        .optional()
    })
    .strict();

export const FormationVoiceUncheckedUpdateManyWithoutFormationNestedInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedUpdateManyWithoutFormationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema).array(),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceCreateOrConnectWithoutFormationInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationVoiceUpsertWithWhereUniqueWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUpsertWithWhereUniqueWithoutFormationInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationVoiceCreateManyFormationInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationVoiceWhereUniqueInputSchema),
          z.lazy(() => FormationVoiceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationVoiceUpdateWithWhereUniqueWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUpdateWithWhereUniqueWithoutFormationInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationVoiceUpdateManyWithWhereWithoutFormationInputSchema),
          z.lazy(() => FormationVoiceUpdateManyWithWhereWithoutFormationInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationVoiceScalarWhereInputSchema),
          z.lazy(() => FormationVoiceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationNestedInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema).array(),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutFormationInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => FormationUndefinedVoicePresenceCreateManyFormationInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutFormationInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutFormationInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutFormationInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional()
  })
  .strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z
  .object({
    equals: z.bigint().optional(),
    in: z.union([z.bigint().array(), z.bigint()]).optional(),
    notIn: z.union([z.bigint().array(), z.bigint()]).optional(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z.union([z.bigint(), z.lazy(() => NestedBigIntFilterSchema)]).optional()
  })
  .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
  })
  .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.union([z.number().array(), z.number()]).optional(),
    notIn: z.union([z.number().array(), z.number()]).optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional()
  })
  .strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z
  .object({
    equals: z.bigint().optional(),
    in: z.union([z.bigint().array(), z.bigint()]).optional(),
    notIn: z.union([z.bigint().array(), z.bigint()]).optional(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z.union([z.bigint(), z.lazy(() => NestedBigIntWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
    _max: z.lazy(() => NestedBigIntFilterSchema).optional()
  })
  .strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.union([z.number().array(), z.number()]).optional(),
    notIn: z.union([z.number().array(), z.number()]).optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedFloatFilterSchema)]).optional()
  })
  .strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.union([z.string().array(), z.string()]).optional().nullable(),
    notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.union([z.string().array(), z.string()]).optional().nullable(),
      notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
    })
    .strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z
  .object({
    equals: z.number().optional().nullable(),
    in: z.union([z.number().array(), z.number()]).optional().nullable(),
    notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional()
  })
  .strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterSchema).optional()
  })
  .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional()
  })
  .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
  })
  .strict();

export const UserCreateWithoutOtpInputSchema: z.ZodType<Prisma.UserCreateWithoutOtpInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
    key: z.lazy(() => KeyCreateNestedManyWithoutUserInputSchema).optional(),
    player: z.lazy(() => PlayerCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserUncheckedCreateWithoutOtpInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOtpInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    key: z.lazy(() => KeyUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    player: z.lazy(() => PlayerUncheckedCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserCreateOrConnectWithoutOtpInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOtpInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutOtpInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutOtpInputSchema)
    ])
  })
  .strict();

export const UserUpsertWithoutOtpInputSchema: z.ZodType<Prisma.UserUpsertWithoutOtpInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutOtpInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutOtpInputSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutOtpInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutOtpInputSchema)
    ])
  })
  .strict();

export const UserUpdateWithoutOtpInputSchema: z.ZodType<Prisma.UserUpdateWithoutOtpInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    auth_session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
    key: z.lazy(() => KeyUpdateManyWithoutUserNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const UserUncheckedUpdateWithoutOtpInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutOtpInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    auth_session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    key: z.lazy(() => KeyUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const UserCreateWithoutKeyInputSchema: z.ZodType<Prisma.UserCreateWithoutKeyInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
    player: z.lazy(() => PlayerCreateNestedOneWithoutUserInputSchema).optional(),
    otp: z.lazy(() => TokenCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserUncheckedCreateWithoutKeyInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutKeyInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    player: z.lazy(() => PlayerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
    otp: z.lazy(() => TokenUncheckedCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserCreateOrConnectWithoutKeyInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutKeyInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutKeyInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutKeyInputSchema)
    ])
  })
  .strict();

export const UserUpsertWithoutKeyInputSchema: z.ZodType<Prisma.UserUpsertWithoutKeyInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutKeyInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutKeyInputSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutKeyInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutKeyInputSchema)
    ])
  })
  .strict();

export const UserUpdateWithoutKeyInputSchema: z.ZodType<Prisma.UserUpdateWithoutKeyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    auth_session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUpdateOneWithoutUserNestedInputSchema).optional(),
    otp: z.lazy(() => TokenUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const UserUncheckedUpdateWithoutKeyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutKeyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    auth_session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
    otp: z.lazy(() => TokenUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const UserCreateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserCreateWithoutAuth_sessionInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    key: z.lazy(() => KeyCreateNestedManyWithoutUserInputSchema).optional(),
    player: z.lazy(() => PlayerCreateNestedOneWithoutUserInputSchema).optional(),
    otp: z.lazy(() => TokenCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserUncheckedCreateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAuth_sessionInput> =
  z
    .object({
      id: z.string(),
      email: z.string(),
      email_verified: z.boolean().optional(),
      has_password: z.boolean().optional(),
      key: z.lazy(() => KeyUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
      player: z.lazy(() => PlayerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
      otp: z.lazy(() => TokenUncheckedCreateNestedOneWithoutUserInputSchema).optional()
    })
    .strict();

export const UserCreateOrConnectWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAuth_sessionInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAuth_sessionInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAuth_sessionInputSchema)
      ])
    })
    .strict();

export const UserUpsertWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUpsertWithoutAuth_sessionInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAuth_sessionInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAuth_sessionInputSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAuth_sessionInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutAuth_sessionInputSchema)
    ])
  })
  .strict();

export const UserUpdateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUpdateWithoutAuth_sessionInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    key: z.lazy(() => KeyUpdateManyWithoutUserNestedInputSchema).optional(),
    player: z.lazy(() => PlayerUpdateOneWithoutUserNestedInputSchema).optional(),
    otp: z.lazy(() => TokenUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const UserUncheckedUpdateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAuth_sessionInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      key: z.lazy(() => KeyUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
      player: z.lazy(() => PlayerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
      otp: z.lazy(() => TokenUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
    })
    .strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z
  .object({
    id: z.string(),
    active_expires: z.bigint(),
    idle_expires: z.bigint()
  })
  .strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string(),
    active_expires: z.bigint(),
    idle_expires: z.bigint()
  })
  .strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => SessionCreateWithoutUserInputSchema),
      z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema)
    ])
  })
  .strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SessionCreateManyUserInputSchema),
      z.lazy(() => SessionCreateManyUserInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const KeyCreateWithoutUserInputSchema: z.ZodType<Prisma.KeyCreateWithoutUserInput> = z
  .object({
    id: z.string(),
    hashed_password: z.string().optional().nullable()
  })
  .strict();

export const KeyUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.KeyUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string(),
    hashed_password: z.string().optional().nullable()
  })
  .strict();

export const KeyCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.KeyCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => KeyWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => KeyCreateWithoutUserInputSchema),
      z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema)
    ])
  })
  .strict();

export const KeyCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.KeyCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([z.lazy(() => KeyCreateManyUserInputSchema), z.lazy(() => KeyCreateManyUserInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const PlayerCreateWithoutUserInputSchema: z.ZodType<Prisma.PlayerCreateWithoutUserInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
    roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
    memberships: z.lazy(() => MembershipCreateNestedManyWithoutPlayerInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
    roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
  })
  .strict();

export const PlayerCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => PlayerWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => PlayerCreateWithoutUserInputSchema),
      z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema)
    ])
  })
  .strict();

export const TokenCreateWithoutUserInputSchema: z.ZodType<Prisma.TokenCreateWithoutUserInput> = z
  .object({
    id: z.string(),
    expires: z.bigint()
  })
  .strict();

export const TokenUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string(),
    expires: z.bigint()
  })
  .strict();

export const TokenCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TokenCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => TokenWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => TokenCreateWithoutUserInputSchema),
      z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema)
    ])
  })
  .strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SessionUpdateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema)
      ]),
      create: z.union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema)
      ])
    })
    .strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SessionUpdateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema)
      ])
    })
    .strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SessionUpdateManyMutationInputSchema),
        z.lazy(() => SessionUncheckedUpdateManyWithoutAuth_sessionInputSchema)
      ])
    })
    .strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => SessionScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    active_expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
    idle_expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional()
  })
  .strict();

export const KeyUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.KeyUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => KeyWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => KeyUpdateWithoutUserInputSchema),
        z.lazy(() => KeyUncheckedUpdateWithoutUserInputSchema)
      ]),
      create: z.union([
        z.lazy(() => KeyCreateWithoutUserInputSchema),
        z.lazy(() => KeyUncheckedCreateWithoutUserInputSchema)
      ])
    })
    .strict();

export const KeyUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.KeyUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => KeyWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => KeyUpdateWithoutUserInputSchema),
        z.lazy(() => KeyUncheckedUpdateWithoutUserInputSchema)
      ])
    })
    .strict();

export const KeyUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.KeyUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => KeyScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => KeyUpdateManyMutationInputSchema),
      z.lazy(() => KeyUncheckedUpdateManyWithoutKeyInputSchema)
    ])
  })
  .strict();

export const KeyScalarWhereInputSchema: z.ZodType<Prisma.KeyScalarWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => KeyScalarWhereInputSchema), z.lazy(() => KeyScalarWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => KeyScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => KeyScalarWhereInputSchema), z.lazy(() => KeyScalarWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    hashed_password: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const PlayerUpsertWithoutUserInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => PlayerUpdateWithoutUserInputSchema),
      z.lazy(() => PlayerUncheckedUpdateWithoutUserInputSchema)
    ]),
    create: z.union([
      z.lazy(() => PlayerCreateWithoutUserInputSchema),
      z.lazy(() => PlayerUncheckedCreateWithoutUserInputSchema)
    ])
  })
  .strict();

export const PlayerUpdateWithoutUserInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
    roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUpdateManyWithoutPlayerNestedInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
    roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
  })
  .strict();

export const TokenUpsertWithoutUserInputSchema: z.ZodType<Prisma.TokenUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => TokenUpdateWithoutUserInputSchema),
      z.lazy(() => TokenUncheckedUpdateWithoutUserInputSchema)
    ]),
    create: z.union([
      z.lazy(() => TokenCreateWithoutUserInputSchema),
      z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema)
    ])
  })
  .strict();

export const TokenUpdateWithoutUserInputSchema: z.ZodType<Prisma.TokenUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const TokenUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const GigCreateWithoutBandInputSchema: z.ZodType<Prisma.GigCreateWithoutBandInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    formations: z.lazy(() => FormationCreateNestedManyWithoutGigInputSchema).optional(),
    currentFormation: z.lazy(() => FormationCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
  })
  .strict();

export const GigUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutBandInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
    formations: z.lazy(() => FormationUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUncheckedCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
  })
  .strict();

export const GigCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutBandInput> = z
  .object({
    where: z.lazy(() => GigWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => GigCreateWithoutBandInputSchema),
      z.lazy(() => GigUncheckedCreateWithoutBandInputSchema)
    ])
  })
  .strict();

export const GigCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.GigCreateManyBandInputEnvelope> = z
  .object({
    data: z.union([z.lazy(() => GigCreateManyBandInputSchema), z.lazy(() => GigCreateManyBandInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const BandVoiceCreateWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceCreateWithoutBandInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrument: z.lazy(() => InstrumentCreateNestedOneWithoutBandVoicesInputSchema),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutBandVoiceInputSchema).optional()
  })
  .strict();

export const BandVoiceUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateWithoutBandInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      instrumentId: z.string(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInputSchema).optional()
    })
    .strict();

export const BandVoiceCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceCreateOrConnectWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => BandVoiceCreateWithoutBandInputSchema),
        z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema)
      ])
    })
    .strict();

export const BandVoiceCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.BandVoiceCreateManyBandInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BandVoiceCreateManyBandInputSchema),
      z.lazy(() => BandVoiceCreateManyBandInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const MembershipCreateWithoutBandInputSchema: z.ZodType<Prisma.MembershipCreateWithoutBandInput> = z
  .object({
    id: z.string().uuid().optional(),
    isAdmin: z.boolean().optional(),
    player: z.lazy(() => PlayerCreateNestedOneWithoutMembershipsInputSchema)
  })
  .strict();

export const MembershipUncheckedCreateWithoutBandInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateWithoutBandInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      isAdmin: z.boolean().optional(),
      playerId: z.string()
    })
    .strict();

export const MembershipCreateOrConnectWithoutBandInputSchema: z.ZodType<Prisma.MembershipCreateOrConnectWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => MembershipWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => MembershipCreateWithoutBandInputSchema),
        z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema)
      ])
    })
    .strict();

export const MembershipCreateManyBandInputEnvelopeSchema: z.ZodType<Prisma.MembershipCreateManyBandInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MembershipCreateManyBandInputSchema),
      z.lazy(() => MembershipCreateManyBandInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const GigUpsertWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.GigUpsertWithWhereUniqueWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => GigWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => GigUpdateWithoutBandInputSchema),
        z.lazy(() => GigUncheckedUpdateWithoutBandInputSchema)
      ]),
      create: z.union([
        z.lazy(() => GigCreateWithoutBandInputSchema),
        z.lazy(() => GigUncheckedCreateWithoutBandInputSchema)
      ])
    })
    .strict();

export const GigUpdateWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.GigUpdateWithWhereUniqueWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => GigWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => GigUpdateWithoutBandInputSchema),
        z.lazy(() => GigUncheckedUpdateWithoutBandInputSchema)
      ])
    })
    .strict();

export const GigUpdateManyWithWhereWithoutBandInputSchema: z.ZodType<Prisma.GigUpdateManyWithWhereWithoutBandInput> = z
  .object({
    where: z.lazy(() => GigScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => GigUpdateManyMutationInputSchema),
      z.lazy(() => GigUncheckedUpdateManyWithoutGigsInputSchema)
    ])
  })
  .strict();

export const GigScalarWhereInputSchema: z.ZodType<Prisma.GigScalarWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => GigScalarWhereInputSchema), z.lazy(() => GigScalarWhereInputSchema).array()]).optional(),
    OR: z
      .lazy(() => GigScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => GigScalarWhereInputSchema), z.lazy(() => GigScalarWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    bandId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    date: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    location: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    playable: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional()
  })
  .strict();

export const BandVoiceUpsertWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUpsertWithWhereUniqueWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => BandVoiceUpdateWithoutBandInputSchema),
        z.lazy(() => BandVoiceUncheckedUpdateWithoutBandInputSchema)
      ]),
      create: z.union([
        z.lazy(() => BandVoiceCreateWithoutBandInputSchema),
        z.lazy(() => BandVoiceUncheckedCreateWithoutBandInputSchema)
      ])
    })
    .strict();

export const BandVoiceUpdateWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithWhereUniqueWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => BandVoiceUpdateWithoutBandInputSchema),
        z.lazy(() => BandVoiceUncheckedUpdateWithoutBandInputSchema)
      ])
    })
    .strict();

export const BandVoiceUpdateManyWithWhereWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyWithWhereWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => BandVoiceUpdateManyMutationInputSchema),
        z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandVoicesInputSchema)
      ])
    })
    .strict();

export const BandVoiceScalarWhereInputSchema: z.ZodType<Prisma.BandVoiceScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => BandVoiceScalarWhereInputSchema), z.lazy(() => BandVoiceScalarWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => BandVoiceScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => BandVoiceScalarWhereInputSchema), z.lazy(() => BandVoiceScalarWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrumentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    bandId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const MembershipUpsertWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.MembershipUpsertWithWhereUniqueWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => MembershipWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => MembershipUpdateWithoutBandInputSchema),
        z.lazy(() => MembershipUncheckedUpdateWithoutBandInputSchema)
      ]),
      create: z.union([
        z.lazy(() => MembershipCreateWithoutBandInputSchema),
        z.lazy(() => MembershipUncheckedCreateWithoutBandInputSchema)
      ])
    })
    .strict();

export const MembershipUpdateWithWhereUniqueWithoutBandInputSchema: z.ZodType<Prisma.MembershipUpdateWithWhereUniqueWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => MembershipWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => MembershipUpdateWithoutBandInputSchema),
        z.lazy(() => MembershipUncheckedUpdateWithoutBandInputSchema)
      ])
    })
    .strict();

export const MembershipUpdateManyWithWhereWithoutBandInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithWhereWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => MembershipScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => MembershipUpdateManyMutationInputSchema),
        z.lazy(() => MembershipUncheckedUpdateManyWithoutMembershipsInputSchema)
      ])
    })
    .strict();

export const MembershipScalarWhereInputSchema: z.ZodType<Prisma.MembershipScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => MembershipScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => MembershipScalarWhereInputSchema), z.lazy(() => MembershipScalarWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    isAdmin: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    bandId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    playerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const UserCreateWithoutPlayerInputSchema: z.ZodType<Prisma.UserCreateWithoutPlayerInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
    key: z.lazy(() => KeyCreateNestedManyWithoutUserInputSchema).optional(),
    otp: z.lazy(() => TokenCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPlayerInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    email_verified: z.boolean().optional(),
    has_password: z.boolean().optional(),
    auth_session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    key: z.lazy(() => KeyUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    otp: z.lazy(() => TokenUncheckedCreateNestedOneWithoutUserInputSchema).optional()
  })
  .strict();

export const UserCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPlayerInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPlayerInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutPlayerInputSchema)
    ])
  })
  .strict();

export const PresenceCreateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceCreateWithoutPlayerInput> = z
  .object({
    id: z.string().uuid().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    gig: z.lazy(() => GigCreateNestedOneWithoutPresencesInputSchema),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceCreateNestedManyWithoutPresenceInputSchema).optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceCreateNestedManyWithoutPresenceInputSchema)
      .optional()
  })
  .strict();

export const PresenceUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateWithoutPlayerInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      value: z.boolean().optional(),
      isOrganizer: z.boolean().optional(),
      gigId: z.string(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema)
        .optional(),
      formationUndefinedVoicePresence: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema)
        .optional()
    })
    .strict();

export const PresenceCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceCreateOrConnectWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => PresenceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PresenceCreateWithoutPlayerInputSchema),
        z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema)
      ])
    })
    .strict();

export const PresenceCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.PresenceCreateManyPlayerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PresenceCreateManyPlayerInputSchema),
      z.lazy(() => PresenceCreateManyPlayerInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const RoleCreateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleCreateWithoutPlayerInput> = z
  .object({
    id: z.string().uuid().optional(),
    playable: z.boolean().optional(),
    instrument: z.lazy(() => InstrumentCreateNestedOneWithoutRolesInputSchema)
  })
  .strict();

export const RoleUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutPlayerInput> = z
  .object({
    id: z.string().uuid().optional(),
    playable: z.boolean().optional(),
    instrumentId: z.string()
  })
  .strict();

export const RoleCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutPlayerInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutPlayerInputSchema),
      z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema)
    ])
  })
  .strict();

export const RoleCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyPlayerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RoleCreateManyPlayerInputSchema),
      z.lazy(() => RoleCreateManyPlayerInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const MembershipCreateWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipCreateWithoutPlayerInput> = z
  .object({
    id: z.string().uuid().optional(),
    isAdmin: z.boolean().optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutMembershipsInputSchema)
  })
  .strict();

export const MembershipUncheckedCreateWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUncheckedCreateWithoutPlayerInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      isAdmin: z.boolean().optional(),
      bandId: z.string()
    })
    .strict();

export const MembershipCreateOrConnectWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipCreateOrConnectWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => MembershipWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => MembershipCreateWithoutPlayerInputSchema),
        z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema)
      ])
    })
    .strict();

export const MembershipCreateManyPlayerInputEnvelopeSchema: z.ZodType<Prisma.MembershipCreateManyPlayerInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => MembershipCreateManyPlayerInputSchema),
        z.lazy(() => MembershipCreateManyPlayerInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const UserUpsertWithoutPlayerInputSchema: z.ZodType<Prisma.UserUpsertWithoutPlayerInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPlayerInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPlayerInputSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPlayerInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutPlayerInputSchema)
    ])
  })
  .strict();

export const UserUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.UserUpdateWithoutPlayerInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    auth_session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
    key: z.lazy(() => KeyUpdateManyWithoutUserNestedInputSchema).optional(),
    otp: z.lazy(() => TokenUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const UserUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPlayerInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email_verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    has_password: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    auth_session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    key: z.lazy(() => KeyUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    otp: z.lazy(() => TokenUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
  })
  .strict();

export const PresenceUpsertWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpsertWithWhereUniqueWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => PresenceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => PresenceUpdateWithoutPlayerInputSchema),
        z.lazy(() => PresenceUncheckedUpdateWithoutPlayerInputSchema)
      ]),
      create: z.union([
        z.lazy(() => PresenceCreateWithoutPlayerInputSchema),
        z.lazy(() => PresenceUncheckedCreateWithoutPlayerInputSchema)
      ])
    })
    .strict();

export const PresenceUpdateWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpdateWithWhereUniqueWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => PresenceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => PresenceUpdateWithoutPlayerInputSchema),
        z.lazy(() => PresenceUncheckedUpdateWithoutPlayerInputSchema)
      ])
    })
    .strict();

export const PresenceUpdateManyWithWhereWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpdateManyWithWhereWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => PresenceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => PresenceUpdateManyMutationInputSchema),
        z.lazy(() => PresenceUncheckedUpdateManyWithoutPresencesInputSchema)
      ])
    })
    .strict();

export const PresenceScalarWhereInputSchema: z.ZodType<Prisma.PresenceScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => PresenceScalarWhereInputSchema), z.lazy(() => PresenceScalarWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => PresenceScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => PresenceScalarWhereInputSchema), z.lazy(() => PresenceScalarWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    value: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    isOrganizer: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    gigId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    playerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const RoleUpsertWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => RoleUpdateWithoutPlayerInputSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutPlayerInputSchema)
      ]),
      create: z.union([
        z.lazy(() => RoleCreateWithoutPlayerInputSchema),
        z.lazy(() => RoleUncheckedCreateWithoutPlayerInputSchema)
      ])
    })
    .strict();

export const RoleUpdateWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => RoleUpdateWithoutPlayerInputSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutPlayerInputSchema)
      ])
    })
    .strict();

export const RoleUpdateManyWithWhereWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => RoleScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => RoleUpdateManyMutationInputSchema),
        z.lazy(() => RoleUncheckedUpdateManyWithoutRolesInputSchema)
      ])
    })
    .strict();

export const RoleScalarWhereInputSchema: z.ZodType<Prisma.RoleScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => RoleScalarWhereInputSchema), z.lazy(() => RoleScalarWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => RoleScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => RoleScalarWhereInputSchema), z.lazy(() => RoleScalarWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    playable: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    instrumentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    playerId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const MembershipUpsertWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUpsertWithWhereUniqueWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => MembershipWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => MembershipUpdateWithoutPlayerInputSchema),
        z.lazy(() => MembershipUncheckedUpdateWithoutPlayerInputSchema)
      ]),
      create: z.union([
        z.lazy(() => MembershipCreateWithoutPlayerInputSchema),
        z.lazy(() => MembershipUncheckedCreateWithoutPlayerInputSchema)
      ])
    })
    .strict();

export const MembershipUpdateWithWhereUniqueWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUpdateWithWhereUniqueWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => MembershipWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => MembershipUpdateWithoutPlayerInputSchema),
        z.lazy(() => MembershipUncheckedUpdateWithoutPlayerInputSchema)
      ])
    })
    .strict();

export const MembershipUpdateManyWithWhereWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUpdateManyWithWhereWithoutPlayerInput> =
  z
    .object({
      where: z.lazy(() => MembershipScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => MembershipUpdateManyMutationInputSchema),
        z.lazy(() => MembershipUncheckedUpdateManyWithoutMembershipsInputSchema)
      ])
    })
    .strict();

export const BandCreateWithoutMembershipsInputSchema: z.ZodType<Prisma.BandCreateWithoutMembershipsInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutBandInputSchema).optional()
  })
  .strict();

export const BandUncheckedCreateWithoutMembershipsInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutMembershipsInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
      bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional()
    })
    .strict();

export const BandCreateOrConnectWithoutMembershipsInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutMembershipsInput> =
  z
    .object({
      where: z.lazy(() => BandWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => BandCreateWithoutMembershipsInputSchema),
        z.lazy(() => BandUncheckedCreateWithoutMembershipsInputSchema)
      ])
    })
    .strict();

export const PlayerCreateWithoutMembershipsInputSchema: z.ZodType<Prisma.PlayerCreateWithoutMembershipsInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutPlayerInputSchema),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
    roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedCreateWithoutMembershipsInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutMembershipsInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      userId: z.string(),
      name: z.string(),
      presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
      roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
    })
    .strict();

export const PlayerCreateOrConnectWithoutMembershipsInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutMembershipsInput> =
  z
    .object({
      where: z.lazy(() => PlayerWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PlayerCreateWithoutMembershipsInputSchema),
        z.lazy(() => PlayerUncheckedCreateWithoutMembershipsInputSchema)
      ])
    })
    .strict();

export const BandUpsertWithoutMembershipsInputSchema: z.ZodType<Prisma.BandUpsertWithoutMembershipsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BandUpdateWithoutMembershipsInputSchema),
      z.lazy(() => BandUncheckedUpdateWithoutMembershipsInputSchema)
    ]),
    create: z.union([
      z.lazy(() => BandCreateWithoutMembershipsInputSchema),
      z.lazy(() => BandUncheckedCreateWithoutMembershipsInputSchema)
    ])
  })
  .strict();

export const BandUpdateWithoutMembershipsInputSchema: z.ZodType<Prisma.BandUpdateWithoutMembershipsInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutBandNestedInputSchema).optional()
  })
  .strict();

export const BandUncheckedUpdateWithoutMembershipsInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutMembershipsInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
      bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
    })
    .strict();

export const PlayerUpsertWithoutMembershipsInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutMembershipsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PlayerUpdateWithoutMembershipsInputSchema),
      z.lazy(() => PlayerUncheckedUpdateWithoutMembershipsInputSchema)
    ]),
    create: z.union([
      z.lazy(() => PlayerCreateWithoutMembershipsInputSchema),
      z.lazy(() => PlayerUncheckedCreateWithoutMembershipsInputSchema)
    ])
  })
  .strict();

export const PlayerUpdateWithoutMembershipsInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutMembershipsInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutPlayerNestedInputSchema).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
    roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedUpdateWithoutMembershipsInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutMembershipsInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
      roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
    })
    .strict();

export const PresenceCreateWithoutGigInputSchema: z.ZodType<Prisma.PresenceCreateWithoutGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    player: z.lazy(() => PlayerCreateNestedOneWithoutPresencesInputSchema),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceCreateNestedManyWithoutPresenceInputSchema).optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceCreateNestedManyWithoutPresenceInputSchema)
      .optional()
  })
  .strict();

export const PresenceUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateWithoutGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    playerId: z.string(),
    formationVoicePresences: z
      .lazy(() => FormationVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema)
      .optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema)
      .optional()
  })
  .strict();

export const PresenceCreateOrConnectWithoutGigInputSchema: z.ZodType<Prisma.PresenceCreateOrConnectWithoutGigInput> = z
  .object({
    where: z.lazy(() => PresenceWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => PresenceCreateWithoutGigInputSchema),
      z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema)
    ])
  })
  .strict();

export const PresenceCreateManyGigInputEnvelopeSchema: z.ZodType<Prisma.PresenceCreateManyGigInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PresenceCreateManyGigInputSchema),
      z.lazy(() => PresenceCreateManyGigInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const BandCreateWithoutGigsInputSchema: z.ZodType<Prisma.BandCreateWithoutGigsInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutBandInputSchema).optional(),
    memberships: z.lazy(() => MembershipCreateNestedManyWithoutBandInputSchema).optional()
  })
  .strict();

export const BandUncheckedCreateWithoutGigsInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutGigsInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutBandInputSchema).optional()
  })
  .strict();

export const BandCreateOrConnectWithoutGigsInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutGigsInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => BandCreateWithoutGigsInputSchema),
      z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema)
    ])
  })
  .strict();

export const GigVoiceCreateWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceCreateWithoutGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrument: z.lazy(() => InstrumentCreateNestedOneWithoutGigVoicesInputSchema)
  })
  .strict();

export const GigVoiceUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateWithoutGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId: z.string()
  })
  .strict();

export const GigVoiceCreateOrConnectWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceCreateOrConnectWithoutGigInput> = z
  .object({
    where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => GigVoiceCreateWithoutGigInputSchema),
      z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema)
    ])
  })
  .strict();

export const GigVoiceCreateManyGigInputEnvelopeSchema: z.ZodType<Prisma.GigVoiceCreateManyGigInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => GigVoiceCreateManyGigInputSchema),
      z.lazy(() => GigVoiceCreateManyGigInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const DisabledVoiceCreateWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceCreateWithoutGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    bandVoice: z.lazy(() => BandVoiceCreateNestedOneWithoutDisabledVoicesInputSchema)
  })
  .strict();

export const DisabledVoiceUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateWithoutGigInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      bandVoiceId: z.string()
    })
    .strict();

export const DisabledVoiceCreateOrConnectWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceCreateOrConnectWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),
        z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema)
      ])
    })
    .strict();

export const DisabledVoiceCreateManyGigInputEnvelopeSchema: z.ZodType<Prisma.DisabledVoiceCreateManyGigInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => DisabledVoiceCreateManyGigInputSchema),
        z.lazy(() => DisabledVoiceCreateManyGigInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const FormationCreateWithoutGigInputSchema: z.ZodType<Prisma.FormationCreateWithoutGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    formationVoices: z.lazy(() => FormationVoiceCreateNestedManyWithoutFormationInputSchema).optional(),
    formationUndefinedVoicePresences: z
      .lazy(() => FormationUndefinedVoicePresenceCreateNestedManyWithoutFormationInputSchema)
      .optional(),
    gigCurrentFrom: z.lazy(() => GigCreateNestedOneWithoutCurrentFormationInputSchema).optional()
  })
  .strict();

export const FormationUncheckedCreateWithoutGigInputSchema: z.ZodType<Prisma.FormationUncheckedCreateWithoutGigInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      gigCurrentFromId: z.string().optional().nullable(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedCreateNestedManyWithoutFormationInputSchema).optional(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutFormationInputSchema)
        .optional()
    })
    .strict();

export const FormationCreateOrConnectWithoutGigInputSchema: z.ZodType<Prisma.FormationCreateOrConnectWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => FormationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationCreateWithoutGigInputSchema),
        z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema)
      ])
    })
    .strict();

export const FormationCreateManyGigInputEnvelopeSchema: z.ZodType<Prisma.FormationCreateManyGigInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => FormationCreateManyGigInputSchema),
      z.lazy(() => FormationCreateManyGigInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const FormationCreateWithoutGigCurrentFromInputSchema: z.ZodType<Prisma.FormationCreateWithoutGigCurrentFromInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationVoices: z.lazy(() => FormationVoiceCreateNestedManyWithoutFormationInputSchema).optional(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceCreateNestedManyWithoutFormationInputSchema)
        .optional(),
      gig: z.lazy(() => GigCreateNestedOneWithoutFormationsInputSchema).optional()
    })
    .strict();

export const FormationUncheckedCreateWithoutGigCurrentFromInputSchema: z.ZodType<Prisma.FormationUncheckedCreateWithoutGigCurrentFromInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      gigId: z.string().optional().nullable(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedCreateNestedManyWithoutFormationInputSchema).optional(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutFormationInputSchema)
        .optional()
    })
    .strict();

export const FormationCreateOrConnectWithoutGigCurrentFromInputSchema: z.ZodType<Prisma.FormationCreateOrConnectWithoutGigCurrentFromInput> =
  z
    .object({
      where: z.lazy(() => FormationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationCreateWithoutGigCurrentFromInputSchema),
        z.lazy(() => FormationUncheckedCreateWithoutGigCurrentFromInputSchema)
      ])
    })
    .strict();

export const PresenceUpsertWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpsertWithWhereUniqueWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => PresenceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => PresenceUpdateWithoutGigInputSchema),
        z.lazy(() => PresenceUncheckedUpdateWithoutGigInputSchema)
      ]),
      create: z.union([
        z.lazy(() => PresenceCreateWithoutGigInputSchema),
        z.lazy(() => PresenceUncheckedCreateWithoutGigInputSchema)
      ])
    })
    .strict();

export const PresenceUpdateWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpdateWithWhereUniqueWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => PresenceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => PresenceUpdateWithoutGigInputSchema),
        z.lazy(() => PresenceUncheckedUpdateWithoutGigInputSchema)
      ])
    })
    .strict();

export const PresenceUpdateManyWithWhereWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpdateManyWithWhereWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => PresenceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => PresenceUpdateManyMutationInputSchema),
        z.lazy(() => PresenceUncheckedUpdateManyWithoutPresencesInputSchema)
      ])
    })
    .strict();

export const BandUpsertWithoutGigsInputSchema: z.ZodType<Prisma.BandUpsertWithoutGigsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BandUpdateWithoutGigsInputSchema),
      z.lazy(() => BandUncheckedUpdateWithoutGigsInputSchema)
    ]),
    create: z.union([
      z.lazy(() => BandCreateWithoutGigsInputSchema),
      z.lazy(() => BandUncheckedCreateWithoutGigsInputSchema)
    ])
  })
  .strict();

export const BandUpdateWithoutGigsInputSchema: z.ZodType<Prisma.BandUpdateWithoutGigsInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutBandNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUpdateManyWithoutBandNestedInputSchema).optional()
  })
  .strict();

export const BandUncheckedUpdateWithoutGigsInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutGigsInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
  })
  .strict();

export const GigVoiceUpsertWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUpsertWithWhereUniqueWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => GigVoiceUpdateWithoutGigInputSchema),
        z.lazy(() => GigVoiceUncheckedUpdateWithoutGigInputSchema)
      ]),
      create: z.union([
        z.lazy(() => GigVoiceCreateWithoutGigInputSchema),
        z.lazy(() => GigVoiceUncheckedCreateWithoutGigInputSchema)
      ])
    })
    .strict();

export const GigVoiceUpdateWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUpdateWithWhereUniqueWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => GigVoiceUpdateWithoutGigInputSchema),
        z.lazy(() => GigVoiceUncheckedUpdateWithoutGigInputSchema)
      ])
    })
    .strict();

export const GigVoiceUpdateManyWithWhereWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyWithWhereWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => GigVoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => GigVoiceUpdateManyMutationInputSchema),
        z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigVoicesInputSchema)
      ])
    })
    .strict();

export const GigVoiceScalarWhereInputSchema: z.ZodType<Prisma.GigVoiceScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => GigVoiceScalarWhereInputSchema), z.lazy(() => GigVoiceScalarWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => GigVoiceScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => GigVoiceScalarWhereInputSchema), z.lazy(() => GigVoiceScalarWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrumentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gigId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const DisabledVoiceUpsertWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUpsertWithWhereUniqueWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => DisabledVoiceUpdateWithoutGigInputSchema),
        z.lazy(() => DisabledVoiceUncheckedUpdateWithoutGigInputSchema)
      ]),
      create: z.union([
        z.lazy(() => DisabledVoiceCreateWithoutGigInputSchema),
        z.lazy(() => DisabledVoiceUncheckedCreateWithoutGigInputSchema)
      ])
    })
    .strict();

export const DisabledVoiceUpdateWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateWithWhereUniqueWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => DisabledVoiceUpdateWithoutGigInputSchema),
        z.lazy(() => DisabledVoiceUncheckedUpdateWithoutGigInputSchema)
      ])
    })
    .strict();

export const DisabledVoiceUpdateManyWithWhereWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyWithWhereWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => DisabledVoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => DisabledVoiceUpdateManyMutationInputSchema),
        z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutDisabledVoicesInputSchema)
      ])
    })
    .strict();

export const DisabledVoiceScalarWhereInputSchema: z.ZodType<Prisma.DisabledVoiceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DisabledVoiceScalarWhereInputSchema),
        z.lazy(() => DisabledVoiceScalarWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => DisabledVoiceScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DisabledVoiceScalarWhereInputSchema),
        z.lazy(() => DisabledVoiceScalarWhereInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gigId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    bandVoiceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const FormationUpsertWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.FormationUpsertWithWhereUniqueWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => FormationWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FormationUpdateWithoutGigInputSchema),
        z.lazy(() => FormationUncheckedUpdateWithoutGigInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationCreateWithoutGigInputSchema),
        z.lazy(() => FormationUncheckedCreateWithoutGigInputSchema)
      ])
    })
    .strict();

export const FormationUpdateWithWhereUniqueWithoutGigInputSchema: z.ZodType<Prisma.FormationUpdateWithWhereUniqueWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => FormationWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FormationUpdateWithoutGigInputSchema),
        z.lazy(() => FormationUncheckedUpdateWithoutGigInputSchema)
      ])
    })
    .strict();

export const FormationUpdateManyWithWhereWithoutGigInputSchema: z.ZodType<Prisma.FormationUpdateManyWithWhereWithoutGigInput> =
  z
    .object({
      where: z.lazy(() => FormationScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FormationUpdateManyMutationInputSchema),
        z.lazy(() => FormationUncheckedUpdateManyWithoutFormationsInputSchema)
      ])
    })
    .strict();

export const FormationScalarWhereInputSchema: z.ZodType<Prisma.FormationScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => FormationScalarWhereInputSchema), z.lazy(() => FormationScalarWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => FormationScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => FormationScalarWhereInputSchema), z.lazy(() => FormationScalarWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    gigId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    gigCurrentFromId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable()
  })
  .strict();

export const FormationUpsertWithoutGigCurrentFromInputSchema: z.ZodType<Prisma.FormationUpsertWithoutGigCurrentFromInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => FormationUpdateWithoutGigCurrentFromInputSchema),
        z.lazy(() => FormationUncheckedUpdateWithoutGigCurrentFromInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationCreateWithoutGigCurrentFromInputSchema),
        z.lazy(() => FormationUncheckedCreateWithoutGigCurrentFromInputSchema)
      ])
    })
    .strict();

export const FormationUpdateWithoutGigCurrentFromInputSchema: z.ZodType<Prisma.FormationUpdateWithoutGigCurrentFromInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoices: z.lazy(() => FormationVoiceUpdateManyWithoutFormationNestedInputSchema).optional(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceUpdateManyWithoutFormationNestedInputSchema)
        .optional(),
      gig: z.lazy(() => GigUpdateOneWithoutFormationsNestedInputSchema).optional()
    })
    .strict();

export const FormationUncheckedUpdateWithoutGigCurrentFromInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateWithoutGigCurrentFromInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutFormationNestedInputSchema).optional(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationNestedInputSchema)
        .optional()
    })
    .strict();

export const GigCreateWithoutPresencesInputSchema: z.ZodType<Prisma.GigCreateWithoutPresencesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    formations: z.lazy(() => FormationCreateNestedManyWithoutGigInputSchema).optional(),
    currentFormation: z.lazy(() => FormationCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
  })
  .strict();

export const GigUncheckedCreateWithoutPresencesInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutPresencesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      bandId: z.string().optional().nullable(),
      date: z.coerce.date(),
      location: z.string(),
      description: z.string().optional().nullable(),
      playable: z.boolean().optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      formations: z.lazy(() => FormationUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      currentFormation: z.lazy(() => FormationUncheckedCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
    })
    .strict();

export const GigCreateOrConnectWithoutPresencesInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutPresencesInput> =
  z
    .object({
      where: z.lazy(() => GigWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => GigCreateWithoutPresencesInputSchema),
        z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema)
      ])
    })
    .strict();

export const PlayerCreateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerCreateWithoutPresencesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutPlayerInputSchema),
    roles: z.lazy(() => RoleCreateNestedManyWithoutPlayerInputSchema).optional(),
    memberships: z.lazy(() => MembershipCreateNestedManyWithoutPlayerInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedCreateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutPresencesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      userId: z.string(),
      name: z.string(),
      roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
      memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
    })
    .strict();

export const PlayerCreateOrConnectWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutPresencesInput> =
  z
    .object({
      where: z.lazy(() => PlayerWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PlayerCreateWithoutPresencesInputSchema),
        z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceCreateWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateWithoutPresenceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationVoice: z.lazy(() => FormationVoiceCreateNestedOneWithoutFormationVoicePresencesInputSchema)
    })
    .strict();

export const FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedCreateWithoutPresenceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationVoiceId: z.string()
    })
    .strict();

export const FormationVoicePresenceCreateOrConnectWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateOrConnectWithoutPresenceInput> =
  z
    .object({
      where: z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceCreateManyPresenceInputEnvelopeSchema: z.ZodType<Prisma.FormationVoicePresenceCreateManyPresenceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FormationVoicePresenceCreateManyPresenceInputSchema),
        z.lazy(() => FormationVoicePresenceCreateManyPresenceInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateWithoutPresenceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formation: z.lazy(() => FormationCreateNestedOneWithoutFormationUndefinedVoicePresencesInputSchema)
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationId: z.string()
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateOrConnectWithoutPresenceInput> =
  z
    .object({
      where: z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema)
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateManyPresenceInputEnvelopeSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateManyPresenceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceCreateManyPresenceInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceCreateManyPresenceInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const GigUpsertWithoutPresencesInputSchema: z.ZodType<Prisma.GigUpsertWithoutPresencesInput> = z
  .object({
    update: z.union([
      z.lazy(() => GigUpdateWithoutPresencesInputSchema),
      z.lazy(() => GigUncheckedUpdateWithoutPresencesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => GigCreateWithoutPresencesInputSchema),
      z.lazy(() => GigUncheckedCreateWithoutPresencesInputSchema)
    ])
  })
  .strict();

export const GigUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.GigUpdateWithoutPresencesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    formations: z.lazy(() => FormationUpdateManyWithoutGigNestedInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
  })
  .strict();

export const GigUncheckedUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutPresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
      location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      description: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      formations: z.lazy(() => FormationUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      currentFormation: z.lazy(() => FormationUncheckedUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
    })
    .strict();

export const PlayerUpsertWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutPresencesInput> = z
  .object({
    update: z.union([
      z.lazy(() => PlayerUpdateWithoutPresencesInputSchema),
      z.lazy(() => PlayerUncheckedUpdateWithoutPresencesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => PlayerCreateWithoutPresencesInputSchema),
      z.lazy(() => PlayerUncheckedCreateWithoutPresencesInputSchema)
    ])
  })
  .strict();

export const PlayerUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutPresencesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutPlayerNestedInputSchema).optional(),
    roles: z.lazy(() => RoleUpdateManyWithoutPlayerNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUpdateManyWithoutPlayerNestedInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedUpdateWithoutPresencesInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutPresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      roles: z.lazy(() => RoleUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
      memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
    })
    .strict();

export const FormationVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpsertWithWhereUniqueWithoutPresenceInput> =
  z
    .object({
      where: z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FormationVoicePresenceUpdateWithoutPresenceInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedUpdateWithoutPresenceInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationVoicePresenceCreateWithoutPresenceInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutPresenceInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateWithWhereUniqueWithoutPresenceInput> =
  z
    .object({
      where: z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FormationVoicePresenceUpdateWithoutPresenceInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedUpdateWithoutPresenceInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateManyWithWhereWithoutPresenceInput> =
  z
    .object({
      where: z.lazy(() => FormationVoicePresenceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FormationVoicePresenceUpdateManyMutationInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoicePresencesInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceScalarWhereInputSchema: z.ZodType<Prisma.FormationVoicePresenceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FormationVoicePresenceScalarWhereInputSchema),
        z.lazy(() => FormationVoicePresenceScalarWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => FormationVoicePresenceScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FormationVoicePresenceScalarWhereInputSchema),
        z.lazy(() => FormationVoicePresenceScalarWhereInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    formationVoiceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    presenceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutPresenceInput> =
  z
    .object({
      where: z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceUpdateWithoutPresenceInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateWithoutPresenceInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutPresenceInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutPresenceInputSchema)
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutPresenceInput> =
  z
    .object({
      where: z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceUpdateWithoutPresenceInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateWithoutPresenceInputSchema)
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutPresenceInput> =
  z
    .object({
      where: z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceUpdateManyMutationInputSchema),
        z.lazy(
          () => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationUndefinedVoicePresenceInputSchema
        )
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceScalarWhereInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema),
          z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      formationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      presenceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
    })
    .strict();

export const InstrumentCreateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutRolesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
  })
  .strict();

export const InstrumentUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutRolesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
    })
    .strict();

export const InstrumentCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutRolesInput> =
  z
    .object({
      where: z.lazy(() => InstrumentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => InstrumentCreateWithoutRolesInputSchema),
        z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema)
      ])
    })
    .strict();

export const PlayerCreateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerCreateWithoutRolesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutPlayerInputSchema),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutPlayerInputSchema).optional(),
    memberships: z.lazy(() => MembershipCreateNestedManyWithoutPlayerInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutRolesInput> = z
  .object({
    id: z.string().uuid().optional(),
    userId: z.string(),
    name: z.string(),
    presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutPlayerInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutPlayerInputSchema).optional()
  })
  .strict();

export const PlayerCreateOrConnectWithoutRolesInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutRolesInput> = z
  .object({
    where: z.lazy(() => PlayerWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => PlayerCreateWithoutRolesInputSchema),
      z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema)
    ])
  })
  .strict();

export const InstrumentUpsertWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUpsertWithoutRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => InstrumentUpdateWithoutRolesInputSchema),
      z.lazy(() => InstrumentUncheckedUpdateWithoutRolesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => InstrumentCreateWithoutRolesInputSchema),
      z.lazy(() => InstrumentUncheckedCreateWithoutRolesInputSchema)
    ])
  })
  .strict();

export const InstrumentUpdateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUpdateWithoutRolesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
  })
  .strict();

export const InstrumentUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutRolesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
    })
    .strict();

export const PlayerUpsertWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => PlayerUpdateWithoutRolesInputSchema),
      z.lazy(() => PlayerUncheckedUpdateWithoutRolesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => PlayerCreateWithoutRolesInputSchema),
      z.lazy(() => PlayerUncheckedCreateWithoutRolesInputSchema)
    ])
  })
  .strict();

export const PlayerUpdateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutRolesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutPlayerNestedInputSchema).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutPlayerNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUpdateManyWithoutPlayerNestedInputSchema).optional()
  })
  .strict();

export const PlayerUncheckedUpdateWithoutRolesInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutRolesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutPlayerNestedInputSchema).optional()
  })
  .strict();

export const RoleCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleCreateWithoutInstrumentInput> = z
  .object({
    id: z.string().uuid().optional(),
    playable: z.boolean().optional(),
    player: z.lazy(() => PlayerCreateNestedOneWithoutRolesInputSchema)
  })
  .strict();

export const RoleUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutInstrumentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      playable: z.boolean().optional(),
      playerId: z.string()
    })
    .strict();

export const RoleCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => RoleCreateWithoutInstrumentInputSchema),
        z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const RoleCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyInstrumentInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RoleCreateManyInstrumentInputSchema),
      z.lazy(() => RoleCreateManyInstrumentInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const BandVoiceCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceCreateWithoutInstrumentInput> = z
  .object({
    id: z.string().uuid().optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutBandVoicesInputSchema),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutBandVoiceInputSchema).optional()
  })
  .strict();

export const BandVoiceUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateWithoutInstrumentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      bandId: z.string(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutBandVoiceInputSchema).optional()
    })
    .strict();

export const BandVoiceCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceCreateOrConnectWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),
        z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const BandVoiceCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.BandVoiceCreateManyInstrumentInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BandVoiceCreateManyInstrumentInputSchema),
        z.lazy(() => BandVoiceCreateManyInstrumentInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const GigVoiceCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceCreateWithoutInstrumentInput> = z
  .object({
    id: z.string().uuid().optional(),
    gig: z.lazy(() => GigCreateNestedOneWithoutGigVoicesInputSchema)
  })
  .strict();

export const GigVoiceUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUncheckedCreateWithoutInstrumentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      gigId: z.string()
    })
    .strict();

export const GigVoiceCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceCreateOrConnectWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),
        z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const GigVoiceCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.GigVoiceCreateManyInstrumentInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => GigVoiceCreateManyInstrumentInputSchema),
        z.lazy(() => GigVoiceCreateManyInstrumentInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const FormationVoiceCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceCreateWithoutInstrumentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formation: z.lazy(() => FormationCreateNestedOneWithoutFormationVoicesInputSchema),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceCreateNestedManyWithoutFormationVoiceInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceUncheckedCreateWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedCreateWithoutInstrumentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationId: z.string(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUncheckedCreateNestedManyWithoutFormationVoiceInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceCreateOrConnectWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceCreateOrConnectWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema),
        z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const FormationVoiceCreateManyInstrumentInputEnvelopeSchema: z.ZodType<Prisma.FormationVoiceCreateManyInstrumentInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FormationVoiceCreateManyInstrumentInputSchema),
        z.lazy(() => FormationVoiceCreateManyInstrumentInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const RoleUpsertWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => RoleUpdateWithoutInstrumentInputSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutInstrumentInputSchema)
      ]),
      create: z.union([
        z.lazy(() => RoleCreateWithoutInstrumentInputSchema),
        z.lazy(() => RoleUncheckedCreateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const RoleUpdateWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => RoleUpdateWithoutInstrumentInputSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const RoleUpdateManyWithWhereWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => RoleScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => RoleUpdateManyMutationInputSchema),
        z.lazy(() => RoleUncheckedUpdateManyWithoutRolesInputSchema)
      ])
    })
    .strict();

export const BandVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUpsertWithWhereUniqueWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => BandVoiceUpdateWithoutInstrumentInputSchema),
        z.lazy(() => BandVoiceUncheckedUpdateWithoutInstrumentInputSchema)
      ]),
      create: z.union([
        z.lazy(() => BandVoiceCreateWithoutInstrumentInputSchema),
        z.lazy(() => BandVoiceUncheckedCreateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const BandVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithWhereUniqueWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => BandVoiceUpdateWithoutInstrumentInputSchema),
        z.lazy(() => BandVoiceUncheckedUpdateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const BandVoiceUpdateManyWithWhereWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUpdateManyWithWhereWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => BandVoiceUpdateManyMutationInputSchema),
        z.lazy(() => BandVoiceUncheckedUpdateManyWithoutBandVoicesInputSchema)
      ])
    })
    .strict();

export const GigVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUpsertWithWhereUniqueWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => GigVoiceUpdateWithoutInstrumentInputSchema),
        z.lazy(() => GigVoiceUncheckedUpdateWithoutInstrumentInputSchema)
      ]),
      create: z.union([
        z.lazy(() => GigVoiceCreateWithoutInstrumentInputSchema),
        z.lazy(() => GigVoiceUncheckedCreateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const GigVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUpdateWithWhereUniqueWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => GigVoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => GigVoiceUpdateWithoutInstrumentInputSchema),
        z.lazy(() => GigVoiceUncheckedUpdateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const GigVoiceUpdateManyWithWhereWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUpdateManyWithWhereWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => GigVoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => GigVoiceUpdateManyMutationInputSchema),
        z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigVoicesInputSchema)
      ])
    })
    .strict();

export const FormationVoiceUpsertWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceUpsertWithWhereUniqueWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FormationVoiceUpdateWithoutInstrumentInputSchema),
        z.lazy(() => FormationVoiceUncheckedUpdateWithoutInstrumentInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationVoiceCreateWithoutInstrumentInputSchema),
        z.lazy(() => FormationVoiceUncheckedCreateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const FormationVoiceUpdateWithWhereUniqueWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceUpdateWithWhereUniqueWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FormationVoiceUpdateWithoutInstrumentInputSchema),
        z.lazy(() => FormationVoiceUncheckedUpdateWithoutInstrumentInputSchema)
      ])
    })
    .strict();

export const FormationVoiceUpdateManyWithWhereWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceUpdateManyWithWhereWithoutInstrumentInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FormationVoiceUpdateManyMutationInputSchema),
        z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutFormationVoicesInputSchema)
      ])
    })
    .strict();

export const FormationVoiceScalarWhereInputSchema: z.ZodType<Prisma.FormationVoiceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FormationVoiceScalarWhereInputSchema),
        z.lazy(() => FormationVoiceScalarWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => FormationVoiceScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FormationVoiceScalarWhereInputSchema),
        z.lazy(() => FormationVoiceScalarWhereInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    formationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    instrumentId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export const InstrumentCreateWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutGigVoicesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    roles: z.lazy(() => RoleCreateNestedManyWithoutInstrumentInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
  })
  .strict();

export const InstrumentUncheckedCreateWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutGigVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
      bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
    })
    .strict();

export const InstrumentCreateOrConnectWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutGigVoicesInput> =
  z
    .object({
      where: z.lazy(() => InstrumentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => InstrumentCreateWithoutGigVoicesInputSchema),
        z.lazy(() => InstrumentUncheckedCreateWithoutGigVoicesInputSchema)
      ])
    })
    .strict();

export const GigCreateWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigCreateWithoutGigVoicesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    formations: z.lazy(() => FormationCreateNestedManyWithoutGigInputSchema).optional(),
    currentFormation: z.lazy(() => FormationCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
  })
  .strict();

export const GigUncheckedCreateWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutGigVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      bandId: z.string().optional().nullable(),
      date: z.coerce.date(),
      location: z.string(),
      description: z.string().optional().nullable(),
      playable: z.boolean().optional(),
      presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      formations: z.lazy(() => FormationUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      currentFormation: z.lazy(() => FormationUncheckedCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
    })
    .strict();

export const GigCreateOrConnectWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutGigVoicesInput> =
  z
    .object({
      where: z.lazy(() => GigWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => GigCreateWithoutGigVoicesInputSchema),
        z.lazy(() => GigUncheckedCreateWithoutGigVoicesInputSchema)
      ])
    })
    .strict();

export const InstrumentUpsertWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentUpsertWithoutGigVoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => InstrumentUpdateWithoutGigVoicesInputSchema),
      z.lazy(() => InstrumentUncheckedUpdateWithoutGigVoicesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => InstrumentCreateWithoutGigVoicesInputSchema),
      z.lazy(() => InstrumentUncheckedCreateWithoutGigVoicesInputSchema)
    ])
  })
  .strict();

export const InstrumentUpdateWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentUpdateWithoutGigVoicesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
  })
  .strict();

export const InstrumentUncheckedUpdateWithoutGigVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutGigVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
    })
    .strict();

export const GigUpsertWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigUpsertWithoutGigVoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => GigUpdateWithoutGigVoicesInputSchema),
      z.lazy(() => GigUncheckedUpdateWithoutGigVoicesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => GigCreateWithoutGigVoicesInputSchema),
      z.lazy(() => GigUncheckedCreateWithoutGigVoicesInputSchema)
    ])
  })
  .strict();

export const GigUpdateWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigUpdateWithoutGigVoicesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
    band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    formations: z.lazy(() => FormationUpdateManyWithoutGigNestedInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
  })
  .strict();

export const GigUncheckedUpdateWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutGigVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
      location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      description: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      formations: z.lazy(() => FormationUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      currentFormation: z.lazy(() => FormationUncheckedUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
    })
    .strict();

export const InstrumentCreateWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutBandVoicesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    roles: z.lazy(() => RoleCreateNestedManyWithoutInstrumentInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
  })
  .strict();

export const InstrumentUncheckedCreateWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutBandVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
    })
    .strict();

export const InstrumentCreateOrConnectWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutBandVoicesInput> =
  z
    .object({
      where: z.lazy(() => InstrumentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => InstrumentCreateWithoutBandVoicesInputSchema),
        z.lazy(() => InstrumentUncheckedCreateWithoutBandVoicesInputSchema)
      ])
    })
    .strict();

export const BandCreateWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandCreateWithoutBandVoicesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    gigs: z.lazy(() => GigCreateNestedManyWithoutBandInputSchema).optional(),
    memberships: z.lazy(() => MembershipCreateNestedManyWithoutBandInputSchema).optional()
  })
  .strict();

export const BandUncheckedCreateWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandUncheckedCreateWithoutBandVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      gigs: z.lazy(() => GigUncheckedCreateNestedManyWithoutBandInputSchema).optional(),
      memberships: z.lazy(() => MembershipUncheckedCreateNestedManyWithoutBandInputSchema).optional()
    })
    .strict();

export const BandCreateOrConnectWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandCreateOrConnectWithoutBandVoicesInput> =
  z
    .object({
      where: z.lazy(() => BandWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => BandCreateWithoutBandVoicesInputSchema),
        z.lazy(() => BandUncheckedCreateWithoutBandVoicesInputSchema)
      ])
    })
    .strict();

export const DisabledVoiceCreateWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceCreateWithoutBandVoiceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      gig: z.lazy(() => GigCreateNestedOneWithoutDisabledVoicesInputSchema)
    })
    .strict();

export const DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedCreateWithoutBandVoiceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      gigId: z.string()
    })
    .strict();

export const DisabledVoiceCreateOrConnectWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceCreateOrConnectWithoutBandVoiceInput> =
  z
    .object({
      where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),
        z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema)
      ])
    })
    .strict();

export const DisabledVoiceCreateManyBandVoiceInputEnvelopeSchema: z.ZodType<Prisma.DisabledVoiceCreateManyBandVoiceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => DisabledVoiceCreateManyBandVoiceInputSchema),
        z.lazy(() => DisabledVoiceCreateManyBandVoiceInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const InstrumentUpsertWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentUpsertWithoutBandVoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => InstrumentUpdateWithoutBandVoicesInputSchema),
      z.lazy(() => InstrumentUncheckedUpdateWithoutBandVoicesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => InstrumentCreateWithoutBandVoicesInputSchema),
      z.lazy(() => InstrumentUncheckedCreateWithoutBandVoicesInputSchema)
    ])
  })
  .strict();

export const InstrumentUpdateWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentUpdateWithoutBandVoicesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
    formationVoices: z.lazy(() => FormationVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
  })
  .strict();

export const InstrumentUncheckedUpdateWithoutBandVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutBandVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
    })
    .strict();

export const BandUpsertWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandUpsertWithoutBandVoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => BandUpdateWithoutBandVoicesInputSchema),
      z.lazy(() => BandUncheckedUpdateWithoutBandVoicesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => BandCreateWithoutBandVoicesInputSchema),
      z.lazy(() => BandUncheckedCreateWithoutBandVoicesInputSchema)
    ])
  })
  .strict();

export const BandUpdateWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandUpdateWithoutBandVoicesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gigs: z.lazy(() => GigUpdateManyWithoutBandNestedInputSchema).optional(),
    memberships: z.lazy(() => MembershipUpdateManyWithoutBandNestedInputSchema).optional()
  })
  .strict();

export const BandUncheckedUpdateWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandUncheckedUpdateWithoutBandVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigs: z.lazy(() => GigUncheckedUpdateManyWithoutBandNestedInputSchema).optional(),
      memberships: z.lazy(() => MembershipUncheckedUpdateManyWithoutBandNestedInputSchema).optional()
    })
    .strict();

export const DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUpsertWithWhereUniqueWithoutBandVoiceInput> =
  z
    .object({
      where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => DisabledVoiceUpdateWithoutBandVoiceInputSchema),
        z.lazy(() => DisabledVoiceUncheckedUpdateWithoutBandVoiceInputSchema)
      ]),
      create: z.union([
        z.lazy(() => DisabledVoiceCreateWithoutBandVoiceInputSchema),
        z.lazy(() => DisabledVoiceUncheckedCreateWithoutBandVoiceInputSchema)
      ])
    })
    .strict();

export const DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateWithWhereUniqueWithoutBandVoiceInput> =
  z
    .object({
      where: z.lazy(() => DisabledVoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => DisabledVoiceUpdateWithoutBandVoiceInputSchema),
        z.lazy(() => DisabledVoiceUncheckedUpdateWithoutBandVoiceInputSchema)
      ])
    })
    .strict();

export const DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyWithWhereWithoutBandVoiceInput> =
  z
    .object({
      where: z.lazy(() => DisabledVoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => DisabledVoiceUpdateManyMutationInputSchema),
        z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutDisabledVoicesInputSchema)
      ])
    })
    .strict();

export const GigCreateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigCreateWithoutDisabledVoicesInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    formations: z.lazy(() => FormationCreateNestedManyWithoutGigInputSchema).optional(),
    currentFormation: z.lazy(() => FormationCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
  })
  .strict();

export const GigUncheckedCreateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutDisabledVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      bandId: z.string().optional().nullable(),
      date: z.coerce.date(),
      location: z.string(),
      description: z.string().optional().nullable(),
      playable: z.boolean().optional(),
      presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      formations: z.lazy(() => FormationUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      currentFormation: z.lazy(() => FormationUncheckedCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
    })
    .strict();

export const GigCreateOrConnectWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutDisabledVoicesInput> =
  z
    .object({
      where: z.lazy(() => GigWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => GigCreateWithoutDisabledVoicesInputSchema),
        z.lazy(() => GigUncheckedCreateWithoutDisabledVoicesInputSchema)
      ])
    })
    .strict();

export const BandVoiceCreateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceCreateWithoutDisabledVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      instrument: z.lazy(() => InstrumentCreateNestedOneWithoutBandVoicesInputSchema),
      band: z.lazy(() => BandCreateNestedOneWithoutBandVoicesInputSchema)
    })
    .strict();

export const BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceUncheckedCreateWithoutDisabledVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      instrumentId: z.string(),
      bandId: z.string()
    })
    .strict();

export const BandVoiceCreateOrConnectWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceCreateOrConnectWithoutDisabledVoicesInput> =
  z
    .object({
      where: z.lazy(() => BandVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => BandVoiceCreateWithoutDisabledVoicesInputSchema),
        z.lazy(() => BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema)
      ])
    })
    .strict();

export const GigUpsertWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigUpsertWithoutDisabledVoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => GigUpdateWithoutDisabledVoicesInputSchema),
      z.lazy(() => GigUncheckedUpdateWithoutDisabledVoicesInputSchema)
    ]),
    create: z.union([
      z.lazy(() => GigCreateWithoutDisabledVoicesInputSchema),
      z.lazy(() => GigUncheckedCreateWithoutDisabledVoicesInputSchema)
    ])
  })
  .strict();

export const GigUpdateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigUpdateWithoutDisabledVoicesInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
    band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    formations: z.lazy(() => FormationUpdateManyWithoutGigNestedInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
  })
  .strict();

export const GigUncheckedUpdateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutDisabledVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
      location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      description: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      formations: z.lazy(() => FormationUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      currentFormation: z.lazy(() => FormationUncheckedUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
    })
    .strict();

export const BandVoiceUpsertWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceUpsertWithoutDisabledVoicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => BandVoiceUpdateWithoutDisabledVoicesInputSchema),
        z.lazy(() => BandVoiceUncheckedUpdateWithoutDisabledVoicesInputSchema)
      ]),
      create: z.union([
        z.lazy(() => BandVoiceCreateWithoutDisabledVoicesInputSchema),
        z.lazy(() => BandVoiceUncheckedCreateWithoutDisabledVoicesInputSchema)
      ])
    })
    .strict();

export const BandVoiceUpdateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithoutDisabledVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
      band: z.lazy(() => BandUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional()
    })
    .strict();

export const BandVoiceUncheckedUpdateWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateWithoutDisabledVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationCreateWithoutFormationVoicesInputSchema: z.ZodType<Prisma.FormationCreateWithoutFormationVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceCreateNestedManyWithoutFormationInputSchema)
        .optional(),
      gig: z.lazy(() => GigCreateNestedOneWithoutFormationsInputSchema).optional(),
      gigCurrentFrom: z.lazy(() => GigCreateNestedOneWithoutCurrentFormationInputSchema).optional()
    })
    .strict();

export const FormationUncheckedCreateWithoutFormationVoicesInputSchema: z.ZodType<Prisma.FormationUncheckedCreateWithoutFormationVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      gigId: z.string().optional().nullable(),
      gigCurrentFromId: z.string().optional().nullable(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutFormationInputSchema)
        .optional()
    })
    .strict();

export const FormationCreateOrConnectWithoutFormationVoicesInputSchema: z.ZodType<Prisma.FormationCreateOrConnectWithoutFormationVoicesInput> =
  z
    .object({
      where: z.lazy(() => FormationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationCreateWithoutFormationVoicesInputSchema),
        z.lazy(() => FormationUncheckedCreateWithoutFormationVoicesInputSchema)
      ])
    })
    .strict();

export const InstrumentCreateWithoutFormationVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateWithoutFormationVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      roles: z.lazy(() => RoleCreateNestedManyWithoutInstrumentInputSchema).optional(),
      bandVoices: z.lazy(() => BandVoiceCreateNestedManyWithoutInstrumentInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutInstrumentInputSchema).optional()
    })
    .strict();

export const InstrumentUncheckedCreateWithoutFormationVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedCreateWithoutFormationVoicesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
      bandVoices: z.lazy(() => BandVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutInstrumentInputSchema).optional()
    })
    .strict();

export const InstrumentCreateOrConnectWithoutFormationVoicesInputSchema: z.ZodType<Prisma.InstrumentCreateOrConnectWithoutFormationVoicesInput> =
  z
    .object({
      where: z.lazy(() => InstrumentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => InstrumentCreateWithoutFormationVoicesInputSchema),
        z.lazy(() => InstrumentUncheckedCreateWithoutFormationVoicesInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceCreateWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateWithoutFormationVoiceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      presence: z.lazy(() => PresenceCreateNestedOneWithoutFormationVoicePresencesInputSchema)
    })
    .strict();

export const FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      presenceId: z.string()
    })
    .strict();

export const FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateOrConnectWithoutFormationVoiceInput> =
  z
    .object({
      where: z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceCreateManyFormationVoiceInputEnvelopeSchema: z.ZodType<Prisma.FormationVoicePresenceCreateManyFormationVoiceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FormationVoicePresenceCreateManyFormationVoiceInputSchema),
        z.lazy(() => FormationVoicePresenceCreateManyFormationVoiceInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const FormationUpsertWithoutFormationVoicesInputSchema: z.ZodType<Prisma.FormationUpsertWithoutFormationVoicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => FormationUpdateWithoutFormationVoicesInputSchema),
        z.lazy(() => FormationUncheckedUpdateWithoutFormationVoicesInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationCreateWithoutFormationVoicesInputSchema),
        z.lazy(() => FormationUncheckedCreateWithoutFormationVoicesInputSchema)
      ])
    })
    .strict();

export const FormationUpdateWithoutFormationVoicesInputSchema: z.ZodType<Prisma.FormationUpdateWithoutFormationVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceUpdateManyWithoutFormationNestedInputSchema)
        .optional(),
      gig: z.lazy(() => GigUpdateOneWithoutFormationsNestedInputSchema).optional(),
      gigCurrentFrom: z.lazy(() => GigUpdateOneWithoutCurrentFormationNestedInputSchema).optional()
    })
    .strict();

export const FormationUncheckedUpdateWithoutFormationVoicesInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateWithoutFormationVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      gigCurrentFromId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationNestedInputSchema)
        .optional()
    })
    .strict();

export const InstrumentUpsertWithoutFormationVoicesInputSchema: z.ZodType<Prisma.InstrumentUpsertWithoutFormationVoicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => InstrumentUpdateWithoutFormationVoicesInputSchema),
        z.lazy(() => InstrumentUncheckedUpdateWithoutFormationVoicesInputSchema)
      ]),
      create: z.union([
        z.lazy(() => InstrumentCreateWithoutFormationVoicesInputSchema),
        z.lazy(() => InstrumentUncheckedCreateWithoutFormationVoicesInputSchema)
      ])
    })
    .strict();

export const InstrumentUpdateWithoutFormationVoicesInputSchema: z.ZodType<Prisma.InstrumentUpdateWithoutFormationVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      roles: z.lazy(() => RoleUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      bandVoices: z.lazy(() => BandVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutInstrumentNestedInputSchema).optional()
    })
    .strict();

export const InstrumentUncheckedUpdateWithoutFormationVoicesInputSchema: z.ZodType<Prisma.InstrumentUncheckedUpdateWithoutFormationVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      roles: z.lazy(() => RoleUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      bandVoices: z.lazy(() => BandVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutInstrumentNestedInputSchema).optional()
    })
    .strict();

export const FormationVoicePresenceUpsertWithWhereUniqueWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpsertWithWhereUniqueWithoutFormationVoiceInput> =
  z
    .object({
      where: z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FormationVoicePresenceUpdateWithoutFormationVoiceInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedUpdateWithoutFormationVoiceInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationVoicePresenceCreateWithoutFormationVoiceInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedCreateWithoutFormationVoiceInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceUpdateWithWhereUniqueWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateWithWhereUniqueWithoutFormationVoiceInput> =
  z
    .object({
      where: z.lazy(() => FormationVoicePresenceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FormationVoicePresenceUpdateWithoutFormationVoiceInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedUpdateWithoutFormationVoiceInputSchema)
      ])
    })
    .strict();

export const FormationVoicePresenceUpdateManyWithWhereWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateManyWithWhereWithoutFormationVoiceInput> =
  z
    .object({
      where: z.lazy(() => FormationVoicePresenceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FormationVoicePresenceUpdateManyMutationInputSchema),
        z.lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoicePresencesInputSchema)
      ])
    })
    .strict();

export const FormationCreateWithoutFormationUndefinedVoicePresencesInputSchema: z.ZodType<Prisma.FormationCreateWithoutFormationUndefinedVoicePresencesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationVoices: z.lazy(() => FormationVoiceCreateNestedManyWithoutFormationInputSchema).optional(),
      gig: z.lazy(() => GigCreateNestedOneWithoutFormationsInputSchema).optional(),
      gigCurrentFrom: z.lazy(() => GigCreateNestedOneWithoutCurrentFormationInputSchema).optional()
    })
    .strict();

export const FormationUncheckedCreateWithoutFormationUndefinedVoicePresencesInputSchema: z.ZodType<Prisma.FormationUncheckedCreateWithoutFormationUndefinedVoicePresencesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      gigId: z.string().optional().nullable(),
      gigCurrentFromId: z.string().optional().nullable(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedCreateNestedManyWithoutFormationInputSchema).optional()
    })
    .strict();

export const FormationCreateOrConnectWithoutFormationUndefinedVoicePresencesInputSchema: z.ZodType<Prisma.FormationCreateOrConnectWithoutFormationUndefinedVoicePresencesInput> =
  z
    .object({
      where: z.lazy(() => FormationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationCreateWithoutFormationUndefinedVoicePresencesInputSchema),
        z.lazy(() => FormationUncheckedCreateWithoutFormationUndefinedVoicePresencesInputSchema)
      ])
    })
    .strict();

export const PresenceCreateWithoutFormationUndefinedVoicePresenceInputSchema: z.ZodType<Prisma.PresenceCreateWithoutFormationUndefinedVoicePresenceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      value: z.boolean().optional(),
      isOrganizer: z.boolean().optional(),
      gig: z.lazy(() => GigCreateNestedOneWithoutPresencesInputSchema),
      player: z.lazy(() => PlayerCreateNestedOneWithoutPresencesInputSchema),
      formationVoicePresences: z.lazy(() => FormationVoicePresenceCreateNestedManyWithoutPresenceInputSchema).optional()
    })
    .strict();

export const PresenceUncheckedCreateWithoutFormationUndefinedVoicePresenceInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateWithoutFormationUndefinedVoicePresenceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      value: z.boolean().optional(),
      isOrganizer: z.boolean().optional(),
      gigId: z.string(),
      playerId: z.string(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema)
        .optional()
    })
    .strict();

export const PresenceCreateOrConnectWithoutFormationUndefinedVoicePresenceInputSchema: z.ZodType<Prisma.PresenceCreateOrConnectWithoutFormationUndefinedVoicePresenceInput> =
  z
    .object({
      where: z.lazy(() => PresenceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PresenceCreateWithoutFormationUndefinedVoicePresenceInputSchema),
        z.lazy(() => PresenceUncheckedCreateWithoutFormationUndefinedVoicePresenceInputSchema)
      ])
    })
    .strict();

export const FormationUpsertWithoutFormationUndefinedVoicePresencesInputSchema: z.ZodType<Prisma.FormationUpsertWithoutFormationUndefinedVoicePresencesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => FormationUpdateWithoutFormationUndefinedVoicePresencesInputSchema),
        z.lazy(() => FormationUncheckedUpdateWithoutFormationUndefinedVoicePresencesInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationCreateWithoutFormationUndefinedVoicePresencesInputSchema),
        z.lazy(() => FormationUncheckedCreateWithoutFormationUndefinedVoicePresencesInputSchema)
      ])
    })
    .strict();

export const FormationUpdateWithoutFormationUndefinedVoicePresencesInputSchema: z.ZodType<Prisma.FormationUpdateWithoutFormationUndefinedVoicePresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoices: z.lazy(() => FormationVoiceUpdateManyWithoutFormationNestedInputSchema).optional(),
      gig: z.lazy(() => GigUpdateOneWithoutFormationsNestedInputSchema).optional(),
      gigCurrentFrom: z.lazy(() => GigUpdateOneWithoutCurrentFormationNestedInputSchema).optional()
    })
    .strict();

export const FormationUncheckedUpdateWithoutFormationUndefinedVoicePresencesInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateWithoutFormationUndefinedVoicePresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      gigCurrentFromId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutFormationNestedInputSchema).optional()
    })
    .strict();

export const PresenceUpsertWithoutFormationUndefinedVoicePresenceInputSchema: z.ZodType<Prisma.PresenceUpsertWithoutFormationUndefinedVoicePresenceInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => PresenceUpdateWithoutFormationUndefinedVoicePresenceInputSchema),
        z.lazy(() => PresenceUncheckedUpdateWithoutFormationUndefinedVoicePresenceInputSchema)
      ]),
      create: z.union([
        z.lazy(() => PresenceCreateWithoutFormationUndefinedVoicePresenceInputSchema),
        z.lazy(() => PresenceUncheckedCreateWithoutFormationUndefinedVoicePresenceInputSchema)
      ])
    })
    .strict();

export const PresenceUpdateWithoutFormationUndefinedVoicePresenceInputSchema: z.ZodType<Prisma.PresenceUpdateWithoutFormationUndefinedVoicePresenceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      gig: z.lazy(() => GigUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
      player: z.lazy(() => PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
      formationVoicePresences: z.lazy(() => FormationVoicePresenceUpdateManyWithoutPresenceNestedInputSchema).optional()
    })
    .strict();

export const PresenceUncheckedUpdateWithoutFormationUndefinedVoicePresenceInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateWithoutFormationUndefinedVoicePresenceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceCreateWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.FormationVoiceCreateWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formation: z.lazy(() => FormationCreateNestedOneWithoutFormationVoicesInputSchema),
      instrument: z.lazy(() => InstrumentCreateNestedOneWithoutFormationVoicesInputSchema)
    })
    .strict();

export const FormationVoiceUncheckedCreateWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedCreateWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationId: z.string(),
      instrumentId: z.string()
    })
    .strict();

export const FormationVoiceCreateOrConnectWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.FormationVoiceCreateOrConnectWithoutFormationVoicePresencesInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationVoiceCreateWithoutFormationVoicePresencesInputSchema),
        z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationVoicePresencesInputSchema)
      ])
    })
    .strict();

export const PresenceCreateWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.PresenceCreateWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      value: z.boolean().optional(),
      isOrganizer: z.boolean().optional(),
      gig: z.lazy(() => GigCreateNestedOneWithoutPresencesInputSchema),
      player: z.lazy(() => PlayerCreateNestedOneWithoutPresencesInputSchema),
      formationUndefinedVoicePresence: z
        .lazy(() => FormationUndefinedVoicePresenceCreateNestedManyWithoutPresenceInputSchema)
        .optional()
    })
    .strict();

export const PresenceUncheckedCreateWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.PresenceUncheckedCreateWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      value: z.boolean().optional(),
      isOrganizer: z.boolean().optional(),
      gigId: z.string(),
      playerId: z.string(),
      formationUndefinedVoicePresence: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedCreateNestedManyWithoutPresenceInputSchema)
        .optional()
    })
    .strict();

export const PresenceCreateOrConnectWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.PresenceCreateOrConnectWithoutFormationVoicePresencesInput> =
  z
    .object({
      where: z.lazy(() => PresenceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PresenceCreateWithoutFormationVoicePresencesInputSchema),
        z.lazy(() => PresenceUncheckedCreateWithoutFormationVoicePresencesInputSchema)
      ])
    })
    .strict();

export const FormationVoiceUpsertWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.FormationVoiceUpsertWithoutFormationVoicePresencesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => FormationVoiceUpdateWithoutFormationVoicePresencesInputSchema),
        z.lazy(() => FormationVoiceUncheckedUpdateWithoutFormationVoicePresencesInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationVoiceCreateWithoutFormationVoicePresencesInputSchema),
        z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationVoicePresencesInputSchema)
      ])
    })
    .strict();

export const FormationVoiceUpdateWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.FormationVoiceUpdateWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formation: z.lazy(() => FormationUpdateOneRequiredWithoutFormationVoicesNestedInputSchema).optional(),
      instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutFormationVoicesNestedInputSchema).optional()
    })
    .strict();

export const FormationVoiceUncheckedUpdateWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedUpdateWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const PresenceUpsertWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.PresenceUpsertWithoutFormationVoicePresencesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => PresenceUpdateWithoutFormationVoicePresencesInputSchema),
        z.lazy(() => PresenceUncheckedUpdateWithoutFormationVoicePresencesInputSchema)
      ]),
      create: z.union([
        z.lazy(() => PresenceCreateWithoutFormationVoicePresencesInputSchema),
        z.lazy(() => PresenceUncheckedCreateWithoutFormationVoicePresencesInputSchema)
      ])
    })
    .strict();

export const PresenceUpdateWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.PresenceUpdateWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      gig: z.lazy(() => GigUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
      player: z.lazy(() => PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
      formationUndefinedVoicePresence: z
        .lazy(() => FormationUndefinedVoicePresenceUpdateManyWithoutPresenceNestedInputSchema)
        .optional()
    })
    .strict();

export const PresenceUncheckedUpdateWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationUndefinedVoicePresence: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceCreateWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceCreateWithoutFormationInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      instrument: z.lazy(() => InstrumentCreateNestedOneWithoutFormationVoicesInputSchema),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceCreateNestedManyWithoutFormationVoiceInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceUncheckedCreateWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedCreateWithoutFormationInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      instrumentId: z.string(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUncheckedCreateNestedManyWithoutFormationVoiceInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceCreateOrConnectWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceCreateOrConnectWithoutFormationInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema),
        z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema)
      ])
    })
    .strict();

export const FormationVoiceCreateManyFormationInputEnvelopeSchema: z.ZodType<Prisma.FormationVoiceCreateManyFormationInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FormationVoiceCreateManyFormationInputSchema),
        z.lazy(() => FormationVoiceCreateManyFormationInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateWithoutFormationInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      presence: z.lazy(() => PresenceCreateNestedOneWithoutFormationUndefinedVoicePresenceInputSchema)
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      presenceId: z.string()
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateOrConnectWithoutFormationInput> =
  z
    .object({
      where: z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema)
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateManyFormationInputEnvelopeSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateManyFormationInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceCreateManyFormationInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceCreateManyFormationInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const GigCreateWithoutFormationsInputSchema: z.ZodType<Prisma.GigCreateWithoutFormationsInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    currentFormation: z.lazy(() => FormationCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
  })
  .strict();

export const GigUncheckedCreateWithoutFormationsInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutFormationsInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      bandId: z.string().optional().nullable(),
      date: z.coerce.date(),
      location: z.string(),
      description: z.string().optional().nullable(),
      playable: z.boolean().optional(),
      presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      currentFormation: z.lazy(() => FormationUncheckedCreateNestedOneWithoutGigCurrentFromInputSchema).optional()
    })
    .strict();

export const GigCreateOrConnectWithoutFormationsInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutFormationsInput> =
  z
    .object({
      where: z.lazy(() => GigWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => GigCreateWithoutFormationsInputSchema),
        z.lazy(() => GigUncheckedCreateWithoutFormationsInputSchema)
      ])
    })
    .strict();

export const GigCreateWithoutCurrentFormationInputSchema: z.ZodType<Prisma.GigCreateWithoutCurrentFormationInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional(),
    presences: z.lazy(() => PresenceCreateNestedManyWithoutGigInputSchema).optional(),
    band: z.lazy(() => BandCreateNestedOneWithoutGigsInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceCreateNestedManyWithoutGigInputSchema).optional(),
    formations: z.lazy(() => FormationCreateNestedManyWithoutGigInputSchema).optional()
  })
  .strict();

export const GigUncheckedCreateWithoutCurrentFormationInputSchema: z.ZodType<Prisma.GigUncheckedCreateWithoutCurrentFormationInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      bandId: z.string().optional().nullable(),
      date: z.coerce.date(),
      location: z.string(),
      description: z.string().optional().nullable(),
      playable: z.boolean().optional(),
      presences: z.lazy(() => PresenceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedCreateNestedManyWithoutGigInputSchema).optional(),
      formations: z.lazy(() => FormationUncheckedCreateNestedManyWithoutGigInputSchema).optional()
    })
    .strict();

export const GigCreateOrConnectWithoutCurrentFormationInputSchema: z.ZodType<Prisma.GigCreateOrConnectWithoutCurrentFormationInput> =
  z
    .object({
      where: z.lazy(() => GigWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => GigCreateWithoutCurrentFormationInputSchema),
        z.lazy(() => GigUncheckedCreateWithoutCurrentFormationInputSchema)
      ])
    })
    .strict();

export const FormationVoiceUpsertWithWhereUniqueWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceUpsertWithWhereUniqueWithoutFormationInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FormationVoiceUpdateWithoutFormationInputSchema),
        z.lazy(() => FormationVoiceUncheckedUpdateWithoutFormationInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationVoiceCreateWithoutFormationInputSchema),
        z.lazy(() => FormationVoiceUncheckedCreateWithoutFormationInputSchema)
      ])
    })
    .strict();

export const FormationVoiceUpdateWithWhereUniqueWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceUpdateWithWhereUniqueWithoutFormationInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FormationVoiceUpdateWithoutFormationInputSchema),
        z.lazy(() => FormationVoiceUncheckedUpdateWithoutFormationInputSchema)
      ])
    })
    .strict();

export const FormationVoiceUpdateManyWithWhereWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceUpdateManyWithWhereWithoutFormationInput> =
  z
    .object({
      where: z.lazy(() => FormationVoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FormationVoiceUpdateManyMutationInputSchema),
        z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutFormationVoicesInputSchema)
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpsertWithWhereUniqueWithoutFormationInput> =
  z
    .object({
      where: z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceUpdateWithoutFormationInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateWithoutFormationInputSchema)
      ]),
      create: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceCreateWithoutFormationInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceUncheckedCreateWithoutFormationInputSchema)
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateWithWhereUniqueWithoutFormationInput> =
  z
    .object({
      where: z.lazy(() => FormationUndefinedVoicePresenceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceUpdateWithoutFormationInputSchema),
        z.lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateWithoutFormationInputSchema)
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateManyWithWhereWithoutFormationInput> =
  z
    .object({
      where: z.lazy(() => FormationUndefinedVoicePresenceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => FormationUndefinedVoicePresenceUpdateManyMutationInputSchema),
        z.lazy(
          () => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationUndefinedVoicePresencesInputSchema
        )
      ])
    })
    .strict();

export const GigUpsertWithoutFormationsInputSchema: z.ZodType<Prisma.GigUpsertWithoutFormationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => GigUpdateWithoutFormationsInputSchema),
      z.lazy(() => GigUncheckedUpdateWithoutFormationsInputSchema)
    ]),
    create: z.union([
      z.lazy(() => GigCreateWithoutFormationsInputSchema),
      z.lazy(() => GigUncheckedCreateWithoutFormationsInputSchema)
    ])
  })
  .strict();

export const GigUpdateWithoutFormationsInputSchema: z.ZodType<Prisma.GigUpdateWithoutFormationsInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
    band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
  })
  .strict();

export const GigUncheckedUpdateWithoutFormationsInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutFormationsInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
      location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      description: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      currentFormation: z.lazy(() => FormationUncheckedUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
    })
    .strict();

export const GigUpsertWithoutCurrentFormationInputSchema: z.ZodType<Prisma.GigUpsertWithoutCurrentFormationInput> = z
  .object({
    update: z.union([
      z.lazy(() => GigUpdateWithoutCurrentFormationInputSchema),
      z.lazy(() => GigUncheckedUpdateWithoutCurrentFormationInputSchema)
    ]),
    create: z.union([
      z.lazy(() => GigCreateWithoutCurrentFormationInputSchema),
      z.lazy(() => GigUncheckedCreateWithoutCurrentFormationInputSchema)
    ])
  })
  .strict();

export const GigUpdateWithoutCurrentFormationInputSchema: z.ZodType<Prisma.GigUpdateWithoutCurrentFormationInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
    band: z.lazy(() => BandUpdateOneWithoutGigsNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    formations: z.lazy(() => FormationUpdateManyWithoutGigNestedInputSchema).optional()
  })
  .strict();

export const GigUncheckedUpdateWithoutCurrentFormationInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutCurrentFormationInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
      location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      description: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
      formations: z.lazy(() => FormationUncheckedUpdateManyWithoutGigNestedInputSchema).optional()
    })
    .strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z
  .object({
    id: z.string(),
    active_expires: z.bigint(),
    idle_expires: z.bigint()
  })
  .strict();

export const KeyCreateManyUserInputSchema: z.ZodType<Prisma.KeyCreateManyUserInput> = z
  .object({
    id: z.string(),
    hashed_password: z.string().optional().nullable()
  })
  .strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    active_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
    idle_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    active_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
    idle_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const SessionUncheckedUpdateManyWithoutAuth_sessionInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutAuth_sessionInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      active_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional(),
      idle_expires: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const KeyUpdateWithoutUserInputSchema: z.ZodType<Prisma.KeyUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    hashed_password: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const KeyUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    hashed_password: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const KeyUncheckedUpdateManyWithoutKeyInputSchema: z.ZodType<Prisma.KeyUncheckedUpdateManyWithoutKeyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    hashed_password: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable()
  })
  .strict();

export const GigCreateManyBandInputSchema: z.ZodType<Prisma.GigCreateManyBandInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional().nullable(),
    playable: z.boolean().optional()
  })
  .strict();

export const BandVoiceCreateManyBandInputSchema: z.ZodType<Prisma.BandVoiceCreateManyBandInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId: z.string()
  })
  .strict();

export const MembershipCreateManyBandInputSchema: z.ZodType<Prisma.MembershipCreateManyBandInput> = z
  .object({
    id: z.string().uuid().optional(),
    isAdmin: z.boolean().optional(),
    playerId: z.string()
  })
  .strict();

export const GigUpdateWithoutBandInputSchema: z.ZodType<Prisma.GigUpdateWithoutBandInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUpdateManyWithoutGigNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutGigNestedInputSchema).optional(),
    formations: z.lazy(() => FormationUpdateManyWithoutGigNestedInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
  })
  .strict();

export const GigUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.GigUncheckedUpdateWithoutBandInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    presences: z.lazy(() => PresenceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
    gigVoices: z.lazy(() => GigVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
    formations: z.lazy(() => FormationUncheckedUpdateManyWithoutGigNestedInputSchema).optional(),
    currentFormation: z.lazy(() => FormationUncheckedUpdateOneWithoutGigCurrentFromNestedInputSchema).optional()
  })
  .strict();

export const GigUncheckedUpdateManyWithoutGigsInputSchema: z.ZodType<Prisma.GigUncheckedUpdateManyWithoutGigsInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    location: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const BandVoiceUpdateWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithoutBandInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutBandVoiceNestedInputSchema).optional()
  })
  .strict();

export const BandVoiceUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateWithoutBandInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInputSchema).optional()
    })
    .strict();

export const BandVoiceUncheckedUpdateManyWithoutBandVoicesInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateManyWithoutBandVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const MembershipUpdateWithoutBandInputSchema: z.ZodType<Prisma.MembershipUpdateWithoutBandInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    player: z.lazy(() => PlayerUpdateOneRequiredWithoutMembershipsNestedInputSchema).optional()
  })
  .strict();

export const MembershipUncheckedUpdateWithoutBandInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateWithoutBandInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const MembershipUncheckedUpdateManyWithoutMembershipsInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateManyWithoutMembershipsInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const PresenceCreateManyPlayerInputSchema: z.ZodType<Prisma.PresenceCreateManyPlayerInput> = z
  .object({
    id: z.string().uuid().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    gigId: z.string()
  })
  .strict();

export const RoleCreateManyPlayerInputSchema: z.ZodType<Prisma.RoleCreateManyPlayerInput> = z
  .object({
    id: z.string().uuid().optional(),
    playable: z.boolean().optional(),
    instrumentId: z.string()
  })
  .strict();

export const MembershipCreateManyPlayerInputSchema: z.ZodType<Prisma.MembershipCreateManyPlayerInput> = z
  .object({
    id: z.string().uuid().optional(),
    isAdmin: z.boolean().optional(),
    bandId: z.string()
  })
  .strict();

export const PresenceUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUpdateWithoutPlayerInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    gig: z.lazy(() => GigUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceUpdateManyWithoutPresenceNestedInputSchema).optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceUpdateManyWithoutPresenceNestedInputSchema)
      .optional()
  })
  .strict();

export const PresenceUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateWithoutPlayerInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema)
        .optional(),
      formationUndefinedVoicePresence: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema)
        .optional()
    })
    .strict();

export const PresenceUncheckedUpdateManyWithoutPresencesInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateManyWithoutPresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const RoleUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUpdateWithoutPlayerInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
  })
  .strict();

export const RoleUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutPlayerInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const RoleUncheckedUpdateManyWithoutRolesInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutRolesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const MembershipUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUpdateWithoutPlayerInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    band: z.lazy(() => BandUpdateOneRequiredWithoutMembershipsNestedInputSchema).optional()
  })
  .strict();

export const MembershipUncheckedUpdateWithoutPlayerInputSchema: z.ZodType<Prisma.MembershipUncheckedUpdateWithoutPlayerInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      isAdmin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      bandId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const PresenceCreateManyGigInputSchema: z.ZodType<Prisma.PresenceCreateManyGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    value: z.boolean().optional(),
    isOrganizer: z.boolean().optional(),
    playerId: z.string()
  })
  .strict();

export const GigVoiceCreateManyGigInputSchema: z.ZodType<Prisma.GigVoiceCreateManyGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId: z.string()
  })
  .strict();

export const DisabledVoiceCreateManyGigInputSchema: z.ZodType<Prisma.DisabledVoiceCreateManyGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    bandVoiceId: z.string()
  })
  .strict();

export const FormationCreateManyGigInputSchema: z.ZodType<Prisma.FormationCreateManyGigInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigCurrentFromId: z.string().optional().nullable()
  })
  .strict();

export const PresenceUpdateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUpdateWithoutGigInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    player: z.lazy(() => PlayerUpdateOneRequiredWithoutPresencesNestedInputSchema).optional(),
    formationVoicePresences: z.lazy(() => FormationVoicePresenceUpdateManyWithoutPresenceNestedInputSchema).optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceUpdateManyWithoutPresenceNestedInputSchema)
      .optional()
  })
  .strict();

export const PresenceUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.PresenceUncheckedUpdateWithoutGigInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    value: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    isOrganizer: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formationVoicePresences: z
      .lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema)
      .optional(),
    formationUndefinedVoicePresence: z
      .lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutPresenceNestedInputSchema)
      .optional()
  })
  .strict();

export const GigVoiceUpdateWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUpdateWithoutGigInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutGigVoicesNestedInputSchema).optional()
  })
  .strict();

export const GigVoiceUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateWithoutGigInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
  })
  .strict();

export const GigVoiceUncheckedUpdateManyWithoutGigVoicesInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateManyWithoutGigVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const DisabledVoiceUpdateWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateWithoutGigInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    bandVoice: z.lazy(() => BandVoiceUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema).optional()
  })
  .strict();

export const DisabledVoiceUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateWithoutGigInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandVoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const DisabledVoiceUncheckedUpdateManyWithoutDisabledVoicesInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateManyWithoutDisabledVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandVoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationUpdateWithoutGigInputSchema: z.ZodType<Prisma.FormationUpdateWithoutGigInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    formationVoices: z.lazy(() => FormationVoiceUpdateManyWithoutFormationNestedInputSchema).optional(),
    formationUndefinedVoicePresences: z
      .lazy(() => FormationUndefinedVoicePresenceUpdateManyWithoutFormationNestedInputSchema)
      .optional(),
    gigCurrentFrom: z.lazy(() => GigUpdateOneWithoutCurrentFormationNestedInputSchema).optional()
  })
  .strict();

export const FormationUncheckedUpdateWithoutGigInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateWithoutGigInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigCurrentFromId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      formationVoices: z.lazy(() => FormationVoiceUncheckedUpdateManyWithoutFormationNestedInputSchema).optional(),
      formationUndefinedVoicePresences: z
        .lazy(() => FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationUncheckedUpdateManyWithoutFormationsInputSchema: z.ZodType<Prisma.FormationUncheckedUpdateManyWithoutFormationsInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigCurrentFromId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable()
    })
    .strict();

export const FormationVoicePresenceCreateManyPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateManyPresenceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationVoiceId: z.string()
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateManyPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateManyPresenceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationId: z.string()
    })
    .strict();

export const FormationVoicePresenceUpdateWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateWithoutPresenceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoice: z
        .lazy(() => FormationVoiceUpdateOneRequiredWithoutFormationVoicePresencesNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationVoicePresenceUncheckedUpdateWithoutPresenceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedUpdateWithoutPresenceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoicePresencesInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoicePresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoiceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateWithoutPresenceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formation: z
        .lazy(() => FormationUpdateOneRequiredWithoutFormationUndefinedVoicePresencesNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedUpdateWithoutPresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedUpdateWithoutPresenceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationUndefinedVoicePresenceInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationUndefinedVoicePresenceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const RoleCreateManyInstrumentInputSchema: z.ZodType<Prisma.RoleCreateManyInstrumentInput> = z
  .object({
    id: z.string().uuid().optional(),
    playable: z.boolean().optional(),
    playerId: z.string()
  })
  .strict();

export const BandVoiceCreateManyInstrumentInputSchema: z.ZodType<Prisma.BandVoiceCreateManyInstrumentInput> = z
  .object({
    id: z.string().uuid().optional(),
    bandId: z.string()
  })
  .strict();

export const GigVoiceCreateManyInstrumentInputSchema: z.ZodType<Prisma.GigVoiceCreateManyInstrumentInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigId: z.string()
  })
  .strict();

export const FormationVoiceCreateManyInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceCreateManyInstrumentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      formationId: z.string()
    })
    .strict();

export const RoleUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUpdateWithoutInstrumentInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
    player: z.lazy(() => PlayerUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
  })
  .strict();

export const RoleUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutInstrumentInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      playable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
      playerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const BandVoiceUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUpdateWithoutInstrumentInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    band: z.lazy(() => BandUpdateOneRequiredWithoutBandVoicesNestedInputSchema).optional(),
    disabledVoices: z.lazy(() => DisabledVoiceUpdateManyWithoutBandVoiceNestedInputSchema).optional()
  })
  .strict();

export const BandVoiceUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.BandVoiceUncheckedUpdateWithoutInstrumentInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      bandId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      disabledVoices: z.lazy(() => DisabledVoiceUncheckedUpdateManyWithoutBandVoiceNestedInputSchema).optional()
    })
    .strict();

export const GigVoiceUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUpdateWithoutInstrumentInput> = z
  .object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    gig: z.lazy(() => GigUpdateOneRequiredWithoutGigVoicesNestedInputSchema).optional()
  })
  .strict();

export const GigVoiceUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.GigVoiceUncheckedUpdateWithoutInstrumentInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationVoiceUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceUpdateWithoutInstrumentInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formation: z.lazy(() => FormationUpdateOneRequiredWithoutFormationVoicesNestedInputSchema).optional(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUpdateManyWithoutFormationVoiceNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceUncheckedUpdateWithoutInstrumentInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedUpdateWithoutInstrumentInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoiceNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceUncheckedUpdateManyWithoutFormationVoicesInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedUpdateManyWithoutFormationVoicesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const DisabledVoiceCreateManyBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceCreateManyBandVoiceInput> = z
  .object({
    id: z.string().uuid().optional(),
    gigId: z.string()
  })
  .strict();

export const DisabledVoiceUpdateWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUpdateWithoutBandVoiceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gig: z.lazy(() => GigUpdateOneRequiredWithoutDisabledVoicesNestedInputSchema).optional()
    })
    .strict();

export const DisabledVoiceUncheckedUpdateWithoutBandVoiceInputSchema: z.ZodType<Prisma.DisabledVoiceUncheckedUpdateWithoutBandVoiceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      gigId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationVoicePresenceCreateManyFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceCreateManyFormationVoiceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      presenceId: z.string()
    })
    .strict();

export const FormationVoicePresenceUpdateWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateWithoutFormationVoiceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presence: z.lazy(() => PresenceUpdateOneRequiredWithoutFormationVoicePresencesNestedInputSchema).optional()
    })
    .strict();

export const FormationVoicePresenceUncheckedUpdateWithoutFormationVoiceInputSchema: z.ZodType<Prisma.FormationVoicePresenceUncheckedUpdateWithoutFormationVoiceInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presenceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationVoiceCreateManyFormationInputSchema: z.ZodType<Prisma.FormationVoiceCreateManyFormationInput> = z
  .object({
    id: z.string().uuid().optional(),
    instrumentId: z.string()
  })
  .strict();

export const FormationUndefinedVoicePresenceCreateManyFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateManyFormationInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      presenceId: z.string()
    })
    .strict();

export const FormationVoiceUpdateWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceUpdateWithoutFormationInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      instrument: z.lazy(() => InstrumentUpdateOneRequiredWithoutFormationVoicesNestedInputSchema).optional(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUpdateManyWithoutFormationVoiceNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationVoiceUncheckedUpdateWithoutFormationInputSchema: z.ZodType<Prisma.FormationVoiceUncheckedUpdateWithoutFormationInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      instrumentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      formationVoicePresences: z
        .lazy(() => FormationVoicePresenceUncheckedUpdateManyWithoutFormationVoiceNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateWithoutFormationInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presence: z
        .lazy(() => PresenceUpdateOneRequiredWithoutFormationUndefinedVoicePresenceNestedInputSchema)
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedUpdateWithoutFormationInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedUpdateWithoutFormationInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presenceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationUndefinedVoicePresencesInputSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUncheckedUpdateManyWithoutFormationUndefinedVoicePresencesInput> =
  z
    .object({
      id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      presenceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const OneTimePasswordFindFirstArgsSchema: z.ZodType<Prisma.OneTimePasswordFindFirstArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    where: OneTimePasswordWhereInputSchema.optional(),
    orderBy: z
      .union([OneTimePasswordOrderByWithRelationInputSchema.array(), OneTimePasswordOrderByWithRelationInputSchema])
      .optional(),
    cursor: OneTimePasswordWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([OneTimePasswordScalarFieldEnumSchema, OneTimePasswordScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const OneTimePasswordFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OneTimePasswordFindFirstOrThrowArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    where: OneTimePasswordWhereInputSchema.optional(),
    orderBy: z
      .union([OneTimePasswordOrderByWithRelationInputSchema.array(), OneTimePasswordOrderByWithRelationInputSchema])
      .optional(),
    cursor: OneTimePasswordWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([OneTimePasswordScalarFieldEnumSchema, OneTimePasswordScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const OneTimePasswordFindManyArgsSchema: z.ZodType<Prisma.OneTimePasswordFindManyArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    where: OneTimePasswordWhereInputSchema.optional(),
    orderBy: z
      .union([OneTimePasswordOrderByWithRelationInputSchema.array(), OneTimePasswordOrderByWithRelationInputSchema])
      .optional(),
    cursor: OneTimePasswordWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([OneTimePasswordScalarFieldEnumSchema, OneTimePasswordScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const OneTimePasswordAggregateArgsSchema: z.ZodType<Prisma.OneTimePasswordAggregateArgs> = z
  .object({
    where: OneTimePasswordWhereInputSchema.optional(),
    orderBy: z
      .union([OneTimePasswordOrderByWithRelationInputSchema.array(), OneTimePasswordOrderByWithRelationInputSchema])
      .optional(),
    cursor: OneTimePasswordWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const OneTimePasswordGroupByArgsSchema: z.ZodType<Prisma.OneTimePasswordGroupByArgs> = z
  .object({
    where: OneTimePasswordWhereInputSchema.optional(),
    orderBy: z
      .union([
        OneTimePasswordOrderByWithAggregationInputSchema.array(),
        OneTimePasswordOrderByWithAggregationInputSchema
      ])
      .optional(),
    by: OneTimePasswordScalarFieldEnumSchema.array(),
    having: OneTimePasswordScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const OneTimePasswordFindUniqueArgsSchema: z.ZodType<Prisma.OneTimePasswordFindUniqueArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    where: OneTimePasswordWhereUniqueInputSchema
  })
  .strict();

export const OneTimePasswordFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OneTimePasswordFindUniqueOrThrowArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    where: OneTimePasswordWhereUniqueInputSchema
  })
  .strict();

export const TokenFindFirstArgsSchema: z.ZodType<Prisma.TokenFindFirstArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    where: TokenWhereInputSchema.optional(),
    orderBy: z.union([TokenOrderByWithRelationInputSchema.array(), TokenOrderByWithRelationInputSchema]).optional(),
    cursor: TokenWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([TokenScalarFieldEnumSchema, TokenScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const TokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TokenFindFirstOrThrowArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    where: TokenWhereInputSchema.optional(),
    orderBy: z.union([TokenOrderByWithRelationInputSchema.array(), TokenOrderByWithRelationInputSchema]).optional(),
    cursor: TokenWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([TokenScalarFieldEnumSchema, TokenScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const TokenFindManyArgsSchema: z.ZodType<Prisma.TokenFindManyArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    where: TokenWhereInputSchema.optional(),
    orderBy: z.union([TokenOrderByWithRelationInputSchema.array(), TokenOrderByWithRelationInputSchema]).optional(),
    cursor: TokenWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([TokenScalarFieldEnumSchema, TokenScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const TokenAggregateArgsSchema: z.ZodType<Prisma.TokenAggregateArgs> = z
  .object({
    where: TokenWhereInputSchema.optional(),
    orderBy: z.union([TokenOrderByWithRelationInputSchema.array(), TokenOrderByWithRelationInputSchema]).optional(),
    cursor: TokenWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const TokenGroupByArgsSchema: z.ZodType<Prisma.TokenGroupByArgs> = z
  .object({
    where: TokenWhereInputSchema.optional(),
    orderBy: z
      .union([TokenOrderByWithAggregationInputSchema.array(), TokenOrderByWithAggregationInputSchema])
      .optional(),
    by: TokenScalarFieldEnumSchema.array(),
    having: TokenScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const TokenFindUniqueArgsSchema: z.ZodType<Prisma.TokenFindUniqueArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    where: TokenWhereUniqueInputSchema
  })
  .strict();

export const TokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TokenFindUniqueOrThrowArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    where: TokenWhereUniqueInputSchema
  })
  .strict();

export const KeyFindFirstArgsSchema: z.ZodType<Prisma.KeyFindFirstArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    where: KeyWhereInputSchema.optional(),
    orderBy: z.union([KeyOrderByWithRelationInputSchema.array(), KeyOrderByWithRelationInputSchema]).optional(),
    cursor: KeyWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([KeyScalarFieldEnumSchema, KeyScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const KeyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.KeyFindFirstOrThrowArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    where: KeyWhereInputSchema.optional(),
    orderBy: z.union([KeyOrderByWithRelationInputSchema.array(), KeyOrderByWithRelationInputSchema]).optional(),
    cursor: KeyWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([KeyScalarFieldEnumSchema, KeyScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const KeyFindManyArgsSchema: z.ZodType<Prisma.KeyFindManyArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    where: KeyWhereInputSchema.optional(),
    orderBy: z.union([KeyOrderByWithRelationInputSchema.array(), KeyOrderByWithRelationInputSchema]).optional(),
    cursor: KeyWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([KeyScalarFieldEnumSchema, KeyScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const KeyAggregateArgsSchema: z.ZodType<Prisma.KeyAggregateArgs> = z
  .object({
    where: KeyWhereInputSchema.optional(),
    orderBy: z.union([KeyOrderByWithRelationInputSchema.array(), KeyOrderByWithRelationInputSchema]).optional(),
    cursor: KeyWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const KeyGroupByArgsSchema: z.ZodType<Prisma.KeyGroupByArgs> = z
  .object({
    where: KeyWhereInputSchema.optional(),
    orderBy: z.union([KeyOrderByWithAggregationInputSchema.array(), KeyOrderByWithAggregationInputSchema]).optional(),
    by: KeyScalarFieldEnumSchema.array(),
    having: KeyScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const KeyFindUniqueArgsSchema: z.ZodType<Prisma.KeyFindUniqueArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    where: KeyWhereUniqueInputSchema
  })
  .strict();

export const KeyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.KeyFindUniqueOrThrowArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    where: KeyWhereUniqueInputSchema
  })
  .strict();

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereInputSchema.optional(),
    orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
    cursor: SessionWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereInputSchema.optional(),
    orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
    cursor: SessionWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereInputSchema.optional(),
    orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
    cursor: SessionWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([SessionScalarFieldEnumSchema, SessionScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z
  .object({
    where: SessionWhereInputSchema.optional(),
    orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
    cursor: SessionWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z
  .object({
    where: SessionWhereInputSchema.optional(),
    orderBy: z
      .union([SessionOrderByWithAggregationInputSchema.array(), SessionOrderByWithAggregationInputSchema])
      .optional(),
    by: SessionScalarFieldEnumSchema.array(),
    having: SessionScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema
  })
  .strict();

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema
  })
  .strict();

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema
  })
  .strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema
  })
  .strict();

export const BandFindFirstArgsSchema: z.ZodType<Prisma.BandFindFirstArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    where: BandWhereInputSchema.optional(),
    orderBy: z.union([BandOrderByWithRelationInputSchema.array(), BandOrderByWithRelationInputSchema]).optional(),
    cursor: BandWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([BandScalarFieldEnumSchema, BandScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const BandFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BandFindFirstOrThrowArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    where: BandWhereInputSchema.optional(),
    orderBy: z.union([BandOrderByWithRelationInputSchema.array(), BandOrderByWithRelationInputSchema]).optional(),
    cursor: BandWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([BandScalarFieldEnumSchema, BandScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const BandFindManyArgsSchema: z.ZodType<Prisma.BandFindManyArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    where: BandWhereInputSchema.optional(),
    orderBy: z.union([BandOrderByWithRelationInputSchema.array(), BandOrderByWithRelationInputSchema]).optional(),
    cursor: BandWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([BandScalarFieldEnumSchema, BandScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const BandAggregateArgsSchema: z.ZodType<Prisma.BandAggregateArgs> = z
  .object({
    where: BandWhereInputSchema.optional(),
    orderBy: z.union([BandOrderByWithRelationInputSchema.array(), BandOrderByWithRelationInputSchema]).optional(),
    cursor: BandWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const BandGroupByArgsSchema: z.ZodType<Prisma.BandGroupByArgs> = z
  .object({
    where: BandWhereInputSchema.optional(),
    orderBy: z.union([BandOrderByWithAggregationInputSchema.array(), BandOrderByWithAggregationInputSchema]).optional(),
    by: BandScalarFieldEnumSchema.array(),
    having: BandScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const BandFindUniqueArgsSchema: z.ZodType<Prisma.BandFindUniqueArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    where: BandWhereUniqueInputSchema
  })
  .strict();

export const BandFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BandFindUniqueOrThrowArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    where: BandWhereUniqueInputSchema
  })
  .strict();

export const PlayerFindFirstArgsSchema: z.ZodType<Prisma.PlayerFindFirstArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    where: PlayerWhereInputSchema.optional(),
    orderBy: z.union([PlayerOrderByWithRelationInputSchema.array(), PlayerOrderByWithRelationInputSchema]).optional(),
    cursor: PlayerWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PlayerScalarFieldEnumSchema, PlayerScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const PlayerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindFirstOrThrowArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    where: PlayerWhereInputSchema.optional(),
    orderBy: z.union([PlayerOrderByWithRelationInputSchema.array(), PlayerOrderByWithRelationInputSchema]).optional(),
    cursor: PlayerWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PlayerScalarFieldEnumSchema, PlayerScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const PlayerFindManyArgsSchema: z.ZodType<Prisma.PlayerFindManyArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    where: PlayerWhereInputSchema.optional(),
    orderBy: z.union([PlayerOrderByWithRelationInputSchema.array(), PlayerOrderByWithRelationInputSchema]).optional(),
    cursor: PlayerWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PlayerScalarFieldEnumSchema, PlayerScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const PlayerAggregateArgsSchema: z.ZodType<Prisma.PlayerAggregateArgs> = z
  .object({
    where: PlayerWhereInputSchema.optional(),
    orderBy: z.union([PlayerOrderByWithRelationInputSchema.array(), PlayerOrderByWithRelationInputSchema]).optional(),
    cursor: PlayerWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const PlayerGroupByArgsSchema: z.ZodType<Prisma.PlayerGroupByArgs> = z
  .object({
    where: PlayerWhereInputSchema.optional(),
    orderBy: z
      .union([PlayerOrderByWithAggregationInputSchema.array(), PlayerOrderByWithAggregationInputSchema])
      .optional(),
    by: PlayerScalarFieldEnumSchema.array(),
    having: PlayerScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const PlayerFindUniqueArgsSchema: z.ZodType<Prisma.PlayerFindUniqueArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    where: PlayerWhereUniqueInputSchema
  })
  .strict();

export const PlayerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindUniqueOrThrowArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    where: PlayerWhereUniqueInputSchema
  })
  .strict();

export const MembershipFindFirstArgsSchema: z.ZodType<Prisma.MembershipFindFirstArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    where: MembershipWhereInputSchema.optional(),
    orderBy: z
      .union([MembershipOrderByWithRelationInputSchema.array(), MembershipOrderByWithRelationInputSchema])
      .optional(),
    cursor: MembershipWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([MembershipScalarFieldEnumSchema, MembershipScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const MembershipFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MembershipFindFirstOrThrowArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    where: MembershipWhereInputSchema.optional(),
    orderBy: z
      .union([MembershipOrderByWithRelationInputSchema.array(), MembershipOrderByWithRelationInputSchema])
      .optional(),
    cursor: MembershipWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([MembershipScalarFieldEnumSchema, MembershipScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const MembershipFindManyArgsSchema: z.ZodType<Prisma.MembershipFindManyArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    where: MembershipWhereInputSchema.optional(),
    orderBy: z
      .union([MembershipOrderByWithRelationInputSchema.array(), MembershipOrderByWithRelationInputSchema])
      .optional(),
    cursor: MembershipWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([MembershipScalarFieldEnumSchema, MembershipScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const MembershipAggregateArgsSchema: z.ZodType<Prisma.MembershipAggregateArgs> = z
  .object({
    where: MembershipWhereInputSchema.optional(),
    orderBy: z
      .union([MembershipOrderByWithRelationInputSchema.array(), MembershipOrderByWithRelationInputSchema])
      .optional(),
    cursor: MembershipWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const MembershipGroupByArgsSchema: z.ZodType<Prisma.MembershipGroupByArgs> = z
  .object({
    where: MembershipWhereInputSchema.optional(),
    orderBy: z
      .union([MembershipOrderByWithAggregationInputSchema.array(), MembershipOrderByWithAggregationInputSchema])
      .optional(),
    by: MembershipScalarFieldEnumSchema.array(),
    having: MembershipScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const MembershipFindUniqueArgsSchema: z.ZodType<Prisma.MembershipFindUniqueArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    where: MembershipWhereUniqueInputSchema
  })
  .strict();

export const MembershipFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MembershipFindUniqueOrThrowArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    where: MembershipWhereUniqueInputSchema
  })
  .strict();

export const GigFindFirstArgsSchema: z.ZodType<Prisma.GigFindFirstArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    where: GigWhereInputSchema.optional(),
    orderBy: z.union([GigOrderByWithRelationInputSchema.array(), GigOrderByWithRelationInputSchema]).optional(),
    cursor: GigWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([GigScalarFieldEnumSchema, GigScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const GigFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GigFindFirstOrThrowArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    where: GigWhereInputSchema.optional(),
    orderBy: z.union([GigOrderByWithRelationInputSchema.array(), GigOrderByWithRelationInputSchema]).optional(),
    cursor: GigWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([GigScalarFieldEnumSchema, GigScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const GigFindManyArgsSchema: z.ZodType<Prisma.GigFindManyArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    where: GigWhereInputSchema.optional(),
    orderBy: z.union([GigOrderByWithRelationInputSchema.array(), GigOrderByWithRelationInputSchema]).optional(),
    cursor: GigWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([GigScalarFieldEnumSchema, GigScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const GigAggregateArgsSchema: z.ZodType<Prisma.GigAggregateArgs> = z
  .object({
    where: GigWhereInputSchema.optional(),
    orderBy: z.union([GigOrderByWithRelationInputSchema.array(), GigOrderByWithRelationInputSchema]).optional(),
    cursor: GigWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const GigGroupByArgsSchema: z.ZodType<Prisma.GigGroupByArgs> = z
  .object({
    where: GigWhereInputSchema.optional(),
    orderBy: z.union([GigOrderByWithAggregationInputSchema.array(), GigOrderByWithAggregationInputSchema]).optional(),
    by: GigScalarFieldEnumSchema.array(),
    having: GigScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const GigFindUniqueArgsSchema: z.ZodType<Prisma.GigFindUniqueArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    where: GigWhereUniqueInputSchema
  })
  .strict();

export const GigFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GigFindUniqueOrThrowArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    where: GigWhereUniqueInputSchema
  })
  .strict();

export const PresenceFindFirstArgsSchema: z.ZodType<Prisma.PresenceFindFirstArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    where: PresenceWhereInputSchema.optional(),
    orderBy: z
      .union([PresenceOrderByWithRelationInputSchema.array(), PresenceOrderByWithRelationInputSchema])
      .optional(),
    cursor: PresenceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PresenceScalarFieldEnumSchema, PresenceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const PresenceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PresenceFindFirstOrThrowArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    where: PresenceWhereInputSchema.optional(),
    orderBy: z
      .union([PresenceOrderByWithRelationInputSchema.array(), PresenceOrderByWithRelationInputSchema])
      .optional(),
    cursor: PresenceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PresenceScalarFieldEnumSchema, PresenceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const PresenceFindManyArgsSchema: z.ZodType<Prisma.PresenceFindManyArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    where: PresenceWhereInputSchema.optional(),
    orderBy: z
      .union([PresenceOrderByWithRelationInputSchema.array(), PresenceOrderByWithRelationInputSchema])
      .optional(),
    cursor: PresenceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PresenceScalarFieldEnumSchema, PresenceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const PresenceAggregateArgsSchema: z.ZodType<Prisma.PresenceAggregateArgs> = z
  .object({
    where: PresenceWhereInputSchema.optional(),
    orderBy: z
      .union([PresenceOrderByWithRelationInputSchema.array(), PresenceOrderByWithRelationInputSchema])
      .optional(),
    cursor: PresenceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const PresenceGroupByArgsSchema: z.ZodType<Prisma.PresenceGroupByArgs> = z
  .object({
    where: PresenceWhereInputSchema.optional(),
    orderBy: z
      .union([PresenceOrderByWithAggregationInputSchema.array(), PresenceOrderByWithAggregationInputSchema])
      .optional(),
    by: PresenceScalarFieldEnumSchema.array(),
    having: PresenceScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const PresenceFindUniqueArgsSchema: z.ZodType<Prisma.PresenceFindUniqueArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    where: PresenceWhereUniqueInputSchema
  })
  .strict();

export const PresenceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PresenceFindUniqueOrThrowArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    where: PresenceWhereUniqueInputSchema
  })
  .strict();

export const RoleFindFirstArgsSchema: z.ZodType<Prisma.RoleFindFirstArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    where: RoleWhereInputSchema.optional(),
    orderBy: z.union([RoleOrderByWithRelationInputSchema.array(), RoleOrderByWithRelationInputSchema]).optional(),
    cursor: RoleWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const RoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleFindFirstOrThrowArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    where: RoleWhereInputSchema.optional(),
    orderBy: z.union([RoleOrderByWithRelationInputSchema.array(), RoleOrderByWithRelationInputSchema]).optional(),
    cursor: RoleWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const RoleFindManyArgsSchema: z.ZodType<Prisma.RoleFindManyArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    where: RoleWhereInputSchema.optional(),
    orderBy: z.union([RoleOrderByWithRelationInputSchema.array(), RoleOrderByWithRelationInputSchema]).optional(),
    cursor: RoleWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const RoleAggregateArgsSchema: z.ZodType<Prisma.RoleAggregateArgs> = z
  .object({
    where: RoleWhereInputSchema.optional(),
    orderBy: z.union([RoleOrderByWithRelationInputSchema.array(), RoleOrderByWithRelationInputSchema]).optional(),
    cursor: RoleWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const RoleGroupByArgsSchema: z.ZodType<Prisma.RoleGroupByArgs> = z
  .object({
    where: RoleWhereInputSchema.optional(),
    orderBy: z.union([RoleOrderByWithAggregationInputSchema.array(), RoleOrderByWithAggregationInputSchema]).optional(),
    by: RoleScalarFieldEnumSchema.array(),
    having: RoleScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const RoleFindUniqueArgsSchema: z.ZodType<Prisma.RoleFindUniqueArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    where: RoleWhereUniqueInputSchema
  })
  .strict();

export const RoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoleFindUniqueOrThrowArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    where: RoleWhereUniqueInputSchema
  })
  .strict();

export const InstrumentFindFirstArgsSchema: z.ZodType<Prisma.InstrumentFindFirstArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    where: InstrumentWhereInputSchema.optional(),
    orderBy: z
      .union([InstrumentOrderByWithRelationInputSchema.array(), InstrumentOrderByWithRelationInputSchema])
      .optional(),
    cursor: InstrumentWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([InstrumentScalarFieldEnumSchema, InstrumentScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const InstrumentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InstrumentFindFirstOrThrowArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    where: InstrumentWhereInputSchema.optional(),
    orderBy: z
      .union([InstrumentOrderByWithRelationInputSchema.array(), InstrumentOrderByWithRelationInputSchema])
      .optional(),
    cursor: InstrumentWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([InstrumentScalarFieldEnumSchema, InstrumentScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const InstrumentFindManyArgsSchema: z.ZodType<Prisma.InstrumentFindManyArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    where: InstrumentWhereInputSchema.optional(),
    orderBy: z
      .union([InstrumentOrderByWithRelationInputSchema.array(), InstrumentOrderByWithRelationInputSchema])
      .optional(),
    cursor: InstrumentWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([InstrumentScalarFieldEnumSchema, InstrumentScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const InstrumentAggregateArgsSchema: z.ZodType<Prisma.InstrumentAggregateArgs> = z
  .object({
    where: InstrumentWhereInputSchema.optional(),
    orderBy: z
      .union([InstrumentOrderByWithRelationInputSchema.array(), InstrumentOrderByWithRelationInputSchema])
      .optional(),
    cursor: InstrumentWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const InstrumentGroupByArgsSchema: z.ZodType<Prisma.InstrumentGroupByArgs> = z
  .object({
    where: InstrumentWhereInputSchema.optional(),
    orderBy: z
      .union([InstrumentOrderByWithAggregationInputSchema.array(), InstrumentOrderByWithAggregationInputSchema])
      .optional(),
    by: InstrumentScalarFieldEnumSchema.array(),
    having: InstrumentScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const InstrumentFindUniqueArgsSchema: z.ZodType<Prisma.InstrumentFindUniqueArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    where: InstrumentWhereUniqueInputSchema
  })
  .strict();

export const InstrumentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InstrumentFindUniqueOrThrowArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    where: InstrumentWhereUniqueInputSchema
  })
  .strict();

export const GigVoiceFindFirstArgsSchema: z.ZodType<Prisma.GigVoiceFindFirstArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    where: GigVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([GigVoiceOrderByWithRelationInputSchema.array(), GigVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: GigVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([GigVoiceScalarFieldEnumSchema, GigVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const GigVoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GigVoiceFindFirstOrThrowArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    where: GigVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([GigVoiceOrderByWithRelationInputSchema.array(), GigVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: GigVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([GigVoiceScalarFieldEnumSchema, GigVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const GigVoiceFindManyArgsSchema: z.ZodType<Prisma.GigVoiceFindManyArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    where: GigVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([GigVoiceOrderByWithRelationInputSchema.array(), GigVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: GigVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([GigVoiceScalarFieldEnumSchema, GigVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const GigVoiceAggregateArgsSchema: z.ZodType<Prisma.GigVoiceAggregateArgs> = z
  .object({
    where: GigVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([GigVoiceOrderByWithRelationInputSchema.array(), GigVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: GigVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const GigVoiceGroupByArgsSchema: z.ZodType<Prisma.GigVoiceGroupByArgs> = z
  .object({
    where: GigVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([GigVoiceOrderByWithAggregationInputSchema.array(), GigVoiceOrderByWithAggregationInputSchema])
      .optional(),
    by: GigVoiceScalarFieldEnumSchema.array(),
    having: GigVoiceScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const GigVoiceFindUniqueArgsSchema: z.ZodType<Prisma.GigVoiceFindUniqueArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    where: GigVoiceWhereUniqueInputSchema
  })
  .strict();

export const GigVoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GigVoiceFindUniqueOrThrowArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    where: GigVoiceWhereUniqueInputSchema
  })
  .strict();

export const BandVoiceFindFirstArgsSchema: z.ZodType<Prisma.BandVoiceFindFirstArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    where: BandVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([BandVoiceOrderByWithRelationInputSchema.array(), BandVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: BandVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([BandVoiceScalarFieldEnumSchema, BandVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const BandVoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BandVoiceFindFirstOrThrowArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    where: BandVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([BandVoiceOrderByWithRelationInputSchema.array(), BandVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: BandVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([BandVoiceScalarFieldEnumSchema, BandVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const BandVoiceFindManyArgsSchema: z.ZodType<Prisma.BandVoiceFindManyArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    where: BandVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([BandVoiceOrderByWithRelationInputSchema.array(), BandVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: BandVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([BandVoiceScalarFieldEnumSchema, BandVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const BandVoiceAggregateArgsSchema: z.ZodType<Prisma.BandVoiceAggregateArgs> = z
  .object({
    where: BandVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([BandVoiceOrderByWithRelationInputSchema.array(), BandVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: BandVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const BandVoiceGroupByArgsSchema: z.ZodType<Prisma.BandVoiceGroupByArgs> = z
  .object({
    where: BandVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([BandVoiceOrderByWithAggregationInputSchema.array(), BandVoiceOrderByWithAggregationInputSchema])
      .optional(),
    by: BandVoiceScalarFieldEnumSchema.array(),
    having: BandVoiceScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const BandVoiceFindUniqueArgsSchema: z.ZodType<Prisma.BandVoiceFindUniqueArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    where: BandVoiceWhereUniqueInputSchema
  })
  .strict();

export const BandVoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BandVoiceFindUniqueOrThrowArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    where: BandVoiceWhereUniqueInputSchema
  })
  .strict();

export const DisabledVoiceFindFirstArgsSchema: z.ZodType<Prisma.DisabledVoiceFindFirstArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    where: DisabledVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([DisabledVoiceOrderByWithRelationInputSchema.array(), DisabledVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: DisabledVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([DisabledVoiceScalarFieldEnumSchema, DisabledVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const DisabledVoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DisabledVoiceFindFirstOrThrowArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    where: DisabledVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([DisabledVoiceOrderByWithRelationInputSchema.array(), DisabledVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: DisabledVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([DisabledVoiceScalarFieldEnumSchema, DisabledVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const DisabledVoiceFindManyArgsSchema: z.ZodType<Prisma.DisabledVoiceFindManyArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    where: DisabledVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([DisabledVoiceOrderByWithRelationInputSchema.array(), DisabledVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: DisabledVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([DisabledVoiceScalarFieldEnumSchema, DisabledVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const DisabledVoiceAggregateArgsSchema: z.ZodType<Prisma.DisabledVoiceAggregateArgs> = z
  .object({
    where: DisabledVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([DisabledVoiceOrderByWithRelationInputSchema.array(), DisabledVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: DisabledVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const DisabledVoiceGroupByArgsSchema: z.ZodType<Prisma.DisabledVoiceGroupByArgs> = z
  .object({
    where: DisabledVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([DisabledVoiceOrderByWithAggregationInputSchema.array(), DisabledVoiceOrderByWithAggregationInputSchema])
      .optional(),
    by: DisabledVoiceScalarFieldEnumSchema.array(),
    having: DisabledVoiceScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const DisabledVoiceFindUniqueArgsSchema: z.ZodType<Prisma.DisabledVoiceFindUniqueArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    where: DisabledVoiceWhereUniqueInputSchema
  })
  .strict();

export const DisabledVoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DisabledVoiceFindUniqueOrThrowArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    where: DisabledVoiceWhereUniqueInputSchema
  })
  .strict();

export const FormationVoiceFindFirstArgsSchema: z.ZodType<Prisma.FormationVoiceFindFirstArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    where: FormationVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([FormationVoiceOrderByWithRelationInputSchema.array(), FormationVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: FormationVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([FormationVoiceScalarFieldEnumSchema, FormationVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const FormationVoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FormationVoiceFindFirstOrThrowArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    where: FormationVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([FormationVoiceOrderByWithRelationInputSchema.array(), FormationVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: FormationVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([FormationVoiceScalarFieldEnumSchema, FormationVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const FormationVoiceFindManyArgsSchema: z.ZodType<Prisma.FormationVoiceFindManyArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    where: FormationVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([FormationVoiceOrderByWithRelationInputSchema.array(), FormationVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: FormationVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([FormationVoiceScalarFieldEnumSchema, FormationVoiceScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const FormationVoiceAggregateArgsSchema: z.ZodType<Prisma.FormationVoiceAggregateArgs> = z
  .object({
    where: FormationVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([FormationVoiceOrderByWithRelationInputSchema.array(), FormationVoiceOrderByWithRelationInputSchema])
      .optional(),
    cursor: FormationVoiceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const FormationVoiceGroupByArgsSchema: z.ZodType<Prisma.FormationVoiceGroupByArgs> = z
  .object({
    where: FormationVoiceWhereInputSchema.optional(),
    orderBy: z
      .union([FormationVoiceOrderByWithAggregationInputSchema.array(), FormationVoiceOrderByWithAggregationInputSchema])
      .optional(),
    by: FormationVoiceScalarFieldEnumSchema.array(),
    having: FormationVoiceScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const FormationVoiceFindUniqueArgsSchema: z.ZodType<Prisma.FormationVoiceFindUniqueArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    where: FormationVoiceWhereUniqueInputSchema
  })
  .strict();

export const FormationVoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FormationVoiceFindUniqueOrThrowArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    where: FormationVoiceWhereUniqueInputSchema
  })
  .strict();

export const FormationUndefinedVoicePresenceFindFirstArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceFindFirstArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      where: FormationUndefinedVoicePresenceWhereInputSchema.optional(),
      orderBy: z
        .union([
          FormationUndefinedVoicePresenceOrderByWithRelationInputSchema.array(),
          FormationUndefinedVoicePresenceOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: FormationUndefinedVoicePresenceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          FormationUndefinedVoicePresenceScalarFieldEnumSchema,
          FormationUndefinedVoicePresenceScalarFieldEnumSchema.array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceFindFirstOrThrowArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      where: FormationUndefinedVoicePresenceWhereInputSchema.optional(),
      orderBy: z
        .union([
          FormationUndefinedVoicePresenceOrderByWithRelationInputSchema.array(),
          FormationUndefinedVoicePresenceOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: FormationUndefinedVoicePresenceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          FormationUndefinedVoicePresenceScalarFieldEnumSchema,
          FormationUndefinedVoicePresenceScalarFieldEnumSchema.array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceFindManyArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceFindManyArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      where: FormationUndefinedVoicePresenceWhereInputSchema.optional(),
      orderBy: z
        .union([
          FormationUndefinedVoicePresenceOrderByWithRelationInputSchema.array(),
          FormationUndefinedVoicePresenceOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: FormationUndefinedVoicePresenceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          FormationUndefinedVoicePresenceScalarFieldEnumSchema,
          FormationUndefinedVoicePresenceScalarFieldEnumSchema.array()
        ])
        .optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceAggregateArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceAggregateArgs> =
  z
    .object({
      where: FormationUndefinedVoicePresenceWhereInputSchema.optional(),
      orderBy: z
        .union([
          FormationUndefinedVoicePresenceOrderByWithRelationInputSchema.array(),
          FormationUndefinedVoicePresenceOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: FormationUndefinedVoicePresenceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceGroupByArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceGroupByArgs> =
  z
    .object({
      where: FormationUndefinedVoicePresenceWhereInputSchema.optional(),
      orderBy: z
        .union([
          FormationUndefinedVoicePresenceOrderByWithAggregationInputSchema.array(),
          FormationUndefinedVoicePresenceOrderByWithAggregationInputSchema
        ])
        .optional(),
      by: FormationUndefinedVoicePresenceScalarFieldEnumSchema.array(),
      having: FormationUndefinedVoicePresenceScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceFindUniqueArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceFindUniqueArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      where: FormationUndefinedVoicePresenceWhereUniqueInputSchema
    })
    .strict();

export const FormationUndefinedVoicePresenceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceFindUniqueOrThrowArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      where: FormationUndefinedVoicePresenceWhereUniqueInputSchema
    })
    .strict();

export const FormationVoicePresenceFindFirstArgsSchema: z.ZodType<Prisma.FormationVoicePresenceFindFirstArgs> = z
  .object({
    select: FormationVoicePresenceSelectSchema.optional(),
    include: FormationVoicePresenceIncludeSchema.optional(),
    where: FormationVoicePresenceWhereInputSchema.optional(),
    orderBy: z
      .union([
        FormationVoicePresenceOrderByWithRelationInputSchema.array(),
        FormationVoicePresenceOrderByWithRelationInputSchema
      ])
      .optional(),
    cursor: FormationVoicePresenceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([FormationVoicePresenceScalarFieldEnumSchema, FormationVoicePresenceScalarFieldEnumSchema.array()])
      .optional()
  })
  .strict();

export const FormationVoicePresenceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FormationVoicePresenceFindFirstOrThrowArgs> =
  z
    .object({
      select: FormationVoicePresenceSelectSchema.optional(),
      include: FormationVoicePresenceIncludeSchema.optional(),
      where: FormationVoicePresenceWhereInputSchema.optional(),
      orderBy: z
        .union([
          FormationVoicePresenceOrderByWithRelationInputSchema.array(),
          FormationVoicePresenceOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: FormationVoicePresenceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([FormationVoicePresenceScalarFieldEnumSchema, FormationVoicePresenceScalarFieldEnumSchema.array()])
        .optional()
    })
    .strict();

export const FormationVoicePresenceFindManyArgsSchema: z.ZodType<Prisma.FormationVoicePresenceFindManyArgs> = z
  .object({
    select: FormationVoicePresenceSelectSchema.optional(),
    include: FormationVoicePresenceIncludeSchema.optional(),
    where: FormationVoicePresenceWhereInputSchema.optional(),
    orderBy: z
      .union([
        FormationVoicePresenceOrderByWithRelationInputSchema.array(),
        FormationVoicePresenceOrderByWithRelationInputSchema
      ])
      .optional(),
    cursor: FormationVoicePresenceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([FormationVoicePresenceScalarFieldEnumSchema, FormationVoicePresenceScalarFieldEnumSchema.array()])
      .optional()
  })
  .strict();

export const FormationVoicePresenceAggregateArgsSchema: z.ZodType<Prisma.FormationVoicePresenceAggregateArgs> = z
  .object({
    where: FormationVoicePresenceWhereInputSchema.optional(),
    orderBy: z
      .union([
        FormationVoicePresenceOrderByWithRelationInputSchema.array(),
        FormationVoicePresenceOrderByWithRelationInputSchema
      ])
      .optional(),
    cursor: FormationVoicePresenceWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const FormationVoicePresenceGroupByArgsSchema: z.ZodType<Prisma.FormationVoicePresenceGroupByArgs> = z
  .object({
    where: FormationVoicePresenceWhereInputSchema.optional(),
    orderBy: z
      .union([
        FormationVoicePresenceOrderByWithAggregationInputSchema.array(),
        FormationVoicePresenceOrderByWithAggregationInputSchema
      ])
      .optional(),
    by: FormationVoicePresenceScalarFieldEnumSchema.array(),
    having: FormationVoicePresenceScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const FormationVoicePresenceFindUniqueArgsSchema: z.ZodType<Prisma.FormationVoicePresenceFindUniqueArgs> = z
  .object({
    select: FormationVoicePresenceSelectSchema.optional(),
    include: FormationVoicePresenceIncludeSchema.optional(),
    where: FormationVoicePresenceWhereUniqueInputSchema
  })
  .strict();

export const FormationVoicePresenceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FormationVoicePresenceFindUniqueOrThrowArgs> =
  z
    .object({
      select: FormationVoicePresenceSelectSchema.optional(),
      include: FormationVoicePresenceIncludeSchema.optional(),
      where: FormationVoicePresenceWhereUniqueInputSchema
    })
    .strict();

export const FormationFindFirstArgsSchema: z.ZodType<Prisma.FormationFindFirstArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    where: FormationWhereInputSchema.optional(),
    orderBy: z
      .union([FormationOrderByWithRelationInputSchema.array(), FormationOrderByWithRelationInputSchema])
      .optional(),
    cursor: FormationWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([FormationScalarFieldEnumSchema, FormationScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const FormationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FormationFindFirstOrThrowArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    where: FormationWhereInputSchema.optional(),
    orderBy: z
      .union([FormationOrderByWithRelationInputSchema.array(), FormationOrderByWithRelationInputSchema])
      .optional(),
    cursor: FormationWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([FormationScalarFieldEnumSchema, FormationScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const FormationFindManyArgsSchema: z.ZodType<Prisma.FormationFindManyArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    where: FormationWhereInputSchema.optional(),
    orderBy: z
      .union([FormationOrderByWithRelationInputSchema.array(), FormationOrderByWithRelationInputSchema])
      .optional(),
    cursor: FormationWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([FormationScalarFieldEnumSchema, FormationScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export const FormationAggregateArgsSchema: z.ZodType<Prisma.FormationAggregateArgs> = z
  .object({
    where: FormationWhereInputSchema.optional(),
    orderBy: z
      .union([FormationOrderByWithRelationInputSchema.array(), FormationOrderByWithRelationInputSchema])
      .optional(),
    cursor: FormationWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const FormationGroupByArgsSchema: z.ZodType<Prisma.FormationGroupByArgs> = z
  .object({
    where: FormationWhereInputSchema.optional(),
    orderBy: z
      .union([FormationOrderByWithAggregationInputSchema.array(), FormationOrderByWithAggregationInputSchema])
      .optional(),
    by: FormationScalarFieldEnumSchema.array(),
    having: FormationScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export const FormationFindUniqueArgsSchema: z.ZodType<Prisma.FormationFindUniqueArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    where: FormationWhereUniqueInputSchema
  })
  .strict();

export const FormationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FormationFindUniqueOrThrowArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    where: FormationWhereUniqueInputSchema
  })
  .strict();

export const OneTimePasswordCreateArgsSchema: z.ZodType<Prisma.OneTimePasswordCreateArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    data: z.union([OneTimePasswordCreateInputSchema, OneTimePasswordUncheckedCreateInputSchema])
  })
  .strict();

export const OneTimePasswordUpsertArgsSchema: z.ZodType<Prisma.OneTimePasswordUpsertArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    where: OneTimePasswordWhereUniqueInputSchema,
    create: z.union([OneTimePasswordCreateInputSchema, OneTimePasswordUncheckedCreateInputSchema]),
    update: z.union([OneTimePasswordUpdateInputSchema, OneTimePasswordUncheckedUpdateInputSchema])
  })
  .strict();

export const OneTimePasswordCreateManyArgsSchema: z.ZodType<Prisma.OneTimePasswordCreateManyArgs> = z
  .object({
    data: z.union([OneTimePasswordCreateManyInputSchema, OneTimePasswordCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const OneTimePasswordDeleteArgsSchema: z.ZodType<Prisma.OneTimePasswordDeleteArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    where: OneTimePasswordWhereUniqueInputSchema
  })
  .strict();

export const OneTimePasswordUpdateArgsSchema: z.ZodType<Prisma.OneTimePasswordUpdateArgs> = z
  .object({
    select: OneTimePasswordSelectSchema.optional(),
    data: z.union([OneTimePasswordUpdateInputSchema, OneTimePasswordUncheckedUpdateInputSchema]),
    where: OneTimePasswordWhereUniqueInputSchema
  })
  .strict();

export const OneTimePasswordUpdateManyArgsSchema: z.ZodType<Prisma.OneTimePasswordUpdateManyArgs> = z
  .object({
    data: z.union([OneTimePasswordUpdateManyMutationInputSchema, OneTimePasswordUncheckedUpdateManyInputSchema]),
    where: OneTimePasswordWhereInputSchema.optional()
  })
  .strict();

export const OneTimePasswordDeleteManyArgsSchema: z.ZodType<Prisma.OneTimePasswordDeleteManyArgs> = z
  .object({
    where: OneTimePasswordWhereInputSchema.optional()
  })
  .strict();

export const TokenCreateArgsSchema: z.ZodType<Prisma.TokenCreateArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    data: z.union([TokenCreateInputSchema, TokenUncheckedCreateInputSchema])
  })
  .strict();

export const TokenUpsertArgsSchema: z.ZodType<Prisma.TokenUpsertArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    where: TokenWhereUniqueInputSchema,
    create: z.union([TokenCreateInputSchema, TokenUncheckedCreateInputSchema]),
    update: z.union([TokenUpdateInputSchema, TokenUncheckedUpdateInputSchema])
  })
  .strict();

export const TokenCreateManyArgsSchema: z.ZodType<Prisma.TokenCreateManyArgs> = z
  .object({
    data: z.union([TokenCreateManyInputSchema, TokenCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const TokenDeleteArgsSchema: z.ZodType<Prisma.TokenDeleteArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    where: TokenWhereUniqueInputSchema
  })
  .strict();

export const TokenUpdateArgsSchema: z.ZodType<Prisma.TokenUpdateArgs> = z
  .object({
    select: TokenSelectSchema.optional(),
    include: TokenIncludeSchema.optional(),
    data: z.union([TokenUpdateInputSchema, TokenUncheckedUpdateInputSchema]),
    where: TokenWhereUniqueInputSchema
  })
  .strict();

export const TokenUpdateManyArgsSchema: z.ZodType<Prisma.TokenUpdateManyArgs> = z
  .object({
    data: z.union([TokenUpdateManyMutationInputSchema, TokenUncheckedUpdateManyInputSchema]),
    where: TokenWhereInputSchema.optional()
  })
  .strict();

export const TokenDeleteManyArgsSchema: z.ZodType<Prisma.TokenDeleteManyArgs> = z
  .object({
    where: TokenWhereInputSchema.optional()
  })
  .strict();

export const KeyCreateArgsSchema: z.ZodType<Prisma.KeyCreateArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    data: z.union([KeyCreateInputSchema, KeyUncheckedCreateInputSchema])
  })
  .strict();

export const KeyUpsertArgsSchema: z.ZodType<Prisma.KeyUpsertArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    where: KeyWhereUniqueInputSchema,
    create: z.union([KeyCreateInputSchema, KeyUncheckedCreateInputSchema]),
    update: z.union([KeyUpdateInputSchema, KeyUncheckedUpdateInputSchema])
  })
  .strict();

export const KeyCreateManyArgsSchema: z.ZodType<Prisma.KeyCreateManyArgs> = z
  .object({
    data: z.union([KeyCreateManyInputSchema, KeyCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const KeyDeleteArgsSchema: z.ZodType<Prisma.KeyDeleteArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    where: KeyWhereUniqueInputSchema
  })
  .strict();

export const KeyUpdateArgsSchema: z.ZodType<Prisma.KeyUpdateArgs> = z
  .object({
    select: KeySelectSchema.optional(),
    include: KeyIncludeSchema.optional(),
    data: z.union([KeyUpdateInputSchema, KeyUncheckedUpdateInputSchema]),
    where: KeyWhereUniqueInputSchema
  })
  .strict();

export const KeyUpdateManyArgsSchema: z.ZodType<Prisma.KeyUpdateManyArgs> = z
  .object({
    data: z.union([KeyUpdateManyMutationInputSchema, KeyUncheckedUpdateManyInputSchema]),
    where: KeyWhereInputSchema.optional()
  })
  .strict();

export const KeyDeleteManyArgsSchema: z.ZodType<Prisma.KeyDeleteManyArgs> = z
  .object({
    where: KeyWhereInputSchema.optional()
  })
  .strict();

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    data: z.union([SessionCreateInputSchema, SessionUncheckedCreateInputSchema])
  })
  .strict();

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema,
    create: z.union([SessionCreateInputSchema, SessionUncheckedCreateInputSchema]),
    update: z.union([SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema])
  })
  .strict();

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z
  .object({
    data: z.union([SessionCreateManyInputSchema, SessionCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema
  })
  .strict();

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    data: z.union([SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema]),
    where: SessionWhereUniqueInputSchema
  })
  .strict();

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z
  .object({
    data: z.union([SessionUpdateManyMutationInputSchema, SessionUncheckedUpdateManyInputSchema]),
    where: SessionWhereInputSchema.optional()
  })
  .strict();

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z
  .object({
    where: SessionWhereInputSchema.optional()
  })
  .strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema])
  })
  .strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema])
  })
  .strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
  .object({
    data: z.union([UserCreateManyInputSchema, UserCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema
  })
  .strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
    where: UserWhereUniqueInputSchema
  })
  .strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
  .object({
    data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
    where: UserWhereInputSchema.optional()
  })
  .strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
  .object({
    where: UserWhereInputSchema.optional()
  })
  .strict();

export const BandCreateArgsSchema: z.ZodType<Prisma.BandCreateArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    data: z.union([BandCreateInputSchema, BandUncheckedCreateInputSchema])
  })
  .strict();

export const BandUpsertArgsSchema: z.ZodType<Prisma.BandUpsertArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    where: BandWhereUniqueInputSchema,
    create: z.union([BandCreateInputSchema, BandUncheckedCreateInputSchema]),
    update: z.union([BandUpdateInputSchema, BandUncheckedUpdateInputSchema])
  })
  .strict();

export const BandCreateManyArgsSchema: z.ZodType<Prisma.BandCreateManyArgs> = z
  .object({
    data: z.union([BandCreateManyInputSchema, BandCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const BandDeleteArgsSchema: z.ZodType<Prisma.BandDeleteArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    where: BandWhereUniqueInputSchema
  })
  .strict();

export const BandUpdateArgsSchema: z.ZodType<Prisma.BandUpdateArgs> = z
  .object({
    select: BandSelectSchema.optional(),
    include: BandIncludeSchema.optional(),
    data: z.union([BandUpdateInputSchema, BandUncheckedUpdateInputSchema]),
    where: BandWhereUniqueInputSchema
  })
  .strict();

export const BandUpdateManyArgsSchema: z.ZodType<Prisma.BandUpdateManyArgs> = z
  .object({
    data: z.union([BandUpdateManyMutationInputSchema, BandUncheckedUpdateManyInputSchema]),
    where: BandWhereInputSchema.optional()
  })
  .strict();

export const BandDeleteManyArgsSchema: z.ZodType<Prisma.BandDeleteManyArgs> = z
  .object({
    where: BandWhereInputSchema.optional()
  })
  .strict();

export const PlayerCreateArgsSchema: z.ZodType<Prisma.PlayerCreateArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    data: z.union([PlayerCreateInputSchema, PlayerUncheckedCreateInputSchema])
  })
  .strict();

export const PlayerUpsertArgsSchema: z.ZodType<Prisma.PlayerUpsertArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    where: PlayerWhereUniqueInputSchema,
    create: z.union([PlayerCreateInputSchema, PlayerUncheckedCreateInputSchema]),
    update: z.union([PlayerUpdateInputSchema, PlayerUncheckedUpdateInputSchema])
  })
  .strict();

export const PlayerCreateManyArgsSchema: z.ZodType<Prisma.PlayerCreateManyArgs> = z
  .object({
    data: z.union([PlayerCreateManyInputSchema, PlayerCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const PlayerDeleteArgsSchema: z.ZodType<Prisma.PlayerDeleteArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    where: PlayerWhereUniqueInputSchema
  })
  .strict();

export const PlayerUpdateArgsSchema: z.ZodType<Prisma.PlayerUpdateArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    include: PlayerIncludeSchema.optional(),
    data: z.union([PlayerUpdateInputSchema, PlayerUncheckedUpdateInputSchema]),
    where: PlayerWhereUniqueInputSchema
  })
  .strict();

export const PlayerUpdateManyArgsSchema: z.ZodType<Prisma.PlayerUpdateManyArgs> = z
  .object({
    data: z.union([PlayerUpdateManyMutationInputSchema, PlayerUncheckedUpdateManyInputSchema]),
    where: PlayerWhereInputSchema.optional()
  })
  .strict();

export const PlayerDeleteManyArgsSchema: z.ZodType<Prisma.PlayerDeleteManyArgs> = z
  .object({
    where: PlayerWhereInputSchema.optional()
  })
  .strict();

export const MembershipCreateArgsSchema: z.ZodType<Prisma.MembershipCreateArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    data: z.union([MembershipCreateInputSchema, MembershipUncheckedCreateInputSchema])
  })
  .strict();

export const MembershipUpsertArgsSchema: z.ZodType<Prisma.MembershipUpsertArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    where: MembershipWhereUniqueInputSchema,
    create: z.union([MembershipCreateInputSchema, MembershipUncheckedCreateInputSchema]),
    update: z.union([MembershipUpdateInputSchema, MembershipUncheckedUpdateInputSchema])
  })
  .strict();

export const MembershipCreateManyArgsSchema: z.ZodType<Prisma.MembershipCreateManyArgs> = z
  .object({
    data: z.union([MembershipCreateManyInputSchema, MembershipCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const MembershipDeleteArgsSchema: z.ZodType<Prisma.MembershipDeleteArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    where: MembershipWhereUniqueInputSchema
  })
  .strict();

export const MembershipUpdateArgsSchema: z.ZodType<Prisma.MembershipUpdateArgs> = z
  .object({
    select: MembershipSelectSchema.optional(),
    include: MembershipIncludeSchema.optional(),
    data: z.union([MembershipUpdateInputSchema, MembershipUncheckedUpdateInputSchema]),
    where: MembershipWhereUniqueInputSchema
  })
  .strict();

export const MembershipUpdateManyArgsSchema: z.ZodType<Prisma.MembershipUpdateManyArgs> = z
  .object({
    data: z.union([MembershipUpdateManyMutationInputSchema, MembershipUncheckedUpdateManyInputSchema]),
    where: MembershipWhereInputSchema.optional()
  })
  .strict();

export const MembershipDeleteManyArgsSchema: z.ZodType<Prisma.MembershipDeleteManyArgs> = z
  .object({
    where: MembershipWhereInputSchema.optional()
  })
  .strict();

export const GigCreateArgsSchema: z.ZodType<Prisma.GigCreateArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    data: z.union([GigCreateInputSchema, GigUncheckedCreateInputSchema])
  })
  .strict();

export const GigUpsertArgsSchema: z.ZodType<Prisma.GigUpsertArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    where: GigWhereUniqueInputSchema,
    create: z.union([GigCreateInputSchema, GigUncheckedCreateInputSchema]),
    update: z.union([GigUpdateInputSchema, GigUncheckedUpdateInputSchema])
  })
  .strict();

export const GigCreateManyArgsSchema: z.ZodType<Prisma.GigCreateManyArgs> = z
  .object({
    data: z.union([GigCreateManyInputSchema, GigCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const GigDeleteArgsSchema: z.ZodType<Prisma.GigDeleteArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    where: GigWhereUniqueInputSchema
  })
  .strict();

export const GigUpdateArgsSchema: z.ZodType<Prisma.GigUpdateArgs> = z
  .object({
    select: GigSelectSchema.optional(),
    include: GigIncludeSchema.optional(),
    data: z.union([GigUpdateInputSchema, GigUncheckedUpdateInputSchema]),
    where: GigWhereUniqueInputSchema
  })
  .strict();

export const GigUpdateManyArgsSchema: z.ZodType<Prisma.GigUpdateManyArgs> = z
  .object({
    data: z.union([GigUpdateManyMutationInputSchema, GigUncheckedUpdateManyInputSchema]),
    where: GigWhereInputSchema.optional()
  })
  .strict();

export const GigDeleteManyArgsSchema: z.ZodType<Prisma.GigDeleteManyArgs> = z
  .object({
    where: GigWhereInputSchema.optional()
  })
  .strict();

export const PresenceCreateArgsSchema: z.ZodType<Prisma.PresenceCreateArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    data: z.union([PresenceCreateInputSchema, PresenceUncheckedCreateInputSchema])
  })
  .strict();

export const PresenceUpsertArgsSchema: z.ZodType<Prisma.PresenceUpsertArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    where: PresenceWhereUniqueInputSchema,
    create: z.union([PresenceCreateInputSchema, PresenceUncheckedCreateInputSchema]),
    update: z.union([PresenceUpdateInputSchema, PresenceUncheckedUpdateInputSchema])
  })
  .strict();

export const PresenceCreateManyArgsSchema: z.ZodType<Prisma.PresenceCreateManyArgs> = z
  .object({
    data: z.union([PresenceCreateManyInputSchema, PresenceCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const PresenceDeleteArgsSchema: z.ZodType<Prisma.PresenceDeleteArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    where: PresenceWhereUniqueInputSchema
  })
  .strict();

export const PresenceUpdateArgsSchema: z.ZodType<Prisma.PresenceUpdateArgs> = z
  .object({
    select: PresenceSelectSchema.optional(),
    include: PresenceIncludeSchema.optional(),
    data: z.union([PresenceUpdateInputSchema, PresenceUncheckedUpdateInputSchema]),
    where: PresenceWhereUniqueInputSchema
  })
  .strict();

export const PresenceUpdateManyArgsSchema: z.ZodType<Prisma.PresenceUpdateManyArgs> = z
  .object({
    data: z.union([PresenceUpdateManyMutationInputSchema, PresenceUncheckedUpdateManyInputSchema]),
    where: PresenceWhereInputSchema.optional()
  })
  .strict();

export const PresenceDeleteManyArgsSchema: z.ZodType<Prisma.PresenceDeleteManyArgs> = z
  .object({
    where: PresenceWhereInputSchema.optional()
  })
  .strict();

export const RoleCreateArgsSchema: z.ZodType<Prisma.RoleCreateArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    data: z.union([RoleCreateInputSchema, RoleUncheckedCreateInputSchema])
  })
  .strict();

export const RoleUpsertArgsSchema: z.ZodType<Prisma.RoleUpsertArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    where: RoleWhereUniqueInputSchema,
    create: z.union([RoleCreateInputSchema, RoleUncheckedCreateInputSchema]),
    update: z.union([RoleUpdateInputSchema, RoleUncheckedUpdateInputSchema])
  })
  .strict();

export const RoleCreateManyArgsSchema: z.ZodType<Prisma.RoleCreateManyArgs> = z
  .object({
    data: z.union([RoleCreateManyInputSchema, RoleCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const RoleDeleteArgsSchema: z.ZodType<Prisma.RoleDeleteArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    where: RoleWhereUniqueInputSchema
  })
  .strict();

export const RoleUpdateArgsSchema: z.ZodType<Prisma.RoleUpdateArgs> = z
  .object({
    select: RoleSelectSchema.optional(),
    include: RoleIncludeSchema.optional(),
    data: z.union([RoleUpdateInputSchema, RoleUncheckedUpdateInputSchema]),
    where: RoleWhereUniqueInputSchema
  })
  .strict();

export const RoleUpdateManyArgsSchema: z.ZodType<Prisma.RoleUpdateManyArgs> = z
  .object({
    data: z.union([RoleUpdateManyMutationInputSchema, RoleUncheckedUpdateManyInputSchema]),
    where: RoleWhereInputSchema.optional()
  })
  .strict();

export const RoleDeleteManyArgsSchema: z.ZodType<Prisma.RoleDeleteManyArgs> = z
  .object({
    where: RoleWhereInputSchema.optional()
  })
  .strict();

export const InstrumentCreateArgsSchema: z.ZodType<Prisma.InstrumentCreateArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    data: z.union([InstrumentCreateInputSchema, InstrumentUncheckedCreateInputSchema])
  })
  .strict();

export const InstrumentUpsertArgsSchema: z.ZodType<Prisma.InstrumentUpsertArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    where: InstrumentWhereUniqueInputSchema,
    create: z.union([InstrumentCreateInputSchema, InstrumentUncheckedCreateInputSchema]),
    update: z.union([InstrumentUpdateInputSchema, InstrumentUncheckedUpdateInputSchema])
  })
  .strict();

export const InstrumentCreateManyArgsSchema: z.ZodType<Prisma.InstrumentCreateManyArgs> = z
  .object({
    data: z.union([InstrumentCreateManyInputSchema, InstrumentCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const InstrumentDeleteArgsSchema: z.ZodType<Prisma.InstrumentDeleteArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    where: InstrumentWhereUniqueInputSchema
  })
  .strict();

export const InstrumentUpdateArgsSchema: z.ZodType<Prisma.InstrumentUpdateArgs> = z
  .object({
    select: InstrumentSelectSchema.optional(),
    include: InstrumentIncludeSchema.optional(),
    data: z.union([InstrumentUpdateInputSchema, InstrumentUncheckedUpdateInputSchema]),
    where: InstrumentWhereUniqueInputSchema
  })
  .strict();

export const InstrumentUpdateManyArgsSchema: z.ZodType<Prisma.InstrumentUpdateManyArgs> = z
  .object({
    data: z.union([InstrumentUpdateManyMutationInputSchema, InstrumentUncheckedUpdateManyInputSchema]),
    where: InstrumentWhereInputSchema.optional()
  })
  .strict();

export const InstrumentDeleteManyArgsSchema: z.ZodType<Prisma.InstrumentDeleteManyArgs> = z
  .object({
    where: InstrumentWhereInputSchema.optional()
  })
  .strict();

export const GigVoiceCreateArgsSchema: z.ZodType<Prisma.GigVoiceCreateArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    data: z.union([GigVoiceCreateInputSchema, GigVoiceUncheckedCreateInputSchema])
  })
  .strict();

export const GigVoiceUpsertArgsSchema: z.ZodType<Prisma.GigVoiceUpsertArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    where: GigVoiceWhereUniqueInputSchema,
    create: z.union([GigVoiceCreateInputSchema, GigVoiceUncheckedCreateInputSchema]),
    update: z.union([GigVoiceUpdateInputSchema, GigVoiceUncheckedUpdateInputSchema])
  })
  .strict();

export const GigVoiceCreateManyArgsSchema: z.ZodType<Prisma.GigVoiceCreateManyArgs> = z
  .object({
    data: z.union([GigVoiceCreateManyInputSchema, GigVoiceCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const GigVoiceDeleteArgsSchema: z.ZodType<Prisma.GigVoiceDeleteArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    where: GigVoiceWhereUniqueInputSchema
  })
  .strict();

export const GigVoiceUpdateArgsSchema: z.ZodType<Prisma.GigVoiceUpdateArgs> = z
  .object({
    select: GigVoiceSelectSchema.optional(),
    include: GigVoiceIncludeSchema.optional(),
    data: z.union([GigVoiceUpdateInputSchema, GigVoiceUncheckedUpdateInputSchema]),
    where: GigVoiceWhereUniqueInputSchema
  })
  .strict();

export const GigVoiceUpdateManyArgsSchema: z.ZodType<Prisma.GigVoiceUpdateManyArgs> = z
  .object({
    data: z.union([GigVoiceUpdateManyMutationInputSchema, GigVoiceUncheckedUpdateManyInputSchema]),
    where: GigVoiceWhereInputSchema.optional()
  })
  .strict();

export const GigVoiceDeleteManyArgsSchema: z.ZodType<Prisma.GigVoiceDeleteManyArgs> = z
  .object({
    where: GigVoiceWhereInputSchema.optional()
  })
  .strict();

export const BandVoiceCreateArgsSchema: z.ZodType<Prisma.BandVoiceCreateArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    data: z.union([BandVoiceCreateInputSchema, BandVoiceUncheckedCreateInputSchema])
  })
  .strict();

export const BandVoiceUpsertArgsSchema: z.ZodType<Prisma.BandVoiceUpsertArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    where: BandVoiceWhereUniqueInputSchema,
    create: z.union([BandVoiceCreateInputSchema, BandVoiceUncheckedCreateInputSchema]),
    update: z.union([BandVoiceUpdateInputSchema, BandVoiceUncheckedUpdateInputSchema])
  })
  .strict();

export const BandVoiceCreateManyArgsSchema: z.ZodType<Prisma.BandVoiceCreateManyArgs> = z
  .object({
    data: z.union([BandVoiceCreateManyInputSchema, BandVoiceCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const BandVoiceDeleteArgsSchema: z.ZodType<Prisma.BandVoiceDeleteArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    where: BandVoiceWhereUniqueInputSchema
  })
  .strict();

export const BandVoiceUpdateArgsSchema: z.ZodType<Prisma.BandVoiceUpdateArgs> = z
  .object({
    select: BandVoiceSelectSchema.optional(),
    include: BandVoiceIncludeSchema.optional(),
    data: z.union([BandVoiceUpdateInputSchema, BandVoiceUncheckedUpdateInputSchema]),
    where: BandVoiceWhereUniqueInputSchema
  })
  .strict();

export const BandVoiceUpdateManyArgsSchema: z.ZodType<Prisma.BandVoiceUpdateManyArgs> = z
  .object({
    data: z.union([BandVoiceUpdateManyMutationInputSchema, BandVoiceUncheckedUpdateManyInputSchema]),
    where: BandVoiceWhereInputSchema.optional()
  })
  .strict();

export const BandVoiceDeleteManyArgsSchema: z.ZodType<Prisma.BandVoiceDeleteManyArgs> = z
  .object({
    where: BandVoiceWhereInputSchema.optional()
  })
  .strict();

export const DisabledVoiceCreateArgsSchema: z.ZodType<Prisma.DisabledVoiceCreateArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    data: z.union([DisabledVoiceCreateInputSchema, DisabledVoiceUncheckedCreateInputSchema])
  })
  .strict();

export const DisabledVoiceUpsertArgsSchema: z.ZodType<Prisma.DisabledVoiceUpsertArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    where: DisabledVoiceWhereUniqueInputSchema,
    create: z.union([DisabledVoiceCreateInputSchema, DisabledVoiceUncheckedCreateInputSchema]),
    update: z.union([DisabledVoiceUpdateInputSchema, DisabledVoiceUncheckedUpdateInputSchema])
  })
  .strict();

export const DisabledVoiceCreateManyArgsSchema: z.ZodType<Prisma.DisabledVoiceCreateManyArgs> = z
  .object({
    data: z.union([DisabledVoiceCreateManyInputSchema, DisabledVoiceCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const DisabledVoiceDeleteArgsSchema: z.ZodType<Prisma.DisabledVoiceDeleteArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    where: DisabledVoiceWhereUniqueInputSchema
  })
  .strict();

export const DisabledVoiceUpdateArgsSchema: z.ZodType<Prisma.DisabledVoiceUpdateArgs> = z
  .object({
    select: DisabledVoiceSelectSchema.optional(),
    include: DisabledVoiceIncludeSchema.optional(),
    data: z.union([DisabledVoiceUpdateInputSchema, DisabledVoiceUncheckedUpdateInputSchema]),
    where: DisabledVoiceWhereUniqueInputSchema
  })
  .strict();

export const DisabledVoiceUpdateManyArgsSchema: z.ZodType<Prisma.DisabledVoiceUpdateManyArgs> = z
  .object({
    data: z.union([DisabledVoiceUpdateManyMutationInputSchema, DisabledVoiceUncheckedUpdateManyInputSchema]),
    where: DisabledVoiceWhereInputSchema.optional()
  })
  .strict();

export const DisabledVoiceDeleteManyArgsSchema: z.ZodType<Prisma.DisabledVoiceDeleteManyArgs> = z
  .object({
    where: DisabledVoiceWhereInputSchema.optional()
  })
  .strict();

export const FormationVoiceCreateArgsSchema: z.ZodType<Prisma.FormationVoiceCreateArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    data: z.union([FormationVoiceCreateInputSchema, FormationVoiceUncheckedCreateInputSchema])
  })
  .strict();

export const FormationVoiceUpsertArgsSchema: z.ZodType<Prisma.FormationVoiceUpsertArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    where: FormationVoiceWhereUniqueInputSchema,
    create: z.union([FormationVoiceCreateInputSchema, FormationVoiceUncheckedCreateInputSchema]),
    update: z.union([FormationVoiceUpdateInputSchema, FormationVoiceUncheckedUpdateInputSchema])
  })
  .strict();

export const FormationVoiceCreateManyArgsSchema: z.ZodType<Prisma.FormationVoiceCreateManyArgs> = z
  .object({
    data: z.union([FormationVoiceCreateManyInputSchema, FormationVoiceCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const FormationVoiceDeleteArgsSchema: z.ZodType<Prisma.FormationVoiceDeleteArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    where: FormationVoiceWhereUniqueInputSchema
  })
  .strict();

export const FormationVoiceUpdateArgsSchema: z.ZodType<Prisma.FormationVoiceUpdateArgs> = z
  .object({
    select: FormationVoiceSelectSchema.optional(),
    include: FormationVoiceIncludeSchema.optional(),
    data: z.union([FormationVoiceUpdateInputSchema, FormationVoiceUncheckedUpdateInputSchema]),
    where: FormationVoiceWhereUniqueInputSchema
  })
  .strict();

export const FormationVoiceUpdateManyArgsSchema: z.ZodType<Prisma.FormationVoiceUpdateManyArgs> = z
  .object({
    data: z.union([FormationVoiceUpdateManyMutationInputSchema, FormationVoiceUncheckedUpdateManyInputSchema]),
    where: FormationVoiceWhereInputSchema.optional()
  })
  .strict();

export const FormationVoiceDeleteManyArgsSchema: z.ZodType<Prisma.FormationVoiceDeleteManyArgs> = z
  .object({
    where: FormationVoiceWhereInputSchema.optional()
  })
  .strict();

export const FormationUndefinedVoicePresenceCreateArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      data: z.union([
        FormationUndefinedVoicePresenceCreateInputSchema,
        FormationUndefinedVoicePresenceUncheckedCreateInputSchema
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceUpsertArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpsertArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      where: FormationUndefinedVoicePresenceWhereUniqueInputSchema,
      create: z.union([
        FormationUndefinedVoicePresenceCreateInputSchema,
        FormationUndefinedVoicePresenceUncheckedCreateInputSchema
      ]),
      update: z.union([
        FormationUndefinedVoicePresenceUpdateInputSchema,
        FormationUndefinedVoicePresenceUncheckedUpdateInputSchema
      ])
    })
    .strict();

export const FormationUndefinedVoicePresenceCreateManyArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceCreateManyArgs> =
  z
    .object({
      data: z.union([
        FormationUndefinedVoicePresenceCreateManyInputSchema,
        FormationUndefinedVoicePresenceCreateManyInputSchema.array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceDeleteArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceDeleteArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      where: FormationUndefinedVoicePresenceWhereUniqueInputSchema
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateArgs> =
  z
    .object({
      select: FormationUndefinedVoicePresenceSelectSchema.optional(),
      include: FormationUndefinedVoicePresenceIncludeSchema.optional(),
      data: z.union([
        FormationUndefinedVoicePresenceUpdateInputSchema,
        FormationUndefinedVoicePresenceUncheckedUpdateInputSchema
      ]),
      where: FormationUndefinedVoicePresenceWhereUniqueInputSchema
    })
    .strict();

export const FormationUndefinedVoicePresenceUpdateManyArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceUpdateManyArgs> =
  z
    .object({
      data: z.union([
        FormationUndefinedVoicePresenceUpdateManyMutationInputSchema,
        FormationUndefinedVoicePresenceUncheckedUpdateManyInputSchema
      ]),
      where: FormationUndefinedVoicePresenceWhereInputSchema.optional()
    })
    .strict();

export const FormationUndefinedVoicePresenceDeleteManyArgsSchema: z.ZodType<Prisma.FormationUndefinedVoicePresenceDeleteManyArgs> =
  z
    .object({
      where: FormationUndefinedVoicePresenceWhereInputSchema.optional()
    })
    .strict();

export const FormationVoicePresenceCreateArgsSchema: z.ZodType<Prisma.FormationVoicePresenceCreateArgs> = z
  .object({
    select: FormationVoicePresenceSelectSchema.optional(),
    include: FormationVoicePresenceIncludeSchema.optional(),
    data: z.union([FormationVoicePresenceCreateInputSchema, FormationVoicePresenceUncheckedCreateInputSchema])
  })
  .strict();

export const FormationVoicePresenceUpsertArgsSchema: z.ZodType<Prisma.FormationVoicePresenceUpsertArgs> = z
  .object({
    select: FormationVoicePresenceSelectSchema.optional(),
    include: FormationVoicePresenceIncludeSchema.optional(),
    where: FormationVoicePresenceWhereUniqueInputSchema,
    create: z.union([FormationVoicePresenceCreateInputSchema, FormationVoicePresenceUncheckedCreateInputSchema]),
    update: z.union([FormationVoicePresenceUpdateInputSchema, FormationVoicePresenceUncheckedUpdateInputSchema])
  })
  .strict();

export const FormationVoicePresenceCreateManyArgsSchema: z.ZodType<Prisma.FormationVoicePresenceCreateManyArgs> = z
  .object({
    data: z.union([FormationVoicePresenceCreateManyInputSchema, FormationVoicePresenceCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const FormationVoicePresenceDeleteArgsSchema: z.ZodType<Prisma.FormationVoicePresenceDeleteArgs> = z
  .object({
    select: FormationVoicePresenceSelectSchema.optional(),
    include: FormationVoicePresenceIncludeSchema.optional(),
    where: FormationVoicePresenceWhereUniqueInputSchema
  })
  .strict();

export const FormationVoicePresenceUpdateArgsSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateArgs> = z
  .object({
    select: FormationVoicePresenceSelectSchema.optional(),
    include: FormationVoicePresenceIncludeSchema.optional(),
    data: z.union([FormationVoicePresenceUpdateInputSchema, FormationVoicePresenceUncheckedUpdateInputSchema]),
    where: FormationVoicePresenceWhereUniqueInputSchema
  })
  .strict();

export const FormationVoicePresenceUpdateManyArgsSchema: z.ZodType<Prisma.FormationVoicePresenceUpdateManyArgs> = z
  .object({
    data: z.union([
      FormationVoicePresenceUpdateManyMutationInputSchema,
      FormationVoicePresenceUncheckedUpdateManyInputSchema
    ]),
    where: FormationVoicePresenceWhereInputSchema.optional()
  })
  .strict();

export const FormationVoicePresenceDeleteManyArgsSchema: z.ZodType<Prisma.FormationVoicePresenceDeleteManyArgs> = z
  .object({
    where: FormationVoicePresenceWhereInputSchema.optional()
  })
  .strict();

export const FormationCreateArgsSchema: z.ZodType<Prisma.FormationCreateArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    data: z.union([FormationCreateInputSchema, FormationUncheckedCreateInputSchema]).optional()
  })
  .strict();

export const FormationUpsertArgsSchema: z.ZodType<Prisma.FormationUpsertArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    where: FormationWhereUniqueInputSchema,
    create: z.union([FormationCreateInputSchema, FormationUncheckedCreateInputSchema]),
    update: z.union([FormationUpdateInputSchema, FormationUncheckedUpdateInputSchema])
  })
  .strict();

export const FormationCreateManyArgsSchema: z.ZodType<Prisma.FormationCreateManyArgs> = z
  .object({
    data: z.union([FormationCreateManyInputSchema, FormationCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const FormationDeleteArgsSchema: z.ZodType<Prisma.FormationDeleteArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    where: FormationWhereUniqueInputSchema
  })
  .strict();

export const FormationUpdateArgsSchema: z.ZodType<Prisma.FormationUpdateArgs> = z
  .object({
    select: FormationSelectSchema.optional(),
    include: FormationIncludeSchema.optional(),
    data: z.union([FormationUpdateInputSchema, FormationUncheckedUpdateInputSchema]),
    where: FormationWhereUniqueInputSchema
  })
  .strict();

export const FormationUpdateManyArgsSchema: z.ZodType<Prisma.FormationUpdateManyArgs> = z
  .object({
    data: z.union([FormationUpdateManyMutationInputSchema, FormationUncheckedUpdateManyInputSchema]),
    where: FormationWhereInputSchema.optional()
  })
  .strict();

export const FormationDeleteManyArgsSchema: z.ZodType<Prisma.FormationDeleteManyArgs> = z
  .object({
    where: FormationWhereInputSchema.optional()
  })
  .strict();
