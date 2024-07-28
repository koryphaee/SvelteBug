/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000000',
			white: '#FFFFFF',
			gray: '#A3A3A3',
			purple: '#FFC8FF'
		},
		borderColor: {
			DEFAULT: '#FFC8FF'
		},
		extend: {
			width: {
				card: '320px'
			},
			height: {
				viewport: '100svh',
				card: '180px'
			}
		}
	},
	plugins: []
}
