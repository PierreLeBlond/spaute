import type { RequestEvent } from "@sveltejs/kit";
import type { inferAsyncReturnType } from "@trpc/server";

export async function createContext(event: RequestEvent) {
  const { auth, user } = event.locals;
  return {
    user,
    auth
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
