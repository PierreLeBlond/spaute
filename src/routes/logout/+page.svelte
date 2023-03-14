<script lang="ts">
	import { goto, invalidateAll } from "$app/navigation";
	import { onMount } from "svelte";

	onMount(async () => {
		await fetch("/logout", {
			method: "POST",
		});

		await invalidateAll();
		goto("/login");
	});
</script>

<div class="w-full h-full flex items-center justify-center">Logging out...</div>
