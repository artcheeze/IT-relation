import queryString from 'query-string'

export function toQueryString(data: { [key: string]: any }) {
  return queryString.stringify(data, {
    skipNull: true,
    skipEmptyString: true,
  })
}
