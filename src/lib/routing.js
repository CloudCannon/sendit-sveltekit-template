import Filer from '@cloudcannon/filer';

export async function get(url) {
	const contentFile = `${url}.md`;

	const filer = new Filer({
		path: 'content'
	});

	try {
		const data = await filer.getItem(contentFile, {});
		return {
			status: 200,
			data
		};
	} catch(e) {
		return {
			status: 404,
		};
	}
}