<script lang="ts">
  import { page } from "$app/stores";
</script>

<header class="w-full grid grid-cols-4">
  {#if $page.data.backPathname}
    <a href={$page.data.backPathname} class="flex items-center justify-center">
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
  {/if}
  <div
    class="col-span-2 col-start-2 flex flex-col items-center justify-center h-16"
  >
    <h1 class="">
      {$page.data.title}
    </h1>
    <h4 class="text-xs">{$page.data.playerName || ""}</h4>
  </div>
  {#if $page.data.playerId}
    <a href="/logout" class="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-door-closed-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </svg>
    </a>
  {/if}
</header>
