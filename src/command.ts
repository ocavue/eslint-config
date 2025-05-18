import commandConfig from 'eslint-plugin-command/config'

import type { Config } from './types.js'

export function command(): Config[] {
  return [commandConfig()]
}
