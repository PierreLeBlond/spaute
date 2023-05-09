<script lang="ts">
  import { goto, invalidateAll } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(async () => {
    await fetch('/logout', {
      method: 'POST'
    });

    await invalidateAll();
    goto('/users/login');
  });
</script>

<div class="flex h-full w-full items-center justify-center">Logging out...</div>
