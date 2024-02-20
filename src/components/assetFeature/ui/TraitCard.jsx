import React from 'react'

function TraitCard({trait,traitAttribute}) {
  return (
    <div className='bg-neutral-200 rounded-lg flex flex-col justify-center items-center py-[0.5rem] gap-[0.1rem] w-[11rem]'>
        <div className='font-semibold text-[16px]'>{trait}</div>
        <div className='flex gap-[0.5rem]'>
            <div className='font-semibold text-[16px]'>{traitAttribute}</div>
            <div className='text-[16px] text-gray'>15%</div>
        </div>
        <div className='flex gap-[0.5rem]'>
            <div className='f text-[16px]'>Floor:</div>
            <div className='text-[16px] text-gray'>0.4345 ETH</div>
        </div>
    </div>
  )
}

export default TraitCard