<script>
	import { markdownify } from '$lib/utils/markdown';
	export let title = '';
	export let title_suffix = ''
	export let description = ''
	export let alternateStyle = false
	export let numbers = []
</script>

<section
	class="counter-up"
	class:counter-up-two="{alternateStyle}"
	class:pb-xxl-14="{alternateStyle}"
	class:pb-lg-13="{alternateStyle}"
	id="counter-up"
>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-header">
					<h2>
						{title} <span>{title_suffix}</span>
					</h2>
					<p>{@html markdownify(description)}</p>
				</div>
			</div>
			<div class="col-12">
				<div class="counter-up-wrapper d-grid">
					{#each numbers as item}
						<div class="counter-up-content">
							<div class="counter-up-content-item">
								<div class="counter-percent">
									{#if item.prefix}
										<span class="percent">{item.prefix}</span>
									{/if}
										<span class="counter">{item.number}</span>
									{#if item.suffix}
										<span class="percent">{item.suffix}</span>
									{/if}
								</div>
								<p>{item.text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
