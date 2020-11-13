import React from 'react'

export const TimeTableComponent = () => {
  //-----------------------
  //  RENDER
  //-----------------------
  return (
    <div className="w-full px-24 pt-16">
      <div className="relative w-full mt-24 h-72 rounded-3" style={{ background: 'linear-gradient(92.22deg, #7716F2 26.3%, #380579 99.48%)' }}>
        <div className="absolute top-0 w-full transform -translate-y-32">
          <p className="text-sm text-center">12:13 am</p>
          <p className="h-24 mx-auto text-sm text-center text-white w-80 bg-blue rounded-3">Waiting</p>
        </div>

        <div className="flex items-center justify-around h-full">
          <div className="w-56 h-56 bg-white rounded-full" />
          <p className="text-white">0:0</p>
          <div className="w-56 h-56 bg-white rounded-full" />
        </div>
      </div>
    </div>
  )
}
