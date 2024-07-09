import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      prettier: prettier,
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prettier/prettier': 2,
    },
  },
  prettierRecommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
