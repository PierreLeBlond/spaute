<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<header class="w-full grid grid-cols-4">
  <a href="../../players" class="flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      class="bi bi-arrow-left-circle-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
      />
    </svg>
  </a>
  <h1 class="col-span-2 flex items-center justify-center h-16">
    Hello {data.player.name} !
  </h1>
</header>

<ul class="grid grid-cols-2 w-full items-center justify-center pb-8">
  <li class="relative">
    <a class="w-full block text-center" href="./presences">Presences</a>
  </li>
  <li>
    <a class="w-full block text-center" href="./roles">Roles</a>
  </li>
</ul>

<slot />
