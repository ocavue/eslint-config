import eslintReact from '@eslint-react/eslint-plugin'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { resolveReactOptions, type ReactOptions } from './options.js'
import type { Config } from './types.js'

export function react(options?: ReactOptions): Config[] {
  const { files, reactCompiler, version } = resolveReactOptions(options)

  const reactRecommended: Config = eslintReact.configs['recommended-typescript']

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
        'react-x': {
          version: version,
        },
      },
      rules: {
        ...reactRecommended.rules,
        '@eslint-react/web-api/no-leaked-event-listener': 'off',
        '@eslint-react/no-array-index-key': 'off',
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
