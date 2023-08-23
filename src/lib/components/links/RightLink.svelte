<script lang="ts">
  import Link from './Link.svelte';

  export let href: string;
  export let danger: boolean = false;
</script>

<Link
  {href}
  {danger}
>
  <div class="grid h-full w-full grid-cols-8 items-center">
    <p class="col-span-6 col-start-2"><slot /></p>
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
</Link>
