import prisma from "$lib/prisma";
import { t } from "../t";

export const instruments = t.router({
  list: t.procedure.query(async () => {
    const instruments = await prisma.instrument.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return instruments;
  })
})