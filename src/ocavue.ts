import type { Linter } from 'eslint'
import ocavuePlugin from 'eslint-plugin-ocavue'
import { GLOB_GEN, GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from './shared.ts'

export function ocavue(): Linter.Config[] {
  return [
    {
      name: 'ocavue',
      files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
            ignores: [GLOB_GEN],
      plugins: {
        ocavue: ocavuePlugin,
      },
      rules: {
        'ocavue/no-implicit-arrow-linebreak': 'warn',
      },
    },
  ]
}
