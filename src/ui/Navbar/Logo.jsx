import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
  const nagigate = useNavigate()
  return (
    <div onClick={() => nagigate('/homepage')} className='text-[15px] font-extrabold' role="button" >PotatoNFT</div>
  )
}

export default Logo