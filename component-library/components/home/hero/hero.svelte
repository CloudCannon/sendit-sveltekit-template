<script>
	import { markdownify } from '$lib/utils/markdown';
	export let title = '';
	export let description = '';
	export let image = '';
	export let image_alt = '';
	export let button = {};
</script>

<section class="hero-two">
	<div class="hero-two-shape">
		<img src="/images/hero/hero-two-shape.png" alt="shape" />
	</div>
	<div class="container-fluid">
		<div class="row align-items-center">
			<div class="col-lg-6">
				<div class="hero-two-content">
					<h1 class="mb-4">{title}</h1>
					<div class="mb-7 w-xxl-80">
						<p>{@html markdownify(description)}</p>
					</div>
					<div class="">
						<a href="{button.url}" class="btn btn-primary btn-lg"> {button.text} </a>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="hero-two-banner">
					<img src="{image}" alt="{image_alt}" />
					<div class="hero-two-banner-shape">
						<img src="/images/hero/hero-three-shape.png" alt="shape" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
