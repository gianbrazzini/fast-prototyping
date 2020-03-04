module.exports = {
    'root': true,
    'env': {
        'node': true
    },
    'extends': [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-console': [
            'error',
            {
                'allow': [
                    'error',
                    'warn'
                ]
            }
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                'attribute': 1,
                'baseIndent': 1,
                'closeBracket': 0,
                'alignAttributesVertically': 'true',
                'ignores': []
            }
        ],
        'vue/no-v-html': false,
        'vue/html-self-closing': [
            'error',
            {
                'html': {
                    'void': 'never',
                    'normal': 'never',
                    'component': 'always'
                }
            }
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                'singleline': 'never',
                'multiline': 'never'
            }
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                'singleline': 6,
                'multiline': {
                    'max': 4,
                    'allowFirstLine': true
                }
            }
        ],
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ],
        'sort-imports': [
            'error',
            {
                'ignoreCase': true,
                'ignoreDeclarationSort': false,
                'ignoreMemberSort': false,
                'memberSyntaxSortOrder': [
                    'none',
                    'all',
                    'multiple',
                    'single'
                ]
            }
        ]
    },
    'parserOptions': {
        'parser': 'babel-eslint'
    }
}
