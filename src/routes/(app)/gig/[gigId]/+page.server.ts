import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { message, setError, superValidate } from "sveltekit-superforms/server";
import type { Actions, PageServerLoad } from "./$types";
import { presenceSchema } from "$lib/components/gigs/presence/presenceSchema";
import { TRPCError } from "@trpc/server";

export const load: PageServerLoad = async (event) => {
  const { gigId } = event.params;
  const { playerId } = event.locals;
  const caller = router.createCaller(await createContext(event));
  const gig = await caller.gigs.read({ id: Number(gigId) });
  const band = await caller.bands.read({ id: gig.band.id });
  const currentPresence = await caller.presences.read({ gigId: Number(gigId), playerId: Number(playerId) });

  const form = () => superValidate({
    value: currentPresence?.value
  }, presenceSchema);

  return {
    form: form(),
    band,
    gig,
    currentPresence,
    index: 21
  };
}

export const actions: Actions = {
  create: async (event) => {
    const { request } = event;
    const form = await superValidate(request, presenceSchema);

    try {
      await router.createCaller(await createContext(event)).presences.create(form.data);
      return message(form, 'Presta rejointe :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Impossible de rejoindre :(');
    }
  },
  update: async (event) => {
    const { request } = event;
    const form = await superValidate(request, presenceSchema);

    if (!form.valid) {
      return message(form, 'Champs non valide :(');
    }

    try {
      await router.createCaller(await createContext(event)).presences.update(form.data);
      return message(form, 'Presence mise à jour :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        null,
        error.message
      );
      return message(form, 'Impossible de mettre à jour :(');
    }
  }
}

