const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
		},
		letterSpacing: {
			wide: "1px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
