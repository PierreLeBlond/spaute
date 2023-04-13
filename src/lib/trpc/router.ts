import { t } from "./t";
import { instruments } from "./routes/instruments";

export const router = t.router({
  instruments
});

// Export type router type signature,
// NOT the router itself.
export type Router = typeof router;