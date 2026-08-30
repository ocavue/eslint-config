import type { Linter } from 'eslint'
import ocavuePlugin from 'eslint-plugin-ocavue'

export function ocavue(): Linter.Config[] {
  return [
    {
      name: 'ocavue',
      plugins: {
        ocavue: ocavuePlugin,
      },
      rules: {
        'ocavue/no-implicit-arrow-linebreak': 'warn',
      },
    },
  ]
}
