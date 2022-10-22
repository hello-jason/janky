const { red } = require('tailwindcss/colors');

module.exports = {
	// https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
	darkMode: 'class',
	theme: {
		fontFamily: {
			'sans': ['Permanent Marker', 'Segoe UI', 'SegoeUI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
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
			keyframes: {
				wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
				pulsate: {
          '0%': { textShadow: '0 0 4px rgba(255,255,255,0.4), 0 0 11px rgba(255,255,255,0.4), 0 0 19px rgba(255,255,255,0.4), 0 0 40px #fb0000, 0 0 80px #fb0000, 0 0 90px #fb0000, 0 0 100px #fb0000, 0 0 150px #fb0000' },
          '100%': { textShadow: '0 0 4px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.4), 0 0 18px rgba(255,255,255,0.4), 0 0 38px #fb0000, 0 0 73px #fb0000, 0 0 80px #fb0000, 0 0 94px #fb0000, 0 0 140px #fb0000' },
        },
			},
			animation: {
        'waving-hand': 'wave 2s linear infinite',
				'glow': 'pulsate 0.11s ease-in-out infinite alternate',
      },
		},
	},
	plugins: [
		// https://tailwindcss.com/docs/typography-plugin
		require('@tailwindcss/typography'),
	],
	content: ['src/**/*.njk', 'src/**/*.js']
}
