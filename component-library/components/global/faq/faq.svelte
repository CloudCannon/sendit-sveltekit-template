<script>
	import { markdownify } from '$lib/utils/markdown';

	export let title = '';
	export let title_suffix = '';
	export let description = '';
	export let FAQ = [];


	function onClick ({ target }) {
		const accordionItem = target.closest('.accordion-item')
		var current = document.getElementsByClassName('shows');
		current[0].className = current[0].className.replace(' shows', '');
		accordionItem.className += ' shows';
	}
</script>

<section class="faq-two">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 mx-auto">
				<div class="section-header">
					<h2>{title} <span>{title_suffix}</span></h2>
					<p>{@html markdownify(description)}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="accordion" id="accordionExample">
					{#each FAQ as item, i}
						{@const index = i + 1}
						{#if index === 1}
							<div class="accordion-item shows">
								<span>0{index}</span>
								<h2 class="accordion-header" id="headingOne">
									<button
										on:click={onClick}
										class="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										<p class="header-content">{item.title}</p>
									</button>
								</h2>
								<div
									id="collapseOne"
									class="accordion-collapse collapse show"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body">
										<p>{@html markdownify(description)}</p>
									</div>
								</div>
							</div>
						{:else}
							<div class="accordion-item">
								<span>0{index}</span>
								<h2 class="accordion-header" id="heading{index}">
									<button
										on:click={onClick}
										class="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapse{index}"
										aria-expanded="false"
										aria-controls="collapse{index}"
									>
										<p class="header-content">{item.title}</p>
									</button>
								</h2>
								<div
									id="collapse{index}"
									class="accordion-collapse collapse"
									aria-labelledby="heading{index}"
									data-bs-parent="#accordionExample"
									>
									<div class="accordion-body">
										<p>{@html markdownify(description)}</p>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
