import prisma from '$lib/prisma'
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  throw redirect(302, locals.playerId ? `/gigs` : '/login');
}