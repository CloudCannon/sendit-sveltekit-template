<script>
	import { markdownify } from '$lib/utils/markdown';
	export let title = '';
	export let description = '';
	export let button = {};
	export let image = '';
	export let image_alt = '';
</script>

<section class="feature-hero">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-6">
				<div class="feature-hero-content">
					<h1 class="">{title}</h1>
					<p>{@html markdownify(description)}</p>
					<div class="d-block mb-6">
						<a href="{button.link}" class="btn btn-primary btn-lg"> {button.text} </a>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="feature-hero-banner">
					<img src="{image}" alt="{image_alt}" loading="lazy" />
					<div class="shape">
						<img src="/images/feature/effect-4.png" alt="shape" loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
