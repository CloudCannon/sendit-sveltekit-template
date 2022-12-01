import Filer from '@cloudcannon/filer';
export const prerender = true
export const trailingSlash = 'always';

export async function load({ params }) {
	const slug = params.slug || 'index';
	const contentFile = `blog/${slug}.md`

	const filer = new Filer({
		path: 'content'
	});

	const data = await filer.getItem(contentFile, {})

	const allItems = await filer.getItems('blog', { sortKey: 'date' });
	const posts = allItems.reduce((memo, item) => {
		if (!item.slug.endsWith('index') && !item.slug.endsWith(slug)) {
			memo.push(item);
		}
		return memo;
	}, []);

	const recommendedPosts = posts.slice(0, 3);

	return {
		pageDetails: data,
		recommendedPosts
	};
}