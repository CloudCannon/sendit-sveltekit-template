<script>
	export let title = '';
	export let description = '';
	export let image = '';
	export let image_alt = '';
	export let button = {};
</script>

<section class="hero-two">
	<div class="hero-two-shape">
		<img src="/images/hero/hero-two-shape.png" alt="shape" />
	</div>
	<div class="container-fluid">
		<div class="row align-items-center">
		  <div class="col-lg-6">
			 <div class="hero-two-content">
				<h1 class="mb-4">{title}</h1>
				<!-- <div class="mb-7 w-xxl-80">{description | markdownify}</div> -->
				<div class="">
					<a href="{button.url}" class="btn btn-primary btn-lg"> {button.text} </a>
				</div>
			 </div>
		  </div>
		  <div class="col-lg-6">
			 <div class="hero-two-banner">
				<img src="{image}" alt="{image_alt}" />
				<div class="hero-two-banner-shape">
					<img src="/images/hero/hero-three-shape.png" alt="shape" />
				</div>
			 </div>
		  </div>
		</div>
	</div>
 </section>

<style lang="scss">
	.hero-two {
		position: relative;
		background: $color-gray-dark;
		padding: $base-padding * 11.3 0 $base-padding * 5;
		z-index: 1;
		overflow: hidden;
		@include media-breakpoint-down-xl {
			padding: $base-padding * 8 0 $base-padding * 2;
		}
		@include media-breakpoint-down-lg {
			padding: $base-padding * 6 0 $base-padding * 5;
		}
		@include media-breakpoint-down-md {
			padding: $base-padding * 6 0 $base-padding * 5;
		}
		@include media-breakpoint-down-sm {
			padding: $base-padding * 5.5 0 $base-padding * 5;
		}
		&-shape {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}
		&-content {
			padding-left: $base-padding * 18;
			@include media-breakpoint-down-xxxl {
			padding-left: $base-padding * 9;
			}
			@include media-breakpoint-down-xxl {
			padding-left: $base-padding * 5;
			}
			@include media-breakpoint-down-lg {
			padding: 0 $base-padding * 4 $base-padding * 6;
			text-align: center;
			}
			@include media-breakpoint-down-md {
			padding: 0 $base-padding * 3 $base-padding * 6;
			}
			@include media-breakpoint-down-sm {
			padding: 0 $base-padding * 0 $base-padding * 6;
			}
			h1 {
			line-height: 80px;
			@include media-breakpoint-down-lg {
				font-size: $base-font-size * 4;
				line-height: 80px;
			}
			@include media-breakpoint-down-md {
				font-size: $base-font-size * 3;
				line-height: 60px;
			}
			@include media-breakpoint-down-sm {
				font-size: $base-font-size * 2.5;
				line-height: 50px;
			}
			}
		}
		&-banner {
			position: relative;
			text-align: right;
			max-width: 100%;
			margin-right: -13px;
			z-index: 1;
			img {
			border-radius: 0px;
			}
			&-shape {
			position: absolute;
			top: -26%;
			left: 3%;
			z-index: -1;
			@include media-breakpoint-down-lg {
				top: -27%;
				left: -22%;
			}
			}
		}
	}
</style>
