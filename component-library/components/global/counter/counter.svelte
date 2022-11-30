<script>
	import { markdownify } from '$lib/utility.js';
	export let title = '';
	export let title_suffix = ''
	export let description = ''
	export let alternateStyle = false
	export let numbers = []
</script>

<section
	class="counter-up"
	class:counter-up-two="{alternateStyle}"
	class:pb-xxl-14="{alternateStyle}"
	class:pb-lg-13="{alternateStyle}"
	id="counter-up"
>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-header">
					<h2>
						{title} <span>{title_suffix}</span>
					</h2>
					{@html markdownify(description)}
				</div>
			</div>
			<div class="col-12">
				<div class="counter-up-wrapper d-grid">
					{#each numbers as item}
					<div class="counter-up-content">
						<div class="counter-up-content-item">
							<div class="counter-percent">
								{#if item.prefix}
								<span class="percent">{item.prefix}</span>
								{/if}
								<span class="counter">{item.number}</span>
								{#if item.suffix}
								<span class="percent">{item.suffix}</span>
								{/if}
							</div>
							<p>{item.text}</p>
						</div>
					</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.counter-up {
		.section-header {
			padding: $base-padding * 5 0 $base-padding * 3.1;
			p {
				width: 60%;
				margin: 0 auto;
				@include media-breakpoint-down-xxl {
					width: 70%;
				}
				@include media-breakpoint-down-lg {
					width: 80%;
				}
				@include media-breakpoint-down-md {
					width: 100%;
				}
			}
		}
		&-wrapper {
			align-items: center;
			justify-content: space-between;
			text-align: center;
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			grid-template-rows: repeat(1, 1fr);
			@include media-breakpoint-down-xxl {
				grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
			}
			@include media-breakpoint-down-xl {
				grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
			}
			@include media-breakpoint-down-lg {
				grid-template-rows: repeat(2, 1fr);
				grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
			}
			@include media-breakpoint-down-md {
				grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			}
			@include media-breakpoint-down-sm {
				grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
			}

			.counter,
			.percent {
				color: $color-header;
				font-family: $font-primary;
				font-size: $base-font-size * 4;
				font-weight: 700;
				line-height: 1.31;
				letter-spacing: 0.05px;
				font-variant: lining-nums;
				@include media-breakpoint-down-xxl {
					font-size: $base-font-size * 3;
				}
				@include media-breakpoint-down-sm {
					font-size: $base-font-size * 2.5;
				}
			}
		}
		&-content {
			position: relative;
			@include media-breakpoint-down-lg {
				&:nth-child(2),
				&:nth-child(4) {
					.counter-up-content-item {
					border-right: 0;
					}
				}
			}

			&-item {
				border-top: 1px solid $color-primary-light;
				border-right: 1px solid $color-primary-light;
				padding: $base-padding * 2.6 $base-padding * 2 0;
				@include media-breakpoint-down-xxl {
					padding: $base-padding * 2 $base-padding * 2 0;
				}
				@include media-breakpoint-down-xl {
					padding: $base-padding * 2 $base-padding * 1 $base-padding * 1.9;
				}
				@include media-breakpoint-down-sm {
					padding: $base-padding * 2 $base-padding * 0 $base-padding * 1.9;
				}

				p {
					color: $color-header;
					font-size: $base-font-size * 1.35;
					letter-spacing: -0.4px;
					margin-bottom: 0;
					@include media-breakpoint-down-xxl {
					font-size: $base-font-size * 1;
					}
					@include media-breakpoint-down-sm {
					padding: $base-padding * 0 $base-padding * 2 $base-padding * 0;
					}
				}
			}
		}
		//start Counter Up-two Section Styles
		&-two {
			background: $color-primary-light;
			.counter-up {
				&-content {
					&-item {
					border-top: 1px solid $color-white;
					border-right: 1px solid $color-white;
					}
				}
			}
		}
	}
</style>