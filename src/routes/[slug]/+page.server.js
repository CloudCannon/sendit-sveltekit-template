import { error } from '@sveltejs/kit';
import { get } from '$lib/routing';

export async function load({ params }) {
	const slug = params.slug || 'index';
	const res = await get(slug);

	if (res.status === 200) {
		return res.data;
	}
	throw error(res.status, 'Not found');
}