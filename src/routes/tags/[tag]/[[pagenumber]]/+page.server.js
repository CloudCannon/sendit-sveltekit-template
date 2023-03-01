import { redirect } from '@sveltejs/kit';
import Filer from '@cloudcannon/filer';
import { get } from '$lib/routing';

export async function load({ params }) {
	const tag = params.tag;
	if (!tag) {
		throw redirect(301, '/blog/');
	}

	let page;
	if (params.pagenumber) {
		page = parseInt(params.pagenumber);
		if (page === 1) {
			throw redirect(307, `/tags/${tag}`);
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
		filter: (item) => item.data.tags.includes(tag),
		pagination: {
			page,
			size: pageDetails.data.pagination.size
		}
	});
	paginationDetails.urlPrefix = `tags/${tag}`;

	return {
		tag,
		pageDetails,
		paginationDetails
	};
}