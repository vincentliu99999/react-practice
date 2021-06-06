module.exports = {
  env: {
    browser: true,
    es6: true, // 設定 ecmaVersion 6
    // es2017: true, // 設定 ecmaVersion 8
    // es2020: true, // 設定 ecmaVersion 11
    // es2021: true, // 設定 ecmaVersion 12
  },
  extends: [
    // 'airbnb',
    'react-app',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6, // 3, 5 (default), 6, 7, 8, 9, 10, 11, or 12
    sourceType: 'module',
  },
  rules: {
  },
};
