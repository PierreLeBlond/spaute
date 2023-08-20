<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const updateForm = superForm(data.updateForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });

  const deleteForm = superForm(data.deleteForm);
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
            <Form
              form={deleteForm}
              action="?/delete"
              hideErrors
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
            </Form>
          </div>
          <input
            form="updateForm"
            type="hidden"
            name="ids"
            value={role.id}
          />
          <div class="col-span-6">
            <Checkbox
              form={updateForm}
              name="playables"
              field="playables[{index}]"
              checkedLabel="je gère mon pupitre"
              uncheckedLabel="je gère pas encore"
            />
          </div>
        </div>
      </ListItem>
    {/each}
  {/if}
</List>

<div class="p-4">
  <Form
    form={updateForm}
    action="?/update"
  >
    <input
      type="hidden"
      value={data.currentPlayer.id}
      name="playerId"
    />
    <div class="col-span-6">
      <Button
        form={updateForm}
        label={'Mettre à jour'}
        disabledWhenNotTainted
      />
    </div>
  </Form>
</div>
