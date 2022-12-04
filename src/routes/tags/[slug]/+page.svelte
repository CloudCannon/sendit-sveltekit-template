<script>
	import BlogLayout from "../../BlogLayout.svelte";

	export let data;
	const tag = data.tag;
	const pageDetails = data.pageDetails;
	const pagination = data.paginationDetails;
	const posts = pagination.data;

	const description = pageDetails.data.description;

	const toTitleCase = ((text) => `${text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()}`);
	const title = toTitleCase(tag);
</script>

<main>
	<BlogLayout {title} {description} {pagination} {posts} />
</main>