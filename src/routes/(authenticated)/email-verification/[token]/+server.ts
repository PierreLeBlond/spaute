import { redirect } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";
import { router } from "$lib/trpc/router";
import { createContext } from "$lib/trpc/context";
import { TRPCError } from "@trpc/server";

export const GET: RequestHandler = async (event) => {
  const { token } = event.params;
  try {
    await router.createCaller(await createContext(event)).users.verifyEmail({ token });
    throw redirect(302, '/email-verification');
  } catch (error) {
    if (error instanceof TRPCError && error.cause?.message === "EXPIRED_TOKEN") {
      throw redirect(302, '/email-verification?expired=true');
    }
    if (error instanceof TRPCError && error.cause?.message === "INVALID_TOKEN") {
      throw redirect(302, '/email-verification?invalid=true');
    }
    throw redirect(302, '/email-verification');
  }
};