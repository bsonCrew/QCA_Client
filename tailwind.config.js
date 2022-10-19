module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			blue: "#1fb6ff",
			purple: "#7e5bef",
			pink: "#ff49db",
			red: "#ff4949",
			mildRed: "#ffb6b6",
			orange: "#ff7849",
			green: "#13ce66",
			yellow: "#ffc82c",
			"gray-dark": "#273444",
			gray: "#8492a6",
			"gray-light": "#d3dce6",
			main: "#F6F6F6",
			white: "#ffffff",
			black: "#1f1f1f",
			beige: "#6C6C6C",
			slightRed: "#ffb6b6",
			slightGreen: "#b9dac9",
			slightYellow: "#ffe6b2",
			slightBlue: "#b2d3e6",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			backgroundImage: {
				landing: "url('../public/images/bkg.svg')",
			},
			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
				4: "4 4 0%",
				5: "5 5 0%",
				6: "6 6 0%",
				7: "7 7 0%",
				8: "8 8 0%",
				9: "9 9 0%",
				10: "10 10 0%",
				11: "11 11 0%",
				12: "12 12 0%",
			},
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},
		},
	},
};
