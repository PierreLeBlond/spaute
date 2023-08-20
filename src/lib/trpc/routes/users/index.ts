import { t } from "$lib/trpc/t";
import { create } from "./create";
import { validatePasswordReset } from "./validatePasswordReset";
import { validatePasswordChange } from "./validatePasswordChange";
import { login } from "./login";
import { resetPassword } from "./resetPassword";
import { changePassword } from "./changePassword";
import { sendSignupPassword } from "./sendSignupPassword";
import { sendPasswordResetCode } from "./sendPasswordResetCode";
import { sendPasswordChangeCode } from "./sendPasswordChangeCode";
import { sendEmailVerificationCode } from "./sendEmailVerificationCode";
import { verifyEmail } from "./verifyEmail";
import { signup } from "./signup";

export const users = t.router({
  create,
  login,
  sendEmailVerificationCode,
  verifyEmail,
  sendPasswordResetCode,
  sendPasswordChangeCode,
  validatePasswordReset,
  validatePasswordChange,
  resetPassword,
  changePassword,
  sendSignupPassword,
  signup
})