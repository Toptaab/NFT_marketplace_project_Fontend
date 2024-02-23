import React from 'react'

function Spinner({noBg}) {
  return (
    <div className={`fixed top-[4rem] bottom-0 right-0 left-0 ${noBg? "" : "bg-neutral-100" }  opacity-30 flex justify-center items-center`}>
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