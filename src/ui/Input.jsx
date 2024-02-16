import React, { useState } from 'react'

function Input({name,children,onChange,value, type = "text"}) {


  return (
    <div className='border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2'>
      {children}
    <input type={type} className='w-full' placeholder={name} value={value?.name} name={name} onChange={onChange}/>
    </div>
  )
}

export default Input



