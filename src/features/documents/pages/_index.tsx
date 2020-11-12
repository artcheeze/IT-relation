import { CoreMainLayout } from '@core/components/main-layout'
import { CoreNotFoundPage } from '@core/pages/not-found-page'
import { RouteComponentProps, Router } from '@reach/router'
import React from 'react'

import { DocumentsPage } from './documents-page'

export const DocumentsPages = (props: RouteComponentProps) => {
  return (
    <Router>
      <CoreMainLayout path="/documents">
        <DocumentsPage path="/" />

        <CoreNotFoundPage default />
      </CoreMainLayout>
    </Router>
  )
}
