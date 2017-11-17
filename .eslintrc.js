// For version 4.11.0
module.exports = {
	"root": true,
	"extends": ["eslint:recommended", "./.eslintrc-base.js"],
	"parserOptions": {
		"ecmaVersion": 6
	},
	"env": {
		"es6": true,
		"node": true
	},
	"rules": {
		"arrow-parens": [2, "as-needed"],
		"arrow-spacing": 2,
		"class-methods-use-this": 1,
		"consistent-this": [2, "self"],
		"generator-star-spacing": ["error", {"before": false, "after": true}],
		"lines-between-class-members": 2,
		"no-buffer-constructor": 2,
		"no-confusing-arrow": 2,
		"no-duplicate-imports": [2, { "includeExports": true }],
		"no-template-curly-in-string": 2,
		"no-useless-computed-key": 2,
		"no-useless-constructor": 2,
		"no-useless-rename": 2,
		"no-var": 2,
		"object-shorthand": 1,
		"prefer-const": [2, { "destructuring": "all" }],
		"prefer-numeric-literals": 2,
		"prefer-rest-params": 2,
		"prefer-spread": 2,
		"require-yield": 2,
		"rest-spread-spacing": 2,
		"strict": [2, "global"],
		"symbol-description": 2,
		"template-curly-spacing": 2,
		"template-tag-spacing": 2,
		"yield-star-spacing": 2
	}
};
