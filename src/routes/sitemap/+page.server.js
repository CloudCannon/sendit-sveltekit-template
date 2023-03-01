import { redirect } from '@sveltejs/kit';
import Filer from '@cloudcannon/filer';

export async function load() {
	const filer = new Filer({
		path: 'content'
	});

	const pages = await filer.getItems('pages');
	const posts = await filer.getItems('blog');

	return {
		pages,
		posts
	};
}