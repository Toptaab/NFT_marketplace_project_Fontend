import React from 'react'

function CreatorCard({volume,id,image,collection,nfts,follwer,balance,number,name}) {

  return (
    <div className="flex gap-[2rem] justify-between px-[1rem] items-center text-center font-semibold" role='button' onClick={()=>{navigate(`/profile/${id}`)}}>
        <p className='w-[5rem] text-gray '>{number}</p>
        <div className='flex items-center py-[0.5rem] gap-[0.5rem] min-w-[15rem] '>
            <img  className='w-[1.5rem] h-[1.5rem]' src={image} alt="" />
            <h2 className='font-semibold'>{name}</h2>
        </div>
        <p className={`w-[5rem] ${volume? "" : "text-primary"}`}>{volume}</p>
        <p className={`w-[5rem] ${collection? "" : "text-primary"}`}>{collection}</p>
        <p className={`w-[5rem] ${nfts? "" : "text-primary"}`}>{nfts}</p>
        <p className={`w-[5rem] ${follwer? "" : "text-primary"}`}>{follwer}</p>
        <p className={`w-[5rem] ${balance? "" : "text-primary"}`}>{balance}</p>
    </div>
  )
}

export default CreatorCard