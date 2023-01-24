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
						<a href="/" class="" target="_self">
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
										<a href="{ link.link }" target="_self">{ link.text }</a>
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
