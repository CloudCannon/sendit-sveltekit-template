import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true });

export function markdownify(content) {
	const contentHtml = md.renderInline(content);
	return contentHtml;
}
