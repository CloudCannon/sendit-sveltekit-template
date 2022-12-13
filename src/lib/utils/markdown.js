import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true });


export function markdownify(content) {
	content = content || '';
	const contentHtml = md.renderInline(content);
	return contentHtml;
}

export function getContentMeta(content) {
	content = content || '';
	const WORDS_PER_MINUTE = 183;
	const text = content.trim();
	const words = text.match(/(^|\s+|\/|-)\S+/ig);
	const wordCount = words.length;
	const readTime = Math.floor(wordCount / WORDS_PER_MINUTE);

	return { wordCount, readTime };
}