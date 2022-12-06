import { get } from '$lib/routing';

export async function load() {
	const res = await get('index');
	return res.data;
}