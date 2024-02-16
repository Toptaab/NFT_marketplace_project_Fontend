import React from 'react'

function Button({name,children}) {
  return (
    <button className='bg-primary text-white p-2 w-full rounded-[0.75rem] font-semibold gap-2 flex justify-center items-center'>{children}{name}</button>
  )
}

export default Button