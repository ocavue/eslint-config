import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { resolveReactOptions, type ReactOptions } from './options.js'
import type { Config } from './types.js'

export function react(options?: ReactOptions): Config[] {
  const { files, reactCompiler } = resolveReactOptions(options)

  const reactRecommended: Config = reactPlugin.configs.flat.recommended

  const reactHooksRecommended: Config =
    reactHooksPlugin.configs.flat['recommended']
  const reactHooksRecommendedCompiler: Config =
    reactHooksPlugin.configs.flat['recommended-latest']

  const configs: Config[] = [
    {
      ...reactRecommended,
      name: 'react',
      files: files,
      settings: {
        react: {
          version: 'detect',
          defaultVersion: '19.2.0'
        },
      },
      rules: {
        ...reactRecommended.rules,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },

    {
      ...(reactCompiler
        ? reactHooksRecommendedCompiler
        : reactHooksRecommended),
      name: 'react-hooks',
      files: files,
    },
  ]

  return configs
}
