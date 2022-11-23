<script>
	export let pricing_tier = [];
</script>

<section class="pricing pb-xxl-20 pb-lg-15 pb-md-5">
	<div class="container">
		<div class="row">
			{#each pricing_tier as tier}
				<div class="col-lg-4">
					<div class="card pricing-item"
						class:active="{tier.isActive}">
						<h5 class="card-title">{tier.tier}</h5>
						<p class="card-text">
						<!-- {tier.description | markdownify} -->
						</p>
						{#if tier.hasDiscount}
							<div class="price">
								<p class="pricingtable">${tier.discountPrice}</p>
								<div class="discount">
									<p>${tier.price}</p>
									<div class="vector vector-one">
										<img src="/images/pricing/Vector1.svg" alt="Vector" loading="lazy"/>
									</div>
								</div>
								<div class="shape top-0">
									<img src="/images/pricing/shape-two.png" alt="shape" loading="lazy"/>
								</div>
							</div>
						{:else}
						<div class="price">
							<p><span>${tier.price}</span></p>
							<div class="shape">
								<img src="/images/pricing/shape-one.png" alt="shape" loading="lazy"/>
							</div>
						</div>
						{/if}
						<div class="card-body">
							<ul class="list-unstyled">
								{#each tier.feature as feature}
									{#if feature.isActive }
									<li>
										<i class="ph-check"></i>
										{feature.item}
									</li>
									{:else}
									<li class="deactive">
										<i class="ph-check deactive"></i>
										{feature.item}
									</li>
									{/if}
								{/each}
							</ul>
							<div class="link">
								<a href="{tier.btn.link}" class="btn btn-lg btn-white">
									{tier.btn.text}
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
