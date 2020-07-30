module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['import'],
  rules: {
    'no-console': 'off',
  },
}
