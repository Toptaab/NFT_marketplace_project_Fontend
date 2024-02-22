import React from "react";
import CollectionCard from "./CollectionCard";

function CollectionList({collectionArray}) {
  // console.log(collectionArray)
  return (
    <div className="w-full">
      <div className="flex gap-[1rem] justify-between px-[1rem] items-center text-center">
        <p className="w-[5rem]">#</p>
        <p className="w-[15rem]">Collection Name</p>
        <p className="w-[5rem]">Floor Price</p>
        <p className="w-[5rem]">Volume</p>
        <p className="w-[5rem]">Items</p>
        <p className="w-[5rem]">Category</p>
        <p className="w-[5rem]">BlockChain</p>
      </div>
      <div className="border-[1px] border-gray rounded-md w-full">
      {collectionArray?.map((value,index) => <CollectionCard key={value.id} catagory={value.category.name} id={value.id} name={value.name} floorPrice={value.history[0]?.price} image={value.image} totalHistory={value._count?.history} totalNft={value._count?.Nfts} owner="" chain="ETH"  number={index+1}/>)}
      </div>
    </div>
  );
}

export default CollectionList;
