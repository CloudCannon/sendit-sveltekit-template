<script>
	export let title = '';
	export let title_suffix = '';
	export let description = '';
	export let no_top_pad = false;
</script>

<section class="feature pt-0 pb-0">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 mx-auto">
				<div class="section-header @@disply"
					class:no-top-pad="{no_top_pad}">
				<h2>{title}<span>{title_suffix}</span></h2>
				<!-- <p>{description | markdownify}</p> -->
				</div>
			</div>
		</div>
	</div>
</section>
