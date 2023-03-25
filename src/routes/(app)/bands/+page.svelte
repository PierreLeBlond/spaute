<script lang="ts">
  import BaseButton from '$lib/components/buttons/BaseButton.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import { fly } from 'svelte/transition';
  import type { ActionData, PageData } from './$types';

  export let data: PageData;
  export let form: ActionData;

  $: bands = data.bands;

  let showForm = false;

  let clientWidth: number;
</script>

<div
  class="relative h-full w-full overflow-x-hidden"
  bind:clientWidth
>
  {#if !showForm}
    <div
      class="absolute flex h-full w-full flex-col pt-2"
      transition:fly={{ x: -clientWidth }}
    >
      <div class="p-2">
        <BaseButton on:click={() => (showForm = true)}>
          <div class="grid w-full grid-cols-8 items-center">
            <p class="col-span-6 col-start-2">Ajouter une fanfare</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right-fill col-span-1 col-start-8"
              viewBox="0 0 16 16"
            >
              <path
                d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
              />
            </svg>
          </div>
        </BaseButton>
      </div>
      <List>
        {#if bands.length == 0}
          <p class="text-xs">T'as pas de fanfare ? la tristesse...</p>
        {:else}
          {#each bands as band}
            <ListLinkItem>
              <a
                href="./band/{band.id}"
                class="flex w-full rounded p-2 text-sm"
              >
                {band.name}
              </a>
            </ListLinkItem>
          {/each}
        {/if}
      </List>
    </div>
  {:else}
    <div
      class="absolute h-full w-full"
      transition:fly={{ x: clientWidth }}
    >
      <button
        on:click={() => (showForm = false)}
        class="flex justify-center pt-2 text-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-left-fill m-2"
          viewBox="0 0 16 16"
        >
          <path
            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
          />
        </svg>
      </button>
      <div class="w-full p-2 sm:w-96">
        <Form>
          <div class="grid grid-cols-2 gap-y-2">
            <h2 class="col-span-2 text-xs">Créer une fanfare</h2>
            <Text
              id={'name'}
              label={'nom'}
              value={form?.data?.name ?? ''}
              error={form?.errors?.name}
            />
            <div class="col-span-2">
              <Button label={'Créer'} />
            </div>
          </div>
        </Form>
      </div>
    </div>
  {/if}
</div>
