<script>
	import { markdownify } from '$lib/utility.js';

	export let title = '';
	export let title_suffix = '';
	export let description = '';
	export let remove_top_padding = false;
</script>

<section class="feature pt-0 pb-0">
	<div class="container">
		<div class="row">
		<div class="col-lg-8 mx-auto">
			<div class="section-header @@disply"
				class:no-top-padding="{remove_top_padding}">
			<h2>{title}<span>{title_suffix}</span></h2>
			<p>{@html markdownify(description)}</p>
			</div>
		</div>
		</div>
	</div>
</section>

<style lang="scss">
	.feature {
		position: relative;
		overflow: hidden;
		.section-header {
			padding-bottom: $base-padding * 10;

			@include media-breakpoint-down-xxl {
				padding-bottom: $base-padding * 7;
			}
			@include media-breakpoint-down-sm {
				padding: $base-padding * 3.2 0 $base-padding * 3.5;
			}
			p {
				width: 72%;
				margin: 0 auto;
				@include media-breakpoint-down-xl {
					width: 90%;
				}
			}
		}

		.no-top-padding {
			padding-top: 0;
		}
	}
</style>
