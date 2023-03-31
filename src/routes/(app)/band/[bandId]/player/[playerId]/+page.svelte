<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: adminRole = data.adminRole;
  $: player = data.player;
</script>

<ReturnLink href="/band/{data['band'].id}/players" />

<p class="w-full p-2 pl-4 text-sm">{player.name}</p>

{#if !adminRole}
  <div class="flex w-full p-2">
    <Form>
      <Button label={'Promouvoir en admin'} />
    </Form>
  </div>
{:else}
  <div class="flex w-full p-2 pl-4 text-xs">Déjà admin</div>
{/if}
