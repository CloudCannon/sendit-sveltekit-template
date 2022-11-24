<script>
	export let title = '';
	export let description = '';
	export let button = {};
	export let image = '';
	export let image_alt = '';
</script>

<section class="feature-hero">
	<div class="container">
		<div class="row align-items-center">
		  <div class="col-lg-6">
			 <div class="feature-hero-content">
				<h1 class="">{title}</h1>
				<p>
					<!-- p tag -->
					<!-- {description | markdownify} -->
				</p>
				<div class="d-block mb-6">
					<a href="{button.link}" class="btn btn-primary btn-lg"> {button.text} </a>
				</div>
			 </div>
		  </div>
		  <div class="col-lg-6">
			 <div class="feature-hero-banner">
				<img src="{image}" alt="{image_alt}" loading="lazy" />
				<div class="shape">
					<img src="/images/feature/effect-4.png" alt="shape" loading="lazy" />
				</div>
			 </div>
		  </div>
		</div>
	</div>
 </section>

 <style lang="scss">
	.feature-hero {
		background: $color-gray-dark;
		padding: $base-padding * 8 0 $base-padding * 4;
		overflow: hidden;
		@include media-breakpoint-down-lg {
			padding: $base-padding * 9 0 $base-padding * 0;
			text-align: center;
		}
		@include media-breakpoint-down-sm {
			padding: $base-padding * 8.5 0 $base-padding * 0;
		}
		&-content {
			h1 {
				margin-bottom: $base-margin * 1.5;
				@include media-breakpoint-down-xxl {
					font-size: $base-font-size * 3.9;
				}
				@include media-breakpoint-down-xl {
					font-size: $base-font-size * 3.2;
					line-height: 60px;
				}
				@include media-breakpoint-down-lg {
					font-size: $base-font-size * 3.9;
					line-height: 70px;
				}
				@include media-breakpoint-down-md {
					font-size: $base-font-size * 3.5;
				}
				@include media-breakpoint-down-sm {
					font-size: $base-font-size * 2.5;
					line-height: 50px;
				}
			}
			p {
				font-size: $base-font-size * 1.3;
				font-weight: 500;
				line-height: 36.3px;
				letter-spacing: -0.4px;
				padding-right: 50px;
				padding-right: $base-padding * 9;
				margin-bottom: $base-margin * 3.1;
				@include media-breakpoint-down-xxl {
					padding-right: $base-padding * 5;
				}
				@include media-breakpoint-down-xl {
					padding-right: $base-padding * 0;
				}
				@include media-breakpoint-down-lg {
					padding: $base-padding * 0 $base-padding * 5;
				}
				@include media-breakpoint-down-md {
					padding: $base-padding * 0 $base-padding * 0;
				}
			}
		}
		&-banner {
			position: relative;
			img {
				z-index: 1;
				max-width: 100%;
			}
			.shape {
				position: absolute;
				top: 2%;
				z-index: -1;
				right: 0%;
			}
		}
	}
</style>
