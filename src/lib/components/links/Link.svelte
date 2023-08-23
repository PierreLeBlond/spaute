<script lang="ts">
  export let href: string;
  export let danger: boolean = false;
</script>

<a
  {href}
  class="flex h-8 w-full items-center justify-center rounded bg-cyan-600 text-center text-sm text-neutral-800"
  class:bg-red-500={danger}><slot /></a
>
