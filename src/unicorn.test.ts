import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-unicorn'
import { expect, test } from 'vitest'

import type { Plugin, Rules } from './types.ts'
import { unicornRules } from './unicorn.js'



function collectEnabledRuleNames(rules: Partial<Linter.RulesRecord>): string[] {
  const enabledRuleNames: string[] = []
  for (const [ruleName, ruleConfig] of Object.entries(rules)) {
    if (ruleConfig == null) continue
    if (ruleConfig === 'off' || ruleConfig === 0) continue
    if (Array.isArray(ruleConfig)) {
      const severity = ruleConfig[0]
      if (severity === 'off' || severity === 0) continue
    }
    enabledRuleNames.push(ruleName)
  }
  return enabledRuleNames
}

function getRuleLink(plugin: Plugin, ruleName: string): string | undefined {
  return plugin.rules?.[ruleName]?.meta?.docs?.url
}

/**
 * Normalize rule name to remove the plugin prefix
 * e.g. 'unicorn/error-message' -> 'error-message'
 */
function normalizeRuleName(ruleName: string): string {
  return ruleName.replace(/^unicorn\//, '')
}

/**
 * Get rule configuration from rules object, handling both prefixed and non-prefixed keys
 */
function getRuleConfig(rules: Rules, ruleName: string): any {
  const normalized = normalizeRuleName(ruleName)
  const withPrefix = `unicorn/${normalized}`

  if (withPrefix in rules) {
    return rules[withPrefix]
  }
  if (normalized in rules) {
    return rules[normalized]
  }
  return undefined
}

/**
 * Deep compare two rule configurations
 */
function isSameConfig(config1: any, config2: any): boolean {
  return JSON.stringify(config1) === JSON.stringify(config2)
}

/**
 * Format a rule violation message with documentation link
 */
function formatRuleViolation(
  type: string,
  ruleName: string,
  details: {
    recommendedConfig?: any
    currentConfig?: any
    message: string
    fix: string
    link?: string
  }
): string {
  const separator = '━'.repeat(60)
  const normalized = normalizeRuleName(ruleName)
  const fullName = `unicorn/${normalized}`

  let output = `${separator}\n`
  output += `❌ ${type}: ${fullName}\n\n`

  if (details.recommendedConfig !== undefined) {
    output += `  Recommended: ${JSON.stringify(details.recommendedConfig)}\n`
  }
  if (details.currentConfig !== undefined) {
    output += `  Current: ${JSON.stringify(details.currentConfig)}\n`
  } else if (type.includes('Missing')) {
    output += `  Current: (not configured)\n`
  }

  output += `\n  ${details.message}\n`

  if (details.link) {
    output += `\n  📖 Documentation: ${details.link}\n`
  }

  output += `\n  💡 Fix: ${details.fix}\n`
  output += separator

  return output
}

/**
 * Check that all rule differences between recommended and current configs are explicitly declared.
 *
 * This function ensures that:
 * 1. All recommended rules are either used or explicitly disabled with a reason
 * 2. All extra enabled rules are explicitly declared with a reason
 * 3. All modified rule configurations are explicitly declared with a reason
 *
 * When differences are found, detailed error messages with documentation links are shown.
 */
function checkRules(options: {
  plugin: Plugin
  currentRules: Rules
  recommendedRules: Rules
  disabledRules: string[]
  enabledRules: string[]
  updatedRules: string[]
}): void {
  const { plugin, currentRules, recommendedRules, disabledRules, enabledRules, updatedRules } = options
  const violations: string[] = []

  // Normalize all rule names for comparison
  const normalizedDisabled = new Set(disabledRules.map(normalizeRuleName))
  const normalizedEnabled = new Set(enabledRules.map(normalizeRuleName))
  const normalizedUpdated = new Set(updatedRules.map(normalizeRuleName))

  const recommendedRuleNames = collectEnabledRuleNames(recommendedRules)
  const currentRuleNames = collectEnabledRuleNames(currentRules)

  const recommendedSet = new Set(recommendedRuleNames.map(normalizeRuleName))

  // 1. Check missing recommended rules (should be in disabledRules)
  for (const ruleName of recommendedRuleNames) {
    const normalized = normalizeRuleName(ruleName)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const currentConfig = getRuleConfig(currentRules, ruleName)

    if (currentConfig === undefined && !normalizedDisabled.has(normalized)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const recommendedConfig = getRuleConfig(recommendedRules, ruleName)
      const link = getRuleLink(plugin, normalized)

      violations.push(formatRuleViolation(
        'Missing Disabled Declaration',
        ruleName,
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          recommendedConfig,
          message: 'This rule is recommended but not in your config.',
          fix: `Add to disabledRules array with explanation:\ndisabledRules: [\n  '${normalized}', // Reason: ...\n]`,
          link,
        }
      ))
    }
  }

  // 2. Check unnecessary disabled rules (not actually recommended)
  for (const ruleName of disabledRules) {
    const normalized = normalizeRuleName(ruleName)
    if (!recommendedSet.has(normalized)) {
      violations.push(formatRuleViolation(
        'Unnecessary Disabled Declaration',
        ruleName,
        {
          message: 'This rule is not recommended, no need to disable it.',
          fix: `Remove '${normalized}' from disabledRules array`,
        }
      ))
    }
  }

  // 3. Check undeclared extra rules (should be in enabledRules)
  for (const ruleName of currentRuleNames) {
    const normalized = normalizeRuleName(ruleName)
    if (!recommendedSet.has(normalized) && !normalizedEnabled.has(normalized)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const currentConfig = getRuleConfig(currentRules, ruleName)
      const link = getRuleLink(plugin, normalized)

      violations.push(formatRuleViolation(
        'Undeclared Extra Rule',
        ruleName,
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          currentConfig,
          message: 'This rule is not recommended but you enabled it.',
          fix: `Add to enabledRules array with explanation:\nenabledRules: [\n  '${normalized}', // Reason: ...\n]`,
          link,
        }
      ))
    }
  }

  // 4. Check unnecessary enabled rules (actually recommended)
  for (const ruleName of enabledRules) {
    const normalized = normalizeRuleName(ruleName)
    if (recommendedSet.has(normalized)) {
      violations.push(formatRuleViolation(
        'Unnecessary Enabled Declaration',
        ruleName,
        {
          message: 'This rule is already recommended, no need to declare as enabled.',
          fix: `Remove '${normalized}' from enabledRules array`,
        }
      ))
    }
  }

  // 5. Check modified rules without declaration (should be in updatedRules)
  for (const ruleName of recommendedRuleNames) {
    const normalized = normalizeRuleName(ruleName)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const recommendedConfig = getRuleConfig(recommendedRules, ruleName)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const currentConfig = getRuleConfig(currentRules, ruleName)

    if (currentConfig !== undefined && !isSameConfig(recommendedConfig, currentConfig)) {
      if (!normalizedUpdated.has(normalized)) {
        const link = getRuleLink(plugin, normalized)

        violations.push(formatRuleViolation(
          'Undeclared Config Modification',
          ruleName,
          {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            recommendedConfig,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            currentConfig,
            message: 'This rule has a different configuration than recommended.',
            fix: `Add to updatedRules array with explanation:\nupdatedRules: [\n  '${normalized}', // Reason: ...\n]`,
            link,
          }
        ))
      }
    }
  }

  // 6. Check unnecessary updated rules (configs are actually the same)
  for (const ruleName of updatedRules) {
    const normalized = normalizeRuleName(ruleName)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const recommendedConfig = getRuleConfig(recommendedRules, ruleName)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const currentConfig = getRuleConfig(currentRules, ruleName)

    if (recommendedConfig !== undefined && currentConfig !== undefined) {
      if (isSameConfig(recommendedConfig, currentConfig)) {
        violations.push(formatRuleViolation(
          'Unnecessary Updated Declaration',
          ruleName,
          {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            recommendedConfig,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            currentConfig,
            message: 'This rule configuration matches the recommended config.',
            fix: `Remove '${normalized}' from updatedRules array`,
          }
        ))
      }
    }
  }

  // Report all violations
  if (violations.length > 0) {
    expect.fail('\n\n' + violations.join('\n\n'))
  }
}

test('Unicorn rules should match recommended rules', () => {
  checkRules({
    plugin,
    currentRules: unicornRules,
    recommendedRules: plugin.configs.recommended.rules || {},
    disabledRules: [],
    enabledRules: [],
    updatedRules: [],
  })
})
