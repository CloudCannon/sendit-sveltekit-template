import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true });

export function markdownify(content) {
	const contentHtml = md.renderInline(content);
	return contentHtml;
}

export function toTitleCase(text) {
	return  text
		? `${text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()}`
		: '';
}

export function formatTitle(siteTitle, pageTitle) {
	const title = pageTitle
		? `${pageTitle} | ${siteTitle}`
		: siteTitle;
	return title;
}
