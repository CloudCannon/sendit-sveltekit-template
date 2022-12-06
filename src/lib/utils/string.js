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
