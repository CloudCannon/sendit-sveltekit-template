<script>
	import { site_title } from '@data/site.json';
	import { formatTitle } from '$lib/utils/string';

	export let data;

	const posts = data.posts;
	const pages = data.pages;
	const title = formatTitle(site_title, 'Site map');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<h2>Pages</h2>
	<ul>
		{#each pages as page}
			<li><a href="/{page.slug}/">{page.data.title}</a></li>
		{/each}
	</ul>

	<h2>Posts</h2>
	<ul>
		{#each posts as post}
			<li><a href="/blog/{post.slug}/">{post.data.title}</a></li>
		{/each}
	</ul>
</section>
