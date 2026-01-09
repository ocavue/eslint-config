import { expect } from 'vitest'

import type { Plugin, Rules } from './types.ts'

export function collectEnabledRuleNames(rules: Partial<Rules>): string[] {
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

export function getRuleLink(
  plugin: Plugin,
  ruleName: string,
): string | undefined {
  const ruleNames: string[] = [ruleName]

  if (ruleName.includes('/')) {
    ruleNames.push(ruleName.split('/', 2)[1])
  }

  for (const name of ruleNames) {
    const link = plugin.rules?.[name]?.meta?.docs?.url
    if (link) {
      return link
    }
  }
  return undefined
}

/**
 * Format a rule violation message with documentation link
 */
function formatRuleViolation(
  type: string,
  ruleName: string,
  details: {
    message: string
    fix: string
    link?: string
  },
): string {
  const separator = '━'.repeat(60)

  let output = `${separator}\n`
  output += `❌ ${type}: ${ruleName}\n\n`
  output += `  ${details.message}\n`

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
 *
 * When differences are found, detailed error messages with documentation links are shown.
 */
export function checkRules(options: {
  plugin: Plugin
  currentRules: Rules
  recommendedRules: Rules
  disabledRules: string[]
  enabledRules: string[]
}): void {
  const {
    plugin,
    currentRules,
    recommendedRules,
    disabledRules,
    enabledRules,
  } = options
  const violations: string[] = []

  const normalizedDisabled = new Set(disabledRules)
  const normalizedEnabled = new Set(enabledRules)

  const recommendedRuleNames = collectEnabledRuleNames(recommendedRules)
  const currentRuleNames = collectEnabledRuleNames(currentRules)

  const recommendedSet = new Set(recommendedRuleNames)

  // 1. Check missing recommended rules (should be in disabledRules)
  for (const ruleName of recommendedRuleNames) {
    if (!(ruleName in currentRules) && !normalizedDisabled.has(ruleName)) {
      const link = getRuleLink(plugin, ruleName)

      violations.push(
        formatRuleViolation('Missing Disabled Declaration', ruleName, {
          message: 'This rule is recommended but not in your config.',
          fix: `Add to disabledRules array:\n  '${ruleName}',`,
          link,
        }),
      )
    }
  }

  // 2. Check unnecessary disabled rules (not actually recommended)
  for (const ruleName of disabledRules) {
    if (!recommendedSet.has(ruleName)) {
      violations.push(
        formatRuleViolation('Unnecessary Disabled Declaration', ruleName, {
          message: 'This rule is not recommended, no need to disable it.',
          fix: `Remove '${ruleName}' from disabledRules array`,
        }),
      )
    }
  }

  // 3. Check undeclared extra rules (should be in enabledRules)
  for (const ruleName of currentRuleNames) {
    if (!recommendedSet.has(ruleName) && !normalizedEnabled.has(ruleName)) {
      const link = getRuleLink(plugin, ruleName)

      violations.push(
        formatRuleViolation('Undeclared Extra Rule', ruleName, {
          message: 'This rule is not recommended but you enabled it.',
          fix: `Add to enabledRules array:\n  '${ruleName}',`,
          link,
        }),
      )
    }
  }

  // 4. Check unnecessary enabled rules (actually recommended)
  for (const ruleName of enabledRules) {
    if (recommendedSet.has(ruleName)) {
      violations.push(
        formatRuleViolation('Unnecessary Enabled Declaration', ruleName, {
          message:
            'This rule is already recommended, no need to declare as enabled.',
          fix: `Remove '${ruleName}' from enabledRules array`,
        }),
      )
    }
  }

  // Report all violations
  if (violations.length > 0) {
    expect.fail('\n\n' + violations.join('\n\n'))
  }
}
