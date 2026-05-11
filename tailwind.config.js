/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
			colors: {
				brand: {
					primary: '#0ea5e9',
					secondary: '#2a9d8f',
				},
			},
		},
	},
	plugins: [],
}
