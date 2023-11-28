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
					primary: '#232323',

					secondary: '#F45D48',

					accent: '#2E5EAA',

					neutral: '#F8F5F2',

					info: '#2272FF',

					success: '#508484',

					warning: '#FC9E4F',

					error: '#CC2936',
				},
				light: {
					primary: '#F8F5F2',

					secondary: '#2E5EAA',

					accent: '#F45D48',

					neutral: '#232323',

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
