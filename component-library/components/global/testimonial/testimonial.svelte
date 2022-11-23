<script>
	export let title = '';
	export let title_suffix = '';
	export let description = '';
	export let slider = [];
</script>

<section class="testimonial">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-8 mx-auto text-center mb-5">
				<div class="testimonial-content">
					<h2>{title} <span> {title_suffix}</span></h2>
					<!-- <p>{description | markdownify}</p> -->
				</div>
			</div>
		</div>
		<div class="row">
			{#each slider as slide}
			<div class="col-lg-4 col-md-6 mb-5">
				<div class="testimonial-item">
					<div class="testimonial-item-person">
						<div class="thumb">
							<img
								src="{slide.image_path}"
								alt="logo"
								class="img-fluid"
								loading="lazy"
							/>
						</div>
						<div class="content">
							<h3>{slide.author}</h3>
							<p>{slide.designation}</p>
						</div>
					</div>
					<p>{slide.message}</p>
				</div>
			</div>
			{/each}
		</div>
	</div>
</section>
