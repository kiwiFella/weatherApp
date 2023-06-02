module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "@react-native-community"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'semi': ['error', 'never'],
        'comma-dangle': [2, 'never'],
        'quotes': [2, 'single'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        "no-use-before-define": [
        "error",
        { functions: true, classes: true, variables: false },
        ]
    }
}
