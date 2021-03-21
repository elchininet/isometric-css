module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    ignorePatterns: [
        'jest.config.js'
    ],
    rules: {
        quotes: ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
        semi: ['error', 'always'],
        '@typescript-eslint/ban-ts-comment': 'off'
    },
    overrides: [
        {
            files: ['*webpack.config.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        }
    ]
};