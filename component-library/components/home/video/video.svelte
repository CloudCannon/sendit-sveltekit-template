<script>
	export let image = '';
	export let image_alt = '';
	export let video_url = '';
</script>

<section class="video pb-xxl-22 pb-lg-18 pb-12">
	<div class="container">
		<div class="row">
		<div class="col-lg-10 mx-auto">
			<div class="banner">
			<img style= "border-radius: 20px;"
				src="{image}"
				class="w-100"
				alt="{image_alt}"
				loading="lazy"
			/>
			<div class="effect-one">
				<img
				src="/images/video/effect-one.png"
				alt="effect"
				loading="lazy"
				/>
			</div>
			<div class="effect-two">
				<img
				src="/images/video/effect-two.png"
				alt="effect"
				loading="lazy"
				/>
			</div>
			<div
				class="video-iframe d-flex align-items-center justify-content-center"
			>
				<div class="video-icon me-sm-9 me-8">
				<a class="popup-vimeo" href="{video_url}">
					<svg
					width="28"
					height="32"
					viewBox="0 0 28 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path
						d="M26 12.5359C28.6667 14.0755 28.6667 17.9245 26 19.4641L6.5 30.7224C3.83333 32.262 0.499998 30.3375 0.499999 27.2583L0.5 4.74167C0.5 1.66247 3.83333 -0.262033 6.5 1.27757L26 12.5359Z"
						fill="white"
					/>
					</svg>
				</a>
				</div>
			</div>
			</div>
		</div>
		</div>
	</div>
</section>

<style lang="scss">
	.video {
		position: relative;
		padding-top: $base-padding * 13;
		overflow: hidden;
		@include media-breakpoint-down-xxl {
			padding-top: $base-padding * 8;
		}
		@include media-breakpoint-down-xl {
			padding-top: $base-padding * 4;
		}
		.banner {
			position: relative;
			z-index: 1;
			&::after {
				position: absolute;
				content: '';
				background: $color-primary;
				width: 100%;
				height: 100%;
				border-radius: 20px;
				top: 0;
				left: 0;
				opacity: 0.2;
			}
			.effect-one,
			.effect-two {
				img {
					@include media-breakpoint-down-md {
					width: 70%;
					}
				}
			}
			.effect-one {
				position: absolute;
				top: 54%;
				left: -89px;
				z-index: -1;
				@include media-breakpoint-down-xl {
					top: 37%;
				}
				@include media-breakpoint-down-lg {
					top: 30%;
				}
				@include media-breakpoint-down-md {
					top: 40%;
				}
			}

			.effect-two {
				position: absolute;
				top: -96px;
				right: -80px;
				z-index: -1;
				@include media-breakpoint-down-lg {
					top: -70px;
				}
				@include media-breakpoint-down-md {
					right: -234px;
				}
			}
		}
		&-iframe {
			position: absolute;
			left: 50%;
			top: 50%;
			z-index: 1;
		}
		&-icon {
			a {
				position: absolute;
				border: 2px solid $color-primary;
				border-radius: 50%;
				background: $color-primary;
				z-index: 1;
				width: 86px;
				height: 86px;
				outline: none;
				transform: translate(-50%, -50%);
			}
			svg {
				position: absolute;
				text-align: center;
				top: 50%;
				left: 50%;
				font-size: 30px;
				transform: translate(-50%, -50%);
				margin-left: 2px;
			}
		}

		&-iframe::before,
		&-iframe::after {
			content: '';
			background: $color-white;
			border-radius: 50%;
			position: absolute;
			transform-origin: top left;
			animation-name: grow;
			animation-duration: 2s;
			animation-iteration-count: infinite;
			animation-direction: alternate;
			top: 50%;
			left: 0%;
			transform: translate(-50%, -50%);
		}

		&-iframe::after {
			width: 110px;
			height: 110px;
			opacity: 0.5;
		}
		&-iframe::before {
			width: 140px;
			height: 140px;
			animation-delay: 1s;
			opacity: 0.4;
		}
	}

</style>
