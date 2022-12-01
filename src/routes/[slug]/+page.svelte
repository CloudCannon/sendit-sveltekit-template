<script>
	import { Bookshop } from "@bookshop/sveltekit-bookshop";

	export let data;

	let content_blocks = data.data.content_blocks;
</script>


<div>
	<Bookshop shared="page" {content_blocks} />
</div>