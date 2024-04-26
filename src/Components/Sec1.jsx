import React from 'react'

export default function Sec1() {
  return (
   <>
   <div className=' hidden md:block xl:h-72 md:h-56 w-full  sm:px-10 lg:px-20 px-8'>
    <div className='  h-full w-full flex justify-center relative'>
        <div className=' xl:h-64 h-52 w-[80%] bg-gray-300 rounded-2xl absolute -top-44'>
            <div className='  h-[30%] flex pl-10 gap-8 items-end'>
                <h2 className=' text-sm text-black font-bold leading-4'>Stays</h2>
                <p className=' font-bold leading-4 text-sm text-gray-500'>Flights</p>
                <p className=' font-bold leading-4 text-sm text-gray-500'>Flights</p>
                <p className=' font-bold leading-4 text-sm text-gray-500'>Cars</p>
                <p className=' font-bold leading-4 text-sm text-gray-500'>Things to do</p>
              
      



            </div>
            <div className='  h-[70%] grid grid-cols-4'>
                <div className='  flex justify-center flex-col lg:pl-16 pl-8'>
                    <h2 className='  leading-8  font-semibold text-2xl text-black '>Location</h2>
                    <p className=' font-normal  leading-6  text-base text-gray-500'>Where are you going?</p>
                    
                </div>
                <div className='  flex justify-center flex-col lg:pl-16 pl-8'>
                <h2 className='  leading-8  font-semibold text-2xl text-black'>Check in</h2>
                    <p className=' font-normal  leading-6  text-base text-gray-500'>Add date</p>
                </div>
                <div className='  flex justify-center flex-col lg:pl-16 pl-8'>
                <h2 className='  leading-8  font-semibold text-2xl text-black'>Check out</h2>
                    <p className=' font-normal  leading-6  text-base text-gray-500'>Add date</p>
                </div>
                <div className='  flex justify-center flex-col lg:pl-16 pl-8'>
                <h2 className='  leading-8  font-semibold text-2xl text-black'>Travelers</h2>
                    <p className=' font-normal  leading-6  text-base text-gray-500'>Add guests</p>
                </div>



            </div>

        </div>
    </div>
   </div>
   </>
  )
}
