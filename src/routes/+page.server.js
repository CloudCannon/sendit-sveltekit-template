import { get } from '$lib/routing';

export async function load() {
	const res = await get('pages/index');
	return res.data;
}