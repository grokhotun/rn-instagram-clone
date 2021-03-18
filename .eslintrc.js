module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'semi': [2, 'never'],
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    'no-case-declarations': 'off',
    'quotes': [2, 'single', {'avoidEscape': true}]
  },
}
