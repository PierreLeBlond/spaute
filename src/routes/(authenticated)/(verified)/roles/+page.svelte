<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const {
    form,
    errors,
    enhance: updateEnhance,
    tainted,
    submitting,
    message: updateMessage
  } = superForm(data.updateForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });

  updateMessage.subscribe(sendToast);

  const { enhance: deleteEnhance, message: deleteMessage } = superForm(data.deleteForm);

  deleteMessage.subscribe(sendToast);
</script>

<div class="p-4">
  <RightLink
    href="/role"
    label="Ajouter un pupitre"
  />
</div>

<List>
  {#if data.roles.length == 0}
    <p class="text-xs">Alley, tu dois bien savoir jouer d'un truc non ?</p>
  {:else}
    {#each data.roles as role, index}
      <ListItem>
        <div class="grid grid-cols-6 gap-y-2 p-2">
          <div class="col-span-4 col-start-2 flex items-center justify-center">
            <p class="text-center text-xs">
              {role.instrument.name}
            </p>
          </div>
          <div class="flex items-center justify-center">
            <form
              method="POST"
              action="?/delete"
              use:deleteEnhance
            >
              <input
                type="hidden"
                value={data.currentPlayer.id}
                name="playerId"
              />
              <input
                type="hidden"
                value={role.id}
                name="id"
              />
              <DeleteButtonIcon />
            </form>
          </div>
          <input
            form="updateForm"
            type="hidden"
            name="ids"
            value={role.id}
          />
          <div class="col-span-6">
            <Checkbox
              form="updateForm"
              name="playables"
              label={$form['playables'][index] ? 'je gère mon pupitre' : 'je gère pas encore'}
              bind:checked={$form['playables'][index]}
            />
          </div>
        </div>
      </ListItem>
    {/each}
  {/if}
</List>

<div class="p-4">
  <Form
    id="updateForm"
    action="?/update"
    errors={$errors._errors || []}
    enhance={updateEnhance}
  >
    <input
      type="hidden"
      value={data.currentPlayer.id}
      name="playerId"
    />
    <div class="col-span-6">
      <Button
        label={'Mettre à jour'}
        disabled={$submitting || !$tainted}
      />
    </div>
  </Form>
</div>
