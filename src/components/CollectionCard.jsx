import React from 'react'
import { useNavigate } from 'react-router-dom'

function CollectionCard({id,name,floorPrice,image,totalHistory,totalNft,chain,number,catagory}) {
    const navigate = useNavigate()
  return (
    <div className="flex gap-[2rem] justify-between px-[1rem] text-center font-semibold items-center" role='button' onClick={()=>{navigate(`/collection/${id}`)}}>
        <p className='w-[5rem] text-gray '>{number}</p>
        <div className='flex items-center py-[0.5rem] gap-[0.5rem] min-w-[15rem] '>
            <img  className='w-[1.5rem] h-[1.5rem]' src={image} alt="" />
            <h2 className='font-semibold'>{name}</h2>
        </div>
        <p className={`w-[5rem] ${floorPrice? "" : "text-primary"}`}>{floorPrice || "Not sale"} </p>
        <p className={`w-[5rem] ${totalHistory? "" : "text-primary"}`}>{totalHistory}</p>
        <p className={`w-[5rem] ${totalNft? "" : "text-primary"}`}>{totalNft}</p>
        <p className={`w-[5rem] ${catagory? "" : "text-primary"}`}>{catagory}</p>
        <p className={`w-[5rem] ${chain? "" : "text-primary"}`}>{chain}</p>
    </div>
  )
}

export default CollectionCard