module.exports = {
  "root": true,
  "env": {
    'browser': true,
    'node': true,
    'es6': true
  },

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },

  "extends": "eslint:recommended",

  "rules": {
    "camelcase": [2, { "properties": "always" }],
    "comma-dangle": [2, "never"], // require or disallow trailing commas
    "comma-style": [2, "last"],   // disallow 'comma first' notation
    "eol-last": 2,
    "key-spacing": [2, { "beforeColon": false, "afterColon": true, "mode": "minimum"  }],
    "keyword-spacing": [2, { "before": true, "after": true, "overrides": {} }], // enforce consistent spacing before and after keywords
    "no-alert": 2,
    "no-lone-blocks": 2,
    "no-mixed-spaces-and-tabs": 2, // disallow mix of spaces and tabs in line indentation
    "no-multi-spaces": [2, { "exceptions": { "ImportDeclaration": true, "Property": true } }],
    "no-trailing-spaces": 2, // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "one-var": [2, { var: "never", let: "never", const: "never" }], // This rule enforces variables to be declared either together or separately per function ( for var) or block (for let and const) scope.
    "quote-props": [2, "as-needed", { "keywords": true, unnecessary: true }], // require quotes around object literal property names
    "quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }], // require single quotes for string literals, unless a string literal contains single quotes, in which case double quotes will be acceptable.
    "spaced-comment": [2, "always", { "exceptions": ["-", "+", "*"] }],
    "space-before-blocks": [2, "always"], // requires space before block curly braces
    "space-infix-ops": 2, // require spaces around operators
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "wrap-iife": [2, "outside"]
  },

  "globals": [
    "jQuery",
    "$",
    "module",
    "require",
    "google"
  ]
}