import plugin from 'eslint-plugin-unicorn'
import { test } from 'vitest'

import { checkRules } from './test-utils.js'
import { unicornRules } from './unicorn.js'

test('Unicorn rules should match recommended rules', () => {
  // @keep-sorted
  const disabledRules = [
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/better-dom-traversing.md
    'unicorn/better-dom-traversing',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/catch-error-name.md
    'unicorn/catch-error-name',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-assert.md
    'unicorn/consistent-assert',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/consistent-boolean-name.md
    'unicorn/consistent-boolean-name',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/consistent-class-member-order.md
    'unicorn/consistent-class-member-order',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/consistent-compound-words.md
    'unicorn/consistent-compound-words',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-date-clone.md
    'unicorn/consistent-date-clone',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-empty-array-spread.md
    'unicorn/consistent-empty-array-spread',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-existence-index-check.md
    'unicorn/consistent-existence-index-check',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/consistent-export-decorator-position.md
    'unicorn/consistent-export-decorator-position',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/consistent-json-file-read.md
    'unicorn/consistent-json-file-read',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/consistent-optional-chaining.md
    'unicorn/consistent-optional-chaining',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/dom-node-dataset.md
    'unicorn/dom-node-dataset',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/empty-brace-spaces.md
    'unicorn/empty-brace-spaces',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/explicit-timer-delay.md
    'unicorn/explicit-timer-delay',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/filename-case.md
    'unicorn/filename-case',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/import-style.md
    'unicorn/import-style',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v63.0.0/docs/rules/isolated-functions.md
    'unicorn/isolated-functions',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/logical-assignment-operators.md
    'unicorn/logical-assignment-operators',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/max-nested-calls.md
    'unicorn/max-nested-calls',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/new-for-builtins.md
    'unicorn/new-for-builtins',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-anonymous-default-export.md
    'unicorn/no-anonymous-default-export',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-callback-reference.md
    'unicorn/no-array-callback-reference',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-method-this-argument.md
    'unicorn/no-array-method-this-argument',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-reduce.md
    'unicorn/no-array-reduce',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-reverse.md
    'unicorn/no-array-reverse',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-sort.md
    'unicorn/no-array-sort',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/no-array-splice.md
    'unicorn/no-array-splice',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-await-expression-member.md
    'unicorn/no-await-expression-member',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-await-in-promise-methods.md
    'unicorn/no-await-in-promise-methods',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-blob-to-file.md
    'unicorn/no-blob-to-file',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-break-in-nested-loop.md
    'unicorn/no-break-in-nested-loop',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-canvas-to-image.md
    'unicorn/no-canvas-to-image',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-confusing-array-splice.md
    'unicorn/no-confusing-array-splice',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-declarations-before-early-exit.md
    'unicorn/no-declarations-before-early-exit',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-document-cookie.md
    'unicorn/no-document-cookie',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-empty-file.md
    'unicorn/no-empty-file',

    // Do not use a `for` loop that can be replaced with a `for-of` loop.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-for-loop.md
    'unicorn/no-for-loop',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-global-object-property-assignment.md
    'unicorn/no-global-object-property-assignment',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-immediate-mutation.md
    'unicorn/no-immediate-mutation',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-incorrect-template-string-interpolation.md
    'unicorn/no-incorrect-template-string-interpolation',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-invalid-fetch-options.md
    'unicorn/no-invalid-fetch-options',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-lonely-if.md
    'unicorn/no-lonely-if',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-magic-array-flat-depth.md
    'unicorn/no-magic-array-flat-depth',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-negated-array-predicate.md
    'unicorn/no-negated-array-predicate',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-negated-condition.md
    'unicorn/no-negated-condition',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-nested-ternary.md
    'unicorn/no-nested-ternary',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-new-array.md
    'unicorn/no-new-array',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/no-non-function-verb-prefix.md
    'unicorn/no-non-function-verb-prefix',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-null.md
    'unicorn/no-null',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-object-as-default-parameter.md
    'unicorn/no-object-as-default-parameter',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-process-exit.md
    'unicorn/no-process-exit',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-single-promise-in-promise-methods.md
    'unicorn/no-single-promise-in-promise-methods',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-static-only-class.md
    'unicorn/no-static-only-class',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-thenable.md
    'unicorn/no-thenable',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-this-assignment.md
    'unicorn/no-this-assignment',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-this-outside-of-class.md
    'unicorn/no-this-outside-of-class',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/no-top-level-assignment-in-function.md
    'unicorn/no-top-level-assignment-in-function',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-top-level-side-effects.md
    'unicorn/no-top-level-side-effects',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-typeof-undefined.md
    'unicorn/no-typeof-undefined',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/no-uncalled-method.md
    'unicorn/no-uncalled-method',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-undeclared-class-members.md
    'unicorn/no-undeclared-class-members',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-array-flat-depth.md
    'unicorn/no-unnecessary-array-flat-depth',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-array-splice-count.md
    'unicorn/no-unnecessary-array-splice-count',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-await.md
    'unicorn/no-unnecessary-await',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-unnecessary-nested-ternary.md
    'unicorn/no-unnecessary-nested-ternary',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-polyfills.md
    'unicorn/no-unnecessary-polyfills',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-slice-end.md
    'unicorn/no-unnecessary-slice-end',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/no-unreadable-for-of-expression.md
    'unicorn/no-unreadable-for-of-expression',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unreadable-iife.md
    'unicorn/no-unreadable-iife',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-unreadable-object-destructuring.md
    'unicorn/no-unreadable-object-destructuring',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-unsafe-string-replacement.md
    'unicorn/no-unsafe-string-replacement',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/no-unused-array-method-return.md
    'unicorn/no-unused-array-method-return',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-collection-argument.md
    'unicorn/no-useless-collection-argument',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-useless-else.md
    'unicorn/no-useless-else',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-error-capture-stack-trace.md
    'unicorn/no-useless-error-capture-stack-trace',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-fallback-in-spread.md
    'unicorn/no-useless-fallback-in-spread',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-iterator-to-array.md
    'unicorn/no-useless-iterator-to-array',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-length-check.md
    'unicorn/no-useless-length-check',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/no-useless-override.md
    'unicorn/no-useless-override',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-promise-resolve-reject.md
    'unicorn/no-useless-promise-resolve-reject',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/no-useless-recursion.md
    'unicorn/no-useless-recursion',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-switch-case.md
    'unicorn/no-useless-switch-case',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/numeric-separators-style.md
    'unicorn/numeric-separators-style',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/operator-assignment.md
    'unicorn/operator-assignment',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-array-flat-map.md
    'unicorn/prefer-array-flat-map',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-array-last-methods.md
    'unicorn/prefer-array-last-methods',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/prefer-array-slice.md
    'unicorn/prefer-array-slice',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-at.md
    'unicorn/prefer-at',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-await.md
    'unicorn/prefer-await',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-blob-reading-methods.md
    'unicorn/prefer-blob-reading-methods',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-class-fields.md
    'unicorn/prefer-class-fields',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-classlist-toggle.md
    'unicorn/prefer-classlist-toggle',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-code-point.md
    'unicorn/prefer-code-point',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-default-parameters.md
    'unicorn/prefer-default-parameters',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-dom-node-append.md
    'unicorn/prefer-dom-node-append',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-dom-node-remove.md
    'unicorn/prefer-dom-node-remove',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-dom-node-text-content.md
    'unicorn/prefer-dom-node-text-content',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-early-return.md
    'unicorn/prefer-early-return',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/prefer-else-if.md
    'unicorn/prefer-else-if',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-event-target.md
    'unicorn/prefer-event-target',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-get-or-insert-computed.md
    'unicorn/prefer-get-or-insert-computed',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-global-this.md
    'unicorn/prefer-global-this',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/prefer-has-check.md
    'unicorn/prefer-has-check',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-https.md
    'unicorn/prefer-https',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-includes-over-repeated-comparisons.md
    'unicorn/prefer-includes-over-repeated-comparisons',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-iterator-to-array-at-end.md
    'unicorn/prefer-iterator-to-array-at-end',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-iterator-to-array.md
    'unicorn/prefer-iterator-to-array',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-location-assign.md
    'unicorn/prefer-location-assign',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-logical-operator-over-ternary.md
    'unicorn/prefer-logical-operator-over-ternary',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v67.0.0/docs/rules/prefer-map-from-entries.md
    'unicorn/prefer-map-from-entries',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-math-abs.md
    'unicorn/prefer-math-abs',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-math-min-max.md
    'unicorn/prefer-math-min-max',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-minimal-ternary.md
    'unicorn/prefer-minimal-ternary',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-modern-dom-apis.md
    'unicorn/prefer-modern-dom-apis',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-modern-math-apis.md
    'unicorn/prefer-modern-math-apis',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-module.md
    'unicorn/prefer-module',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-native-coercion-functions.md
    'unicorn/prefer-native-coercion-functions',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-number-coercion.md
    'unicorn/prefer-number-coercion',

    // Conflicts with the enabled `prefer-global-number-constants` rule, which
    // prefers the global `NaN` / `Infinity` over the `Number.*` static constants.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-number-properties.md
    'unicorn/prefer-number-properties',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-object-from-entries.md
    'unicorn/prefer-object-from-entries',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-optional-catch-binding.md
    'unicorn/prefer-optional-catch-binding',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-path2d.md
    'unicorn/prefer-path2d',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-private-class-fields.md
    'unicorn/prefer-private-class-fields',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-prototype-methods.md
    'unicorn/prefer-prototype-methods',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-queue-microtask.md
    'unicorn/prefer-queue-microtask',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-reflect-apply.md
    'unicorn/prefer-reflect-apply',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-response-static-json.md
    'unicorn/prefer-response-static-json',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-scoped-selector.md
    'unicorn/prefer-scoped-selector',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-set-has.md
    'unicorn/prefer-set-has',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-set-size.md
    'unicorn/prefer-set-size',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-short-arrow-method.md
    'unicorn/prefer-short-arrow-method',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-simple-sort-comparator.md
    'unicorn/prefer-simple-sort-comparator',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-single-array-predicate.md
    'unicorn/prefer-single-array-predicate',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-single-call.md
    // Disable this rule because you cannot tell `items.push(item1, item2)` is
    // valid or not since you don't known whether `items` is an array or not.
    'unicorn/prefer-single-call',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-smaller-scope.md
    'unicorn/prefer-smaller-scope',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-split-limit.md
    'unicorn/prefer-split-limit',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-spread.md
    'unicorn/prefer-spread',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/prefer-string-pad-start-end.md
    'unicorn/prefer-string-pad-start-end',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-trim-start-end.md
    'unicorn/prefer-string-trim-start-end',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-switch.md
    'unicorn/prefer-switch',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-ternary.md
    'unicorn/prefer-ternary',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-top-level-await.md
    'unicorn/prefer-top-level-await',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-type-literal-last.md
    'unicorn/prefer-type-literal-last',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/prefer-uint8array-base64.md
    'unicorn/prefer-uint8array-base64',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/relative-url-style.md
    'unicorn/relative-url-style',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-array-join-separator.md
    'unicorn/require-array-join-separator',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v66.0.0/docs/rules/require-array-sort-compare.md
    'unicorn/require-array-sort-compare',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-module-attributes.md
    'unicorn/require-module-attributes',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-module-specifiers.md
    'unicorn/require-module-specifiers',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-number-to-fixed-digits-argument.md
    'unicorn/require-number-to-fixed-digits-argument',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v65.0.1/docs/rules/require-passive-events.md
    'unicorn/require-passive-events',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/switch-case-braces.md
    'unicorn/switch-case-braces',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/template-indent.md
    'unicorn/template-indent',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/text-encoding-identifier-case.md
    'unicorn/text-encoding-identifier-case',
  ]

  // @keep-sorted
  const enabledRules = [
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/better-regex.md
    'unicorn/better-regex',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-import-meta-properties.md
    'unicorn/prefer-import-meta-properties',
  ]

  checkRules({
    plugin,
    currentRules: unicornRules,
    recommendedRules: plugin.configs.recommended.rules || {},
    disabledRules,
    enabledRules,
  })
})
