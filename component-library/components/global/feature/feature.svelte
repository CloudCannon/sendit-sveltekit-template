<script>
	import { markdownify } from '$lib/utils/markdown';

	export let image = '';
	export let image_alt = '';
	export let title = '';
	export let description = '';
	export let button = {};
	export let reversed = false;
</script>

<section class="feature pt-sm-10 pt-5 pb-4">
	<div class="container">
		{#if reversed}
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">
						<div class="card-image">
							<img src="{image}" alt="{image_alt}" loading="lazy" />
						</div>
						<div class="effect-one">
							<img
							src="/images/feature/effect-1.png"
							alt="effect"
							loading="lazy"
							/>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
						<h2>{title}</h2>
						<p>{@html markdownify(description)}</p>
						<div class="Learn-more">
							<a href="{button.link}" class="">
							{button.text}
							<i class="ph-arrow-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="row align-items-center">
				<div class="col-lg-6 order-2 order-lg-1">
					<div class="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
						<h2 class="pe-xl-0">{title}</h2>
						<p>
							{@html markdownify(description)}
						</p>
						<div class="Learn-more">
							<a href="{button.link}" class="">
							{button.text}
								<i class="ph-arrow-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6 order-1 order-lg-2">
					<div class="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">
						<div class="card-image">
							<img src="{image}" alt="{image_alt}" loading="lazy" />
						</div>
						<div class="effect-two">
							<img
							src="/images/feature/effect-2.png"
							alt="effect"
							loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
