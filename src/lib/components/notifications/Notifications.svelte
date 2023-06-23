<script lang="ts">
  import { HeadlessService } from '@novu/headless';
  import type { FetchResult } from '@novu/headless/dist/lib/types';
  import type { ISession } from '@novu/notification-center';

  export let userId: string;

  const headlessService = new HeadlessService({
    applicationIdentifier: 'wEg1qLkrjAXC',
    subscriberId: userId
  });

  let unseenCount = 0;

  headlessService.initializeSession({
    listener: (_: FetchResult<ISession>) => {},
    onSuccess: (_: ISession) => {
      headlessService.listenUnseenCountChange({
        listener: (u: number) => {
          unseenCount = u;
        }
      });

      headlessService.fetchUnseenCount({
        listener: (_: FetchResult<{ count: number }>) => {},
        onSuccess: (data: { count: number }) => {
          unseenCount = data.count;
        },
        onError: (_: unknown) => {}
      });
    },
    onError: (_) => {}
  });
</script>

<nav>
  <div
    class="pb-3"
    class:text-cyan-600={unseenCount > 0}
  >
    <a
      data-sveltekit-reload
      href="/notifications"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-bell-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
        />
      </svg>
    </a>
    {#if unseenCount > 0}
      <span class="absolute right-5 top-4 h-4 w-4 rounded-full bg-orange-600 text-center text-xs text-neutral-200"
        >{unseenCount}</span
      >
    {/if}
  </div>
</nav>
