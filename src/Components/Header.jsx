import React from 'react'

export default function Header() {
  return (
  <>
  <div className=' h-[100vh]   sm:px-10 lg:px-20 px-8'>
    <div className=' w-full h-full head sm:pl-24 pl-8 sm:pt-44 lg:pt-36 pt-24'>
        <div className=' h-96  w-[60%] space-y-5'>
            <h2 className=' font-bold  xl:leading-[96px] sm:leading-[64px] text-6xl leading-[64px]  xl:text-9xl sm:text-6xl text-black  '> Air, sleep, dream</h2>
            <p className=' xl:text-2xl sm:text-base text-base font-medium leading-6  sm:font-medium  sm:leading-6 text-black xl:font-normal xl:leading-8'>Find and book a great experience.</p>
            <button className=' sm:h-12 h-8  sm:w-44 w-28 font-bold  sm:text-base text-[12px] leading-4 bg-blue-600 text-white rounded-full'>Start your search</button>
        </div>

    </div>
  </div>
  </>
  )
}
