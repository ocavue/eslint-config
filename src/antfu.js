import antfuPlugin from 'eslint-plugin-antfu'

export function antfu() {
  /** @type {import('eslint').Linter.FlatConfig[]} */
  const config = [
    {
      name: "antfu",
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
