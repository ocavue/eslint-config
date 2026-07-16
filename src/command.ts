import commandConfig from 'eslint-plugin-command/config'

import type { Config } from './types.js'

export function command(): Config[] {
  const config = commandConfig()
  if (config.rules) {
    for (const [ruleName, ruleConfig] of Object.entries(config.rules)) {
      if (ruleConfig === 'error') {
        config.rules[ruleName] = 'warn'
      }
    }
  }
  return [config]
}
