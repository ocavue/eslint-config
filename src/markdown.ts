import markdownPlugin from '@eslint/markdown'
import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'

import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from './shared.js'

export function markdown(): Linter.Config[] {
  const processor: Linter.Config[] = markdownPlugin.configs.processor

  // @ts-expect-error: unmatched type: https://github.com/typescript-eslint/typescript-eslint/issues/10899
  const disableTypeCheckedBase: Linter.Config =
    tseslint.configs.disableTypeChecked

  const disableTypeChecked: Linter.Config = {
    ...disableTypeCheckedBase,
    name: 'ocavue/markdown/disable-type-checked',
    files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
  }

  const disableExtra: Linter.Config = {
    name: 'ocavue/markdown/disable-extra',
    files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
    rules: {
      // Disable some import rules because they are not working well with
      // twoslash ---cut--- imports.
      'import/first': 'off',
      'import/order': 'off',

      'no-alert': 'off',
      'no-console': 'off',

      '@typescript-eslint/no-unused-vars': 'off',
    },
  }

  return [...processor, disableTypeChecked, disableExtra]
}
