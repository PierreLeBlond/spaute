<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import List from '$lib/components/layout/List.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h2 class="h-16 w-full p-2 text-sm sm:w-96">Yo ! Qui es tu ?</h2>

<List>
  {#each data.players as player}
    <li class="mb-2">
      <Form action="?/login">
        <input
          type="hidden"
          name="playerId"
          value={player.id}
        />
        <Button label={player.name} />
      </Form>
    </li>
  {/each}
</List>

<div class="w-full p-2 sm:w-96">
  <Form action={'?/addPlayer'}>
    <div class="grid grid-cols-2 gap-y-2 pt-2">
      <h2 class="col-span-2 w-full text-xs">
        <p>Tu trouves pas ton blaze ?</p>
        <p>Rajoute le :</p>
      </h2>
      <Text
        id={'name'}
        label={'nom'}
      />
      <div class="col-span-2">
        <Button label="Ajouter" />
      </div>
    </div>
  </Form>
</div>
