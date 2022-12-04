<script>
	import { onDestroy, onMount } from "svelte";
	import {
		Bookshop,
		trackBookshopLiveData
	 } from "@bookshop/sveltekit-bookshop";
	import {
		onCloudCannonChanges,
		stopCloudCannonChanges,
	} from "@cloudcannon/svelte-connector";
	import { site_title } from '@data/site.json';

	export let data;

	let pageDetails = data.data;

	let title = `${site_title}${pageDetails.title ? ` | ${pageDetails.title}` : ''}`;

	onMount(async () => {
		onCloudCannonChanges(
			(newProps) => (pageDetails = trackBookshopLiveData(newProps))
		);
	});
	onDestroy(async () => {
		stopCloudCannonChanges();
	});

</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div>
	<Bookshop shared="page" content_blocks={pageDetails.content_blocks} />
</div>