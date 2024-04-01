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
				transparent: 'transparent',
				primary: '#181A22', // Add your custom primary color 
				secondary: '#2B2D35', // Add your custom secondary color  
				debug: '#181A22', // Just so you can see how this is powerful  
				'black': '#09090b',
				'slate': '#e2e8f0',
				'grape': '#833ab4',
				'cherry': '#fd1d52',
				'yellow': 'fcb045',
				
			},
			fontFamily: {
				//font files are declared in html-header.twig file
				'sans': ['"Inria Sans"', 'sans-serif'],
			},
		}
	},
	plugins: [],
}

