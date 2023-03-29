<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import type { PageData } from './$types';

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
        <Form action="?/update">
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
                <button
                  type="submit"
                  class="flex items-center justify-center rounded p-2 text-sm text-red-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                    />
                  </svg>
                </button>
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
