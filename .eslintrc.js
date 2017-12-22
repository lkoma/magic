// https://eslint.org/docs/user-guide/configuring

module.exports = {
	"root": true,
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"parser": "babel-eslint",
		"sourceType": "module",
		"allowImportExportEverywhere": false
	},
	"env": {
		"browser": true,
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	"extends": ["airbnb-base"],
	// required to lint *.vue files
	"plugins": [
		"vue"
	],
	// add your custom rules here
	"rules": {
		"space-before-function-paren": ["error", "never"],
		"indent": ["error", 4, {
			"SwitchCase": 1
		}],
		"semi": ["error", "always"],
		"quotes": ["error", "single"]
	}
}
