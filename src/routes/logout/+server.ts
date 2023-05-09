import { json } from "@sveltejs/kit";
import type { RequestHandler } from './$types';
import { auth } from "$lib/lucia";

export const POST: RequestHandler = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) {
    await auth.invalidateSession(session.sessionId); // invalidate session
  }
  locals.auth.setSession(null); // remove cookie

  return json({
    success: true
  })
}