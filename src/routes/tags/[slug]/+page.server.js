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

	const posts = await filer.getItems('blog', { sortKey: 'date' });
	const postsByTag = posts.reduce((memo, post) => {
		const tags = post.data.tags || [];
		if (tags.includes(tag)) {
			memo.push(post);
		}
		return memo;
	}, []);

	return {
		tag: tag,
		pageDetails: pageDetails,
		posts: postsByTag
	};
}