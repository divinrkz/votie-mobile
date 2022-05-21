module.exports = {
    'env': {
        'browser': true,
        'react-native/react-native': true
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-native',
        'unused-imports'
    ],
    'parser': '@typescript-eslint/parser',
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' }
        ],
        'object-curly-spacing': ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/sort-styles': ['error', 'desc', { 'ignoreClassNames': true, 'ignoreStyleProperties': true }],
        'react-native/no-raw-text': 0,
        ' react-native/no-color-literals': 'off',
        'react/jsx-filename-extension': [
            2,
            {
                'extensions': [
                    '.tsx'
                ]
            }
        ]
    }
};