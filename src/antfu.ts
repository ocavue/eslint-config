import type { Linter } from 'eslint'
import antfuPlugin from 'eslint-plugin-antfu'

export function antfu(): Linter.Config[] {
  return [
    {
      name: 'antfu',
      plugins: {
        antfu: antfuPlugin,
      },
      rules: {
        'antfu/import-dedupe': 'error',
        'antfu/top-level-function': 'error',
      },
    },
  ]
}
