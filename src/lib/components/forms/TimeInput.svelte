<script lang="ts">
  import { DateTime } from 'luxon';

  export let id: string;
  export let label: string;
  export let date: DateTime;

  $: time = date.toLocaleString(DateTime.TIME_24_SIMPLE);

  export let error: string = '';
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
    class:border={error}
    type="time"
    value={time}
  />
  <p class="h-4 text-xs text-red-300">
    {error}
  </p>
</div>
