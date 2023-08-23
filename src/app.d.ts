// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      code: string;
    }
    interface Locals {
      playerId?: string;
      redirectAfterLogin?: string;
      auth: import('lucia').AuthRequest;
      user: {
        userId: string;
        email: string;
        emailVerified: boolean;
        hasPassword: boolean;
      } | null;
    }
    interface PageData {
      flash?: string;
    }
    // interface Platform {}
  }
}

declare global {
  namespace Lucia {
    type Auth = import('$lib/lucia').Auth;
    type DatabaseUserAttributes = {
      email: string;
      email_verified: boolean;
      has_password: boolean;
      player: PlayerCreateNestedOneWithoutUserInput;
    };
  }
}

export {};
