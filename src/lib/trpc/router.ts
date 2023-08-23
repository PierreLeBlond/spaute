import { bandVoices } from './routes/bandVoices';
import { bands } from './routes/bands';
import { disabledVoices } from './routes/disabledVoices';
import { formations } from './routes/formations';
import { gigVoices } from './routes/gigVoices';
import { gigs } from './routes/gigs';
import { instruments } from './routes/instruments';
import { memberships } from './routes/memberships';
import { players } from './routes/players';
import { presences } from './routes/presences';
import { roles } from './routes/roles';
import { users } from './routes/users';
import { t } from './t';

export const router = t.router({
  memberships,
  instruments,
  bands,
  gigs,
  players,
  formations,
  presences,
  gigVoices,
  disabledVoices,
  bandVoices,
  roles,
  users
});

// Export type router type signature,
// NOT the router itself.
export type Router = typeof router;
