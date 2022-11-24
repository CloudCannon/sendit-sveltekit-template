<script>
	export let pricing_tier = [];
</script>

<section class="pricing pb-xxl-20 pb-lg-15 pb-md-5">
	<div class="container">
		<div class="row">
		  {#each pricing_tier as item}
		  <div class="col-lg-4">
			 <div class="card pricing-item"
			 	class:active="{item.is_active}">
				<h5 class="card-title">{item.tier}</h5>
				<p class="card-text">{item.description}</p>
				{#if item.has_discount}
					<div class="price">
					<p class="pricingtable">${item.discount_price}</p>
					<div class="discount">
						<p>${item.price}</p>
						<div class="vector vector-one">
							<img src="/images/pricing/cross-shape.png" alt="cross-shape" loading="lazy" />
						</div>
					</div>
					<div class="shape top-0">
						<img src="/images/pricing/shape-two.png" alt="shape" loading="lazy" />
					</div>
					</div>
				{:else}
					<div class="price">
					<p><span>${item.price}</span></p>
					<div class="shape">
						<img src="/images/pricing/shape-one.png" alt="shape" loading="lazy" />
					</div>
					</div>
				{/if}
				<div class="card-body">
					<ul class="list-unstyled">
					  {#each item.feature as feature}
					  <li class:inactive="{!feature.is_active}">
						 <i class="ph-check"
						 	class:inactive="{!feature.is_active}"></i>
						 	{feature.item}
					  </li>
					  {/each}
					</ul>
					<div class="link">
					  <a href="{item.button.link}" class="btn btn-lg btn-white">
						 {item.button.text}
					  </a>
					</div>
				</div>
			 </div>
		  </div>
		  {/each}
		</div>
	</div>
 </section>

 <style lang="scss">
	.pricing {
		position: relative;
		margin-top: -$base-margin * 21.5;
		@include media-breakpoint-down-md {
			margin-top: -$base-margin * 25;
		}
		.card {
			transition: all 0.3s ease-in-out;
			padding: $base-padding * 3.9 $base-padding * 0 $base-padding * 3.7;
			background: $color-white;
			border-radius: 20px;
			box-shadow: 0px 0px 80px rgba(150, 0, 0, 0.06);
			z-index: 10;
			border: 1px solid $color-white;
			@include media-breakpoint-down-xl {
				padding: $base-padding * 3 $base-padding * 0 $base-padding * 3.7;
			}
			@include media-breakpoint-down-lg {
				margin: 0 $base-margin * 5 $base-margin * 3.5;
			}
			@include media-breakpoint-down-sm {
				margin: 0 $base-margin * 0 $base-margin * 3.5;
				padding: $base-padding * 3.9 $base-padding * 0 $base-padding * 2.2;
			}
			.card-title {
				font-size: $base-font-size * 1.9;
				font-weight: 700;
				color: $color-text;
				margin-bottom: 8px;
				line-height: 37.5px;
				padding-left: $base-padding * 2.9;
				transition: all 0.3s ease-in-out;
				@include media-breakpoint-down-xl {
					padding-left: $base-padding * 1.5;
				}
				@include media-breakpoint-down-lg {
					padding-left: $base-padding * 2.9;
				}
				@include media-breakpoint-down-md {
					padding-left: $base-padding * 1.5;
				}
			}
			.card-text {
				font-size: $base-font-size * 1.25;
				line-height: 29px;
				margin-bottom: $base-margin * 1.5;
				letter-spacing: -0.5px;
				font-weight: 400;
				font-family: $font-primary;
				padding-left: $base-padding * 2.9;
				@include media-breakpoint-down-xxl {
					font-size: $base-font-size * 1.1;
				}
				@include media-breakpoint-down-xl {
					font-size: $base-font-size * 1;
					padding-left: $base-padding * 1.5;
				}
				@include media-breakpoint-down-lg {
					font-size: $base-font-size * 1.25;
					padding-left: $base-padding * 2.9;
				}
				@include media-breakpoint-down-md {
					padding-left: $base-padding * 1.5;
				}
			}
			.price {
				display: flex;
				position: relative;
				margin-bottom: $base-margin * 3.1;
				transition: all 0.4s ease-in-out;
				color: $color-header;
				border-top: 1px solid $color-anchor-dark;
				border-bottom: 1px solid $color-anchor-dark;
				p {
					margin-bottom: 0;
					padding-left: $base-padding * 2.9;
					font-size: $base-font-size * 2.8;
					font-family: $font-primary;
					font-weight: 700;
					transition: all 0.4s ease-in-out;
					z-index: 2;
					margin-right: $base-margin * 0.8;
					color: #000;
				}
				.discount {
					position: relative;
					display: flex;
					align-items: center;
					p {
					margin: 0;
					padding: 0;
					font-size: $base-font-size * 1.6;
					font-family: $font-primary;
					font-weight: 600;
					transition: all 0.4s ease-in-out;
					z-index: 2;
					color: $color-text-light;
					}
					.vector,
					.vector-one {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					}
					.vector-one {
					left: 58%;
					}
				}
				.shape {
					position: absolute;
					top: 10px;
					z-index: -1;
					left: 10%;
				}
			}
			&-body {
				padding: $base-padding * 0 $base-padding * 2.9;
				@include media-breakpoint-down-xxl {
					padding: $base-padding * 0 $base-padding * 1.9;
				}
				@include media-breakpoint-down-xl {
					padding: $base-padding * 0 $base-padding * 1.5;
				}
				@include media-breakpoint-down-lg {
					padding: $base-padding * 0 $base-padding * 2.9;
				}
				@include media-breakpoint-down-md {
					padding: $base-padding * 0 $base-padding * 2.2;
				}
				ul {
					margin-bottom: $base-margin * 4.5;
					li {
					display: flex;
					align-items: center;
					color: $color-text-light;
					font-size: $base-font-size * 1.25;
					line-height: 33px;
					margin-bottom: $base-margin * 1.9;
					font-weight: 700;
					letter-spacing: -0.4px;
					font-family: $font-secondary;
					i {
						margin-right: $base-margin * 1.1;
						color: $color-primary;
						@include media-breakpoint-down-xl {
							margin-right: $base-margin * 1;
						}
					}
					&:last-child {
						margin-bottom: 0;
					}
					@include media-breakpoint-down-xl {
						font-size: $base-font-size * 1.1;
					}
					@include media-breakpoint-down-lg {
						font-size: $base-font-size * 1.25;
					}
					}
					.inactive {
						color: $color-inactive;
					}
				}
			}
		}
		.active {
			border: 1px solid $color-primary;
			.card-title {
				color: $color-primary;
			}
			.link {
				a {
					color: $color-white;
					background: $color-primary;
				}
			}
		}
	}

</style>