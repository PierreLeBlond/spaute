<script lang="ts">
  export let type: 'default' | 'link' | 'self' = 'default';
</script>

<li
  class="flex w-full max-w-sm items-center justify-center truncate rounded bg-neutral-200 p-2 shadow"
  class:shadow-neutral-300={type == 'default'}
  class:shadow-blue-300={type == 'link'}
  class:shadow-orange-300={type == 'self'}
>
  <slot />
</li>
