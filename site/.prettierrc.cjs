/** @type {import("prettier").Config} */
module.exports = {
	plugins: ['prettier-plugin-astro'],

	trailingComma: 'es5',
	tabWidth: 4,
	printWidth: 120,
	semi: false,
	singleQuote: true,
	useTabs: true,
	bracketSameLine: false,

	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
