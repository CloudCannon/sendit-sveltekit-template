<script>
	import PaginationControls from "./PaginationControls.svelte";
	import { site_title } from '@data/site.json';
	import { formatTitle } from '$lib/utils/string';

	export let title = '';
	export let description = '';
	export let pagination = {};
	export let posts = [];

	const fullTitle = formatTitle(site_title, title);
</script>

<svelte:head>
	<title>{fullTitle}</title>
</svelte:head>

<section class="blog-hero pt-xl-22 pt-sm-20 pt-18 pb-xxl-25 pb-xl-23 pb-22 position-relative">
	<div class="container">
		<div class="row">
			<div class="col-xl-8 col-lg-10 mx-auto">
				<div class="blog-hero-content">
					<h1 class="blog-hero-title">{title}</h1>
					<p>{description}</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="blog @@padding @@blog-two">
	<div class="container">
		<div class="row">
			{#each posts as post}
				{@const firstTwoTags = post.data.tags.slice(0, 2)}
				<div class="col-lg-4 col-md-6">
					<article class="blog-post">
						<div class="blog-post-thumb">
							<a href="{`/blog/${post.slug}/`}" target="_self">
								<img src="{ post.data.thumbImg.image }" alt="{ post.data.thumbImg.image_alt }" loading="lazy" />
							</a>
						</div>
						<div class="blog-post-content">
							<div class="blog-post-tag @@category">
								{#each firstTwoTags as tag}
									<a href="/tags/{tag}/" target="_self">{tag}</a>
								{/each}
							</div>
							<div class="blog-post-title">
								<a href="{`/blog/${post.slug}/`}" class="" target="_self">{post.data.title}</a>
							</div>
						</div>
					</article>
				</div>
			{/each}
			{#if Object.keys(pagination).length}
				<PaginationControls {pagination}/>
			{/if}
		</div>
	</div>
</section>