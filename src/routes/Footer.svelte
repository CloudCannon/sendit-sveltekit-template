<script>
	import * as footer from '@data/footer.json';

	let currentDate = new Date();
	const year = currentDate.getFullYear();
</script>

<footer class="footer pt-xxl-19 pt-8 pb-sm-7 pb-5" id="footer">
	<div class="container-fluid">
		<div class="footer-wrapper">
			<div class="row">
			 <div class="col-12 col-lg-4 me-auto order-2 order-lg-1">
				<div class="footer-logo mt-7 mt-md-0">
					<a href="/" class="">
						<img src="{footer.logo}" alt="logo" />
					</a>
					<p class="">
						Copyright {year} {footer.copyright}
					</p>
				</div>
				<div class="social-icon">
					<ul class="list-unstyled">
						{#each footer.social as item}
						<li>
						 <a href="{ item.link }"> <i class="{ item.icon }"></i></a>
						</li>
						{/each}
					</ul>
				</div>
			 </div>
			 {#each footer.sections as item}
			 <div class="col-6 col-md-3 col-lg-2 order-1">
				<div class="footer-widget">
					<h3>{ item.title }</h3>
					<ul class="list-unstyled">
						{#each item.links as link}
						<li>
						 <a href="{ link.link }">{ link.text }</a>
						</li>
						{/each}
					</ul>
				</div>
			 </div>
			 {/each}
			</div>
		</div>
	</div>
 </footer>

 <style lang="scss">
	.footer {
	position: relative;
	background: $color-header;
	&-wrapper {
max-width: 1500px;
margin: 0 auto;
@include media-breakpoint-down-xxl {
	max-width: 1100px;
}
@include media-breakpoint-down-xl {
	max-width: 900px;
}
@include media-breakpoint-down-lg {
	max-width: 700px;
}
@include media-breakpoint-down-md {
	max-width: 400px;
}

.footer-logo {
	@include media-breakpoint-down-lg {
text-align: center;
	}
	@include media-breakpoint-down-sm {
text-align: left;
	}
	a {
margin-bottom: $base-margin * 2.5;
@include media-breakpoint-down-sm {
	margin-bottom: $base-margin * 1.25;
}
	}
	p {
color: $color-secondary-dark;
font-family: $font-primary;
font-size: $base-font-size * 0.9;
font-weight: 600;
margin-bottom: $base-margin * 2.5;
@include media-breakpoint-down-sm {
	margin-bottom: $base-margin * 3.3;
}
	}
}
.social-icon {
	position: relative;
	ul {
display: flex;
align-items: center;
justify-content: flex-start;
margin-bottom: $base-margin * 2;
@include media-breakpoint-down-lg {
	justify-content: center;
}
@include media-breakpoint-down-sm {
	justify-content: start;
}

li {
	display: inline-block;
	margin-right: $base-margin;
	&:last-child {
margin-right: $base-margin * 0;
	}
	a {
transition: all 0.3s ease-in-out;
i {
	font-size: 30px;
	color: white;
	transition: all 0.3s ease-in-out;
	transform: translateY(0px);
}
&:hover {
	i {
color: #e63b2b;
transform: translateY(-10px);
	}
}
	}
}
	}
	a {
font-size: $base-font-size * 1.25;
	}
}
	}
	&-widget {
margin-left: 80px;
@include media-breakpoint-down-xxxl {
	margin-left: 0px;
}

@include media-breakpoint-down-lg {
	margin-bottom: $base-margin * 2.5;
}
@include media-breakpoint-down-sm {
	margin-bottom: $base-margin * 3.3;
}
h3 {
	margin-bottom: $base-margin * 1.6;
	color: $color-secondary-dark;
	font-family: $font-primary;
	font-size: $base-font-size * 0.9;
	font-weight: 600;
	opacity: 0.7;
}
ul {
	margin-bottom: $base-margin * 0;
	li {
display: block;
padding: $base-padding * 0.8 $base-padding * 0.2 $base-padding * 0.8;
a {
	color: $color-white;
	font-weight: 600;
	transition: all 0.3s ease-in-out;
	&:hover {
color: $color-anchor;
	}
}
	}
}
	}
}
</style>