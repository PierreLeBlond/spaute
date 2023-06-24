import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import { message, setError, superValidate } from "sveltekit-superforms/server";
import type { Actions, PageServerLoad } from "./$types";
import { presenceSchema } from "$lib/components/gigs/presence/presenceSchema";
import { TRPCError } from "@trpc/server";
import { NOVU_API_KEY } from "$env/static/private";
import { TriggerRecipientsTypeEnum } from "@novu/shared";
import { Novu } from "@novu/node";
import { z } from "zod";

const spamSchema = z.object({
  userId: z.string(),
  gigId: z.string(),
  gigName: z.string()
})

export const load: PageServerLoad = async (event) => {
  const { currentPresence } = await event.parent();

  const spamForm = () => superValidate(spamSchema, { id: 'spamForm' });

  const form = () => superValidate({
    value: currentPresence?.value
  }, presenceSchema, { id: 'presenceForm' });

  return {
    form: form(),
    spamForm: spamForm(),
    index: 102
  };
}

export const actions: Actions = {
  create: async (event) => {
    const { request } = event;
    const form = await superValidate(request, presenceSchema, { id: 'presenceForm' });

    try {
      await router.createCaller(await createContext(event)).presences.create(form.data);
      return message(form, 'Presta rejointe :)');
    } catch (error) {
      if (!(error instanceof TRPCError)) {
        throw error;
      }
      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Impossible de rejoindre :(');
    }
  },
  update: async (event) => {
    const { request } = event;
    const form = await superValidate(request, presenceSchema, { id: 'presenceForm' });

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

      if (error.code == 'INTERNAL_SERVER_ERROR') {
        throw error.cause;
      }

      setError(
        form,
        "",
        error.message
      );
      return message(form, 'Impossible de mettre à jour :(');
    }
  },
  spam: async (event) => {
    const { request } = event;
    const form = await superValidate(request, spamSchema, { id: 'spamForm' });

    const novu = new Novu(NOVU_API_KEY);
    const spamTopicKey = `gig:spam:${form.data.gigId}`;

    await novu.trigger('spam-gig', {
      to: [{ type: TriggerRecipientsTypeEnum.TOPIC, topicKey: spamTopicKey }],
      payload: {
        gigId: form.data.gigId,
        gigName: form.data.gigName
      },
      actor: { subscriberId: form.data.userId }
    });

    return message(form, 'Fanfaronx spamééx :)');
  }
}

