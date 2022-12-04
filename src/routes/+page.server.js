import { get } from '$lib/routing';
export const trailingSlash = 'always';

export async function load() {
	const res = await get('index');
	return res.data;
}