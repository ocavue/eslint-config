import { recommended } from '@eslint-community/eslint-plugin-eslint-comments/configs'

import type { Config } from './types.js'

export function comment(): Config[] {
  return [recommended]
}
