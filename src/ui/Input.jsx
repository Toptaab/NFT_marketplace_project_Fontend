import React from 'react'

function Input({name,children,onChange,value, type = "text", placeholder = name}) {


  return (
    <div className='border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2'>
      {children}
    <input type={type} className='w-full' placeholder={placeholder} value={value?.name} name={name} id={name} onChange={onChange}/>
    </div>
  )
}

export default Input



