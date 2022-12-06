<script>
	import BlogLayout from "../../../BlogLayout.svelte";
	import { toTitleCase } from "$lib/utils/string";

	export let data;
	const tag = data.tag;
	const pageDetails = data.pageDetails;
	const pagination = data.paginationDetails
	const posts = pagination.data;

	const description = pageDetails.data.description

	const title = toTitleCase(tag);
</script>

<main>
	<BlogLayout {title} {description} {pagination} {posts} />
</main>