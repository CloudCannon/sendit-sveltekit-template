<script>
	import { markdownify } from '$lib/utils/markdown';

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
