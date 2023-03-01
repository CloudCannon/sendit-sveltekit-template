import Filer from '@cloudcannon/filer';
import { site_domain } from '@data/site.json';

export const prerender = true;

export async function GET() {
	const filer = new Filer({
		path: 'content'
	});

	const pages = await filer.getItems('pages');
	const posts = await filer.getItems('blog');

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
		${pages.map((page) => `<url><loc>${site_domain}/${page.slug}/</loc></url>`).join('\n		')}
		${posts.map((post) => `<url><loc>${site_domain}/blog/${post.slug}/</loc></url>`).join('\n		')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}