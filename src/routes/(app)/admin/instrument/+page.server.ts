import { InstrumentCreateInputSchema } from "$lib/generated/zod";
import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { TRPCError } from "@trpc/server";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    index: 11
  }
}

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;

    const formData = Object.fromEntries(await request.formData());

    const input = {
      name: formData["name"] as string
    }

    const result = InstrumentCreateInputSchema.safeParse(input);

    if (!result.success) {
      const formated = result.error.format();
      const errors: { [key: string]: string[] | undefined } = {
        name: formated.name?._errors
      }

      return {
        message: 'Instrument non valide :(',
        input,
        errors
      }
    }

    try {
      await router.createCaller(await createContext(event)).instruments.create(input);
      return { message: 'Instrument créé !', input }
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      return {
        message: 'Instrument non valide :(',
        input,
        errors: {
          global: [error.message]
        }
      }
    }
  }
}
