<script>
	import { markdownify } from '$lib/utility.js';

	export let title = '';
	export let title_suffix = '';
	export let description = '';
	export let slider = [];
</script>

<section class="testimonial">
	<div class="container">
		<div class="row align-items-center">
		  <div class="col-lg-8 mx-auto text-center mb-5">
			 <div class="testimonial-content">
				<h2>{title} <span> {title_suffix}</span></h2>
				<p>{@html markdownify(description)}</p>
			 </div>
		  </div>
		</div>
		<div class="row">
		  {#each slider as item}
		  <div class="col-lg-4 col-md-6 mb-5">
			 <div class="testimonial-item">
				<div class="testimonial-item-person">
					<div class="thumb">
					  <img src="{item.image}" alt="{item.image_alt}" class="img-fluid" loading="lazy" />
					</div>
					<div class="content">
					  <h3>{item.author}</h3>
					  <p>{item.designation}</p>
					</div>
				</div>
				<p>{item.message}</p>
			 </div>
		  </div>
		  {/each}
		</div>
	</div>
</section>


<style lang="scss">
	.testimonial {
		background: $color-header;
		position: relative;
		border-bottom: 1px solid $color-text;
		overflow: hidden;
		padding: 70px 0;
		@include media-breakpoint-down-sm {
			border-bottom: none;
		}
		&-content {
			padding-right: 50px;
			@include media-breakpoint-down-xl {
				padding-right: 0;
			}
			@include media-breakpoint-down-lg {
				text-align: center;
				padding-bottom: $base-padding * 3;
			}
			h2 {
				color: $color-white;
				font-size: $base-font-size * 2.8;
				margin-bottom: $base-margin * 1.4;
				span {
					color: $color-anchor;
				}
				@include media-breakpoint-down-xl {
					font-size: $base-font-size * 2.5;
				}
				@include media-breakpoint-down-sm {
					font-size: $base-font-size * 2;
				}
			}
			p {
				font-size: 22px;
				color: $color-cyan-dark;
				font-weight: 500;
				line-height: 36.3px;
				letter-spacing: -0.4px;
				@include media-breakpoint-down-md {
					font-size: $base-font-size * 1.25;
				}
			}
		}
		&-item {
			background-color: $color-white;
			padding: 15px 30px;
			border-radius: 12px;
			&-person {
				margin-top: 1rem;
				.thumb {
					img {
					width: 80px;
					height: 80px;
					border-radius: 50%;
					margin-bottom: 15px;
					}
				}
				.content {
					p {
					}
				}
			}
		}
	}
</style>
