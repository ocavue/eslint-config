import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-unicorn'

// @keep-sorted
export const unicornRules: Linter.RulesRecord = {
  // Improve regexes
  'unicorn/better-regex': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/class-reference-in-static-methods.md
  'unicorn/class-reference-in-static-methods': 'warn',

  // Require consistent use of escape sequences in template literals
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/consistent-template-literal-escape.md
  'unicorn/consistent-template-literal-escape': 'warn',

  // Pass error message when throwing errors
  'unicorn/error-message': 'error',

  // Uppercase regex escapes
  'unicorn/escape-case': 'error',

  // Add expiration conditions to TODO comments
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v63.0.0/docs/rules/expiring-todo-comments.md
  'unicorn/expiring-todo-comments': 'error',

  // Enforce explicitly comparing the length or size property of a value
  'unicorn/explicit-length-check': 'error',

  // Disallow eslint-disable comments without specific rule names
  'unicorn/no-abusive-eslint-disable': 'error',

  // Prevent recursive getters/setters from calling themselves
  'unicorn/no-accessor-recursion': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-array-fill-with-reference-type.md
  'unicorn/no-array-fill-with-reference-type': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-array-from-fill.md
  'unicorn/no-array-from-fill': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-computed-property-existence-check.md
  'unicorn/no-computed-property-existence-check': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-confusing-array-with.md
  'unicorn/no-confusing-array-with': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-duplicate-loops.md
  'unicorn/no-duplicate-loops': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-duplicate-set-values.md
  'unicorn/no-duplicate-set-values': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-error-property-assignment.md
  'unicorn/no-error-property-assignment': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-exports-in-scripts.md
  'unicorn/no-exports-in-scripts': 'error',

  // Prefer `for…of` over the `forEach` method.
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-for-each.md
  'unicorn/no-for-each': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-incorrect-query-selector.md
  'unicorn/no-incorrect-query-selector': 'warn',

  // Array.isArray instead of instanceof etc
  'unicorn/no-instanceof-builtins': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-invalid-argument-count.md
  'unicorn/no-invalid-argument-count': 'warn',

  // Avoid passing expressions to removeEventListener
  'unicorn/no-invalid-remove-event-listener': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-late-current-target-access.md
  'unicorn/no-late-current-target-access': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-mismatched-map-key.md
  'unicorn/no-mismatched-map-key': 'warn',

  // Disallow named usage of default import/export
  'unicorn/no-named-default': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-negated-comparison.md
  'unicorn/no-negated-comparison': 'warn',

  // Disallow negating the left side in equality checks
  'unicorn/no-negation-in-equality-check': 'warn',

  // Prevent deprecated `new Buffer()`
  'unicorn/no-new-buffer': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-object-methods-with-collections.md
  'unicorn/no-object-methods-with-collections': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-optional-chaining-on-undeclared-variable.md
  'unicorn/no-optional-chaining-on-undeclared-variable': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-redundant-comparison.md
  'unicorn/no-redundant-comparison': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-return-array-push.md
  'unicorn/no-return-array-push': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-subtraction-comparison.md
  'unicorn/no-subtraction-comparison': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-unnecessary-global-this.md
  'unicorn/no-unnecessary-global-this': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-unnecessary-splice.md
  'unicorn/no-unnecessary-splice': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-unsafe-buffer-conversion.md
  'unicorn/no-unsafe-buffer-conversion': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-unsafe-property-key.md
  'unicorn/no-unsafe-property-key': 'warn',

  // Keep regex literals safe!
  'unicorn/no-unsafe-regex': 'off',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-useless-boolean-cast.md
  'unicorn/no-useless-boolean-cast': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/no-useless-coercion.md
  'unicorn/no-useless-coercion': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-useless-concat.md
  'unicorn/no-useless-concat': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/no-useless-continue.md
  'unicorn/no-useless-continue': 'warn',

  // Disallow spreading when direct usage works
  'unicorn/no-useless-spread': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-useless-template-literals.md
  'unicorn/no-useless-template-literals': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-undefined.md
  'unicorn/no-useless-undefined': [
    'warn',
    { checkArrowFunctionBody: false, checkArguments: false },
  ],

  // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
  'unicorn/number-literal-case': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-add-event-listener-options.md
  'unicorn/prefer-add-event-listener-options': 'warn',

  // Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
  'unicorn/prefer-add-event-listener': 'error',

  // Prefer `.find(…)` and `.findLast(…)` over the first or last element from
  'unicorn/prefer-array-find': 'error',

  // Prefer Array#flat over manual flattening
  'unicorn/prefer-array-flat': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-array-from-map.md
  'unicorn/prefer-array-from-map': 'warn',

  // Prefer `.flatMap(…)` over `.map(…).flat()`
  'unicorn/prefer-array-index-of': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v68.0.0/docs/rules/prefer-array-iterable-methods.md
  'unicorn/prefer-array-iterable-methods': 'warn',

  // Prefer `.some(…)` over `.filter(…).length` check
  'unicorn/prefer-array-some': 'error',

  // Prefer BigInt literals over the constructor
  'unicorn/prefer-bigint-literals': 'warn',

  // Prefer Date.now() to get the number of milliseconds since the Unix Epoch
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-date-now.md
  'unicorn/prefer-date-now': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-direct-iteration.md
  'unicorn/prefer-direct-iteration': 'warn',

  // Prefer `export…from` when re-exporting
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-export-from.md
  'unicorn/prefer-export-from': ['warn', { checkUsedVariables: false }],

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v68.0.0/docs/rules/prefer-flat-math-min-max.md
  'unicorn/prefer-flat-math-min-max': 'warn',

  // Prefer global `NaN` / `Infinity` over the `Number.*` static constants.
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-global-number-constants.md
  'unicorn/prefer-global-number-constants': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-identifier-import-export-specifiers.md
  'unicorn/prefer-identifier-import-export-specifiers': 'warn',

  // Prefer `import.meta.dirname` over `path.dirname(fileURLToPath(import.meta.url))`
  'unicorn/prefer-import-meta-properties': 'warn',

  // includes over indexOf when checking for existence
  'unicorn/prefer-includes': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-iterable-in-constructor.md
  'unicorn/prefer-iterable-in-constructor': 'warn',

  // Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`
  'unicorn/prefer-keyboard-event-key': 'error',

  // Enforce the use of `Math.trunc` instead of bitwise operators.
  'unicorn/prefer-math-trunc': 'error',

  // Prefer negative index over `.length - index` when possible
  'unicorn/prefer-negative-index': 'error',

  // Prefer using the node: protocol
  'unicorn/prefer-node-protocol': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-number-is-safe-integer.md
  'unicorn/prefer-number-is-safe-integer': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-object-define-properties.md
  'unicorn/prefer-object-define-properties': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-object-destructuring-defaults.md
  'unicorn/prefer-object-destructuring-defaults': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-object-iterable-methods.md
  'unicorn/prefer-object-iterable-methods': 'warn',

  // Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`
  'unicorn/prefer-regexp-test': 'warn',

  // Prefer simple condition first in if statements
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-simple-condition-first.md
  'unicorn/prefer-simple-condition-first': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-single-object-destructuring.md
  'unicorn/prefer-single-object-destructuring': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-string-match-all.md
  'unicorn/prefer-string-match-all': 'error',

  // Prefer using the `String.raw` tag to avoid escaping `\`
  'unicorn/prefer-string-raw': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-string-repeat.md
  'unicorn/prefer-string-repeat': ['warn', { minimumRepetitions: 10 }],

  // Prefer `String#replaceAll()` over `String#replace()` when replacing all occurrences
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-replace-all.md
  'unicorn/prefer-string-replace-all': 'warn',

  // String methods startsWith/endsWith instead of more complicated stuff
  'unicorn/prefer-string-starts-ends-with': 'error',

  // Prefer using `structuredClone` to create a deep clone
  'unicorn/prefer-structured-clone': 'warn',

  // Enforce throwing type error when throwing error while checking typeof
  'unicorn/prefer-type-error': 'error',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-unicode-code-point-escapes.md
  'unicorn/prefer-unicode-code-point-escapes': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v68.0.0/docs/rules/prefer-url-can-parse.md
  'unicorn/prefer-url-can-parse': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-url-href.md
  'unicorn/prefer-url-href': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v68.0.0/docs/rules/prefer-while-loop-condition.md
  'unicorn/prefer-while-loop-condition': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/require-css-escape.md
  'unicorn/require-css-escape': 'warn',

  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/require-proxy-trap-boolean-return.md
  'unicorn/require-proxy-trap-boolean-return': 'warn',

  // Enforce consistent break position in switch cases
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/switch-case-break-position.md
  'unicorn/switch-case-break-position': 'error',

  // Use new when throwing error
  'unicorn/throw-new-error': 'error',
}

export function unicorn(): Linter.Config[] {
  return [
    {
      name: 'unicorn',
      plugins: {
        unicorn: plugin,
      },
      rules: unicornRules,
    },
  ]
}
