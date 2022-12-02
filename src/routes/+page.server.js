import { get } from '$lib/routing';
export const prerender = true
export const trailingSlash = 'always';

export async function load() {
	const res = await get('index');
	return res.data;
}