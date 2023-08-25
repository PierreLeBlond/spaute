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
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';

  export let data: PageData;

  const updateForm = superForm(data.updateForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });

  const deleteForm = superForm(data.deleteForm);
</script>

<p class="px-16 pt-8 text-center text-xs">
  <b>Pupitres</b>
</p>

<List>
  {#if data.roles.length == 0}
    <p class="px-16 pt-8 text-center text-xs">Alley, tu dois bien savoir jouer d'un truc non ?</p>
  {:else}
    {#each data.roles as role, index}
      <ListItem>
        <div class="grid grid-cols-6 gap-y-2 p-2">
          <div class="col-span-5 flex items-center">
            <p class="text-xs font-bold">
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

<FormLayout>
  <Form
    form={updateForm}
    action="?/update"
  >
    <InputsLayout>
      <input
        type="hidden"
        value={data.currentPlayer.id}
        name="playerId"
      />
      <Button
        form={updateForm}
        label={'Mettre à jour'}
        disabledWhenNotTainted
      />
    </InputsLayout>
  </Form>
</FormLayout>

<div class="px-16 pb-8">
  <RightLink href="/role">Ajouter un pupitre</RightLink>
</div>
