const { red } = require('tailwindcss/colors');

module.exports = {
	// https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
	darkMode: 'class',
	theme: {
		fontFamily: {
			'sans': ['Impact', 'Montserrat', 'Segoe UI', 'SegoeUI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
		},
		colors: {
			// Tint generator: https://tailwind-color-palette.netlify.app/
			'primary': {
				0        : '#EDD6FD',
				100      : '#DBADFB',
				200      : '#C884F8',
				300      : '#B65BF6',
				400      : '#A432F4',
				500      : '#8328C3',
				600      : '#621E92',
				700      : '#421462',
				800      : '#210A31'
			},
			'secondary': '#FAAC2C',
			'yellow'   : '#FFFF93',
			'white'    : '#FFFFFF',
			'black'    : '#000000',
			'red'      : '#FB0000',
		},
		extend: {
			backgroundImage: {
				'hero': "url('/static/images/small-red-neon.jpg')",
			},
			// Customize the @tailwindcss/typography plugin
			typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.65',
						maxWidth: 'unset',
						a: {
							color: '#A432F4',
							'&:hover': {
								color: '#210A31',
							},
						},
          },
        },
			},
		},
	},
	plugins: [
		// https://tailwindcss.com/docs/typography-plugin
		require('@tailwindcss/typography'),
	],
	content: ['src/**/*.njk', 'src/**/*.js']
}
