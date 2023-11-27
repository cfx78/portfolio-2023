import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#011627',

					foreground: '#41ead4',

					accent: '#f71735',

					neutral: '#fdfffc',

					info: '#2272FF',

					success: '#508484',

					warning: '#FC9E4F',

					error: '#CC2936',
				},
				light: {
					primary: '#fdfffc',

					foreground: '#41ead4',

					accent: '#f71735',

					neutral: '#fdfffc',

					info: '#2272FF',

					success: '#508484',

					warning: '#FC9E4F',

					error: '#CC2936',
				},
			},

			'dark',
		],
	},
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
export default config;
