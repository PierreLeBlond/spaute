import { t } from "$lib/trpc/t";
import { create } from "./create";
import { getResetPasswordToken } from "./getResetPasswordToken";
import { login } from "./login";
import { resetPassword } from "./resetPassword";
import { sendRecoveryEmail } from "./sendRecoveryEmail";
import { sendVerificationEmail } from "./sendVerificationEmail";
import { verifyEmail } from "./verifyEmail";

export const users = t.router({
  create,
  login,
  sendVerificationEmail,
  verifyEmail,
  sendRecoveryEmail,
  getResetPasswordToken,
  resetPassword
})