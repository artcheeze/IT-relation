import React from 'react'

import { DocumentsPages } from './features/documents/pages/_index'
import { SpecialDocsPages } from './features/special-docs/pages/_index'

function App() {
  return (
    <>
      <SpecialDocsPages />
      <DocumentsPages />
    </>
  )
}

export default App
