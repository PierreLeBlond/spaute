<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { errors, enhance } = superForm(data.form);
</script>

{#if !data.currentMembership}
  <div class="w-full p-2">
    <Form
      errors={$errors._errors || []}
      {enhance}
    >
      <p class="text-xs">Allez viens, on est bien !</p>
      <input
        type="hidden"
        name="bandId"
        value={data.band.id}
      />
      <input
        type="hidden"
        name="playerId"
        value={data.currentPlayer.id}
      />
      <Button label={'Rejoindre'} />
    </Form>
  </div>
{/if}

<List>
  {#if data.band.memberships.length == 0}
    <p class="text-xs">Youhou ? Y'a quelqu'un ?</p>
  {:else}
    {#each data.band.memberships as membership}
      <ListItem>
        {#if data.currentMembership?.player.id == membership.player.id}
          <div class="flex justify-between rounded border-b-2 border-orange-300 p-2 text-sm">
            <p>
              {membership.player.name}
            </p>
            {#if membership.isAdmin}
              <p>admin</p>
            {/if}
          </div>
        {:else if data.currentMembership?.isAdmin}
          <a
            href="/band/{data.band.id}/player/{membership.player.id}"
            class="flex justify-between rounded border-b-2 border-blue-300 p-2 text-sm"
          >
            <p>
              {membership.player.name}
            </p>
            {#if membership.isAdmin}
              <p>admin</p>
            {/if}
          </a>
        {:else}
          <div class="flex justify-between p-2 text-sm">
            <p>
              {membership.player.name}
            </p>
            {#if membership.isAdmin}
              <p>admin</p>
            {/if}
          </div>
        {/if}
      </ListItem>
    {/each}
  {/if}
</List>
