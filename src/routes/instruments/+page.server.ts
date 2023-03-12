import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const instruments = await prisma.instrument.findMany();
  return {
    instruments
  }
}
