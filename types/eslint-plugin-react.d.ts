import { Linter } from 'eslint'

declare module 'eslint-plugin-react' {
  const recommended: Linter.FlatConfig
  export default {
    configs: {
      flat: {
        recommended,
      },
    },
  }
}
