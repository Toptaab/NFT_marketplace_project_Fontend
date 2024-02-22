import React from 'react'

function SetSalePriceModal({onChange}) {
  return (
    <div className='border-2 border-gray rounded-2xl p-2 w-full flex items-center justify-center gap-2'>
    <input className='w-full outline-none focus:bg-blue-50 ' type="text" placeholder='Enter Price' name="price" onChange={onChange} />
    <p className='font-semibold text-gray'>ETH</p>
    </div>
  )
}

export default SetSalePriceModal