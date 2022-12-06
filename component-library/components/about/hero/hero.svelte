<script>
	import { markdownify } from '$lib/utils/markdown';
	export let title;
	export let description;
	export let hero_images;
	export let button;
</script>

<section class="about-hero-two">
	<div class="container">
		<div class="row">
			<div class="col-xl-5 col-lg-10 mx-auto">
				<div class="about-hero-two-content position-relative">
					<h2>{title}</h2>
					<p class="mb-20 w-xxl-80">{@html markdownify(description)}</p>
					<div class="scroll-down d-flex justify-content-center justify-content-xl-start">
						<a href="{button.link}" class="btn btn-primary btn-lg"> {button.text} </a>
					</div>
				</div>
			</div>
			<div class="col-xl-7 col-lg-12">
				<div class="about-hero-two-banner">
					{#each hero_images as item}
						<div class="rounded-box"
							class:image-one="{item.placement === "back_top_right"}"
							class:image-two="{item.placement === "front_bottom"}"
							class:image-three="{item.placement === "back_top_left"}">
							<img src="{item.image}" alt="{item.image_alt}" loading="lazy"/>
						</div>
					{/each}
					<div class="pattern">
						<img src="/images/about/patterns-two.png" alt="patterns" loading="lazy"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>