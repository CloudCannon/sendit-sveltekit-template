<script>
	import { site_title } from '@data/site.json';
	import { formatTitle } from '$lib/utils/string';
	import { getContentMeta } from '$lib/utils/markdown';

	export let data;
	const recommendedPosts = data.recommendedPosts;
	const pageDetails = data.pageDetails;
	const content = pageDetails.content_html;
	const frontMatter = pageDetails.data;

	const title = formatTitle(site_title, frontMatter.title);
	const date = frontMatter.date || new Date();
	const dateString = date.toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	})
	const { readTime, wordCount } = getContentMeta(content);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<section class="blog-details">
		<div class="container">
		 <div class="row">
			<div class="col-lg-12">
				<article class="blog-single">
					<div class="inner-blog-details">
					 <h2 class="w-xxl-70 w-xl-80 w-100">{frontMatter.title}</h2>
					 <div class="inner-blog-details-meta">
						<ul class="list-unstyled">
							<li class="list-inline-item">
								<p>{dateString}</p>
							</li>
							<li class="list-inline-item">
								<p><span> Written by:</span> {frontMatter.author}</p>
							</li>
							<li class="list-inline-item">
								<p>{readTime} <span>minutes</span></p>
							</li>
							{#if content !== ""}
								<li class="list-inline-item">
								 <p>{ wordCount } <span>words</span></p>
								</li>
							{/if}
						</ul>
					 </div>
					</div>
					<img
					 src="{frontMatter.featuredImg.image}"
					 class="w-100 mb-xxl-11 mb-8"
					 alt="{frontMatter.featuredImg.image_alt}"
					/>
					<div style="max-width: 900px; margin: 0 auto">{@html content}</div>
				</article>
			</div>
		 </div>
		</div>
	</section>
	<section class="blog-related position-relative">
		<div class="container">
		 <div class="row">
			<div class="col-md-12">
				<div class="blog-section">
					<h2 class="blog-section-title">Recent Posts</h2>
				</div>
			</div>
		 </div>
		 <div class="row">
			{#each recommendedPosts as post}
			{@const firstTwoTags = post.data.tags.slice(1)}
			<div class="col-lg-4 col-md-6">
				<article class="blog-post">
					<div class="blog-post-thumb">
					 <a href="{ post.url }" target="_self">
						<img src="{ post.data.thumbImg.image }" alt="{ post.data.thumbImg.image_alt }" />
					 </a>
					</div>
					<div class="blog-post-content">
					 <div class="blog-post-tag">
						{#each firstTwoTags as tag}
							<a href="/tags/{tag}/" target="_self">{tag}</a>
						{/each}
					 </div>
					 <div class="blog-post-title">
						<a href="{ post.url }" target="_self">{ post.data.title }</a>
					 </div>
					</div>
				</article>
			</div>
			{/each}
		 </div>
		</div>
	</section>
</main>
