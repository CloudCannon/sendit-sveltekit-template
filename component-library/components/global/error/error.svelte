<script>
	import { markdownify } from '$lib/utils/markdown';

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
						<a class="navbar-brand" target="_self" href="/">
							<img src="/images/logo.svg" alt="" class="" />
						</a>
					</div>
					<img src="{image}" alt="{image_alt}" />
					<h3 class="my-5">
						<p>{@html markdownify(description)}</p>
					</h3>
					<a href="/" target="_self" class="btn btn-lg btn-primary"> Try Again </a>
				</div>
			</div>
		</div>
	</div>
</section>
