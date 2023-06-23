// token.ts
import { auth } from "./lucia";
import { passwordToken } from "@lucia-auth/tokens";

// @ts-ignore
export const otpToken = passwordToken(auth, "otp", {
  expiresIn: 60 * 60 // 1 hour
});