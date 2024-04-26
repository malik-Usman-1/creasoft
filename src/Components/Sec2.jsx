import React from 'react'

export default function Sec2() {
  return (
   <>
   <div className='  pb-44 pt-20  sm:px-10 lg:px-20 px-8'>
    <div className='  '>
        <div className=' pb-28 text-center space-y-5 '>
            <h2 className=' font-bold  sm:leading-[56px]  sm:text-5xl text-[40px]  leading-10 text-black'>Let’s go on an adventure</h2>
            <p className=' sm:text-2xl text-base  leading-6 font-normal  text-gray-500 sm:leading-8'>Find and book a great experience.</p>
       

        </div>
        <div className='  grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 '>
            <div className='   flex flex-col items-center'>
                <h2 className=' sm:text-base  font-medium sm:leading-6'>Luxury resort at the sea</h2>
                <button className=' rounded-full text-[12px] font-bold leading-3 h-6 w-24 bg-gray-300 text-black'>9,326 PLACES</button>
            

 
            </div>
            <div className='  hidden  sm:flex flex-col items-center'>
            <h2 className=' sm:text-base  font-medium sm:leading-6'>Camping amidst the wild</h2>
                <button className=' rounded-full text-[12px] font-bold leading-3 h-6 w-24 bg-gray-300 text-black'>9,326 PLACES</button>
            </div>
            <div className=' hidden   md:flex flex-col items-center'>
            <h2 className=' sm:text-base  font-medium sm:leading-6'>Luxury resort at the sea</h2>
                <button className=' rounded-full text-[12px] font-bold leading-3 h-6 w-24 bg-gray-300 text-black'>9,326 PLACES</button>
            </div>


        </div>

    </div>
   </div>
   </>
  )
}
