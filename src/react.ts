import type { Linter } from 'eslint'
import reactPlugin from 'eslint-plugin-react'
import reactCompiler from "eslint-plugin-react-compiler"
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { resolveReactOptions, type ReactOptions } from './options.js'
import type { Config } from './types.js'

export function react(options?: ReactOptions): Config[] {
  const { files } = resolveReactOptions(options)

  const reactRecommended: Linter.Config = reactPlugin.configs.flat.recommended

  const configs: Config[] = [
    {
      ...reactRecommended,
      name: 'react',
      files: files,
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        ...reactRecommended.rules,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },

    {
      name: 'react-hooks',
      files: files,
      plugins: {
        'react-hooks': reactHooksPlugin,
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ]

  if (options?.reactCompiler) {
    configs.push({
      ...reactCompiler.configs.recommended,
      name: 'react-compiler',
      files: files,
    })
  }

  return configs
}
