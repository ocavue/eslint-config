import { Linter } from 'eslint'

declare module 'eslint-plugin-vue' {
  const recommended: Linter.FlatConfig[]
  export default {
    configs: {
      'flat/recommended': recommended,
    },
  }
}
