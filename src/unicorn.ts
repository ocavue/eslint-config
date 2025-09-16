import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-unicorn'

export function unicorn(): Linter.Config[] {
  return [
    {
      name: 'unicorn',
      plugins: {
        unicorn: plugin,
      },
      rules: {
        // Pass error message when throwing errors
        'unicorn/error-message': 'error',

        // Uppercase regex escapes
        'unicorn/escape-case': 'error',

        // Prevent recursive getters/setters from calling themselves
        'unicorn/no-accessor-recursion': 'warn',

        // Array.isArray instead of instanceof etc
        'unicorn/no-instanceof-builtins': 'error',

        // Prefer Unicode escapes over hexadecimal escapes
        'unicorn/no-hex-escape': 'warn',

        // Prevent deprecated `new Buffer()`
        'unicorn/no-new-buffer': 'error',

        // Avoid passing expressions to removeEventListener
        'unicorn/no-invalid-remove-event-listener': 'warn',

        // Disallow named usage of default import/export
        'unicorn/no-named-default': 'warn',

        // Disallow negating the left side in equality checks
        'unicorn/no-negation-in-equality-check': 'warn',

        // Keep regex literals safe!
        'unicorn/no-unsafe-regex': 'off',

        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        'unicorn/number-literal-case': 'error',

        // Disallow spreading when direct usage works
        'unicorn/no-useless-spread': 'warn',

        // includes over indexOf when checking for existence
        'unicorn/prefer-includes': 'error',

        // String methods startsWith/endsWith instead of more complicated stuff
        'unicorn/prefer-string-starts-ends-with': 'error',

        // Enforce throwing type error when throwing error while checking typeof
        'unicorn/prefer-type-error': 'error',

        // Use new when throwing error
        'unicorn/throw-new-error': 'error',

        // Prefer using the node: protocol
        'unicorn/prefer-node-protocol': 'error',

        // Enforce explicitly comparing the length or size property of a value
        'unicorn/explicit-length-check': 'error',

        // Prefer `.flatMap(…)` over `.map(…).flat()`
        'unicorn/prefer-array-index-of': 'error',

        // Improve regexes
        'unicorn/better-regex': 'error',

        // Enforce combining multiple `Array#push()` into one call.
        'unicorn/prefer-single-call': 'warn',

        // Do not use a `for` loop that can be replaced with a `for-of` loop.
        'unicorn/no-for-loop': 'error',

        // Disallow eslint-disable comments without specific rule names
        'unicorn/no-abusive-eslint-disable': 'error',

        // Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
        'unicorn/prefer-add-event-listener': 'error',

        // Prefer `.find(…)` and `.findLast(…)` over the first or last element from
        'unicorn/prefer-array-find': 'error',

        // Prefer Array#flat over manual flattening
        'unicorn/prefer-array-flat': 'warn',

        // Prefer `.flatMap(…)` over `.map(…).flat()`.
        'unicorn/prefer-array-flat-map': 'error',

        // Prefer `.some(…)` over `.filter(…).length` check
        'unicorn/prefer-array-some': 'error',

        // Prefer BigInt literals over the constructor
        'unicorn/prefer-bigint-literals': 'warn',

        // Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`
        'unicorn/prefer-keyboard-event-key': 'error',

        // Enforce the use of `Math.trunc` instead of bitwise operators.
        'unicorn/prefer-math-trunc': 'error',

        // Prefer negative index over `.length - index` when possible
        'unicorn/prefer-negative-index': 'error',

        // Prefer `Number` static properties over global ones.
        'unicorn/prefer-number-properties': 'warn',

        // Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`
        'unicorn/prefer-regexp-test': 'warn',

        // Prefer using `structuredClone` to create a deep clone
        'unicorn/prefer-structured-clone': 'warn',

        // Prefer using the `String.raw` tag to avoid escaping `\`
        'unicorn/prefer-string-raw': 'warn',

        // Prefer `import.meta.dirname` over `path.dirname(fileURLToPath(import.meta.url))`
        'unicorn/prefer-import-meta-properties': 'warn',

        // Prefer `export…from` when re-exporting
        'unicorn/prefer-export-from': ['warn', { ignoreUsedVariables: true }],
      },
    },
  ]
}
