<script>
	import { Bookshop } from "@bookshop/sveltekit-bookshop";
	import { site_title } from '@data/site.json'

	export let data;

	let content_blocks = data.data.content_blocks;

	let title = `${site_title}${data?.data?.title ? ` | ${data.data.title}` : ''}`;

</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div>
	<Bookshop shared="page" {content_blocks} />
</div>