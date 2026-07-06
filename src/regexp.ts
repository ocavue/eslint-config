import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-regexp'

// @keep-sorted
export const regexpRules: Linter.RulesRecord = {
  // https://eslint.org/docs/v9.x/rules/no-control-regex
  'no-control-regex': 'error',

  // Superseded by `regexp/no-empty-character-class`
  // https://eslint.org/docs/v9.x/rules/no-empty-character-class
  'no-empty-character-class': 'off',

  // Superseded by `regexp/no-invalid-regexp`
  // https://eslint.org/docs/v9.x/rules/no-invalid-regexp
  'no-invalid-regexp': 'off',

  // https://eslint.org/docs/v9.x/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // https://eslint.org/docs/v9.x/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // Superseded by `regexp/no-useless-backreference`
  // https://eslint.org/docs/v9.x/rules/no-useless-backreference
  'no-useless-backreference': 'off',

  // https://eslint.org/docs/v9.x/rules/prefer-regex-literals
  'prefer-regex-literals': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html
  'regexp/confusing-quantifier': 'warn',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html
  'regexp/control-character-escape': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html
  'regexp/match-any': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html
  'regexp/negation': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html
  'regexp/no-contradiction-with-assertion': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html
  'regexp/no-dupe-characters-character-class': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html
  'regexp/no-dupe-disjunctions': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html
  'regexp/no-empty-alternative': 'warn',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html
  'regexp/no-empty-capturing-group': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html
  'regexp/no-empty-character-class': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html
  'regexp/no-empty-group': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html
  'regexp/no-empty-lookarounds-assertion': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html
  'regexp/no-empty-string-literal': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html
  'regexp/no-escape-backspace': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html
  'regexp/no-extra-lookaround-assertions': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html
  'regexp/no-invalid-regexp': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html
  'regexp/no-invisible-character': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html
  'regexp/no-lazy-ends': 'warn',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html
  'regexp/no-legacy-features': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html
  'regexp/no-misleading-capturing-group': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html
  'regexp/no-misleading-unicode-character': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html
  'regexp/no-missing-g-flag': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html
  'regexp/no-non-standard-flag': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html
  'regexp/no-obscure-range': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html
  'regexp/no-optional-assertion': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html
  'regexp/no-potentially-useless-backreference': 'warn',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html
  'regexp/no-super-linear-backtracking': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html
  'regexp/no-trivially-nested-assertion': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html
  'regexp/no-trivially-nested-quantifier': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html
  'regexp/no-unused-capturing-group': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html
  'regexp/no-useless-assertions': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html
  'regexp/no-useless-backreference': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html
  'regexp/no-useless-character-class': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html
  'regexp/no-useless-dollar-replacements': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html
  'regexp/no-useless-escape': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html
  'regexp/no-useless-flag': 'warn',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html
  'regexp/no-useless-lazy': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html
  'regexp/no-useless-non-capturing-group': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html
  'regexp/no-useless-quantifier': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html
  'regexp/no-useless-range': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html
  'regexp/no-useless-set-operand': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html
  'regexp/no-useless-string-literal': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html
  'regexp/no-useless-two-nums-quantifier': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html
  'regexp/no-zero-quantifier': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html
  'regexp/optimal-lookaround-quantifier': 'warn',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html
  'regexp/optimal-quantifier-concatenation': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html
  'regexp/prefer-character-class': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html
  'regexp/prefer-d': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html
  'regexp/prefer-plus-quantifier': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html
  'regexp/prefer-predefined-assertion': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html
  'regexp/prefer-question-quantifier': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html
  'regexp/prefer-range': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html
  'regexp/prefer-set-operation': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html
  'regexp/prefer-star-quantifier': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html
  'regexp/prefer-unicode-codepoint-escapes': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html
  'regexp/prefer-w': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html
  'regexp/simplify-set-operations': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html
  'regexp/sort-flags': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html
  'regexp/strict': 'error',

  // https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html
  'regexp/use-ignore-case': 'error',
}

export function regexp(): Linter.Config[] {
  return [
    {
      name: 'regexp',
      plugins: {
        regexp: plugin,
      },
      rules: regexpRules,
    },
  ]
}
