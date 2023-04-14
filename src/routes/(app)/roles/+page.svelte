<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import type { PageData } from './$types';
  import { enhance } from '$app/forms';

  export let data: PageData;

  $: roles = data.roles;
</script>

<div class="p-2">
  <RightLink
    href="/role"
    label="Ajouter un pupitre"
  />
</div>

<List>
  {#if roles.length == 0}
    <p class="text-xs">Alley, tu dois bien savoir jouer d'un truc non ?</p>
  {:else}
    {#each roles as role}
      <li class="mb-2">
        <Form
          action="?/update"
          errors={[]}
          {enhance}
        >
          <div class="grid grid-cols-6 gap-y-2">
            <div class="col-span-4 col-start-2 flex items-center justify-center">
              <p class="text-center text-xs">
                {role.instrument.name}
              </p>
            </div>
            <div class="flex items-center justify-center">
              <form
                method="POST"
                action="?/delete&roleId={role.id}"
              >
                <DeleteButtonIcon />
              </form>
            </div>
            <input
              type="hidden"
              value={role.id}
              name="roleId"
            />
            <div class="col-span-6">
              <Checkbox
                id="playable"
                label="je gère mon pupitre"
                checked={role.playable}
              />
            </div>
            <div class="col-span-6">
              <Button label={'Mettre à jour'} />
            </div>
          </div>
        </Form>
      </li>
    {/each}
  {/if}
</List>
