import type { RequestEvent } from "@sveltejs/kit";
import type { inferAsyncReturnType } from "@trpc/server";

export async function createContext(_: RequestEvent) {
  return {
    // context information
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
