import antfuPlugin from 'eslint-plugin-antfu'

export function antfu() {
  /** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
  const config = [
    {
      plugins: {
        antfu: antfuPlugin,
      },
      rules: {
        'antfu/top-level-function': 'error',
      },
    },
  ]

  return config
}
