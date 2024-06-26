/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	
	
	content: [
		'./templates/*.html',
		'./templates/*.twig',
		'./templates/partial/*.twig',
		'./templates/blocks/*.twig',
		// Add paths to your Twig templates or any files using Tailwind classes
		
	],
	theme: {
		extend: {
			colors: {
				'black': '#09090b',
				'slate': '#e2e8f0',
				'darkslate': '#1e293b',
				'grape': '#833ab4',
				'cherry': '#fd1d52',
				
		
			},
			fontFamily: {
				//font files are declared in html-header.twig file
				'sans': ['"Titillium Web"', '"Inria Sans"', 'sans-serif'],
			 'logo': ['"Orbitron"'], },
		}
	},
	plugins: [],
}

