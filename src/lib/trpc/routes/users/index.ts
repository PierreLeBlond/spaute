import { t } from "$lib/trpc/t";
import { create } from "./create";
import { validatePasswordReset } from "./validatePasswordReset";
import { login } from "./login";
import { resetPassword } from "./resetPassword";
import { sendSignupPassword } from "./sendSignupPassword";
import { sendPasswordResetPassword } from "./sendPasswordResetPassword";
import { sendEmailVerificationPassword } from "./sendEmailVerificationPassword";
import { verifyEmail } from "./verifyEmail";
import { signup } from "./signup";

export const users = t.router({
  create,
  login,
  sendEmailVerificationPassword,
  verifyEmail,
  sendPasswordResetPassword,
  validatePasswordReset,
  resetPassword,
  sendSignupPassword,
  signup
})