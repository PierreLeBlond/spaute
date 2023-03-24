<script lang="ts">
  import { page } from '$app/stores';
</script>

<header class="grid h-full w-full grid-cols-5 bg-neutral-900">
  <div class="col-span-1 flex flex-col items-center justify-evenly py-2">
    {#if $page.data['backPathname']}
      <a
        href={$page.data['backPathname']}
        class="flex items-center justify-center text-blue-300"
      >
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
    {#if $page.data['backName']}
      <p class="truncate text-xs">{$page.data['backName']}</p>
    {/if}
  </div>
  <div class="col-span-1 col-start-4 flex flex-col items-center justify-evenly truncate py-2">
    {#if $page.data['playerName']}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
      <p class="truncate text-xs">{$page.data['playerName']}</p>
    {/if}
  </div>
  <div class="col-span-1 col-start-5 flex flex-col items-center justify-evenly py-2">
    {#if $page.data['playerId']}
      <a
        href="/logout"
        class="flex items-center justify-center text-blue-300"
      >
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
      <p class="text-xs">logout</p>
    {/if}
  </div>
  <div class="col-span-5 row-start-2 flex h-16 flex-col items-start justify-center truncate pl-8">
    <h1 class="text-xl">
      {$page.data['title']}
    </h1>
  </div>
</header>
