import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				node: true,
				jest: true,
			},
		},
	},
	pluginJs.configs.recommended,
	pluginJest.configs.recommended,
];
