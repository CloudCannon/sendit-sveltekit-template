import Filer from '@cloudcannon/filer';
import { get } from '$lib/routing';

export async function load({ params }) {
	const slug = 'blog';
	const res = await get(slug);
	const pageDetails = res.data;

	const tag = params.slug;

	const filer = new Filer({
		path: 'content'
	});

	const paginationDetails = await filer.getPaginatedItems('blog', {
		sortKey: 'date',
		filter: (item) => item.data.tags.includes(tag),
		pagination: {
			size: pageDetails.data.pagination.size,
			page: 1
		}
	});
	paginationDetails.urlPrefix = `tags/${tag}`;

	return {
		tag,
		pageDetails,
		paginationDetails
	};
}