<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import List from '$lib/components/layout/List.svelte';
  import type { PageData } from './$types';
  import Role from './Role.svelte';

  export let data: PageData;

  $: roles = data.roles;
  $: instruments = data.instruments;
</script>

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

<div class="w-full p-2 sm:w-96">
  <Form action={'?/add'}>
    <div class="grid grid-cols-2 gap-y-2 gap-x-2">
      <p class="col-span-2 text-xs">Ajouter un pupitre</p>
      <Select
        id="instrumentId"
        label="instrument"
      >
        {#each instruments as instrument}
          <option value={instrument.id}>
            {instrument.name}
          </option>
        {/each}
      </Select>
      <Checkbox
        id="playable"
        label="je gère mon pupitre"
      />
      <div class="col-span-2">
        <Button label={'Ajouter'} />
      </div>
    </div>
  </Form>
</div>
