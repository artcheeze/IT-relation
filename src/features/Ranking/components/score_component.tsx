import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import { rankingContext } from '../contexts/ranking-context'
import { useObserver } from 'mobx-react-lite'

export const ScoreComponent = (props: any) => {
  //-----------------------
  //  CONTEXT
  //-----------------------
  const context = useContext(rankingContext)
  //-----------------------
  //  EFFECT
  //-----------------------
  useEffect(() => {
    context.fetchRanking()
  }, [])
  //-----------------------
  //  STATE
  //-----------------------
  const [collapse, setCollapse] = useState(false)
  //-----------------------
  //  RENDER
  //-----------------------
  return useObserver(() => (
    <div
      className="relative w-full overflow-hidden transition-all duration-300 ease-in-out bg-blue"
      style={{
        height: collapse ? '40%' : '60%',
        borderBottomLeftRadius: collapse ? '35%' : '15%',
        borderBottomRightRadius: collapse ? '35%' : '15%',
      }}
    >
      <div className="absolute z-0 -mt-40 -ml-48 bg-white rounded-full w-160 h-160" style={{ opacity: 0.1 }} />
      <div className="absolute top-0 right-0 z-0 mr-8 bg-white rounded-full opacity-25 -mt-72 w-160 h-160" style={{ opacity: 0.1 }} />
      <div className="z-10 flex items-center justify-center h-48 transform translate-y-24 bg-white w-160 rounded-r-20">
        <img
          className="w-80"
          src="https://lh3.googleusercontent.com/proxy/wLJC6EBQ_IBTEQEirNbohK5ev9HvFba9M5lIcCmEgiLGjTAT6rxtKl7SrjrLTTlAoqhVrwgIOsye0GAQ63n-Gx_gr4Eb5yQ34sclRic6NOlg"
          alt="logo"
        />
      </div>
      <div className="relative z-10 flex justify-around px-40 mt-24">
        <TopComponent color="bg-grey-400 mt-56" data={{ team: '?', point: 0 }} />
        <TopComponent color="bg-yellow-400 " data={{ team: '?', point: 0 }} />
        <TopComponent color="bg-red-400 mt-56" data={{ team: '?', point: 0 }} />
      </div>
      <div
        className="relative z-10 w-2/3 h-full px-32 pt-8 mx-auto overflow-y-scroll transition-all duration-300 ease-in-out delay-100 bg-white shadow-md pb-640 rounded-3"
        style={{ marginTop: collapse ? '100px' : '-20px' }}
      >
        <div className="flex justify-between mb-8">
          <p className="font-bold text-blue">Team</p>
          <p className="font-bold text-blue">Point</p>
        </div>
        {_.map(context.ranking, (item, key) => (
          <div className="flex justify-between">
            <p className="text-blue">{key}</p>
            <p className="text-yellow-400"> {item}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 z-50 text-red-200" onClick={() => setCollapse(!collapse)} style={{ marginLeft: '49vw' }}>
        กด
      </div>
    </div>
  ))
}

const TopComponent = (props: any) => {
  //-----------------------
  //  RENDER
  //-----------------------
  return (
    <div>
      <div className={`rounded-full ${props.color} w-80 h-80 flex justify-center items-center animate-pulse `}>
        <p className="text-xl font-bold text-center text-white subheading3">{props.data.team}</p>
      </div>
      <div className="mt-8 w-80 linear-score" style={{ height: '100px' }}>
        <p className="text-sm text-center text-white subheading3">Points</p>
        <p className="-mt-4 text-2xl text-center text-white subheading3 ">{props.data.point}</p>
      </div>
    </div>
  )
}
