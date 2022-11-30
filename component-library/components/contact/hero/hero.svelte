<script>
  import { markdownify } from '$lib/utility.js';
	export let title = '';
	export let description = '';
</script>

<section class="contact-hero">
	<div class="container">
	   <div class="row">
		  <div class="col-lg-6">
			 <div class="contact-hero-content">
				<h1>{title}</h1>
				<p>{@html markdownify(description)}</p>
			 </div>
		  </div>
	   </div>
	</div>
 </section>

 <style lang="scss">
	.contact-hero {
		background: $color-secondary-dark;
		padding: $base-padding * 17.4 0 $base-padding * 9.6;
		@include media-breakpoint-down-xl {
			padding: $base-padding * 13 0 $base-padding * 5;
		}
		@include media-breakpoint-down-lg {
			padding: $base-padding * 12 0 $base-padding * 20;
			text-align: center;
		}
		@include media-breakpoint-down-md {
			padding: $base-padding * 10 0 $base-padding * 68;
		}
		@include media-breakpoint-down-sm {
			padding: $base-padding * 8.5 0 $base-padding * 66;
		}
		&-content {
			h1 {
				font-size: $base-font-size * 4;
				margin-bottom: $base-margin * 1.5;
				@include media-breakpoint-down-sm {
					font-size: $base-font-size * 2.5;
					line-height: 50px;
				}
			}
			p {
				font-size: $base-font-size * 1.4;
				color: $color-text-light;
				font-weight: 500;
				line-height: 36.3px;
				width: 80%;
				@include media-breakpoint-down-lg {
					width: 100%;
				}
			}
		}
	}
 </style>
