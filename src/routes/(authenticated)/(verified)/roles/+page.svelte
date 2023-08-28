<script lang="ts">
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import Rest from '$lib/components/logos/Rest.svelte';
  import Delimiter from '$lib/components/layout/Delimiter.svelte';
  import Title from '$lib/components/layout/Title.svelte';

  export let data: PageData;

  const updatePayloads = data.updatePayloads.map(({ role, form }) => ({
    role,
    form: superForm(form, {
      taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.',
      id: role.id
    })
  }));

  const deleteForm = superForm(data.deleteForm);
</script>

<RightLink href="/role">Ajouter un pupitre</RightLink>

<Delimiter></Delimiter>

<Title>Mes pupitres</Title>

<List>
  {#if data.roles.length == 0}
    <Rest></Rest>
  {:else}
    {#each updatePayloads as updatePayload}
      <ListItem>
        <div class="grid w-full grid-cols-6 gap-y-2 pl-2 pt-2">
          <div class="col-span-5 flex items-center">
            <p class="text-xs font-bold">
              {updatePayload.role.instrument.name}
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
                value={updatePayload.role.id}
                name="id"
              />
              <DeleteButtonIcon />
            </Form>
          </div>
          <div class="col-span-6">
            <Form
              form={updatePayload.form}
              action="?/update"
              submitOnChange
              hideErrors
            >
              <input
                type="hidden"
                name="id"
                value={updatePayload.role.id}
              />
              <input
                type="hidden"
                value={data.currentPlayer.id}
                name="playerId"
              />
              <Checkbox
                form={updatePayload.form}
                name="playable"
                field="playable"
                checkedLabel="je gère mon pupitre"
                uncheckedLabel="je gère pas encore"
              />
            </Form>
          </div>
        </div>
      </ListItem>
    {/each}
  {/if}
</List>
