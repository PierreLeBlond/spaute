<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import type { PageData } from './$types';
  import Role from './Role.svelte';

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
        <Role
          {role}
          instrument={role.instrument}
        />
      </li>
    {/each}
  {/if}
</List>
