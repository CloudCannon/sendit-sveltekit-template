<script>
	import { markdownify } from '$lib/utils/markdown';

	export let title = '';
	export let description = '';
</script>

<section class="pricing-inner @@bg-color">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 mx-auto">
				<div class="section-header position-relative text-center">
					<h2>{title}</h2>
					<p>{@html markdownify(description)}</p>
				</div>
			</div>
		</div>
	</div>
</section>
