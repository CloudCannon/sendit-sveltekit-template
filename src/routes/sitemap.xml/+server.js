export const prerender = true;

export async function GET() {
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
		<url>
			<loc>/blog/worlds-most-famous-app-developers-and-designers/</loc>
		</url><url>
			<loc>/categories/</loc>
		</url><url>
			<loc>/</loc>
		</url><url>
			<loc>/categories/marketing/</loc>
		</url><url>
			<loc>/blog/</loc>
		</url><url>
			<loc>/blog/the-10-biggest-rebrands-and-logo-designs-of-2019/</loc>
		</url><url>
			<loc>/blog/is-tech-making-our-life-more-easier/</loc>
		</url><url>
			<loc>/categories/email/</loc>
		</url><url>
			<loc>/blog/design-a-simple-definition/</loc>
		</url><url>
			<loc>/blog/how-to-host-better-email-marketing-campaigns/</loc>
		</url><url>
			<loc>/categories/technology/</loc>
		</url><url>
			<loc>/blog/the-10-biggest-product-stories-of-2019/</loc>
		</url><url>
			<loc>/about/</loc>
		</url><url>
			<loc>/contact/</loc>
		</url><url>
			<loc>/feature/</loc>
		</url><url>
			<loc>/pricing/</loc>
		</url><url>
			<loc>/privacy/</loc>
		</url><url>
			<loc>/tags/</loc>
		</url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}