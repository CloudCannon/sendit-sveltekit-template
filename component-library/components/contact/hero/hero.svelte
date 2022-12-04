<script>
	import { markdownify } from '$lib/string-utils';
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
