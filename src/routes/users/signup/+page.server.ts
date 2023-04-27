import type { PageServerLoad, Actions } from "./$types";
import { z } from "zod";
import { message, setError, superValidate } from "sveltekit-superforms/server";
import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { TRPCError } from "@trpc/server";

const schema = z.object({
  email: z.string().email({ message: 'Email incorrect' }),
  password: z.string().min(8, { message: 'Au moins 8 caractères' }).max(32),
  passwordConfirmation: z.string(),
  name: z.string().min(1, { message: 'On veut un nom !' }).max(32)
})

export const load: PageServerLoad = async () => {
  const form = () => superValidate(schema);

  return {
    form: form(),
    index: 2
  }
}

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const form = await superValidate(request, schema);

    const { email, password, passwordConfirmation, name } = form.data;

    if (password != passwordConfirmation) {
      setError(form, 'passwordConfirmation', 'Ne correspond pas.');
    }

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      const player = await router.createCaller(await createContext(event)).players.create({ name });
      await router.createCaller(await createContext(event)).users.create({ email, password, playerId: player.id });
      return message(form, 'Fanfaronx crééx :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      console.log(error.cause);
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Fanfaronx non valide :(');
    }
  }
};
