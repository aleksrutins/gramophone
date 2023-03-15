/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'rgb(124, 58, 237)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
