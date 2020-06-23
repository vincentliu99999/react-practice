/* .eslintrc.js */

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "plugins": [
      "react"
  ],
    "extends": [
      "react-app",
      "airbnb",
      "plugin:react/recommended"
    ], // 使用 eslint-config-airbnb
    "parser": "babel-eslint", // 增强语法识别能力
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "arrow-body-style": 0,
        "operator-assignment": 0,
        "eqeqeq": 0,
        "linebreak-style": 0,
        "consistent-return": 0,
        "class-methods-use-this": 0,
        "comma-dangle": 0,
        "generator-star-spacing": 0,
        "global-require": 0,
        "require-yield": 1,
        "radix": 0,
        "object-shorthand": 0,
        "one-var": 0,
        "prefer-const": 0,
        "prefer-destructuring": 0,
        "prefer-const": 0,
        "prefer-template": 0,
        "max-lines": 0,
        "max-len": 0,
        "no-bitwise": 0,
        "no-cond-assign": 0,
        "no-console": 0,
        "no-else-return": 0,
        "no-fallthrough": 0,
        "no-loop-func": 0,
        "no-mixed-operators": 0,
        "no-nested-ternary": 0,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        "no-restricted-syntax": 0,
        "no-return-assign": 0,
        "no-restricted-globals": 0,
        "no-trailing-spaces": 2,
        "no-use-before-define": 0,
        "no-undef": 0,
        "no-useless-escape": 0,
        "no-underscore-dangle": 0,
        "no-unused-expressions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/label-has-for": 0,
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "react/jsx-no-target-blank": 0,
        "react/boolean-prop-naming": 0,
        "react/default-props-match-prop-types": 0,
        "react/destructuring-assignment": [0, "always", { "ignoreClassFields": false }],
        "react/forbid-prop-types": 0,
        "react/no-array-index-key": 0,
        "react/no-access-state-in-setstate": 0,
        "react/no-unused-prop-types": 0,
        "react/no-unused-state": 0,
        "react/no-multi-comp": 0,
        "react/no-typos": 0,
        "react/require-default-props": 0,
        "react/jsx-boolean-value": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
        "react/jsx-one-expression-per-line": 0,
        "react/react-in-jsx-scope": 0,
        "react/require-default-props": 0,
        "react/sort-comp": 0,
        "react/prefer-stateless-function": 0,
        "react/prop-types": 0,
    }
};

// module.exports = {
//   "extends": "airbnb",
//   "plugins": [
//       "react"
//   ],
//   "parser": "babel-eslint",
//   "rules": {
//     "strict": 0,
//   },
// };