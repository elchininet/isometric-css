const tseslint = require('typescript-eslint');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    {
        languageOptions: {
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
                ...globals.browser,
                ...globals.node,
                ...globals.es2020
            }
        }
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ['jest.config.js']
    },
    {
        rules: {
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],
            indent: ['error', 4, { SwitchCase: 1 }],
            semi: ['error', 'always'],
            'no-trailing-spaces': ['error', { skipBlankLines: true }],
            '@typescript-eslint/no-var-requires': 'off'
        }
    }
];