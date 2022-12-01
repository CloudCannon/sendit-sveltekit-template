import Filer from '@cloudcannon/filer';
export const trailingSlash = 'always';

export async function load({ params }) {
	const tag = params.slug;
	const contentFile = 'blog.md';

	const filer = new Filer({
		path: 'content'
	});

	const pageDetails = await filer.getItem(contentFile, {});

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