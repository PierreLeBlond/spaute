import prisma from "$lib/prisma";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const instruments = await prisma.instrument.findMany({
    orderBy: {
      name: 'asc'
    }
  });
  return {
    instruments,
    backPathname: '/',
    title: 'Instruments'
  }
}

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const name = data.get('name') as string;

    const response = await prisma.instrument.create({
      data: {
        name,
      }
    });

    return { success: true, response };
  }
}
