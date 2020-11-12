import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'

import { RankingPage } from './ranking_page'

export const RankingRoute = (props: RouteComponentProps) => {
  return (
    <Router>
      <RankingPage path="/" />
    </Router>
  )
}
