export function findConfigByName<T extends { name?: string }>(
  configs: T[],
  name: string,
): T | undefined {
  const config = configs.find((c) => c.name === name)
  if (!config) {
    console.error(
      `[@ocavue/eslint-config] Unable to find config with name ${name}`,
    )
  }
  return config
}
