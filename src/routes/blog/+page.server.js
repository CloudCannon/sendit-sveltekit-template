import Filer from '@cloudcannon/filer';

export async function load() {
	const contentFile = 'blog.md';
	const pageNumber = 1;

	const filer = new Filer({
		path: 'content'
	});

	const pageDetails = await filer.getItem(contentFile, { sortKey: 'date' });
	const paginationDetails = filer.getPaginatedItems('blog', {
		sortKey: 'date',
		pagination: {
			page: pageNumber,
			size: pageDetails.data.pagination.size
		}
	});

	return {
		pageDetails,
		paginationDetails
	};
}