<script>
	import { markdownify } from '$lib/utility.js';

	export let description = '';
	export let image = '';
	export let image_alt = '';
</script>

<section class="error py-xxl-12 py-lg-9 py-10 py-sm-6">
	<div class="container">
		<div class="row">
		<div class="col-lg-12">
			<div class="error-content text-center">
			<div class="logo mb-7">
				<a class="navbar-brand" href="/">
				<img src="/images/logo.svg" alt="" class="" />
				</a>
			</div>
			<img src="{image}" alt="{image_alt}" />
			<h3 class="my-5">
				{@html markdownify(description)}
			</h3>
			<a href="/" class="btn btn-lg btn-primary"> Try Again </a>
			</div>
		</div>
		</div>
	</div>
</section>

<style lang="scss">
	.error {
		position: relative;
		background: $color-secondary;
		&-content {
			 position: relative;
			 h3 {
				color: $color-header;
				font-weight: $bold-font-weight;
			 }
			 img {
				max-width: 100%;
			 }
		}
	}
</style>