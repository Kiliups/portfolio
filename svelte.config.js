import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import adapter from 'svelte-adapter-bun';

const extensions = ['.svelte', '.svx', '.md'];

const config = {
	extensions,
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] }), vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './path/to/lib/*'
		}
	}
};

export default config;
