import { Link, RouteComponentProps } from '@reach/router'
import { useObserver } from 'mobx-react-lite'
import React from 'react'

export const DocumentsPage = (props: RouteComponentProps) => {
  return useObserver(() => {
    return (
      <div className="h-screen w-screen inline-flex justify-center items-center">
        <div className="text-center">
          <p className="text-4xl font-bold">Document!</p>
          <Link to="/">Home page</Link>
        </div>
      </div>
    )
  })
}
