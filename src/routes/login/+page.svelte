<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { enhance } = superForm(data.form);
</script>

<div class="p-2">
  <RightLink
    href="/login/player"
    label="Ajouter un fanfaronx"
  />
</div>

<List>
  {#each data.players as player}
    <ListLinkItem>
      <form
        method="POST"
        class="hover: cursor-pointer"
        use:enhance
      >
        <input
          type="hidden"
          name="playerId"
          value={player.id}
        />
        <input
          type="submit"
          value={player.name}
          class="w-full p-2 text-start text-sm hover:cursor-pointer"
        />
      </form>
    </ListLinkItem>
  {/each}
</List>
