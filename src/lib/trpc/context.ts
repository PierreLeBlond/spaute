import type { RequestEvent } from "@sveltejs/kit";
import type { inferAsyncReturnType } from "@trpc/server";

export async function createContext(event: RequestEvent) {
  const { playerId } = event.locals;
  return {
    playerId: playerId ? Number(playerId) : null
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
