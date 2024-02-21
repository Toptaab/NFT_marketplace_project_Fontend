import React from 'react'
import Logo from '../ui/Navbar/Logo'

function Spinner() {
  return (
    <div className='fixed inset-0 bg-neutral-100 opacity-30 flex justify-center items-center'>
        {/* <div className=' absolute w-[1rem] h-[1rem] border-[8px] border-primary rounded-full animate-ping '/> */}
        {/* <div className=' absolute w-[2rem] h-[2rem] border-[8px] border-primary rounded-full animate-ping '/> */}
        {/* <div className=' absolute w-[3rem] h-[3rem] border-[8px] border-primary rounded-full animate-ping '/> */}
        <div className=' flex text-[25px] font-extrabold animate-pulse rounded-2xl px-[1rem]' role="button" >
        <div>PotatoNFT</div>
        <div className='animate-pulse'>.</div> 
        
        <div>.</div>
        <div className='animate-pulse'>.</div>
        <div>.</div>

        </div>


    </div>
  )
}

export default Spinner