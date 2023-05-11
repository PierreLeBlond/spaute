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
			auth: import("lucia-auth").AuthRequest;
			user: {
				userId: string;
				email: string;
				emailVerified: boolean;
			} | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

declare global {
	namespace Lucia {
		type Auth = import("$lib/lucia").Auth;
		type UserAttributes = {
			email: string,
			email_verified: boolean,
			player: PlayerCreateNestedOneWithoutUserInput
		};
	}
}

export { };
