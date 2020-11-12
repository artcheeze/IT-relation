import snakeCaseKeys from 'snakecase-keys'

interface snakeCaseProps<T = any> {
  [key: string]: T
}

export function toSnakeCase(data: snakeCaseProps) {
  return snakeCaseKeys(data)
}