import { redirect } from '@sveltejs/kit';
import Filer from '@cloudcannon/filer';
import { get } from '$lib/routing';

export async function load({ params }) {
	const page = parseInt(params.slug);
	if (page === 1) {
		throw redirect(307, '/blog/');
	}

	const filename = 'blog';
	const res = await get(filename);
	const pageDetails = res.data;


	const filer = new Filer({
		path: 'content'
	});

	const paginationDetails = filer.getPaginatedItems('blog', {
		sortKey: 'date',
		pagination: {
			page,
			size: pageDetails.data.pagination.size
		}
	})

	return {
		pageDetails,
		paginationDetails
	};
}