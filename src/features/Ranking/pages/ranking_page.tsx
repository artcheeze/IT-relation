import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { ScoreComponent } from '../components/score_component'
import { TimeTableComponent } from '../components/time_table_component'

interface RankingProps extends RouteComponentProps {}

export const RankingPage = (props: RankingProps) => {
  //-----------------------
  //  RENDER
  //-----------------------
  return (
    <div className="w-screen h-screen bg-grey-100">
      <div className="w-full h-full mx-auto max-w-640">
        <ScoreComponent />
        <TimeTableComponent />
      </div>
    </div>
  )
}
