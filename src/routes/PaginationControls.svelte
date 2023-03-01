<script>
	export let pagination;
</script>

{#if pagination.lastPage > 1}
	<nav class="blog-pagination">
		<ul class="pagination">
			{#if pagination.prevPage}
				<li class="page-item">
					<a class="page-link btn btn-secondary" href="{`/${pagination.urlPrefix}/${pagination.prevPage}/`}" target="_self">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20.657"
							height="11.314"
							viewBox="0 0 20.657 11.314"
							style="transform: scale(-1, 1)"
						>
							<g fill="#fff" data-name="Group 12">
								<path d="M0 4.657h18v2H0z" data-name="Rectangle 2400"></path>
								<path
									d="M13.586 9.9l5.6568542-5.6568542 1.4142136 1.4142135-5.6568542 5.6568543z"
									data-name="Rectangle 2401"
								></path>
								<path
									d="M15 0l5.6568542 5.6568542-1.4142135 1.4142136-5.6568543-5.6568542z"
									data-name="Rectangle 2402"
								></path>
							</g>
						</svg>
					</a>
				</li>
			{/if}
			{#each Array(pagination.lastPage) as _, i}
				{@const index = i + 1}
				<li class="page-item">
					<a
						target="_self"
						class="page-link btn btn-secondary"
						class:active="{index === pagination.currentPage }"
						href="{`/${pagination.urlPrefix}/${index}/`}"
						>{index}
					</a>
				</li>
			{/each}
			{#if pagination.nextPage}
				<li class="page-item">
					<a class="page-link btn btn-secondary" href="{`/${pagination.urlPrefix}/${pagination.nextPage}/`}" target="_self">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20.657"
							height="11.314"
							viewBox="0 0 20.657 11.314"
						>
						<g fill="#fff" data-name="Group 12">
							<path d="M0 4.657h18v2H0z" data-name="Rectangle 2400"></path>
							<path
								d="M13.586 9.9l5.6568542-5.6568542 1.4142136 1.4142135-5.6568542 5.6568543z"
								data-name="Rectangle 2401"
							></path>
							<path
								d="M15 0l5.6568542 5.6568542-1.4142135 1.4142136-5.6568543-5.6568542z"
								data-name="Rectangle 2402"
							></path>
						</g>
						</svg>
					</a>
				</li>
			{/if}
		</ul>
	</nav>
{/if}