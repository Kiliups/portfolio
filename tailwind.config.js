/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background:'#0f172a',
				text_color: '#e3f2f8',
				background_accent: '#333948',
				pastel_green: '#73afa8',
				pastel_blue: '#b8dde6',
				pastel_darker_green: '#6dbcb2',
				monochrome_accent:'#aed4eb',
				monochrome_accent2:'#efc8cd',
				blue_grey:'#7aa9ad',
				eggshell:'#f3f2f2',
			},
		}
	},
	plugins: []
};
