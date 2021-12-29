module.exports = {
    plugins: ['import', '@typescript-eslint', 'jsx-a11y'],
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:compat/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],
    rules: {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object'],
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@*',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@*/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        '@next/next/no-img-element': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/no-unresolved': 'off',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    env: {
        browser: true,
        node: true,
    },
    ignorePatterns: ['**/*.test.{ts,tsx}', '*.js', 'stories/**/*'],
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },
};
