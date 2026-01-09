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
 * TODO: add some comment here to explain the function
 */
function checkRules(options: {
  plugin: Plugin
  currentRules: Rules
  recommendedRules: Rules
  disabledRules: string[]
  enabledRules: string[]
  updatedRules: string[]
}): void {

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
