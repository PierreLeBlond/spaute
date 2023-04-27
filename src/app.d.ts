// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			playerId?: string;
			redirectAfterLogin?: string;
			auth: import("lucia-auth").AuthRequest;
			user: {
				userId: string;
				playerId: number
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
			playerId: number
		};
	}
}

export { };
