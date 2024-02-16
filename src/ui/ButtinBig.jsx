import React from 'react'

function ButtinBig({children}) {
  return (
    <button className="bg-primary text-white px-[4rem] py-[1rem] rounded-[1rem] font-semibold gap-2 flex justify-center items-center ">
    {children}
  </button>

  )
}

export default ButtinBig