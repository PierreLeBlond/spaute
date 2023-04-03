import { t } from "./t";

export const router = t.router({
  // routes
});

// Export type router type signature,
// NOT the router itself.
export type Router = typeof router;