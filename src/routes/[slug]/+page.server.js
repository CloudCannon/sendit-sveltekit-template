import { error } from '@sveltejs/kit';
import Filer from '@cloudcannon/filer';
export const prerender = true
export const trailingSlash = 'always';

export async function load({ params }) {
	const slug = params.slug || 'index';
	const contentFile = `${slug}.md`

	const filer = new Filer({
		path: 'content'
	});

	let data = {};
	try {
		data = await filer.getItem(contentFile, {})
	} catch(e) {
		throw error(404, 'Not found');
	}

	return data;
}