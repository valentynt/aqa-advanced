import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				node: true,
			},
		},
	},
	pluginJs.configs.recommended,
];
