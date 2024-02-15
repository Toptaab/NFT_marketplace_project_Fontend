import React from 'react'
import { SearchIcon } from '../../icons'

function Searchbar() {
  return (
    <div className=" text-[20px] w-[28rem] ps-[1rem] border-[1px] border-black rounded-[3.5rem] flex gap-2 items-center">
      <SearchIcon/>
    <input className='w-full bg-transparent' placeholder=' Search NFTs or Creator'>
   </input>
   
    </div>
)
}

export default Searchbar