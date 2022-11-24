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
									<div class="card-text">{item.description}</div>
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

<style lang="scss">
	.privacy {
		position: relative;
		margin-top: -$base-margin * 33.5;
		padding-bottom: $base-padding * 7.5;
		z-index: 99;
		@include media-breakpoint-down-xxl {
			padding-bottom: $base-padding * 4;
		}
		@include media-breakpoint-down-md {
			margin-top: -$base-margin * 35.8;
			padding-bottom: $base-padding * 0;
		}
		&-wrapper {
			display: flex;
			background: $color-white;
			padding: $base-padding * 5 0 $base-padding * 1 $base-padding * 1.6;
			box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);
			border-radius: 20px;
		}
		.navbar {
			background: $color-white;
			position: sticky;
			top: 150px;
			padding: 0;
			border-radius: 20px;
			z-index: 1;
			@include media-breakpoint-down-lg {
			display: none;
			}
		}
		.nav-pills .nav-link.active{
			background: none;
			color: $color-primary;
		}

		&-nav {
			display: block;
			// margin-bottom: $base-padding * 12.5;
			background-color: none;
			.nav-pills {
			display: block;
			padding-right: $base-padding * 4;
			@include media-breakpoint-down-xl {
				padding-right: $base-padding * 1;
			}
			.nav-item {
				padding-bottom: $base-padding * 1.9;
				position: relative;

				&:last-child {
				padding-bottom: 0px;
				&::before {
					display: none;
				}
				}
				a {
				font-size: $base-font-size;
				position: relative;
				color: $color-text-light;
				font-family: $font-primary;
				font-weight: 600;
				margin-bottom: 0px;
				padding: 0;
				}
			}
			}
		}

		// start services-two-items
		&-items {
			.card {
			background: none;
			padding: 0;
			margin-bottom: $base-margin * 3;
			@include media-breakpoint-down-xl {
				margin-bottom: $base-margin * 3.1;
			}
			h3 {
				color: $color-text-light;
				font-size: $base-font-size * 1.9;
				margin-bottom: $base-margin * 1.9;
			}
			&-body {
				padding: 0;
				.card-text, .card-text {
				line-height: 29.7px;
				color: $color-text-light;
				font-size: $base_font-size * 1.1;
				font-weight: 500;
				margin-bottom: $base-margin * 2.5;
				padding-left: $base-padding * 1.5;
				@include media-breakpoint-down-md {
					padding: 0 $base-padding * 1.5;
				}
				}
			}
			}
		}
	}
</style>