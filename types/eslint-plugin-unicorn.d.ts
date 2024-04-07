import { ESLint } from 'eslint'

declare module 'eslint-plugin-unicorn' {
  const plugin: ESLint.Plugin
  export default plugin
}
