import React from 'react'

function Input({name,children}) {
  return (
    <div className='border-2 border-gray-400 rounded-2xl p-2 w-full flex items-center gap-2'>
      {children}
    <input type="text" className='w-full '  placeholder={name}/>
    </div>
  )
}

export default Input



