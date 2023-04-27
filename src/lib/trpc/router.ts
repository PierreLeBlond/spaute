import { t } from "./t";
import { instruments } from "./routes/instruments";
import { bands } from "./routes/bands";
import { gigs } from "./routes/gigs";
import { presences } from "./routes/presences";
import { players } from "./routes/players";
import { memberships } from "./routes/memberships";
import { voices } from "./routes/voices";
import { roles } from "./routes/roles";
import { users } from "./routes/users";

export const router = t.router({
  memberships,
  instruments,
  bands,
  gigs,
  players,
  presences,
  voices,
  roles,
  users
});

// Export type router type signature,
// NOT the router itself.
export type Router = typeof router;