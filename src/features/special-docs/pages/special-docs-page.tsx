import { navigate, RouteComponentProps } from '@reach/router'
import { ButtonPrimary } from 'innovasive-ui-react'
import { useObserver } from 'mobx-react-lite'
import React from 'react'

export const SpecialDocsPage = (props: RouteComponentProps) => {
  return useObserver(() => {
    return (
      <div className="inline-flex items-center justify-center w-screen h-screen">
        <div className="text-center">
          <p className="text-4xl font-bold">Welcome!</p>
          <p className="text-2xl">Innovasive's Create React App template!</p>
          <div className="mt-32">
            <ButtonPrimary title="Go!" onClick={() => navigate(`/123`)} />
          </div>
        </div>
      </div>
    )
  })
}
