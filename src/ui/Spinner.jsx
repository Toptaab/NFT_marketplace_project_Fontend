import React from 'react'

function Spinner() {
  return (
    <div className='fixed inset-0 bg-gray opacity-40 flex justify-center items-center'>
        <div className=' absolute w-[1rem] h-[1rem] border-[8px] border-primary rounded-full animate-ping '/>
        {/* <div className=' absolute w-[2rem] h-[2rem] border-[8px] border-primary rounded-full animate-ping '/> */}
        <div className=' absolute w-[3rem] h-[3rem] border-[8px] border-primary rounded-full animate-ping '/>
    </div>
  )
}

export default Spinner