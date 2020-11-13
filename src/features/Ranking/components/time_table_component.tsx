import _ from 'lodash'
import { useObserver } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'

import { rankingContext } from '../contexts/ranking-context'

export const TimeTableComponent = () => {
  //-----------------------
  //  CONTEXT
  //-----------------------
  const context = useContext(rankingContext)

  //-----------------------
  //  RENDER
  //-----------------------
  return useObserver(() => (
    <div className="w-full px-24 pt-16 pb-24">
      <div className="flex justify-center">
        {_.map(['All', 'Field 1', 'Field 2'], (item, i) => (
          <p
            key={i}
            onClick={() => context.setField(i)}
            className={`mx-4 text-center border ${
              context.field === i ? ' border-yellow-500  text-yellow-500' : ' border-grey-500  text-grey-500'
            } w-80 rounded-20`}
          >
            {item}
          </p>
        ))}
      </div>
      <p className="mt-16 font-bold text-center subheading3 text-grey-600">In-Progress</p>
      {_.map(context.timeTable, (item, i) => {
        return item.state === 'in-progress' && <Match key={i} data={item} />
      })}
      <p className="mt-24 font-bold text-center subheading3 text-grey-600">Waiting</p>
      {_.map(context.timeTable, (item, i) => {
        return item.state === 'waiting' && <Match key={i} data={item} />
      })}
      <p className="mt-24 font-bold text-center subheading3 text-grey-600">Done</p>
      {_.map(context.timeTable, (item, i) => {
        return item.state === 'done' && <Match key={i} data={item} />
      })}
    </div>
  ))
}
// ------------------------------------------------------------------------------------------------------------------------------ //
const Match = (props: any) => {
  //-----------------------
  //  RENDER
  //-----------------------
  return (
    <div
      className="relative w-full mt-16 h-72 rounded-3 animate__animated animate__slideInDown animate__faster"
      style={{ background: 'linear-gradient(92.22deg, #7716F2 26.3%, #380579 99.48%)', boxShadow: '0px 0px 4px #380579' }}
    >
      <p
        className={`absolute top-0 px-8 font-semibold text-white transform -translate-x-16 -translate-y-8 shadow-md ${
          props.data.field === 1 ? 'bg-primary-300' : 'bg-primary-400'
        }  rounded-20`}
      >
        Field {props.data.field}
      </p>
      <div className="absolute top-0 w-full transform -translate-y-8">
        <p className="h-24 mx-auto text-sm text-center text-white leading-1 w-160 bg-blue rounded-3">
          {props.data.start_time} | {props.data.state}
        </p>
      </div>

      <div className="flex items-center justify-around h-full">
        <div
          className={`flex items-center justify-center w-56 h-56 text-xs font-bold rounded-full ${
            props.data.winner !== null ? (props.data.winner === props.data.team1?.name ? 'bg-green-200' : 'bg-red-200') : 'bg-white'
          }`}
        >
          {props.data.team1?.name}
        </div>
        <p className="mt-4 text-3xl text-white">
          {props.data.team1?.score} : {props.data.team2?.score}
        </p>
        <div
          className={`flex items-center justify-center w-56 h-56 text-xs font-bold rounded-full ${
            props.data.winner !== null ? (props.data.winner === props.data.team2?.name ? 'bg-green-200' : 'bg-red-200') : 'bg-white'
          }`}
        >
          {props.data.team2?.name}
        </div>
      </div>
    </div>
  )
}
