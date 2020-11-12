import { RouteComponentProps } from '@reach/router'
import React from 'react'

interface CoreMainLayoutProps extends RouteComponentProps {
  children: React.ReactNode
}

export const CoreMainLayout = (props: CoreMainLayoutProps) => {
  return <div className="antialiased">{props.children}</div>
}
