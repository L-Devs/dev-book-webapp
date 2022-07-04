/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"accent": {
					100: "#8A77FF",
					200: "#654DFF",
					300: "#4F33FF"
				},

				"dark": {
					100: "#302F32",
					200: "#242424",
					300: "#121212"
				},

				"light": {
					100: "#FAFAFA",
					200: "#E4E5F0",
					300: "#D0D1DF"
				}
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'] 
			}
		},
	},
	plugins: [],
}
