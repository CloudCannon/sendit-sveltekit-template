import Filer from '@cloudcannon/filer';
export const prerender = true
export const trailingSlash = 'always';

export async function load() {
	const contentFile = 'index.md';

	const filer = new Filer({
		path: 'content'
	});

	const data = await filer.getItem(contentFile, {});

	return data;
}