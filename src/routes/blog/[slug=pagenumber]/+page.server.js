import Filer from '@cloudcannon/filer';

export async function load({ params }) {
	const contentFile = `blog.md`;

	const filer = new Filer({
		path: 'content'
	});

	const pageDetails = await filer.getItem(contentFile, { sortKey: 'date' });

	const paginationDetails = filer.getPaginatedItems('blog', {
		sortKey: 'date',
		pagination: {
			page: parseInt(params.slug),
			size: pageDetails.data.pagination.size
		}
	})

	return {
		pageDetails,
		paginationDetails
	};
}