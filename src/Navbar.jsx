import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className=' h-20  sm:px-10 lg:px-20 px-8'>
        <div className=' h-full  w-full grid grid-cols-2'>
            <div className='  flex items-center justify-center gap-20'>
                <h2 className='  text-[27px] font-semibold leading-7'>fleet</h2>
                <button className=' hidden  sm:block text-sm font-bold leading-4  text-gray-400'>Travelers</button>
            </div>
            <div className='  flex justify-center items-center gap-10'>
                <h2 className='  hidden  md:block font-bold  leading-4  text-sm text-gray-400'>Support</h2>
                <button className='  hidden  md:block  h-4 w-16 font-bold text-sm leading-4 text-gray-400'>Language</button>
                <button className='  hidden  md:block  h-4 w-[119px] font-bold text-sm leading-4 text-gray-400'>List your property</button>
                <img src="../asets/img/Notification - Bell.png" alt="" />
                <img src="../asets/img/avatar.png" alt="" className=' hidden lg:block' />


      
            </div>

        </div>
    </div>
    </>
  )
}
