module.exports = {
    root: true,
    env: { node: true, es2023: true },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'prettier.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        project: './tsconfig.prod.json', //This setting is required if you want to use rules which require type information
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'prettier'],

    overrides: [
        {
            files: ['**/*.test.ts'],
            rules: {
                'import/no-extraneous-dependencies': 0,
            },
        },
        {
            files: ['**/*.ts'],
            rules: {
                'import/extensions': [
                    2,
                    {
                        js: 'always',
                    },
                ],
            },
        },
    ],
};
