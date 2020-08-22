module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'object-curly-spacing': 'off',
  },
};
