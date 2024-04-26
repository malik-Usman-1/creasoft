import React from 'react'

export default function Card1({Data}) {
  return (
   <>
   <div className=' h-80 w-64 border-2 border-red-600'>
    <img src={Data.img} alt="" />
    <div className=' h-12  flex justify-between'>
        <div >
            <h2 className=' leading-6 text-base font-medium text-black'>{Data.head}</h2>
            <p className=' text-gray-500  text-[12px] leading-5 font-normal'>{Data.para}</p>
        </div>
        <div>
            <h2 className=' text-green-600'>{Data.head2}</h2>
        </div>
    </div>
   </div>
   </>
  )
}
