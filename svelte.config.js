import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn',
		},
	}
};

export default config;
