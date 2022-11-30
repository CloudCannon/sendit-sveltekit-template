<script>
	import { markdownify } from '$lib/utility.js';

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

<style lang="scss">
	.feature {
		position: relative;
		overflow: hidden;
		&-item-banner {
			position: relative;
			z-index: 1;
			.card-image {
			z-index: 1;
			text-align: center;
			img {
				max-width: 100%;
				@include media-breakpoint-down-lg {
				width: 100%;
				}
			}
			}
			.effect-one,
			.effect-two {
			position: absolute;
			top: -8%;
			z-index: -1;

			img {
				@include media-breakpoint-down-xxl {
				max-width: 100%;
				}
			}
			}
			.effect-one {
			left: -11%;
			@include media-breakpoint-down-lg {
				left: -4%;
			}
			}
			.effect-two {
			top: -21%;
			right: -17%;
			@include media-breakpoint-down-xxl {
				right: -9%;
			}
			@include media-breakpoint-down-sm {
				top: -8%;
				img {
				width: 100%;
				}
			}
			}
		}
		&-item-content {
			h2 {
			font-size: $base-font-size * 2.8;
			padding-right: $base-padding * 10;
			margin-bottom: $base-margin * 2.5;
			@include media-breakpoint-down-xl {
				font-size: $base-font-size * 2;
				padding-right: $base-padding * 0;
				margin-bottom: $base-margin * 1.5;
			}
			@include media-breakpoint-down-sm {
				font-size: $base-font-size * 1.9;
				margin-bottom: $base-margin * 1.25;
			}
			}
			p {
				color: $color-text-light;
				margin-bottom: $base-margin * 0.7;
				font-size: 20px;
				line-height: 33px;
				letter-spacing: -0.8px;
				@include media-breakpoint-down-sm {
					font-size: $base-font-size * 1.1;
					line-height: 29.7px;
				}
			}
		}
	}

</style>
