import React from 'react'
import { first } from '../Data'
import Card1 from '../Cards/Card1'

export default function Sec6() {
  return (
    <>
    <div className=' h-[100vh] border-2 border-black  sm:px-10 lg:px-20 px-8'>
        <div className=' h-full bg-gray-300'>
            <div className='  border-2 border-black h-[20%]'>
                <h2 className=' sm:text-5xl text-4xl  font-bold leading-[48px]  sm:leading-[56px] text-black'>Go somewhere</h2>
                <p className=' font-normal  sm:text-2xl text-base leading-6 sm:leading-8 text-gray-500'>Let’s go on an adventure</p>
       
            </div>
            <div className='  border-2 border-black h-[10%] flex justify-between'>
                <div className=' space-x-6'>
                <button className='  h-7 w-24 bg-black rounded-full text-white text-base font-bold leading-4' >Featured</button>
                <button className='  h-7 w-32  rounded-full text-black text-base font-bold leading-4' >Family-friendly</button>
                <button className='  h-7 w-24  rounded-full text-black text-base font-bold leading-4' >On sale one</button>
                <button className='  h-7 w-24  rounded-full text-black text-base font-bold leading-4' >Sub nav two</button>
                </div>
                <div>
                    <div className=' h-10 w-44 bg-white text-black text-base font-medium leading-6 flex justify-center items-center rounded-2xl'>Recently added</div>
                </div>


            </div>
            <div className='  border-2 border-black h-[70%]'>
                {first.map((ele)=>{
                    return(
                        <Card1 Data={ele}/>
                    )
                })}
            </div>



        </div>
    </div>
    </>
  )
}
