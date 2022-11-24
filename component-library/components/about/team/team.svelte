<script>
	export let title = '';
	export let team_members = [];
</script>

<div class="team">
	<div class="container">
		<div class="row">
		  <div class="col-lg-10 col-xl-7 mx-auto">
			 <div class="section-header">
				<h2>{title}</h2>
			 </div>
		  </div>
		</div>
		<div class="row">
		  {#each team_members as item}
		  <div class="col-lg-3 col-md-6">
			 <div class="team-member">
				<div class="team-member-thumb">
					<img src="{item.image}" alt="{item.image_alt}" loading="lazy" style="border-radius:20px"/>
				</div>
				<div class="team-member-details">
					<h3>{item.name}</h3>
					<p>{item.designation}</p>
				</div>
			 </div>
		  </div>
		  {/each}
		</div>
	</div>
</div>

<style lang="scss">
	.team {
		padding: $base-padding * 3 $base-padding * 0 $base-padding * 9.4;

		@include media-breakpoint-down-xxl {
			padding: $base-padding * 3 $base-padding * 0 $base-padding * 5;
		}

		@include media-breakpoint-down-xl {
			padding: $base-padding * 3 $base-padding * 0 $base-padding * 3;
		}

		@include media-breakpoint-down-md {
			padding: $base-padding * 0 $base-padding * 0 $base-padding * 4;
		}

		@include media-breakpoint-down-sm {
			padding: $base-padding * 0 $base-padding * 0 $base-padding * 2;
		}

		.section-header {
			padding-bottom: $base-padding * 3.5;

			@include media-breakpoint-down-xxl {
				padding: $base-padding * 3 $base-padding * 0 $base-padding * 3.5;
			}

			@include media-breakpoint-down-md {
				padding: $base-padding * 3 $base-padding * 0 $base-padding * 1.5;
			}
		}
		&-member {
			margin-bottom: $base-margin * 3.1;

			@include media-breakpoint-down-lg {
				margin-bottom: $base-margin * 2.5;
				text-align: center;
			}

			&-thumb {
				margin-bottom: $base-margin * 1.5;

				img {
					max-width: 100%;

					@include media-breakpoint-down-md {
						width: 100%;
					}
				}
			}
			&-details {
				h3 {
					font-size: $base-font-size * 1.6;
					color: $color-header;
					margin-bottom: $base-margin * 0.3;
					font-weight: 600;
				}
				p {
					font-size: $base-font-size * 1.25;
					color: $color-text-light;
					font-family: $font-primary;

					@include media-breakpoint-down-xl {
						font-size: $base-font-size * 1.2;
					}

					@include media-breakpoint-down-lg {
						font-size: $base-font-size * 1.25;
					}
				}
			}
		}
	}
</style>