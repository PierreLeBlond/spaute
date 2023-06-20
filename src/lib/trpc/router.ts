import { t } from "./t";
import { instruments } from "./routes/instruments";
import { bands } from "./routes/bands";
import { gigs } from "./routes/gigs";
import { presences } from "./routes/presences";
import { players } from "./routes/players";
import { formations } from "./routes/formations";
import { memberships } from "./routes/memberships";
import { gigVoices } from "./routes/gigVoices";
import { disabledVoices } from "./routes/disabledVoices";
import { bandVoices } from "./routes/bandVoices";
import { roles } from "./routes/roles";
import { users } from "./routes/users";

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