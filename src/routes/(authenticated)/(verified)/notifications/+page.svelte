<script lang="ts">
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import { HeadlessService } from '@novu/headless';
  import type { FetchResult, UpdateResult } from '@novu/headless/dist/lib/types';
  import type { ISession } from '@novu/headless/dist/utils/types';
  import type { IPaginatedResponse, IMessage } from '@novu/shared';
  import { Firework } from 'svelte-loading-spinners';

  import type { PageData } from './$types';
  import Rest from '$lib/components/logos/Rest.svelte';

  export let data: PageData;

  const headlessService = new HeadlessService({
    applicationIdentifier: 'wEg1qLkrjAXC',
    subscriberId: data.currentPlayer.userId
  });

  let messages: IMessage[] = [];
  let loading: boolean = true;
  let removeNotification: (notificationId: string) => void = (_: string) => {};

  const fetchNotifications = () => {
    headlessService.fetchNotifications({
      listener: (result: FetchResult<IPaginatedResponse<IMessage>>) => {
        if (result.status == 'loading') {
          loading = true;
        }
      },
      onSuccess: (result: IPaginatedResponse<IMessage>) => {
        loading = false;
        messages = result.data;
      }
    });
  };

  headlessService.initializeSession({
    listener: (result: FetchResult<ISession>) => {
      if (result.status == 'loading') {
        loading = true;
        return;
      }

      fetchNotifications();

      headlessService.markAllMessagesAsSeen({
        listener: (_: UpdateResult<number, unknown, undefined>) => {}
      });
      removeNotification = (messageId: string) => {
        headlessService.removeNotification({
          listener: (result: UpdateResult<IMessage, unknown, { messageId: string }>) => {
            if (result.status == 'success') {
              fetchNotifications();
            }
          },
          messageId
        });
      };
    }
  });
</script>

<List>
  {#if loading}
    <div class="flex w-full justify-center">
      <Firework
        color="#0891b2"
        size="48"
        unit="px"
      />
    </div>
  {:else if messages.length == 0}
    <Rest></Rest>
  {:else}
    {#each messages as message}
      <ListItem type="link">
        <a
          href={message.cta.data.url}
          class="grow rounded text-xs">{message.content}</a
        >
        <DeleteButtonIcon on:click={() => removeNotification(message._id)} />
      </ListItem>
    {/each}
  {/if}
</List>
