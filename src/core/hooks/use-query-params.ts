import { useLocation } from '@reach/router'
import queryString from 'query-string'

export default function useQueryParams() {
  const location = useLocation()
  const queryParams = queryString.parse(location.search, {
    parseNumbers: true,
    parseBooleans: true,
  })
  return queryParams
}
