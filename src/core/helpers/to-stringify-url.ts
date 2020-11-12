import queryString from 'query-string'

export interface ParsedQuery<T = string> {
  [key: string]: T | T[] | null
}

export function toStringifyUrl(url: string, query: ParsedQuery) {
  return queryString.stringifyUrl(
    {
      url,
      query,
    },
    {
      skipNull: true,
      skipEmptyString: true,
    }
  )
}
