<script lang="ts">
  import type { DateTime } from 'luxon';
  import Errors from './Errors.svelte';

  export let id: string;
  export let label: string;
  export let date: DateTime;

  $: value = date.toISODate();

  export let errors: string[] = [];
</script>

<div class="flex flex-col">
  <label
    for="{id}-input"
    class="text-xs">{label}</label
  >
  <input
    id="{id}-input"
    name={id}
    class="h-8 rounded border-red-300 bg-neutral-800 text-sm"
    class:border={errors.length != 0}
    type="date"
    {value}
  />
  <Errors {errors} />
</div>
