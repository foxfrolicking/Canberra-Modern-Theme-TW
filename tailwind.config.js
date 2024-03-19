/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	/**darkMode: 'media',**/
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
				primary: '#181A22', // Add your custom primary color 
				secondary: '#2B2D35', // Add your custom secondary color  
				debug: '#181A22', // Just so you can see how this is powerful  
				// Add more custom colors as needed
			},
			fontFamily: {
				//font files are declared in html-header.twig file
				'sans': ['"Inria Sans"', 'sans-serif'],
			},
		}
	},
	plugins: [],
}

