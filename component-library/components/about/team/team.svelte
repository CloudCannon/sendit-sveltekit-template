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
