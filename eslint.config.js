import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            // override/add rules settings here
        },
    },
];
