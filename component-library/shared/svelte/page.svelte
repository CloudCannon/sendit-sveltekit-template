<script>
	import { Bookshop } from "@bookshop/sveltekit-bookshop";

	export let content_blocks = [];
</script>

<div>
	{#each content_blocks as component, i (`${component._bookshop_name}-${i}`)}
		<Bookshop {...component} />
	{/each}
</div>