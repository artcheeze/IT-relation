import { navigate, RouteComponentProps } from '@reach/router'
import { ButtonSecondary } from 'innovasive-ui-react'
import { useObserver } from 'mobx-react-lite'
import React from 'react'

type SpecialDocDetailPageProps = {
  id?: number
} & RouteComponentProps

export const SpecialDocDetailPage = (props: SpecialDocDetailPageProps) => {
  return useObserver(() => {
    return (
      <div className="inline-flex items-center justify-center w-screen h-screen">
        <div className="text-center">
          <p className="text-4xl font-bold">Detail!</p>
          <p className="text-2xl">{props.id}</p>
          <div className="mt-32">
            <ButtonSecondary title="Back!" onClick={() => navigate(`/`)} />
          </div>
        </div>
      </div>
    )
  })
}
