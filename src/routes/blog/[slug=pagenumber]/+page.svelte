<script>
	import BlogLayout from "../../BlogLayout.svelte";

	export let data;

	const pageDetails = data.pageDetails;
	const pagination = data.paginationDetails

	const posts = pagination.data;
	const title = pageDetails.data.title;
	const description = pageDetails.data.description
</script>

<main>
	<BlogLayout {title} {description} {pagination} {posts} />
</main>