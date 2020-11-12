import { CoreMainLayout } from '@core/components/main-layout'
import { CoreNotFoundPage } from '@core/pages/not-found-page'
import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'

import { SpecialDocDetailPage } from './special-doc-detail-page'
import { SpecialDocsPage } from './special-docs-page'

export const SpecialDocsPages = (props: RouteComponentProps) => {
  return (
    <Router>
      <CoreMainLayout path="/">
        <SpecialDocsPage path="/" />
        <SpecialDocDetailPage path="/:id" />

        <CoreNotFoundPage default />
      </CoreMainLayout>
    </Router>
  )
}
