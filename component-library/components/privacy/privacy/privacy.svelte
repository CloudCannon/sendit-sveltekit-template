<script>
	export let terms_and_conditions = [];
</script>

<section class="privacy">
	<div class="container">
		<div class="row">
			<div class="privacy-wrapper">
				<div class="col-lg-7 mx-auto">
					<div
						data-bs-spy="scroll"
						data-bs-target="#navbar-example2"
						data-bs-offset="0"
						class="scrollspy-example"
					>
						{#each terms_and_conditions as item, i}
							{@const index = i + 1}
							<div class="privacy-items" id="item{index}">
								<div class="card">
									<h3 class="sub-title">{item.heading}</h3>
									<div class="card-body">
										<div class="card-text">{@html item.description}</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="col-lg-4">
					<nav id="scrol-nav" class="navbar navbar-light privacy-nav">
						<ul class="nav nav-pills">
							{#each terms_and_conditions as item, i}
								{@const index = i + 1}
								{#if index === 1}
									<li class="nav-item">
									<a class="nav-link active" href="#item{index}"
										>{item.heading}</a
									>
									</li>
								{:else}
									<li class="nav-item">
										<a class="nav-link" href="#item{index}">
											{item.heading}</a
										>
									</li>
								{/if}
							{/each}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</section>
