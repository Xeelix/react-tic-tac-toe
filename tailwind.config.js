module.exports = {
	purge: ["./src/components/**/*.{js,jsx}", "./public/index.html"],
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

			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				"fade-out": {
					"0%": {
						opacity: "1",
					},
					"100%": {
						opacity: "0",
					},
				},
			},
			animation: {
				"fade-in": "fade-in 0.3s ease-out",
				"fade-out": "fade-out 0.3s ease-out",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
