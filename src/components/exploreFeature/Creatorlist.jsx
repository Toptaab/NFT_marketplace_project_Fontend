import React from 'react'

import CreatorCard from './CreatorCard'

function Creatorlist({creatorArray}) {

  return (
    <div className="w-full">
    <div className="flex gap-[1rem] justify-between px-[1rem] items-center text-center">
      <p className="w-[5rem]">#</p>
      <p className="w-[15rem]">Name</p>
      <p className="w-[5rem]">Volume</p>
      <p className="w-[5rem]">Collection</p>
      
      <p className="w-[5rem]">Items</p>
      <p className="w-[5rem]">Follwers</p>
      <p className="w-[5rem]">Balance</p>
    </div>
    <div className="border-[1px] border-gray rounded-md w-full">
    {creatorArray?.map((value,index) => <CreatorCard key={value.id} id={value.id} volume={value._count?.history} image={value.image} name={value.userName}   collection={value._count?.Collections} nfts={value._count?.Nfts} follwer={value._count?.followers} balance={value.Wallets[0]?.Cryptos[0]?.balance}  number={index+1}/>)}
    </div>
  </div>
  )
}

export default Creatorlist