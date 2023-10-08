module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'prettier.config.js',
    'vite.config.ts',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json', //This setting is required if you want to use rules which require type information
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 0,
  },

  overrides: [
    {
      files: ['**/*.test.tsx', '**/*.test.ts', 'setupTests.ts'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'import/extensions': [
          2,
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
};
