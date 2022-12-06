import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn',
		},
	},
	preprocess: preprocess({
		scss: {
			prependData: '@import "./src/lib/styles/globals.scss";'
		}
	})
};

export default config;
