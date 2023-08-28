import { t } from '$lib/trpc/t';

import { changePassword } from './changePassword';
import { create } from './create';
import { login } from './login';
import { resetPassword } from './resetPassword';
import { sendEmailVerificationCode } from './sendEmailVerificationCode';
import { sendPasswordChangeCode } from './sendPasswordChangeCode';
import { sendPasswordResetCode } from './sendPasswordResetCode';
import { sendSignupPassword } from './sendSignupPassword';
import { signup } from './signup';
import { validatePasswordChange } from './validatePasswordChange';
import { validatePasswordReset } from './validatePasswordReset';
import { verifyEmail } from './verifyEmail';

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
});
