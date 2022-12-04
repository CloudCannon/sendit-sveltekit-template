<script>
	export let pricing_tier = [];
</script>

<section class="pricing pb-xxl-20 pb-lg-15 pb-md-5">
	<div class="container">
		<div class="row">
			{#each pricing_tier as item}
				<div class="col-lg-4">
					<div class="card pricing-item"
						class:active="{item.is_active}">
						<h5 class="card-title">{item.tier}</h5>
						<p class="card-text">{item.description}</p>
						{#if item.has_discount}
							<div class="price">
								<p class="pricingtable">${item.discount_price}</p>
								<div class="discount">
									<p>${item.price}</p>
									<div class="vector vector-one">
										<img src="/images/pricing/cross-shape.png" alt="cross-shape" loading="lazy" />
									</div>
								</div>
								<div class="shape top-0">
									<img src="/images/pricing/shape-two.png" alt="shape" loading="lazy" />
								</div>
							</div>
						{:else}
							<div class="price">
								<p><span>${item.price}</span></p>
								<div class="shape">
									<img src="/images/pricing/shape-one.png" alt="shape" loading="lazy" />
								</div>
							</div>
						{/if}
						<div class="card-body">
							<ul class="list-unstyled">
								{#each item.feature as feature}
									<li class:inactive="{!feature.is_active}">
									<i class="ph-check"
										class:inactive="{!feature.is_active}"></i>
										{feature.item}
									</li>
								{/each}
							</ul>
							<div class="link">
								<a href="{item.button.link}" class="btn btn-lg btn-white">
									{item.button.text}
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
