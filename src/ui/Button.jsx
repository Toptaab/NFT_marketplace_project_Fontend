import React from 'react'

function Button({name,children}) {
  return (
    <button className='bg-primary text-white p-2 w-[20rem] rounded-2xl font-semibold gap-2 flex justify-center items-center '>{children}{name}</button>
  )
}

export default Button