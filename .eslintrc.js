module.exports = {
  "extends": "standard",
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "eqeqeq": ["error", "always"],
    "curly": ["error", "all"],
    "no-labels": "error",
    "no-throw-literal": "off",
    "no-unused-vars": ["error", { "varsIgnorePattern": "(^React|Icon)$" }],
    "react/jsx-uses-vars": ["error"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "array-bracket-spacing": [2, "always", { "singleValue": true }],
    "no-whitespace-before-property": "error",
    "space-infix-ops": "error",
    "lines-between-class-members": ["error", "always"],
    "comma-spacing": [2, { "before": false, "after": true }],
    "computed-property-spacing": [2, "never"],
    "no-trailing-spaces": ["error", { "skipBlankLines": true, "ignoreComments": true }],
    "key-spacing": [2,{ "mode": "strict", "beforeColon": false, "afterColon": true }],
    "no-mixed-spaces-and-tabs": 2,
    "space-in-parens": [2, "never"],
    "no-multiple-empty-lines": [2, { "max": 2 }],
    "no-return-await": "off",
    "space-before-function-paren": ["error", { "asyncArrow": "always", "named": "never", "anonymous": "never" }],
    "eol-last": ["error", "never"],
    "padded-blocks": ["error", { "classes": "always", "blocks": "never", "switches": "never" }]
  }
};