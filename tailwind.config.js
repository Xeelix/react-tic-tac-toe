module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			primary: "#e5e5e5",
		}),
		extend: {
			gap: {
				0.25: "0.09rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
