import Filer from '@cloudcannon/filer';
import { get } from '$lib/routing';

export async function load({ params }) {
	const filename = `blog/${params.slug}`;
	const res = await get(filename);
	const pageDetails = res.data;

	const filer = new Filer({
		path: 'content'
	});

	const posts = await filer.getItems('blog', { sortKey: 'date' });
	const recommendedPosts = posts.slice(0, 3);

	return {
		pageDetails,
		recommendedPosts
	};
}