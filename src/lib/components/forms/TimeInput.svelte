<script lang="ts">
  import { DateTime } from 'luxon';
  import Errors from './Errors.svelte';

  export let id: string;
  export let label: string;
  export let date: DateTime;

  $: time = date.toLocaleString(DateTime.TIME_24_SIMPLE);

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
    type="time"
    value={time}
  />
  <Errors {errors} />
</div>
