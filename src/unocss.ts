import unocssConfig from '@unocss/eslint-config/flat'

import type { Config } from './types.js'

export function unocss(): Config[] {
  // @ts-expect-error: unmatched types
  return [unocssConfig]
}
