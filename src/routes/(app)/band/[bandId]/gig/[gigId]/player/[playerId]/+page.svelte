<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: playerOrganizerRole = data.playerOrganizerRole;
  $: player = data.player;
</script>

<ReturnLink href="/band/{data['band'].id}/gig/{data['gig'].id}" />

<p class="w-full p-2 pl-4 text-sm sm:w-96">{player.name}</p>

{#if !playerOrganizerRole}
  <div class="flex w-full p-2 sm:w-96">
    <Form>
      <Button label={'Promouvoir en organisateurice'} />
    </Form>
  </div>
{:else}
  <div class="flex w-full p-2 pl-4 text-xs sm:w-96">Déjà organisateurice</div>
{/if}
