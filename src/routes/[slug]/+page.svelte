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
	import { formatTitle } from '$lib/utils/string';

	export let data;
	let pageDetails = data.data;

	const title = formatTitle(site_title, pageDetails.title)

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