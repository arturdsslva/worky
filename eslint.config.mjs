import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'build/**/*.*',
      'tsup/*.*',
    ],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: [
      './src/**/*.ts',
      './src/**/*.tsx'
    ],
    rules: {
            "@typescript-eslint/no-unused-vars": ["error", { args: "after-used", ignoreRestSiblings: true }],
          },
  }

);