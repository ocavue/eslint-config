import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-regexp'

/**
 * Core ESLint rules that are superseded by the regexp plugin's own rules, so
 * the plugin's recommended config turns them off. Extract them from the
 * recommended config at runtime so that they stay in sync with the plugin.
 */
export const regexpSupersededRules: Linter.RulesRecord = Object.fromEntries(
  Object.entries(plugin.configs['flat/recommended'].rules || {}).filter(
    ([, severity]) => severity === 'off',
  ),
)

// @keep-sorted
export const regexpRules: Linter.RulesRecord = {
  // https://eslint.org/docs/v9.x/rules/no-control-regex
  'no-control-regex': 'error',

  // https://eslint.org/docs/v9.x/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // https://eslint.org/docs/v9.x/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // https://eslint.org/docs/v9.x/rules/prefer-regex-literals
  'prefer-regex-literals': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/confusing-quantifier.md
  'regexp/confusing-quantifier': 'warn',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/control-character-escape.md
  'regexp/control-character-escape': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/match-any.md
  'regexp/match-any': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/negation.md
  'regexp/negation': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-contradiction-with-assertion.md
  'regexp/no-contradiction-with-assertion': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-dupe-characters-character-class.md
  'regexp/no-dupe-characters-character-class': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-dupe-disjunctions.md
  'regexp/no-dupe-disjunctions': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-empty-alternative.md
  'regexp/no-empty-alternative': 'warn',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-empty-capturing-group.md
  'regexp/no-empty-capturing-group': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-empty-character-class.md
  'regexp/no-empty-character-class': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-empty-group.md
  'regexp/no-empty-group': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-empty-lookarounds-assertion.md
  'regexp/no-empty-lookarounds-assertion': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-empty-string-literal.md
  'regexp/no-empty-string-literal': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-escape-backspace.md
  'regexp/no-escape-backspace': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-extra-lookaround-assertions.md
  'regexp/no-extra-lookaround-assertions': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-invalid-regexp.md
  'regexp/no-invalid-regexp': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-invisible-character.md
  'regexp/no-invisible-character': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-lazy-ends.md
  'regexp/no-lazy-ends': 'warn',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-legacy-features.md
  'regexp/no-legacy-features': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-misleading-capturing-group.md
  'regexp/no-misleading-capturing-group': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-misleading-unicode-character.md
  'regexp/no-misleading-unicode-character': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-missing-g-flag.md
  'regexp/no-missing-g-flag': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-non-standard-flag.md
  'regexp/no-non-standard-flag': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-obscure-range.md
  'regexp/no-obscure-range': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-optional-assertion.md
  'regexp/no-optional-assertion': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-potentially-useless-backreference.md
  'regexp/no-potentially-useless-backreference': 'warn',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-super-linear-backtracking.md
  'regexp/no-super-linear-backtracking': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-trivially-nested-assertion.md
  'regexp/no-trivially-nested-assertion': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-trivially-nested-quantifier.md
  'regexp/no-trivially-nested-quantifier': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-unused-capturing-group.md
  'regexp/no-unused-capturing-group': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-assertions.md
  'regexp/no-useless-assertions': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-backreference.md
  'regexp/no-useless-backreference': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-character-class.md
  'regexp/no-useless-character-class': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-dollar-replacements.md
  'regexp/no-useless-dollar-replacements': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-escape.md
  'regexp/no-useless-escape': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-flag.md
  'regexp/no-useless-flag': 'warn',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-lazy.md
  'regexp/no-useless-lazy': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-non-capturing-group.md
  'regexp/no-useless-non-capturing-group': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-quantifier.md
  'regexp/no-useless-quantifier': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-range.md
  'regexp/no-useless-range': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-set-operand.md
  'regexp/no-useless-set-operand': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-string-literal.md
  'regexp/no-useless-string-literal': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-useless-two-nums-quantifier.md
  'regexp/no-useless-two-nums-quantifier': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/no-zero-quantifier.md
  'regexp/no-zero-quantifier': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/optimal-lookaround-quantifier.md
  'regexp/optimal-lookaround-quantifier': 'warn',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/optimal-quantifier-concatenation.md
  'regexp/optimal-quantifier-concatenation': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-character-class.md
  'regexp/prefer-character-class': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-d.md
  'regexp/prefer-d': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-plus-quantifier.md
  'regexp/prefer-plus-quantifier': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-predefined-assertion.md
  'regexp/prefer-predefined-assertion': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-question-quantifier.md
  'regexp/prefer-question-quantifier': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-range.md
  'regexp/prefer-range': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-set-operation.md
  'regexp/prefer-set-operation': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-star-quantifier.md
  'regexp/prefer-star-quantifier': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-unicode-codepoint-escapes.md
  'regexp/prefer-unicode-codepoint-escapes': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/prefer-w.md
  'regexp/prefer-w': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/simplify-set-operations.md
  'regexp/simplify-set-operations': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/sort-flags.md
  'regexp/sort-flags': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/strict.md
  'regexp/strict': 'error',

  // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v3.1.1/docs/rules/use-ignore-case.md
  'regexp/use-ignore-case': 'error',
}

export function regexp(): Linter.Config[] {
  return [
    {
      name: 'regexp',
      plugins: {
        regexp: plugin,
      },
      rules: {
        ...regexpSupersededRules,
        ...regexpRules,
      },
    },
  ]
}
