import React from 'react'

const primary = "bg-primary py-[0.05rem] px-[2rem] rounded-[1rem] text-white"

function BtnTypeSelection({isPrimary, name}) {
  return (
    <button type='button' className={isPrimary? primary : null}>{name}</button>
  )
}

export default BtnTypeSelection