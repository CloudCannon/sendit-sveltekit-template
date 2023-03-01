import { redirect } from '@sveltejs/kit';
import Filer from '@cloudcannon/filer';
import { get } from '$lib/routing';

export async function load({ params }) {
	let page;
	if (params.slug) {
		page = parseInt(params.slug);
		if (page === 1) {
			throw redirect(307, '/blog/');
		}
	}
	page = page || 1;

	const filename = 'pages/blog';
	const res = await get(filename);
	const pageDetails = res.data;

	const filer = new Filer({
		path: 'content'
	});

	const paginationDetails = await filer.getPaginatedItems('blog', {
		sortKey: 'date',
		pagination: {
			page,
			size: pageDetails.data.pagination.size
		}
	});
	paginationDetails.urlPrefix = 'blog';

	return {
		pageDetails,
		paginationDetails
	};
}