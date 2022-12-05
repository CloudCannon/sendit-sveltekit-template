<script>
	import '$lib/styles/theme.scss';
	import { site_title } from '@data/site.json';
	import Nav from './Nav.svelte';
	import Footer from './Footer.svelte';

	const title = site_title
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Nav />
<slot/>
<Footer />