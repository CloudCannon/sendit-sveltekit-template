import { redirect } from '@sveltejs/kit';
import Filer from '@cloudcannon/filer';
import { get } from '$lib/routing';

export async function load({ params }) {
	const page = parseInt(params.pagenumber);
	const tag = params.slug;
	console.log(`tags/${tag}`);
	if (page === 1) {
		throw redirect(307, `/tags/${tag}`);
	}

	const filename = 'blog';
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
	})
	paginationDetails.urlPrefix = `tags/${tag}`

	return {
		tag,
		pageDetails,
		paginationDetails
	};
}