import Filer from '@cloudcannon/filer';
import { get } from '$lib/routing';

export async function load() {
	const slug = 'blog';
	const res = await get(slug);
	const pageDetails = res.data;

	const pageNumber = 1;

	const filer = new Filer({
		path: 'content'
	});

	const paginationDetails = await filer.getPaginatedItems('blog', {
		sortKey: 'date',
		pagination: {
			page: pageNumber,
			size: pageDetails.data.pagination.size
		}
	});
	paginationDetails.urlPrefix = 'blog'

	return {
		pageDetails,
		paginationDetails
	};

}