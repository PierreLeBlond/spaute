<script lang="ts">
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="p-2">
  <RightLink
    href="/login/player"
    label="Ajouter un musicien"
  />
</div>

<List>
  {#each data.players as player}
    <ListLinkItem>
      <Form>
        <input
          type="hidden"
          name="playerId"
          value={player.id}
        />
        <input
          type="submit"
          value={player.name}
          class="h-8 w-full text-sm text-orange-300"
        />
      </Form>
    </ListLinkItem>
  {/each}
</List>
