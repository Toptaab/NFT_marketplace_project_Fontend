import React from 'react'
import { useNavigate } from 'react-router-dom'

function CollectionCard({id,name,Highestprice,image,totalHistory,totalNft,owner,chain,number}) {
    const navigate = useNavigate()
  return (
    <div className="flex gap-[2rem] justify-start px-[1rem] items-center" role='button' onClick={()=>{navigate(`/collection/${id}`)}}>
        <p className='w-[5rem] text-gray '>{number}</p>
        <div className='flex items-center py-[0.5rem] gap-[0.5rem] min-w-[15rem] '>
            <img  className='w-[1.5rem] h-[1.5rem]' src={image} alt="" />
            <h2 className='font-semibold'>{name}</h2>
        </div>
        <p className='w-[5rem]'>{Highestprice} {chain}</p>
        <p className='w-[5rem]'>{totalHistory}</p>
        <p className='w-[5rem]'>{totalNft}</p>
        <p className='w-[5rem]'>{owner}</p>
        <p className='w-[5rem]'>{chain}</p>
    </div>
  )
}

export default CollectionCard