<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const eventDispatcher = createEventDispatcher();

  export let searchValue: string = '';

  const clear = () => {
    searchValue = '';
    eventDispatcher('input');
  };
</script>

<div class="flex h-11 flex-shrink-0 items-center justify-center">
  <div class="relative h-full w-96">
    <input
      type="search"
      placeholder="Rechercher par nom..."
      class="h-full w-full rounded-full border border-blue-300 bg-neutral-200 indent-2 text-sm text-cyan-600"
      bind:value={searchValue}
      on:input={() => eventDispatcher('input')}
    />
    <svg
      class="absolute right-4 top-0 h-11"
      role="presentation"
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="none"
      stroke="currentcolor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
    >
      <g
        id="glass"
        class="text-cyan-600"
      >
        <circle
          cx="14"
          cy="14"
          r="12"
        />
        <path d="M23 23 L30 30" />
      </g>
      <g
        id="cross"
        class="text-cyan-600 hover:cursor-pointer"
        on:click={clear}
        on:keydown={clear}
      >
        <path d="M4 4 L28 28" />
        <path d="M28 4 L4 28" />
      </g>
    </svg>
  </div>
</div>

<style>
  input + svg #glass {
    visibility: hidden;
  }

  input + svg #cross {
    pointer-events: bounding-box;
    visibility: visible;
  }

  input:placeholder-shown + svg #glass {
    visibility: visible;
  }

  input:placeholder-shown + svg #cross {
    visibility: hidden;
  }

  input::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
</style>
