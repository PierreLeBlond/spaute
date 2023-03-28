<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import DeleteButton from '$lib/components/buttons/DeleteButton.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

{#if data.players.length != 0}
  <div class="w-full p-2 text-orange-300 sm:w-96">
    <p class="text-xs">Un, dos, Atención. Un, dos, tres, cuatro, la panthera.</p>
  </div>
{:else}
  <div class="w-full p-2 sm:w-96">
    <Form>
      <p class="text-xs">Allez viens, on est bien !</p>
      <Button label={'Rejoindre'} />
    </Form>
  </div>
{/if}

<List>
  {#if data.band.players.length == 0}
    <p class="text-xs">Youhou ? Y'a quelqu'un ?</p>
  {:else}
    {#each data.band.players as player}
      <ListItem>
        {#if player.id == Number(data.playerId)}
          <div class="flex justify-between rounded border-b-2 border-orange-300 p-2 text-sm">
            <p>
              {player.name}
            </p>
            {#if player.adminRoles.length != 0}
              <p>admin</p>
            {/if}
          </div>
        {:else if data.isAdmin}
          <a
            href="/band/{data.band.id}/player/{player.id}"
            class="flex justify-between rounded border-b-2 border-blue-300 p-2 text-sm"
          >
            <p>
              {player.name}
            </p>
            {#if player.adminRoles.length != 0}
              <p>admin</p>
            {/if}
          </a>
        {:else}
          <div class="flex justify-between p-2 text-sm">
            <p>
              {player.name}
            </p>
            {#if player.adminRoles.length != 0}
              <p>admin</p>
            {/if}
          </div>
        {/if}
      </ListItem>
    {/each}
  {/if}
</List>

{#if data.isAdmin}
  <div class="w-full p-2">
    <DeleteButton
      label="Supprimer la fanfare :o"
      url="/api/band/{data.band.id}"
      backUrl="/bands"
    />
  </div>
{/if}
