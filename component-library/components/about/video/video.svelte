<script>
	export let title = '';
	export let description = '';
	export let button = {};
	export let video = {};
</script>

<section class="works">
	<div class="container">
	   <div class="row align-items-center">
		  <div class="col-lg-6">
			 <div class="works-content">
				<h2>{title}</h2>
				<p>
					<!-- this may not need the p tags - check 11ty-->
					<!-- {description | markdownify} -->
				</p>
				<a href="{button.link}" class="btn btn-lg btn-white" target="_blank"> {button.text} </a>
			 </div>
		  </div>
		  <div class="col-lg-6">
			 <div class="works-banner">
				<img src="{video.image}" class="w-100" alt="{video.image_alt}" loading="lazy" style="border-radius:20px"/>
				<div class="effect">
				   <img src="/images/works/effect.png" alt="effect" loading="lazy" />
				</div>
				<div class="video-iframe d-flex align-items-center justify-content-center">
				   <div class="video-icon me-sm-9 me-8">
					  <a class="popup-vimeo" href="{video.link}">
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
	.works {
		padding: $base-padding * 9.4 $base-padding * 0 $base-padding * 3.2;
		overflow: hidden;
		@include media-breakpoint-down-xxl {
			padding: $base-padding * 6 $base-padding * 0 $base-padding * 3.2;
		}
		@include media-breakpoint-down-xl {
			padding: $base-padding * 6 $base-padding * 0 $base-padding * 0;
		}
		@include media-breakpoint-down-lg {
			padding: $base-padding * 4 $base-padding * 0 $base-padding * 0;
		}
		&-content {
			@include media-breakpoint-down-lg {
				padding-bottom: $base-padding * 5;
				text-align: center;
			}
			h2 {
				margin-bottom: $base-margin * 1.5;
				font-size: $base-font-size * 2.8;
				line-height: 56.25px;
				@include media-breakpoint-down-md {
					font-size: $base-font-size * 1.9;
				}
			}
			p {
				font-size: $base-font-size * 1.4;
				font-weight: 500;
				line-height: 36.3px;
				margin-bottom: $base-margin * 3.1;
				width: 80%;
				@include media-breakpoint-down-xxl {
					width: 90%;
				}
				@include media-breakpoint-down-xl {
					width: 100%;
					font-size: $base-font-size * 1.2;
				}
				@include media-breakpoint-down-lg {
					margin-bottom: $base-margin * 1.5;
				}
			}
		}
		&-banner {
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
			.effect {
				position: absolute;
				top: -96px;
				left: -89px;
				z-index: -1;
				@include media-breakpoint-down-xxl {
					img {
					max-width: 100%;
					}
				}
			}
			.video {
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
		}
	}
</style>
